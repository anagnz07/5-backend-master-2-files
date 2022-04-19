const fs = require('fs')

const content = 'Hello world!!\n'

// crea (si no existe) y sobreescre el contenido del fichero
fs.writeFile('test.txt', content, err => {
  if (err) {
    console.error('Error sobreescribiendo: ', err)
    return
  }
})

// añado línea al final, sin alterar lo anterior
fs.appendFile('test.txt', 'nueva línea!', err => {
    if (err) {
        console.error('Error escribiendo al final: ', err)
    return
    }
})

// leer el fichero
fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    // vamos a pintar línea a línea el contenido del fichero
    for (let line of data.split('\n')) {
        console.log(`Line: ${line}`)
    }

  })


/*
 crear ficheros/carpeta
 mover ficheros/carpeta
 eliminar ficheros/carpeta
 copiar fichero/carpeta
 renombrar fichero/carpeta
 editar/escribir fichero
 append (al fichero)
*/

