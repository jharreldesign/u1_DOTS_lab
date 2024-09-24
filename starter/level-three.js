/*
 * DOTS: Level Three
 *
 */

let score = 0;

const balls = document.querySelectorAll('.js-ball');
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')

for (i = 0; i < balls.length; i++) {
    let scoreValue = parseInt(balls[i].dataset.increment)
    balls[i].addEventListener('click', () => {
        score += scoreValue;
        scoreDisplay.textContent = score;
        if(score >= 100) {
            levelWinner.style.opacity = 1;
            // Remove event listener so you can't click on the balls/add points after hitting 100 point.
            balls[i].removeEventListener('click', handleClick);
        }
    })
}


