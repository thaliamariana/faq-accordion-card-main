document.querySelectorAll(".arrow-down").forEach(changeStyleAfterClick);

function changeStyleAfterClick(item, indice) {
    
    var listaRespostas = document.querySelectorAll(".answer");
    var listaPerguntas = document.querySelectorAll(".question");
    
    item.onclick = () => {   

        if (listaRespostas[indice].style.display == 'none')
        {
            listaRespostas[indice].style.display = 'block';
            listaPerguntas[indice].classList.add("question-selected");
            item.style.transform = 'rotate(0.5turn)';
        }
        else
        {
            listaRespostas[indice].style.display = 'none';
            listaPerguntas[indice].classList.remove("question-selected");
            item.style.transform = 'rotate(0turn)';
        }   
    }
}