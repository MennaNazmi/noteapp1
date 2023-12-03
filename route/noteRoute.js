var express = require('express');
const router = express.Router();
var noteCtl = require('../controller/nodeController');
router.get('/notes', noteCtl.getAllnotes);
router.post('/notes/save', noteCtl.saveNote);
router.put('/notes/update', noteCtl.updateNote);
router.delete('/notes/delete/:noteId', noteCtl.deleteNote);


module.exports = router