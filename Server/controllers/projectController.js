const { Project } = require("../models"); // تأكد من مسار الموديل

const createProject = async (req, res) => {
  try {
    const { image, title, description, goal, raised } = req.body;
    const newProject = await Project.create({ image, title, description, goal, raised });
    res.status(201).json(newProject);
  } catch (error) {
    console.error("خطأ في إضافة المشروع:", error);
    res.status(500).json({ error: "حدث خطأ أثناء إضافة المشروع." });
  }
};

module.exports = { createProject };

