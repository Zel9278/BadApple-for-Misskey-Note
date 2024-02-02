require("dotenv").config()
const Misskey = require("./misskey")
const frames = require("./badapple.json")

const FPS = 1000 / 15

const client = new Misskey("m.tty7.uk", process.env.MISSKEY_TOKEN)

console.log(frames.length)

async function main() {
    for (const frame of frames) {
        console.log(frame)
        await new Promise((resolve) => setTimeout(resolve, FPS))
    }
}

main()