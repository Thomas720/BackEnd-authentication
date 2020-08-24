'use strict';

const chalk = require('chalk');

// When username leaving the chat 
const printExit = (data) =>{
  console.log(chalk.hex('#32E875').bold(`\n>>>> ${data} left the chat <<<<\n`));
};

//choose random color
function getRandomColor() {
  return '#' + parseInt(Math.random() * 0xffffff).toString(16);
}

//dispaly current user
const printUsers = (users)=>{
  console.log(chalk.hex('#FF9F1C')(`Current Users: ${users}\n`));
};

const printNewUser = (data)=>{
  console.log(chalk.hex('#32E875').bold(`\n>>>> ${data} joined the chat <<<<\n`));
};

const printMessage = (data)=>{
  console.log(chalk.hex(`${data.color}`).bold(`${data.user}`) + `${data.message}`);
};

const printChatHistory = (data)=>{
  console.log(chalk.hex('#2EC4B6')(`==== ${data} ====`));
};

const printChats = (message)=>{
  let options = {
    weekday: 'long',
    year: 'numeric',
    month:'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  let date = new Date(message.timestamp).toLocaleString('en-us', options);

  console.log(chalk.hex('#32E875')(`${date} - ${message.user} - ${message.message}`));
};

module.exports = {printExit, getRandomColor, printUsers, printNewUser, printMessage, printChatHistory, printChats};