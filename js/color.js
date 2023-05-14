let color = document.getElementsByClassName('selcolor')[0];
let image = document.getElementsByClassName('selimage')[0];
let main = document.getElementsByClassName('main_block')[0];

let randColor = () => {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}

color.addEventListener('click', () => {
    let box = document.getElementsByClassName('main_color')[0];
    box.style.display = 'flex';

    for (const minBox of box.children) {
        minBox.addEventListener('click', (e) => {

            main.style.backgroundColor = getComputedStyle(e.target).backgroundColor;
        })
        main.style.backgroundImage = 'none';
        minBox.style.backgroundImage = 'none';
        minBox.style.backgroundColor = randColor();
    }
});

image.addEventListener('click', () => {
    let box = document.getElementsByClassName('main_color')[0];
    box.style.display = 'flex';

    for (const minBox of box.children) {
        minBox.addEventListener('click', (e) => {
            main.style.backgroundRepeat = 'no-repeat';
            main.style.backgroundPosition = 'center';
            main.style.backgroundSize = 'cover';
            main.style.backgroundImage = getComputedStyle(e.target).backgroundImage;
        })
        minBox.style.backgroundRepeat = 'no-repeat';
        minBox.style.backgroundPosition = 'center';
        minBox.style.backgroundSize = 'cover';
        minBox.style.backgroundImage = 'url("./img/img' + minBox.id + '.avif")';
    }
});
