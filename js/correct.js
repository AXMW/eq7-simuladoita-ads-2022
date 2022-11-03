var correctAlternative = ''
var altText = ''
var correctedPags = ''
var index = 0
var selected = ''
var verify

verifyAnulated()

window.addEventListener('load', () => {
    verifyCorrectedPage()
       
})

function verifyAnswer() {
    if(verify == 1){
        openAnulatedQuestion()
        disableInputRadio()
    }
    else{
        verifyCorrectedPage()
        if(selectedAlternative() == 'none'){
            openAlert()
        }
        else{
            selectedAltContent(selectedAlternative())

            if(selectedAlternative() === correctAlternative){
                openCorrect()
            }
            else{
                openIncorrect()
            }
            
            disableInputRadio()

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
    
}

function disableInputRadio() {
    for(item of document.querySelectorAll(`Input[Name=${pageId}]`))
    item.style.pointerEvents = 'none'
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

function verifyAnulated(){
    let anulada = 0
    anulada = document.getElementById('correct-alt')
    if(anulada === null){
        constructAnulatedQuestion()
        verify = 1
        openAnulatedQuestion()
        disableInputRadio()
    }
    else{
        correctAlternative = document.getElementById('correct-alt').value
        verify = 0
        constructAlert()
        constructIncorrect()
        constructCorrect()
    }
}

function constructAnulatedQuestion() {
    document.write('<div id="anulated-pop-up" class="correct-pop-up">')
    document.write('<div id="anulated" class="anulated">')
    document.write('<h1><b>!!!</b></h1>')
    document.write('<h3>Questão anulada</h3>')
    document.write('<span class="close" onClick="closePop()">&times</span>')
    document.write('<p>Essa questão foi anulada no vestibular pois ela continha um erro de digitação</p>')
    document.write('</div></div>')
}

function constructAlert() {
    document.write('<div id="alert-pop-up" class="correct-pop-up">')
    document.write('<div id="alert" class="alert">')
    document.write('<h1><b>!</b></h1>')
    document.write('<h3>Selecione uma alternativa</h3>')
    document.write('<span class="close" onClick="closePop()">&times</span>')
    document.write('<p>Para conseguir corrigir uma questão, é necessário selecionar alguma alternativa.</p>')
    document.write('</div></div>')
}

function constructIncorrect() {
    const correctAlternative = document.querySelector('#correct-alt').value
    const correctText = document.querySelector(`input[value = ${document.querySelector('#correct-alt').value}]`).parentElement.innerText
    document.write('<div id="incorrect-pop-up" class="correct-pop-up">')
    document.write('<div id="incorrect" class="incorrect">')
    document.write('<h1><b>❌</b></h1>')
    document.write('<h3>Alternativa incorreta</h3>')
    document.write('<span class="close" onClick="closePop()">&times</span>')
    document.write('<p>A alternativa correta era "' + correctAlternative + '", ou seja:</p>')
    document.write('<p><b>"' + correctText + '"</b></p>')
    document.write('<div id="graphI"></div>')
    printGraphI()
    document.write('</div></div>')
}

function constructCorrect() {
    const correctAlternative = document.querySelector('#correct-alt').value
    const correctText = document.querySelector(`input[value = ${document.querySelector('#correct-alt').value}]`).parentElement.innerText
    document.write('<div Id="correct-pop-up" class="correct-pop-up">')
    document.write('<div Id="correct" class="correct">')
    document.write('<h1><b>✅</b></h1>')
    document.write('<h3>Alternativa correta</h3>')
    document.write('<span type="button" class="close" onclick="closePop()">&times</span>')
    document.write('<p>A alternativa correta era a "' + correctAlternative + '", ou seja:</p>')
    document.write('<p><b>"' + correctText + '"</b></p>')
    document.write('<div id="graph"></div>')
    printGraph()
    document.write('</div></div>')
}

function openAnulatedQuestion() {
    const container = document.getElementById('anulated-pop-up')
    container.style.display = 'flex'
    const anulated = document.getElementById('anulated')
    anulated.style.display = 'block'
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
    const graph = document.getElementById('graph')
    graph.style.display = 'block'
}

function openCorrect() {
    const container = document.getElementById('correct-pop-up')
    container.style.display = 'flex'
    const correct = document.getElementById('correct')
    correct.style.display = 'block'
    const graph = document.getElementById('graph')
    graph.style.display = 'block'
}

function closePop() {
    if(verify == 1){
        const anulatedPopUp = document.getElementById('anulated-pop-up')
        const anulated = document.getElementById('anulated')
        anulatedPopUp.style.display = 'none'
        anulated.style.display = 'none'
    }
    else{
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
}