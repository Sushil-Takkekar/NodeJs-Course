const fs = require('fs');

const getNotes = function() {
    return 'Your Notes...';
}

const listNotes = function() {
    const notes = loadNotes();

    debugger

    if(notes.length > 0) {
        let notesList = [];
        notes.forEach(note => {
            notesList.push(note.title);
        });
        return notesList;
    }else {
        return [];
    }
}

const addNote = function(title, body) {
    const allNotes = loadNotes();
    // use JSON array filter to check whether the same title already exists or not.
    const dupFlag = allNotes.filter(function(note) {
        return note.title === title
    });
    if(dupFlag.length === 0) {
        allNotes.push({
            title: title,
            body: body
        });
        fs.writeFileSync('notes.json',JSON.stringify(allNotes));
        return true;
    }else {
        return false;
    }
}

const loadNotes = function() {
    try {
        var data_buff = fs.readFileSync('notes.json');
    }catch(e) {
        return [];
    }
    const data_str = data_buff.toString();
    return JSON.parse(data_str);
}

const removeNote = function(title) {
    const allNotes = loadNotes();
    // check whether note present or not
    const dupFlag = allNotes.filter(function(note) {
        return note.title === title;
    });
    if(dupFlag.length === 0) {
        return false;
    }else {
        allNotes.splice(allNotes.indexOf({title: title}),1);
        //allNotes.splice(allNotes.indexOf(e => e.title === title),1); // alternate way to use indexOf
        fs.writeFileSync('notes.json',JSON.stringify(allNotes));
        return true;
    }
}

const readNote = function(title) {
    const allNotes = loadNotes();
    const note = allNotes.find(item => item.title === title);
    if(note) {
        return note;
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}
