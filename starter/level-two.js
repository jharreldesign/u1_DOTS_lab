/*
 * DOTS: Level Two
 *
 */


const balls = document.querySelectorAll('.js-ball');
const scoreElement = document.querySelector('.js-score');
const winnerSection = document.querySelector('.level-winner');
let score = 0;

console.log(balls)

for (let i = 0; i < balls.length; i++) {
    balls[i].addEventListener('click', function() {
        score += 10;
        scoreElement.textContent = `Score: ${score}`;

        if (score >= 100) {
            winnerSection.style.opacity = 1;
            // Remove event listener
            balls[i].removeEventListener('click', handleClick);
        }
    })
}
