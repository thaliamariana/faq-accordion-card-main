document.querySelectorAll(".arrow-down").forEach(changeStyleAfterClick);

function changeStyleAfterClick(item, indice) {

    var listaRespostas = document.querySelectorAll(".answer");
    var listaPerguntas = document.querySelectorAll(".question");
    
    item.onclick = () => {   

        if (listaRespostas[indice].style.display == 'none')
        {
            listaRespostas[indice].style.display = 'block';
            listaPerguntas[indice].style.color = '#1d1e35';
            listaPerguntas[indice].style.fontWeight = 'bold';
            item.style.transform = 'rotate(0.5turn)';
        }
        else
        {
            listaRespostas[indice].style.display = 'none';
            listaPerguntas[indice].style.fontWeight = 'normal';
            listaPerguntas[indice].style.color = '#787887';
            item.style.transform = 'rotate(0turn)';
        }   
    }
}