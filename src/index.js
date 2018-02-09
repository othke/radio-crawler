import './config'
import radios from './radios'
import crawler from './crawler'


const { FILE_STORAGE, FILE_SIZE } = process.env


try {
    const radiosEntries = Object.entries(radios)
    radiosEntries.forEach(([radioName, radioStream]) => {
        crawler({ basedir: FILE_STORAGE, fileSize: FILE_SIZE, fileName: radioName, stream: radioStream })
    })

}
catch (error) {
    console.error(error)
    process.exit(0)
}