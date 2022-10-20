var totalCorrect = 0
var totalIncorrect = 0
var totalAnswered = 0
var correctPercent = 0
var dates = []
var totalWithoutAnswer = 0
var timeDoing = 0
var messageC = ''
var finalScore = 0

if(localStorage.getItem('userCorrect')){
    totalCorrect = storageValue('userCorrect')
    totalIncorrect = storageValue('userIncorrect')
    totalAnswered = storageValue('totalAnswered')
    correctPercent = storageValue('correctPercent')
    totalWithoutAnswer = storageValue('questionsWithoutAnswer')
    finalScore = storageValue('finalScore')
    timeDoing = storageValue('timeDoing')
    dates = localStorage.getItem('dateTest').split(',')
}

totalCorrect = parseFloat(totalCorrect) + 4
roundGrade(totalCorrect, totalIncorrect, totalWithoutAnswer, totalAnswered)

if(timeDoing > 0) {
    seconds = timeDoing % 60
    averageByQuestion = Math.round(timeDoing / totalAnswered)
    if(timeDoing < 60 && averageByQuestion != Infinity){
        document.getElementById('tempo-de-simulado').innerHTML = `Tempo total: ${timeDoing} segundos,
        com um tempo médio de ${averageByQuestion} segundos`
    }
    else{
        document.getElementById("tempo-de-simulado").innerHTML = `Tempo total: ${timeDoing} segundos`
    }

    if(timeDoing > 60){
        let minutes = Math.floor(timeDoing / 60)
        let p1 = 'minutos'
        let p2 = 'segundos'

        if(minutes == 1)
            p1 = 'minuto'
        if(seconds == 1)
            p2 = 'segundo'
        document.getElementById("tempo-de-simulado").innerText = `Tempo total: ${minutes} ${p1} e ${seconds} ${p2},
        com um tempo médio de ${averageByQuestion} segundos`
    }
}

if(this.localStorage.getItem('dateTest'))
    dates = this.localStorage.getItem('dateTest').split(',')

/*if(dates.length < 2){
    this.document.getElementById('')
}*/

if(totalAnswered == 0){
    messageC = 'Você não respondeu a nenhuma pergunta. Clique em <b>REFAZER SIMULADO</b>'
    document.getElementById('final-simulado').innerHTML = 'Por favor, selecione ao menos uma alternativa'
    document.getElementById('sub-t-final-simulado').innerHTML = 'Vá ao final da página e clique em <b>REFAZER SIMULADO</b>'
    document.getElementById('info-resultado').style.display = 'none'
    document.getElementById('primeiro-dados-por-inteiro').style.display = 'none'
    document.getElementById('segundo-dados-por-inteiro').style.display = 'none'
    document.getElementById('nota-simulado').style.display = 'none'
}
else{
    if(correctPercent == 0)
        messageC = 'Infelizmente você tirou a menor nota possivel (' + correctPercent + '%)'
    else if(correctPercent < 25)
        messageC = 'Infelizmente você acertou ' + correctPercent + '%'
    else if(correctPercent < 50)
        messageC = 'Você está bem proximo de atingir 50%, você acertou: ' + correctPercent + '%'
    else if(correctPercent < 75)
        messageC = 'Parabéns você acertou acima de 50%, você acertou: ' + correctPercent + '%'
    else
        messageC = 'Parabéns a sua nota está acima de 75%, você acertou: ' + correctPercent + '%'
}

document.getElementById('retorno-acertos').innerHTML = messageC
document.getElementById('nota-final'). innerHTML = finalScore

function roundGrade(corrects, incorrects, withoutAnswer, answereds) {
    let correctPercent = Math.round((corrects / 70) * 100)
    let incorrectPercent = Math.round((incorrects / 70) * 100)
    let withoutAnswerPercent = Math.round((withoutAnswer / 70) * 100)
    let answeredPercent = Math.round((answereds / 70) * 100)

    document.getElementById('acertos').innerHTML = `${corrects}/70 <b>(${correctPercent}%)</b>`
    document.getElementById('erros').innerHTML = `${incorrects}/70 <b>(${incorrectPercent}%)</b>`
    document.getElementById('nao-respondidas').innerHTML = `${withoutAnswer}/70 <b>(${withoutAnswerPercent}%)</b>`
    document.getElementById('respondidas').innerHTML = `${answereds}/70 <b>(${answeredPercent}%)</b>`
}

function storageValue(key) {
    let storageValue = localStorage.getItem(key).split(',')
    return storageValue[storageValue.length-1]
}