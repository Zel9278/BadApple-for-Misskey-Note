require("dotenv").config()
const frames = require("./badapple.json")
const { default: axios } = require("axios")

const FPS = 1000 / 15

async function main() {
    for (const frame of frames) {
        console.log(`Sending frame ${frames.indexOf(frame) + 1}/${frames.length}`)
        //console.log(frame)
        send(frame)
        await new Promise((resolve) => setTimeout(resolve, FPS))
    }
}

main()

function send(frame) {
    axios.post("https://m.tty7.uk/api/notes/create", {
        i: process.env.MISSKEY_TOKEN,
        visibility: "public",
        text: `\`\`\`\n${frame}\n\`\`\``,
        localOnly: true
    })
}
