const fs = require("fs")

function createFolder(path) {
    return new Promise((resolve, reject) => {
        fs.mkdir(path, (err, data) => {
            if (err) reject(err)
            else resolve(data)
            console.log(resolve)

        })
    })
}
if (!fs.existsSync("./myFolder")) {
    createFolder("./myFolder")
        .then(() => createFolder("./myFolder/mySecondFolder"))
        .then(() => createFolder("./myFolder/myThirdFolder"))
        .catch((err) => {
            console.log(err)
        })
}
fs.writeFile("./myFolder/myThirdFolder/hallo.txt", "mein Text in der Datei hallo.txt", (err) => {
    if (err) { return }
})
fs.writeFile("./myFolder/myThirdFolder/welt.txt", "mein Text2 in der Datei welt.txt", (err) => {
    if (err) { return }
})