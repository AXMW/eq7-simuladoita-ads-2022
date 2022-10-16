var correctAlternative = ''
var altText = ''
var correctedPags = ''
var index = 0
var selected = ''

constructAlert()
constructIncorrect()
constructCorrect()

window.addEventListener('load', () => {
    //verifyCorrectedPage()
    correctAlternative = document.getElementById('correct-alt').value
})

function verifyAnswer() {
    //verifyCorrectedPage()

    if(selectedAlternative() == 'none'){
        openAlert()
    }
    else{
        selectedAltContent(selectedAlternative())

        if(selectedAlternative() === correctAlternative){
            openCorrect()
        }
            
        if(selectedAlternative() != correctAlternative){
            openIncorrect()
        }
        
        //disableInputRadio()

        let cycles = 0

        for(correctedPags of correctedPags.split(" ")){
            if(correctedPags == pageId){
                cycles++
            }
        }

        if(cycles == 0){
            correctedPags = correctedPags.split(" ")
            correctedPags.push(pageId)
            correctedPags = correctedPags.join(" ")
            sessionStorage.setItem('correctedPages', correctedPags)
        }
    }
}

function disableInputRadio() {
    for(item of document.querySelectorAll(`Input[Name=${pageId}]`))
    item.style.pointerEvents = 'None'
}

function verifyCorrectedPage() {
    if(sessionStorage.getItem('correctedPages')){
        correctedPags = sessionStorage.getItem('correctedPages')

        for(correctedPags of correctedPags.split(" ")){
            if(correctedPags == pageId)
                disableInputRadio()
        }
    } else{
        sessionStorage.setItem('correctedPages', '')
    }
}

function selectedAlternative() {
    for(item of document.querySelectorAll(`Input[Name=${pageId}]`)){
        if(item.checked)
            return item.value
    }
    return 'none'
}

function selectedAltContent(alternative) {
    altText = document.querySelector(`Input[value=${alternative}]`).parentElement.innerText

    altText = altText.substring(altText.indexOf(")") + 2)
    return altText
}

function constructAlert() {
    document.write('<div id="alert-pop-up" class="correct-pop-up">')
    document.write('<div id="alert" class="alert">')
    document.write('<h1><b>!</b></h1>')
    document.write('<h3>Selecione uma alternativa</h3>')
    document.write('<span class="close" onClick="closePop()">&times</span>')
    document.write('<p>Para conseguir corrigir uma questão é necessario selecionar alguma alternativa.</p>')
    document.write('</div></div>')
}

function constructIncorrect() {
    const correctAlternative = document.querySelector('#correct-alt').value
    const correctText = document.querySelector(`input[value = ${document.querySelector('#correct-alt').value}]`).parentElement.innerText
    document.write('<div id="incorrect-pop-up" class="correct-pop-up">')
    document.write('<div id="incorrect" class="incorrect">')
    document.write('<h1><b>X</b></h1>')
    document.write('<h3>Alternativa incorreta</h3>')
    document.write('<span class="close" onClick="closePop()">&times</span>')
    document.write('<p>A alternativa correta era "' + correctAlternative + '", ou seja:</p>')
    document.write('<p><b>"' + correctText + '"</b></p>')
    document.write('<p>Melhore</p>')
    document.write('</div></div>')
}

function constructCorrect() {
    const correctAlternative = document.querySelector('#correct-alt').value
    const correctText = document.querySelector(`input[value = ${document.querySelector('#correct-alt').value}]`).parentElement.innerText
    document.write('<div Id="correct-pop-up" class="correct-pop-up">')
    document.write('<div Id="correct" class="correct">')
    document.write('<h1><b>V</b></h1>')
    document.write('<h3>Alternativa correta</h3>')
    document.write('<span type="button" class="close" onclick="closePop()">&times</span>')
    document.write('<p>A alternativa correta era a "' + correctAlternative + '", ou seja:</p>')
    document.write('<p><b>"' + correctText + '"</b></p>')
    document.write('<p>Não fez mais que sua obrigação.</p>')
    document.write('</div></div>')
}

function openAlert() {
    const container = document.getElementById('alert-pop-up')
    container.style.display = 'flex'
    const alert = document.getElementById('alert')
    alert.style.display = 'block'
}

function openIncorrect() {
    const container = document.getElementById('incorrect-pop-up')
    container.style.display = 'flex'
    const incorrect = document.getElementById('incorrect')
    incorrect.style.display = 'block'
}

function openCorrect() {
    const container = document.getElementById('correct-pop-up')
    container.style.display = 'flex'
    const correct = document.getElementById('correct')
    correct.style.display = 'block'
}

function closePop() {
    const alertPopUp = document.getElementById('alert-pop-up')
    const incorrectPopUp = document.getElementById('incorrect-pop-up')
    const correctPopUp = document.getElementById('correct-pop-up')
    const alert = document.getElementById('alert')
    const incorrect = document.getElementById('incorrect')
    const correct = document.getElementById('correct')
    alertPopUp.style.display = 'none'
    incorrectPopUp.style.display = 'none'
    correctPopUp.style.display = 'none'
    alert.style.display = 'none'
    incorrect.style.display = 'none'
    correct.style.display = 'none'
}