const fs = require("fs")
const path = require("path")

// fs.mkdirSync(path.resolve(__dirname, "dir"), {recursive: true})
// fs.mkdir(path.resolve(__dirname, "dir", (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log('Папка создана');
    
// }))

// console.log('END');

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }

        resolve()
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }

        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            return reject(err.message)
        }

        resolve(data)
    }))
}

writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '123'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '3123'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '214'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), 'datasda'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), 'asd'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '123'))
    .then(() => readFileAsync(__dirname, 'test.txt'))
    .then(data => console.log(data))
    .catch((err) => console.log(err))