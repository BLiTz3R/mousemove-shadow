// Variables
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100px travel distance

// Event listener
hero.addEventListener('mousemove', shadow);


// Shadow function
function shadow(e) {
    // const width = hero.offsetWidth; // ES5 way
    // const height = hero.offsetHeight;
    const { offsetWidth: width, offsetHeight: height } = hero; // ES6 way
    let { offsetX: x, offsetY: y } = e;

    // if .hero div is not the target (means it's the nested h1)
    if (this !== e.target) {
        x = x + e.target.offsetLeft; // normalize coordinates
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2)); // get values from -50 to 50 (walk = 100)
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
}

