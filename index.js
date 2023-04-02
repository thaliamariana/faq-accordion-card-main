document.querySelectorAll(".arrow-down").forEach(changeStyleAfterClick);

var answerList = document.querySelectorAll(".answer");
var questionList = document.querySelectorAll(".question");
var lastIndex;

function changeStyleAfterClick(item, index) {

    item.onclick = () => {   

        if (answerList[index].style.display == 'none') {

            if (lastIndex != undefined) {
                closeQuestion(item, lastIndex);
            }
        
            openQuestion(item, index);
            lastIndex = index;

        } else {
            closeQuestion(item, index);
        }   
    }
}

function openQuestion(item, element)  {
    answerList[element].style.display = 'block';
    questionList[element].classList.add("question-selected");
    item.style.transform = 'rotate(0.5turn)';
}

function closeQuestion(item, element) {
    answerList[element].style.display = 'none';
    questionList[element].classList.remove("question-selected");
    item.style.transform = 'rotate(0turn)';
}