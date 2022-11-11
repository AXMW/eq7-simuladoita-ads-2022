function openSubject(evt, subjectName) {
    //declarando as variaveis pro menu de cima
    var i, tabcontent, tablinks;
  
    // pega os elementos cm o nome tabcontent e esconde
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // pega todos o tablink e tira o active
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // mostra a aba ativa q a pessoa clicou
    document.getElementById(subjectName).style.display = "block";
    evt.currentTarget.className += " active";
  }