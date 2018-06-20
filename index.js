picPathArray = ['deathvalley', 'guard', 'sunset']

function randomBackground() {
    let randIndex = Math.floor(Math.random() * picPathArray.length)
    let picPathEnd = picPathArray[randIndex]
    console.log(picPathEnd)
    return picPathEnd
}

function setBackground() {
   body = document.getElementsByTagName('body')
   console.log(body)
}