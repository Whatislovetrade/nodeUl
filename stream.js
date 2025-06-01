// readable - чтение
// writable - запись 
// duplex - для чтения и записи 
// transform - такое же как duplex но может изменить данные по мере чтения

const fs = require("fs")
const path = require("path")

// fs.readFile(path.resolve(__dirname, "event.js", (err, data) => {
//     if (err) {
//         throw err
//     }

//     console.log(data);
    
// }))

// Один чанк 64кб

// const stream = fs.createReadStream(path.resolve(__dirname, "event.js"))

// stream.on()

const writableStream = fs.createWriteStream(path.resolve(__dirname, "test2.txt"))

for (let i = 0; i < 20; i++) {
    writableStream.write(i + "\n")
}

writableStream.end()

