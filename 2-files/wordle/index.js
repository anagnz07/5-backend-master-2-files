
const fs = require('fs').promises

const targetWord = 'labio'

function matchWord(target, guess) {
    // (labio, radio) => *a*io

    let matched = ''
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] == target[i]) {
            matched += target[i]
        } else {
            matched += '*'
        }
    }

    return matched
}

const guessWord = process.argv[2]

if (guessWord === undefined) {
    console.warn('Falta la palabra!')
    process.exit(1)
}

async function play() {

    const savedStatus = await fs.readFile('status', 'utf-8')

    // si la palabra que tenemos guardada
    // ya era igual a la que buscamos, es que el usuario ya acertó
    // Le damos la enhorabuena y no le dejamos seguir jugando
    if (savedStatus === targetWord) {
        console.log('')
        console.log(' Ya has acertado to Wordle de hoy!!!')
        console.log('')

        return
    }

    const matchedWord = matchWord(targetWord, guessWord)

    // si la palabra que nos da el matchWord ya es la que buscamos
    // es que ya acertó
    if (targetWord === matchedWord) {
        console.log('')
        console.log(' Ya has acertado to Wordle de hoy!!!')
        console.log('')
    } else {
        console.log(matchedWord)
    }

    try {
        await fs.writeFile('status', matchedWord)
    } catch (e) {
        console.log(e)
    }

}

play().then()