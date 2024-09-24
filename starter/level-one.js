/*
 * DOTS: Level One
 *
 */

let score = 0;

const ball = document.querySelector('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')

ball.addEventListener('click', () => {
    score += 10;
    console.log(`Score: ${score}`)

    scoreDisplay.innerText = score;

    if (score >= 100) {
        console.log(`NICE! You just reached ${score} points!`)
        
        levelWinner.style.opacity = 1;
        // Remove event listener
        ball.removeEventListener('click', handleClick);
    }
})



