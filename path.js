const path = require("path")

console.log("Склеить участки пути",path.join(__dirname, 'first', 'second', 'third'));
console.log("Получить абсолютный путь", path.resolve('first', 'second', 'third'));

const fullpath = path.resolve('first', 'second', 'third')

console.log('Parsing', path.parse(fullpath));

const siteURL = 'http://localhost:8080/users?id=5123'
const url = new URL(siteURL)
console.log(url);
