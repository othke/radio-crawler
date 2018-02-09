import miss from 'mississippi'
import request from 'request'
import rfs from 'rotating-file-stream'
import messageQueue from './redis'

const generator = (fileName) => (time, index) => {
    const start = new Date().getTime()
    const file = `${fileName}-${start}-audio.mp3`
    return file
}
const file = (basedir, fileSize, fileName) => rfs(generator(fileName), {
    size: fileSize,
    path: basedir
})
const crawler = ({ basedir, fileSize, fileName, stream }) => {
    const writeStream = file(basedir, fileSize, fileName)
    writeStream.on('rotated', (filename) => {
        messageQueue.sendMessage({ qname: process.env.MESSAGE_QUEUE_NAME, message: `${filename}=Ready` }, function (err, resp) {
            if (resp) {
                console.log("Message sent. ID:", resp);
            }
        });
    })
    miss.pipe(request(stream), writeStream)
}
export default crawler
