const fs = require("fs")

function createFolder(path) {
    return new Promise((resolve, reject) => {
        fs.mkdir(path, (err) => {
            if (err) reject(err)
            else resolve()
        })
    })
}

function createFile(path, fileContent = "") {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, fileContent, (err) => {
            if (err) reject(err)
            else resolve()
        })
    })
}

function run() {
    if (fs.existsSync("./myFolder")) {
        console.log('already there, do nothing')
        return;
    }

    createFolder("./myFolder")
        .then(() => createFolder("./myFolder/secondFolder"))
        .then(() => createFolder("./myFolder/thirdFolder"))
        .then(() => createFile("./myFolder/thirdFolder/hallo.txt", "mein Text in der Datei hallo.txt"))
        .then(() => createFile("./myFolder/thirdFolder/welt.txt", "mein Text2 in der Datei welt.txt"))
        .catch((err) => console.log(err))
}

run()