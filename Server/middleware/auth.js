const jwt = require('jsonwebtoken');
const { Log } = require('../models');

const JWT_SECRET = process.env.JWT_SECRET;

// Middleware للتحقق من التوكن
const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await Log.findByPk(decoded.id);
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    req.user = user; // إضافة المستخدم إلى الطلب
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { authenticate };