require('dotenv').config();
var nodes7 = require('nodes7'); // This is the package name, if the repository is cloned you may need to require 'nodeS7' with uppercase S
var conns7 = new nodes7;
const tags = require('./tags_list');
const tags_list = tags.tags_list();
const tags_array = tags.tags_array();

function connectPLC() {
    return new Promise((resolve, reject) => {
        conns7.initiateConnection({
            port: 102,
            host: process.env.IP_PLC || '10.14.84.129',
            rack: 0, slot: 1, debug: false
        }, err => {
            if (typeof (err) !== "undefined") {
                console.log(err);
                reject();
            } else {
                conns7.setTranslationCB(function (tag) { return tags_list[tag]; }); 
                conns7.addItems(tags_array);
                resolve();
            }
        });
    });
};

function readValues(callback) {
        setInterval(function(){
            conns7.readAllItems((error, values) =>{
                if (error) { 
                    console.log("SOMETHING WENT WRONG READING VALUES PLC"); 
                    callback(error, null);
                }else{
                    callback(null, values);  
                }
            });
        },500);
}

module.exports = {
    connectPLC,
    readValues
};



