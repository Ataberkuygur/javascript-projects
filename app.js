const chooseRandomColor = () => {
    if (!localStorage.getItem('chosenColor')){
        let colors = ['green', 'red', 'blue', 'orange', 'pink', 'yellow', 'brown', 'gray'];
        let randomIndex = Math.floor(Math.random() * 7);
        let chosenColor = colors[randomIndex];
        localStorage.setItem('chosenColor', chosenColor);
        localStorage.setItem('clickCount', 0);
        let choiceCountText = document.getElementById('choiceCount');
        let choiceCount = 3;
        choiceCountText.innerText = `You have ${choiceCount} choice.`;
    }
};

const guessTheColor = (clickedColor) => {
    if (localStorage.getItem('chosenColor')){
        let chosenColor = localStorage.getItem('chosenColor');
        let clickCount = localStorage.getItem('clickCount');
        let updatedClickCount = parseInt(clickCount) + 1;
        localStorage.setItem('clickCount', updatedClickCount);
        let choiceCountText = document.getElementById('choiceCount');
        let choiceCount = 3 - (parseInt(clickCount) + 1);
        choiceCountText.innerText = `You have ${choiceCount} choice.`;
        if (localStorage.getItem('clickCount') == '4'){
            alert('Kaybettin');
            localStorage.clear();
            location.reload();
        }
        else{
            if (clickedColor == chosenColor){
                document.body.style.backgroundColor = chosenColor;
                localStorage.removeItem('chosenColor');
                localStorage.clear();
                alert('Kazandın!')
                location.reload();
            }
        }
    }
};