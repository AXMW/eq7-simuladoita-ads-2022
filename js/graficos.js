//todas as questões e estatisticas 
var allQuestions = [
	[1,'B',[0.39,0.18,0.22,0.06,0.15]],
	[2,'D',[0.61,0.06,0.21,0.07,0.05]],
	[3,'Anulada',[0.28,0.2,0.12,0.3,0.09]],
	[4,'A',[0.09,0.52,0.06,0.24,0.09]],
	[5,'C',[0.02,0.62,0.06,0.11,0.18]],
	[6,' C',[0.14,0.62,0.12,0.04,0.08]],
	[7,' E',[0.19,0.21,0.26,0.2,0.14]],
	[8,' Anulada',[0.25,0.18,0.26,0.21,0.11]],
	[9,' A',[0.16,0.18,0.25,0.27,0.14]],
	[10,' B',[0.29,0.12,0.05,0.07,0.46]],
	[11,' E',[0.58,0.09,0.18,0.1,0.05]],
	[12,' A',[0.25,0.14,0.09,0.42,0.1]],
	[13,' C',[0.02,0.03,0.89,0.03,0.03]],
	[14,' A',[0.13,0.11,0.17,0.21,0.37]],
	[15,' B',[0.29,0.09,0.2,0.15,0.27]],
	[16,' C',[0.07,0.6,0.16,0.08,0.09]],
	[17,' E',[0.27,0.12,0.07,0.17,0.36]],
	[18,' A',[0.3,0.05,0.14,0.43,0.07]],
	[19,' E',[0.03,0.05,0.04,0.54,0.34]],
	[20,' E',[0.23,0.31,0.15,0.11,0.2]],
	[21,' B',[0.21,0.12,0.24,0.09,0.33]],
	[22,' B',[0.21,0.32,0.31,0.1,0.05]],
	[23,' B',[0.1,0.21,0.17,0.19,0.33]],
	[24,' Anulada',[0.18,0.6,0.1,0.03,0.09]],
	[25,' C',[0.16,0.37,0.12,0.14,0.2]],
	[26,' A',[0.13,0.08,0.35,0.22,0.21]],
	[27,' D',[0.21,0.19,0.17,0.2,0.22]],
	[28,' D',[0.2,0.55,0.05,0.16,0.04]],
	[29,' C',[0.06,0.1,0.6,0.14,0.11]],
	[30,' E',[0.21,0.18,0.15,0.16,0.29]],
	[31,' C',[0.26,0.2,0.2,0.21,0.12]],
	[32,' A',[0.12,0.15,0.19,0.39,0.15]],
	[33,' B',[0.4,0.29,0.21,0.03,0.07]],
	[34,' C',[0.19,0.38,0.14,0.07,0.21]],
	[35,' B',[0.45,0.1,0.07,0.3,0.28]],
	[36,' C',[0.09,0.64,0.06,0.09,0.12]],
	[37,' D',[0.48,0.09,0.15,0.16,0.12]],
	[38,' B',[0.06,0.11,0.47,0.2,0.17]],
	[39,' E',[0.2,0.08,0.44,0.17,0.11]],
	[40,' A',[0.46,0.09,0.14,0.17,0.14]],
	[41,' B',[0.17,0.11,0.13,0.49,0.09]],
	[42,' E',[0.11,0.19,0.35,0.11,0.24]],
	[43,' C',[0.14,0.09,0.16,0.43,0.17]],
	[44,' A',[0.11,0.07,0.06,0.44,0.32]],
	[45,' D',[0.09,0.19,0.53,0.11,0.08]],
    [46,' E',[0.06,0.11,0.47,0.2,0.17]],
    [47,' D',[0.1,0.21,0.17,0.19,0.33]],
    [48,' C',[0.29,0.12,0.05,0.07,0.46]],
    [49,' D',[0.06,0.11,0.47,0.2,0.17]],
    [50,' A',[0.17,0.11,0.13,0.49,0.09]],
    [51,' C',[0.3,0.05,0.14,0.43,0.07]],
    [52,' A',[0.48,0.09,0.15,0.16,0.12]],
    [53,'C',[0.02,0.62,0.06,0.11,0.18]],
    [54,' C',[0.07,0.6,0.16,0.08,0.09]],
    [55,' C',[0.11,0.07,0.06,0.44,0.32]],
    [56,' D',[0.29,0.09,0.2,0.15,0.27]],
    [57,' D',[0.27,0.12,0.07,0.17,0.36]],
    [58,' B',[0.45,0.1,0.07,0.3,0.28]],
    [59,' A',[0.18,0.6,0.1,0.03,0.09]],
    [60,' Anulada',[0.06,0.1,0.6,0.14,0.11]],
    [61,' B',[0.58,0.09,0.18,0.1,0.05]],
    [62,' D',[0.12,0.15,0.19,0.39,0.15]],
    [63,'B',[0.61,0.06,0.21,0.07,0.05]],
    [64,' A',[0.1,0.21,0.17,0.19,0.33]],
    [65,' D',[0.45,0.1,0.07,0.3,0.28]],
    [66,' E',[0.29,0.12,0.05,0.07,0.46]],
    [67,' B',[0.21,0.12,0.24,0.09,0.33]],
    [68,' B',[0.03,0.05,0.04,0.54,0.34]],
    [69,'E',[0.09,0.52,0.06,0.24,0.09]],
    [70,' A',[0.16,0.18,0.25,0.27,0.14]],
]

//função pra desenhar as respostas pegando os dados e deixando eles organizados pro plotly
function drawResponses(question, answer, valuesAnswers) {
	var xArray = ["A", "B", "C", "D", "E"];
	var yArray = valuesAnswers;

	var layout = {title:"<b>Porcentagem de acertos e erros da questão " + question + "</b>", plot_bgcolor: "rgba(0,0,0,0)", paper_bgcolor: "rgba(0,0,0,0)", font: { family: "Noto Sans", color: "#ffffff"} , showlegend: false};

	var data = [{labels:xArray, values:yArray, type:"pie", textinfo: "label+percent", textposition: "outside", automargin: true}];
	//var data = [{x:xArray, y:yArray, type:"bar"}];

	var divQuestion = "Question" + question;
	
	document.write('<table><tr><td>');
	document.write('<div id="' + divQuestion + '" style="width:70%;max-width:400px"></div>');
	document.write('</td><td>');
  	document.write('<lateral><h2><center>Resposta correta: '+answer+'</center></h2></lateral>');
	document.write('</td></tr></table>');
	
	//função do plotly pra criar os graficos
	Plotly.newPlot(divQuestion, data, layout); 
}
//for pra ir desenhando de grafico em grafico
for (let i = 0; i < allQuestions.length; i++) {
  drawResponses(allQuestions[i][0], allQuestions[i][1], allQuestions[i][2]);
}

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openNav() {
	document.getElementById("sideNav").style.width = "250px";
  }
  
  function closeNav() {
	document.getElementById("sideNav").style.width = "0";
  }
  window.onscroll = function() {myFunction()};
  
  var nav = document.getElementById("rightnav");
  var sticky = nav.offsetTop;
  function myFunction() {
	if (window.pageYOffset > sticky) {
	  nav.classList.add("sticky");
	} else {
	  nav.classList.remove("sticky");
	}
  }