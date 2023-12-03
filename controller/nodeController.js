var generator = require('../Util/generator');
var memStorage = require('../Util/memory.storage');
var model = require('../model/note_model');
exports.getAllnotes = (req, res) => {
    // var seqId = generator.generate();
    // memStorage.store.setItem(seqId, '1st value');
    // var keys = memStorage.getKeys(memStorage.store);
    var values = memStorage.getValues(memStorage.store);
    console.log("values...." + JSON.stringify(values));
    // var Note = model.Note;
    // var noteObj = new Note(seqId, 'cc', 'ss', 'dd', new Date())
    return res.status(200).send(JSON.stringify(values));
}

exports.saveNote = (req, res) => {
    var seqId = generator.generate();
    var title = req.body.title;
    var createdBy = 'admin'
    var createdOn = new Date();
    var content = req.body.content;
    if (!title || !content) {
        return res.status(500).send({ error: 'title and content should not be empty' })
    }
    //parameters at request body

    var Note = model.Note;
    var noteObj = new Note(seqId, title, content, createdBy, createdOn);
    console.log(noteObj);
    memStorage.store.setItem(seqId, noteObj);

    return res.status(201).send('save note.');
}

exports.updateNote = (req, res) => {
    var noteId = req.body.noteId;
    var title = req.body.title;
    var createdBy = 'admin'
    var createdOn = new Date();
    var content = req.body.content;
    if (!noteId) {
        return res.status(500).send({ error: ' noteId should not be empty' })
    }
    if (!title || !content) {
        return res.status(500).send({ error: 'title and content should not be empty' })
    }
    //parameters at request body

    var Note = model.Note;
    var noteObj = new Note(noteId, title, content, createdBy, createdOn);
    console.log(noteObj);
    memStorage.store.setItem(noteId, noteObj);

    return res.status(201).send('updated note.');
}

exports.deleteNote = (req, res) => {

    var noteId = req.params.noteId;
    if (!noteId) {
        return res.status(500).send({ error: ' cannot delete empty noteId' })
    }
    var noteItem = memStorage.store.getItem(noteId);//searching for noteid inthe memstorage
    if (!noteItem) { return res.status(500).send({ error: 'noteId is not exist' }); }
    memStorage.store.removeItem(noteId);
    return res.status(200).send('deleted note.');

}