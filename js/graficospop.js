var allQuestions = [
	['Q'+1,'B',[0.39,0.18,0.22,0.06,0.15]],
	['Q'+2,'A',[0.61,0.06,0.21,0.07,0.05]],
	['Q'+3,'A',[0.28,0.2,0.12,0.3,0.09]],
	['Q'+4,'B',[0.09,0.52,0.06,0.24,0.09]],
	['Q'+5,'B',[0.02,0.62,0.06,0.11,0.18]],
	['Q'+6,' B',[0.14,0.62,0.12,0.04,0.08]],
	['Q'+7,' D',[0.19,0.21,0.26,0.2,0.14]],
	['Q'+8,' C',[0.25,0.18,0.26,0.21,0.11]],
	['Q'+9,' D',[0.16,0.18,0.25,0.27,0.14]],
	['Q'+10,' E',[0.29,0.12,0.05,0.07,0.46]],
	['Q'+11,' A',[0.58,0.09,0.18,0.1,0.05]],
	['Q'+12,' D',[0.25,0.14,0.09,0.42,0.1]],
	['Q'+13,' C',[0.02,0.03,0.89,0.03,0.03]],
	['Q'+14,' E',[0.13,0.11,0.17,0.21,0.37]],
	['Q'+15,' D',[0.29,0.09,0.2,0.15,0.27]],
	['Q'+16,' B',[0.07,0.6,0.16,0.08,0.09]],
	['Q'+17,' E',[0.27,0.12,0.07,0.17,0.36]],
	['Q'+18,' D',[0.3,0.05,0.14,0.43,0.07]],
	['Q'+19,' D',[0.03,0.05,0.04,0.54,0.34]],
	['Q'+20,' D',[0.23,0.31,0.15,0.11,0.2]],
	['Q'+21,' A',[0.21,0.12,0.24,0.09,0.33]],
	['Q'+22,' B',[0.21,0.32,0.31,0.1,0.05]],
	['Q'+23,' B',[0.1,0.21,0.17,0.19,0.33]],
	['Q'+24,' B',[0.18,0.6,0.1,0.03,0.09]],
	['Q'+25,' B',[0.16,0.37,0.12,0.14,0.2]],
	['Q'+26,' D',[0.13,0.08,0.35,0.22,0.21]],
	['Q'+27,' E',[0.21,0.19,0.17,0.2,0.22]],
	['Q'+28,' B',[0.2,0.55,0.05,0.16,0.04]],
	['Q'+29,' C',[0.06,0.1,0.6,0.14,0.11]],
	['Q'+30,' E',[0.21,0.18,0.15,0.16,0.29]],
	['Q'+31,' A',[0.26,0.2,0.2,0.21,0.12]],
	['Q'+32,' D',[0.12,0.15,0.19,0.39,0.15]],
	['Q'+33,' A',[0.4,0.29,0.21,0.03,0.07]],
	['Q'+34,' B',[0.19,0.38,0.14,0.07,0.21]],
	['Q'+35,' D',[0.45,0.1,0.07,0.3,0.28]],
	['Q'+36,' B',[0.09,0.64,0.06,0.09,0.12]],
	['Q'+37,' A',[0.48,0.09,0.15,0.16,0.12]],
	['Q'+38,' C',[0.06,0.11,0.47,0.2,0.17]],
	['Q'+39,' A',[0.2,0.08,0.44,0.17,0.11]],
	['Q'+40,' C',[0.46,0.09,0.14,0.17,0.14]],
	['Q'+41,' D',[0.17,0.11,0.13,0.49,0.09]],
	['Q'+42,' C',[0.11,0.19,0.35,0.11,0.24]],
	['Q'+43,' D',[0.14,0.09,0.16,0.43,0.17]],
	['Q'+44,' D',[0.11,0.07,0.06,0.44,0.32]],
	['Q'+45,' C',[0.09,0.19,0.53,0.11,0.08]]
]
function drawResponses(valuesAnswers) {
	var xArray = ["A", "B", "C", "D", "E"];
	var yArray = valuesAnswers;


    var data = [{labels:xArray, values:yArray, type:"pie",textinfo: "label+percent", textposition: "outside", automargin: true}];
    var layout = {height : 335, width: 470, margin: {"t": 0, "b": 0, "l": 0, "r": 0}, showlegend: false}
    
    Plotly.newPlot('graph', data, layout); 

	
	//var data = [{x:xArray, y:yArray, type:"bar"}];

	
}
function printGraph(){
    var verificador = document.querySelector('body').id
    for (let i = 0; i < allQuestions.length; i++) {
        if(allQuestions[i][0] == verificador){
            drawResponses(allQuestions[i][2]);
            break;
        }   
    }
}

function drawResponsesI(valuesAnswers) {
	var xArray = ["A", "B", "C", "D", "E"];
	var yArray = valuesAnswers;


    var data = [{labels:xArray, values:yArray, type:"pie",textinfo: "label+percent", textposition: "outside", automargin: true}];
    var layout = {height : 335, width: 470, margin: {"t": 0, "b": 0, "l": 0, "r": 0}, showlegend: false}
    
    Plotly.newPlot('graphI', data, layout); 

	
	//var data = [{x:xArray, y:yArray, type:"bar"}];

	
}

function printGraphI(){
    var verificador = document.querySelector('body').id
    for (let i = 0; i < allQuestions.length; i++) {
        if(allQuestions[i][0] == verificador){
            drawResponsesI(allQuestions[i][2]);
            break;
        }   
    }
}