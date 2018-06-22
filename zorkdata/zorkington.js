'use strict'


//node stuff



// global.startGame = function () {
// process.stdin.on('data', (chunk) =>



global.openDoor = function () {
    process.stdin.once('data', (code) => {
        code = code.toString().trim();
        say(code);
        if (key == code.match('12345')) {
            say('Success! The door opens. You enter the foyer and the door shuts behind you.');
            changeRoom("182 Main St. - Foyer");
        }
        else {
            say('Bzzzzt! The door is still locked.');
        }
    });
}
let zorkingtonCore = require('./zorkington-core.js')
