//variavel pra pagina result.html
var totalCorrect = 0
var totalIncorrect = 0
var totalAnswered = 0
var correctPercent = 0
var dates = []
var totalWithoutAnswer = 0
var timeDoing = 0
var messageC = ''
var finalScore = 0

//verifica se existe algum simulado ja respondido, se sim pega os valores e coloca nas variaveis de cima
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

//adiciona 4 nas respostas corretas, ja q isso aconteceu no vestibular
totalCorrect = parseFloat(totalCorrect) + 4
//faz as porcentagens das respostas
roundGrade(totalCorrect, totalIncorrect, totalWithoutAnswer, totalAnswered)

graphics();
//grafico de quanto a pessoa acertou errou e n respondeu
function graphics() {
    let incorrectGraph = totalIncorrect - totalWithoutAnswer
    incorrectGraph = incorrectGraph / 70
    let correctGraph = totalCorrect / 70
    let withoutAnswerGraph = totalWithoutAnswer / 70
    let datay = [incorrectGraph, correctGraph, withoutAnswerGraph]
    let datax = [`Incorretas: ${totalIncorrect - totalWithoutAnswer}`, `Corretas: ${totalCorrect}`, `Sem resposta: ${totalWithoutAnswer}`]  
    let data = [{labels: datax, values: datay, type: "pie", textinfo: "label+percent", textposition: "outside", automargin: true, "marker": { "colors" : [
        "rgba(200, 0, 0, 0.87);",
        "rgb(0, 184, 0)",
        "rgb(105, 105, 105)"
    ]}}];
    let layout = {height: 400, width: 400, margin: {"t": 0, "b": 0, "l": 0, "r": 0}, showlegend: false, plot_bgcolor: "rgba(0,0,0,0)", paper_bgcolor: "rgba(0,0,0,0)", font: { family: "Noto Sans", color: "#ffffff"}}
    Plotly.newPlot('graph', data, layout);
}

//tempo da pessoa respondendo o simulado e tempo medio por questão
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

// se a pessoa n respondeu nenhuma questão vai falar q ela n fez
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
    messageC = 'Você acertou: ' + correctPercent + '%'
}

document.getElementById('retorno-acertos').innerHTML = messageC
document.getElementById('nota-final'). innerHTML = finalScore

// a função pra fazer as porcentagens
function roundGrade(corrects, incorrects, withoutAnswer, answereds) {
    correctPercent = Math.round((corrects / 70) * 100)
    let incorrectPercent = Math.round((incorrects / 70) * 100)
    let withoutAnswerPercent = Math.round((withoutAnswer / 70) * 100)
    let answeredPercent = Math.round((answereds / 70) * 100)

    document.getElementById('acertos').innerHTML = `${corrects}/70 <b>(${correctPercent}%)</b>`
    document.getElementById('erros').innerHTML = `${incorrects}/70 <b>(${incorrectPercent}%)</b>`
    document.getElementById('nao-respondidas').innerHTML = `${withoutAnswer}/70 <b>(${withoutAnswerPercent}%)</b>`
    document.getElementById('respondidas').innerHTML = `${answereds}/70 <b>(${answeredPercent}%)</b>`
}

//guarda o valor no localStorage
function storageValue(key) {
    let storageValue = localStorage.getItem(key).split(',')
    return storageValue[storageValue.length-1]
}