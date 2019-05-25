/**
 * ------------- 
 * Challenge - 1
 * ------------- 
 * Use appendFileSync function of 'fs' module
 * -------------
 */
// const fs = require('fs');
// fs.appendFileSync('notes.txt','\nThis is the first challenge. Use appendFileSync function of fs.');
/*** End of challenge ***/


/**
 * ------------- 
 * Challenge - 2
 * ------------- 
 * Export/Import custom modules
 * -------------
 */
// const notes = require('./notes');
// console.log(notes.getNotes());
/*** End of Challenge ***/


/**
 * ------------- 
 * Challenge - 3
 * ------------- 
 * Use Chalk library to color the contents of terminal
 * -------------
 */
// const chalk = require('chalk');
// let boldText = chalk.bold('Success');
// console.log('sample: Success');
// console.log('green: '+chalk.green('Success'));
// console.log('bold: '+boldText);
// console.log('inverse: '+chalk.inverse('Success')); /** swap text-color and bg-color  */
// console.log('bgRed: '+chalk.bgRed.green.bold('Success', 'msg'));
// console.log('hex: '+chalk.hex('#edb533')('Success'));
/*** End of Challenge ***/


/**
 * ------------- 
 * Challenge - 4/5
 * ------------- 
 * Use yargs library to parse command-line arguments of terminal
 * -------------
 */
// const yargs = require('yargs');
// console.log('--------------\nDefault arg: ');
// console.log(process.argv);
// console.log('--------------');
// // add note
// yargs.command({
//     command: 'add',
//     describe: 'adds new note',
//     builder: {
//         title: {
//             describe: 'title of a new note',
//             type: 'string',
//             demandOption: true
//         },
//         body: {
//             describe: 'body of a note',
//             type: String,
//             demandOption: true
//         }
//     },
//     handler: function(argv) {
//         console.log('New note added :\nTitle: '+argv.title+'\nBody: '+argv.body);
//     }
// });
// // list notes
// yargs.command({
//     command: 'list',
//     describe: 'lists all the notes',
//     handler: function(argv) {
//         console.log('Notes List (fileLoc='+argv['file']+'):');
//         console.log('Note_1 \nNote_2');
//     }
// });
// // read note
// yargs.command({
//     command: 'read',
//     describe: 'read a note',
//     handler: function() {
//         console.log('Read a note');
//     }
// });
// console.log(yargs.argv);
// console.log('--------------');
// //console.log('arg_value: '+yargs.argv['file']);
/** Use command:  $ node app.js list --file="C:/users/notesList.txt" **/
/*** End of Challenge ***/


/**
 * -----------------------
 * Challenge - 7/8/9/11 - L19
 * -----------------------
 * Use yargs library to parse command-line arguments of terminal and use fs to add,read,remove and list notes
 * -------------
 */
const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes');
// add a new note
yargs.command({
    command: 'add',
    describe: 'adds new note',
    builder: {
            title: {
                describe: 'title of a note',
                type: 'string',
                demandOption: true
            },
            body: {
                describe: 'body of a note',
                type: 'string',
                demandOption: true
            }
    },
    handler: function(argv) {
        if(notes.addNote(argv.title, argv.body))
            console.log('Note added with title -"'+argv.title+'"');
        else
            console.log('Error - Note with same title already exists !');
    }
});

// remove a note
yargs.command({
    command: 'remove',
    describe: 'removes a note',
    builder: {
            title: {
                describe: 'title of a note',
                type: 'string',
                demandOption: true
            }
    },
    handler: function(argv) {
        if(notes.removeNote(argv.title))
            console.log(chalk.bgGreen('Note deleted with title -"'+argv.title+'"'));
        else
            console.log(chalk.bgRed('Error - No such Note exists !'));
    }
});

// list all notes
yargs.command({
    command: 'list',
    describe: 'lists all notes',
    handler() {
        const data = notes.listNotes(); 
        console.log(chalk.green('Your Notes List:'));
        if(data.length > 0) {
            data.forEach(item => {
                console.log(chalk.yellow(item));
            });
        }else {
            console.log(chalk.bgRed('Notes not found !'));
        }
    }
});

// read a note
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
            title: {
                describe: 'title of a note',
                type: 'string',
                demandOption: true
            }
    },
    handler: function(argv) {
        const data = notes.readNote(argv.title);
        if(data) {
            console.log(chalk.green(data.title));
            console.log(data.body);
        }else {
            console.log(chalk.red('Error - No such note exists !'));
        }
    }
});

yargs.parse();