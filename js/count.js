//declarando as variaveis pra esse arquivo e para o correct.js
let pageId = ''
let answeredQuestion = ''

//Armazenando o ID da pag
pageId = document.querySelector('body').id

//verifica a alternativa selecionada
function radioSelected(){

    for(item of document.querySelectorAll(`Input[Name=${pageId}]`)) {
        if(item.checked)
            return item.value
    }
}

//inicia o simulado quando a pagina é carregada e o simulado ainda n foi iniciado
addEventListener('load', () => {
    if(!sessionStorage.getItem('testStart'))
        this,sessionStorage.setItem('testStart', Date.parse(new Date()))
    
    if(sessionStorage.getItem('userAnswers')) {
        answeredQuestion = sessionStorage.getItem('userAnswers')
        for(perguntaR of answeredQuestion.split("")) {
            if(perguntaR.split(":")[0] == pageId)
                document.querySelector(`Input[Value=${perguntaR.split(":"[1])}]`).checked = true;
        }
    }
    else
        sessionStorage.setItem('userAnswers', '')
})

//sempre trocar a o radio quando estiver respondendo vai alterar a variavel toda vez
addEventListener('change', () => {
    let userChoice = radioSelected()
    let questionHistory = answeredQuestion.split(" ")

    let questionChange = false

    for(question of questionHistory) {
        if(question.split(":")[0] == pageId){
            let i = questionHistory.indexOf(question)
            questionHistory[i] = `${pageId}:${userChoice}`
            questionChange = true
        }
    }

    if(!questionChange) {
        if(questionHistory[0] == "")
            questionHistory[0] = `${pageId}:${userChoice}`
        else
            questionHistory.push(`${pageId}:${userChoice}`)
    }

    questionHistory = questionHistory.join(" ")

    this.sessionStorage.setItem('userAnswers', questionHistory)

})

//função para quando o usuario clicar em finalizar
function saveResult() {
    //gabarito da prova
    let correctAnswers = ["Q1:B", "Q2:D", "Q4:A", "Q5:C", "Q6:C", "Q7:E", "Q9:A", "Q10:B", "Q11:E", "Q12:A", "Q13:C", "Q14:A", "Q15:B", "Q16:C", "Q17:E", "Q18:A", "Q19:E", "Q20:E", "Q21:B", "Q22:B", "Q23:B", "Q25:C", "Q26:A", "Q27:D", "Q28:D", "Q29:C", "Q30:E", "Q31:C", "Q32:A", "Q33:B", "Q34:C", "Q35:B", "Q36:C", "Q37:D", "Q38:B", "Q39:E", "Q40:A", "Q41:B", "Q42:E", "Q43:C", "Q44:A", "Q45:D", "Q46:E", "Q47:D", "Q48:C", "Q49:D", "Q50:A", "Q51:C", "Q52:A", "Q53:C", "Q54:C", "Q55:C", "Q56:D", "Q57:D", "Q58:B", "Q59:A", "Q61:B", "Q62:D", "Q63:B", "Q64:A", "Q65:D", "Q66:E", "Q67:B", "Q68:B", "Q69:E", "Q70:A"]

    //variaveis para as respostas do usuario
    let userAnswers = []
    let totalAnswered = []
    let totalCorrect = []
    let totalIncorrect = []

    let timeDoing = 0
    let totalWithoutAnswer = 66

    let finalScore = 4

    //pega as respostas do usuario e quantas ele respondeu
    if(sessionStorage.getItem('userAnswers')){
        userAnswers = sessionStorage.getItem('userAnswers').split(" ")
        totalAnswered = sessionStorage.getItem('userAnswers').split(" ")
    }

    //no array[0] for diferente de vazio vai verificar as respostas dele com a do gabarito e vai aumentar nos corretas ou incorretas
    if(totalAnswered[0] != '') {
        for(let i = 0; i < userAnswers.length; i++) {
            if(correctAnswers.indexOf(userAnswers[i]) >= 0)
                totalCorrect.push(userAnswers[i])

            if(correctAnswers.indexOf(userAnswers[i]) < 0)
                totalIncorrect.push(userAnswers[i])
                console.log(totalIncorrect[i])
        }

        for(let i = 0; i < totalCorrect.length; i++) {
            finalScore++;
        }

        totalWithoutAnswer = 66 - totalAnswered.length
    }
    else {
        totalAnswered = []
    }

    //eu n sei o q tava dando de errado mas eu tive q diminuir 1 aqui por algum motivo :)
    totalIncorrect [-1] -= 1;
    

    //data do começo do simulado e do fim e fazer o calculo pra saber o tempo
    if(sessionStorage.getItem("testStart")) {
        let testStart = sessionStorage.getItem("testStart")

        let testEnd = Date.parse(new Date())

        timeDoing = (testEnd - testStart) / 1000
    }
    //ajustando a porcentagem do quanto o usuario acertou
    let correctPercent = Math.round((totalCorrect.length / 70) * 100)

    let date = new Date()
    let dayMonthYear = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear()

    // armazenando os valores no localStorage
    if(totalAnswered.length != 0) {
        if(localStorage.getItem('userCorrect')) {
            saveEvolutionData(totalCorrect.length, 'userCorrect')
            saveEvolutionData((totalIncorrect.length + totalWithoutAnswer), 'userIncorrect')
            saveEvolutionData(dayMonthYear, 'dateTest')
            saveEvolutionData(totalWithoutAnswer, 'questionsWithoutAnswer')
            saveEvolutionData(timeDoing, 'timeDoing')
            saveEvolutionData(totalAnswered.length, 'totalAnswered')
            saveEvolutionData(correctPercent, 'correctPercent')
            saveEvolutionData(finalScore, 'finalScore')
            localStorage.setItem('userAnswers', userAnswers)
        }
        else {
            localStorage.setItem('userCorrect', totalCorrect.length)
            localStorage.setItem('userIncorrect', totalIncorrect.length + totalWithoutAnswer.length)
            localStorage.setItem('dateTest', dayMonthYear)
            localStorage.setItem('questionsWithoutAnswer', totalWithoutAnswer)
            localStorage.setItem('timeDoing', timeDoing)
            localStorage.setItem('totalAnswered', totalAnswered.length)
            localStorage.setItem('correctPercent', correctPercent)
            localStorage.setItem('finalScore', finalScore)
            localStorage.setItem('userAnswers', userAnswers)
        }

        sessionStorage.setItem('userAnswers', '')
        sessionStorage.setItem('pagesCorrected', '')

        sessionStorage.setItem('userAnswers', userAnswers.join(' '))
    }
    sessionStorage.setItem('testStart', '')
    //vai pro result.html
    window.location.href = 'result.html'
    //limpa o sessionStorage, pq antes n tava funcionando se eu n tivesse fazendo isso
    sessionStorage.clear()
}

function saveEvolutionData(valueToStorage, localStorageKey) {
    let vetor = localStorage.getItem(localStorageKey).split(',')
    vetor.push(valueToStorage)
    vetor.join(' ')
    localStorage.setItem(localStorageKey, vetor)
}
