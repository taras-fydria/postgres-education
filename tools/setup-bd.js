const path = require("node:path");
const fs = require("node:fs");
const client = require('../client')

const rootPath = path.resolve(__dirname, '..', 'models')
const directoriesPath = [path.join(rootPath, 'entities'), path.join(rootPath, 'relations'), path.join(rootPath, 'relations')]

async function start() {
    const startTime = new Date().getTime()

    await client.connect()

    for (const directoryPath of directoriesPath) {
        const files = await fs.promises.readdir(directoryPath)

        if (!files || !files.length) throw new Error('Directory is empty')
        for (const file of files) {
            readFiles(directoryPath, file)
        }
    }

    console.log(new Date().getTime() - startTime)
}

function readFiles(directoryPath, filename) {
    console.log(path.join(directoryPath, filename))

    const stream = fs.createReadStream(path.join(directoryPath, filename))
    const buffer = []
    stream
        .on('data', (chunk) => buffer.push(chunk))
        .on('error', (error) => console.log(error))
        .on('end', async () => {
            const result = await client.query(buffer.toString())
            console.log(result)
        })
}

start()
