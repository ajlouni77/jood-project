const express = require("express");
const router = express.Router();
const { addBeneficiary,updateStatus,getBeneficiaries,getBeneficiariescard} = require("../controllers/beneficiaryController");
const upload = require("../utils/multer");

// Route to add a new Beneficiary
router.post("/beneficiaries", upload.single("document"), addBeneficiary);
router.put('/beneficiaries/update-status', updateStatus);
router.get("/beneficiaries", getBeneficiaries);
router.get("/beneficiariescard", getBeneficiariescard);
module.exports = router;
