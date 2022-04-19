const fs = require('fs')
const path = require('path');

const FILENAME = path.join(__dirname, 'counter.txt');

function updateFile(counter) {
    fs.writeFile(FILENAME, `${counter}`, err => {
        if (err) {
            console.error('Error sobreescribiendo: ', err)
            return
        }
    })
}

fs.readFile(FILENAME, 'utf8', (err, data) => {
    if (err) {
        updateFile(1)

        return
    }

    // vamos a leer el valor actual del contador
    const newValue = parseInt(data) + 1
    updateFile(newValue)
})