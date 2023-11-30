var generator = require('../Util/generator');

exports.getAllnotes = (req, res) => {
    var seqId = generator.generate();
    res.send('get all notes from controller ....' + seqId);
}

exports.saveNote = (req, res) => {
    res.send('save note.');
}

exports.updateNote = (req, res) => {
    res.send('update note.');
}

exports.deleteNote = (req, res) => {
    res.send('delete note.');
}