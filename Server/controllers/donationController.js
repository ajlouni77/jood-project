const { Payment } = require("../models");

const getTotalDonations = async (req, res) => {
  try {
    const totalDonations = await Payment.sum("cashAmount");
    res.json({ totalDonations: totalDonations || 0 });
  } catch (error) {
    console.error("Error fetching total donations:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const { Sequelize } = require("sequelize");



const getDailyDonations = async (req, res) => {
    try {
      const dailyDonations = await Payment.findAll({
        attributes: [
          [Sequelize.fn("DATE", Sequelize.col("createdAt")), "date"], // استخراج التاريخ فقط
          [Sequelize.fn("SUM", Sequelize.col("cashAmount")), "totalDonations"], // تجميع المبالغ لكل يوم
        ],
        group: [Sequelize.fn("DATE", Sequelize.col("createdAt"))], // تجميع حسب اليوم
        order: [[Sequelize.fn("DATE", Sequelize.col("createdAt")), "ASC"]],
      });
  
      res.json(dailyDonations);
    } catch (error) {
      console.error("Error fetching daily donations:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };



module.exports = { getTotalDonations,getDailyDonations};
