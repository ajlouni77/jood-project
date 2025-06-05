const express = require("express");
const router = express.Router();
const { Project } = require("../models"); 


router.get("/", async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "خطأ في جلب المشاريع" });
  }
});

router.get("/:id", async (req, res) => {
  const projectId = req.params.id;

  try {
   
    const project = await Project.findByPk(projectId); 

    if (!project) {
      return res.status(404).json({ message: "المشروع غير موجود" });
    }


    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "خطأ في جلب المشروع" });
  }
});


module.exports = router;
