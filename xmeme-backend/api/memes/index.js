const express = require('express');
const {postMeme, getMemes, getMeme, updateMeme, deleteMeme} = require('./controller');

const router = express.Router();
router.route('').post(postMeme).get(getMemes);
router.route('/:id').get(getMeme).patch(updateMeme).delete(deleteMeme)

module.exports = router;
