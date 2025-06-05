const { Payment } = require("../models");
const { Op } = require("sequelize");

exports.processPayment = async (req, res) => {
  try {
    const { paymentMethod, cardNumber, cardHolder, expiry, cvc, cashAmount } = req.body;

    console.log(req.body);

    // Validate required fields
    if (!paymentMethod) {
      return res.status(400).json({ error: "Payment method is required" });
    }

    if (paymentMethod === "credit") {
      if (!cardNumber || !cardHolder || !expiry || !cvc) {
        return res.status(400).json({ error: "All credit card details are required" });
      }
    } else if (paymentMethod === "cash") {
      if (!cashAmount || Number(cashAmount) <= 0) {
        return res.status(400).json({ error: "Valid cash amount is required" });
      }
    }

    // Store payment data in database
    const payment = await Payment.create({
      paymentMethod,
      cardNumber: paymentMethod === "credit" ? cardNumber : null,
      cardHolder: paymentMethod === "credit" ? cardHolder : null,
      expiry: paymentMethod === "credit" ? expiry : null,
      cvc: paymentMethod === "credit" ? cvc : null,
      cashAmount: paymentMethod === "credit" ? cashAmount : null,
      
    });

    return res.status(201).json({ message: "Payment processed successfully", payment });

  } catch (error) {
    console.error("Payment processing error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
