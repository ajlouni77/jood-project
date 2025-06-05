const { User, Sequelize } = require("../models");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phoneNumber, address } =
      req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser)
      return res.status(400).json({ message: "هذا البريد مسجل مسبقًا" });

  
    const hashedPassword = await bcrypt.hash(password, 10);

 
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: "donor",
      status: "pending",
      phoneNumber,
      address,
    });

    res.status(201).json({ message: "تم تسجيل المستخدم بنجاح", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "حدث خطأ أثناء التسجيل", error: error.message });
  }
};

// تسجيل الدخول
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

  
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "المستخدم غير موجود" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "كلمة المرور غير صحيحة" });

    
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({ message: "تم تسجيل الدخول بنجاح", token, user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "حدث خطأ أثناء تسجيل الدخول", error: error.message });
  }
};

const getUsersExcludingAdmin = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        role: {
          [Sequelize.Op.ne]: "admin",
        },
      },
    });

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateUserStatus = async (req, res) => {
  const { userId, status } = req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const validStatuses = ["pending", "approved", "inactive"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    user.status = status;
    await user.save();

    await sendStatusUpdateEmail(user.email, status);

    return res.status(200).json({
      message: `User status updated to ${status} and email sent.`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const sendStatusUpdateEmail = async (userEmail, status) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: "Account Status Update",
    text: `Dear user,\n\nYour account status has been updated to: ${status}.\n\nThank you for being with us.`, // Email body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Status update email sent.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

const getUserCount = async (req, res) => {
  try {
    const userCount = await User.count({
      where: {
        role: {
          [Sequelize.Op.ne]: "admin",
        },
      },
    });

    return res.status(200).json({ count: userCount });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getUserRegistrationsByDay = async (req, res) => {
  try {
    const usersByDay = await User.findAll({
      attributes: [
        [Sequelize.fn("DATE", Sequelize.col("createdAt")), "date"],
        [Sequelize.fn("COUNT", Sequelize.col("id")), "count"],
      ],
      group: ["date"],
      order: [[Sequelize.literal("date"), "ASC"]],
    });

    res.status(200).json(usersByDay);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "حدث خطأ أثناء جلب البيانات" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUsersExcludingAdmin,
  updateUserStatus,
  getUserCount,
  getUserRegistrationsByDay,
};








