/**
 * Pintar en un nuevo fichero el número de palabras
 * que empiezan por cada letra
 * 
 * casa
 * cama
 * carro
 * datil
 * dedo
 * duna
 * estepa
 * 
 * 
 * c: 3
 * d: 3
 * e: 1
 */
const fs = require('fs')
const path = require('path');

const FILENAME = path.join(__dirname, 'british-english');

function printResults(counters) {
    const resultFile = path.join(__dirname, 'results.txt');

    let counterStr = ''

    for (let key of Object.keys(counters)) {
        const newLine = `${key}: ${counters[key]}`
        counterStr = `${counterStr}\n${newLine}`
    }

    // crea (si no existe) y sobreescre el contenido del fichero
    fs.writeFile(resultFile, counterStr, err => {
        if (err) {
            console.error('Error sobreescribiendo: ', err)
            return
        }
    })
}

function printResultsByLine(counters) {
    const resultFile = path.join(__dirname, 'results.txt');

    fs.writeFile(resultFile, '', err => {
        if (err) {
            console.error('Error borrando fichero: ', err)
            return
        }
    })

    for (let key of Object.keys(counters)) {
        const newLine = `${key}: ${counters[key]}\n`

        fs.appendFile(resultFile, newLine, err => {
            if (err) {
                console.log('Error appending file: ', err)
            }
        })

    }

}


fs.readFile(FILENAME, 'utf8', (err, data) => {
    if (err) {
        console.warn('No existe el fichero: ', err)
        return
    }

    let counters = {}

    // Esta implementación es para revisar conceptos de Javascript. Podéis
    // ir a los commits anteriores para la solución más fácil
    data
        .split('\n')
        .filter(word => word.length !== 0)
        .forEach(word => {
            const initial = word[0].toLowerCase()
            // ojo! quizá sea muy denso... usar implementación anterior!
            counters[initial] = counters[initial] ? counters[initial] + 1 : 1
        })

    printResultsByLine(counters)
})
