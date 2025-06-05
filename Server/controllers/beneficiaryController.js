const { Beneficiary } = require("../models");
const upload = require("../utils/multer");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const addBeneficiary = async (req, res) => {
  try {
    // Ensure the uploads directory exists
    const uploadDir = path.join(__dirname, "../uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true }); // Create the directory if it doesn't exist
    }

    // Extract the token from the Authorization header
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "No token provided" });
    }

    console.log("Authorization Header:", req.headers.authorization); // Debugging: log the entire Authorization header
    console.log("Token Received:", token); // Debugging: log the token

    // Verify the JWT token using the secret from .env
    let userId;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use your secret key
      console.log("Decoded Token:", decoded); // Debugging: log the decoded token
      userId = decoded.id; // Assuming 'id' is the userId
    } catch (error) {
      console.error("JWT verification failed:", error);
      return res
        .status(401)
        .json({ success: false, message: "Invalid or expired token" });
    }

    const { statusPerson, address, type, needs, status, description } =
      req.body;

    // Parse the 'needs' field if it's sent as a JSON string
    const parsedNeeds = typeof needs === "string" ? JSON.parse(needs) : needs;

    // Create a new Beneficiary
    const newBeneficiary = await Beneficiary.create({
      userId,
      statusPerson,
      address,
      type,
      needs: parsedNeeds,
      document: req.file ? req.file.path : null, // Save the file path if a file was uploaded
      status,
      needsDescription: description,
      approvedByAdmin: false, // Default to false
    });

    res.status(201).json({
      success: true,
      message: "Beneficiary added successfully",
      data: newBeneficiary,
    });
  } catch (error) {
    console.error("Error adding beneficiary:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add beneficiary",
      error: error.message,
    });
  }
};


const updateStatus = async (req, res) => {
  const { beneficiaryId, status } = req.body; // الحصول على بيانات الـ request

  try {
    // التحقق من أن الحالة المدخلة صحيحة
    if (!["قيد الانتظار", "موافق عليه"].includes(status)) {
      return res.status(400).json({ message: "حالة غير صالحة" });
    }

    // البحث عن المستفيد باستخدام الـ ID
    const beneficiary = await Beneficiary.findByPk(beneficiaryId);

    if (!beneficiary) {
      return res.status(404).json({ message: "المستفيد غير موجود" });
    }

    // تحديث الحالة في قاعدة البيانات
    beneficiary.status = status;
    await beneficiary.save();

    return res.status(200).json({ message: "تم تحديث الحالة بنجاح" });
  } catch (error) {
    console.error("Error updating status:", error);
    return res.status(500).json({ message: "حدث خطأ في تحديث الحالة" });
  }
};


const getBeneficiaries = async (req, res) => {
  try {
    // جلب جميع المستفيدين من قاعدة البيانات
    const beneficiaries = await Beneficiary.findAll();

    if (beneficiaries.length === 0) {
      return res.status(404).json({ message: "لا يوجد مستفيدين" });
    }

    return res.status(200).json({ data: beneficiaries });
  } catch (error) {
    console.error("Error fetching beneficiaries:", error);
    return res.status(500).json({
      message: "حدث خطأ في جلب البيانات",
      error: error.message,
    });
  }
};

const getBeneficiariescard = async (req, res) => {
  try {
    // جلب المستفيدين الذين تمت الموافقة عليهم فقط
    const beneficiaries = await Beneficiary.findAll({
      where: {
        status: "موافق عليه"  // نعرض فقط المستفيدين الذين تم الموافقة عليهم
      }
    });

    if (beneficiaries.length === 0) {
      return res.status(404).json({ message: "لا يوجد مستفيدين موافق عليهم" });
    }

    return res.status(200).json({ data: beneficiaries });
  } catch (error) {
    console.error("Error fetching beneficiaries:", error);
    return res.status(500).json({
      message: "حدث خطأ في جلب البيانات",
      error: error.message,
    });
  }
};




module.exports = {
  addBeneficiary,updateStatus,getBeneficiaries,getBeneficiariescard
};
