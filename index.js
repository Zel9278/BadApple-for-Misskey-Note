require("dotenv").config()
const frames = require("./badapple.json")
const { default: axios } = require("axios")

const FPS = 1000 / 15 // 15fps, if you want slower, change 15 to 5 to 5 fps

async function main() {
    for (const frame of frames) {
        console.log(`Sending frame ${frames.indexOf(frame) + 1}/${frames.length}`)
        send(frame)
        await new Promise((resolve) => setTimeout(resolve, FPS))
    }
}

main()

function send(frame) {
    axios.post(process.env.MISSKEY_URL + "/api/notes/create", {
        i: process.env.MISSKEY_TOKEN,
        visibility: "public", // public | home | followers | specified
        text: `\`\`\`\n${frame}\n\`\`\``,
        localOnly: true
    })
}
