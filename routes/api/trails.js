const express = require('express');
const router = express.Router();
const trailsCtrl = require('../../controllers/trails');
const multer = require('multer');
const upload = multer();


router.post('/', upload.single('photo'), trailsCtrl.create);
router.get('/', trailsCtrl.index)

module.exports = router;