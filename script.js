let blocks = [
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1]
]
let field = document.querySelector('#field');

blocks.forEach(e=>{
    let index = blocks.indexOf(e);
    for (let i = 0; i < e.length; i++) {
        let pos = index+i;
        pos++;
        let block = document.createElement('div');
        block.setAttribute('data-x',`${i+1}`);
        block.setAttribute('data-y',`${index+1}`);
        block.classList.add('block')
        field.appendChild(block);
        if (pos%2==0) {
            block.classList.add('dark');
        }
    }
});


field.addEventListener('click',e=>{
    let element = e.target;
    if (element.classList.contains('block')) {
        let x = element.dataset.x;
        let y = element.dataset.y;
        document.querySelectorAll('.block').forEach(e=>{
            e.removeAttribute('style');
        })
        if (+x+2 < 9 && +y+1 < 9) {
            let horse = document.querySelector(`.block[data-x="${+x+2}"][data-y="${+y+1}"]`)
            horse.style.cssText = "border: solid 1px grey; background-color: lightgreen";
        }
        if (+x+2 < 9 && +y-1 >= 0 && +y-1) {
            let horse = document.querySelector(`.block[data-x="${+x+2}"][data-y="${+y-1}"]`)
            horse.style.cssText = "border: solid 1px grey; background-color: lightgreen"
        }
        if (+x-2 >= 0 && +y-1 >= 0 && +y-1 && +x-2) {
            let horse = document.querySelector(`.block[data-x="${+x-2}"][data-y="${+y-1}"]`)
            horse.style.cssText = "border: solid 1px grey; background-color: lightgreen"
        }
        if (+x-2 >= 0 && +y+1 < 9 && +y+1 && +x-2) {
            let horse = document.querySelector(`.block[data-x="${+x-2}"][data-y="${+y+1}"]`)
            horse.style.cssText = "border: solid 1px grey; background-color: lightgreen";
        }
        if (+x-1 >= 0 && +y+2 < 9 && +x-1 && +y+2) {
            let horse = document.querySelector(`.block[data-x="${+x-1}"][data-y="${+y+2}"]`)
            console.log(horse);
            horse.style.cssText = "border: solid 1px grey; background-color: lightgreen";
        }
        if (+x+1 < 9 && +y+2 < 9 && +x+1 && +y+2) {
            let horse = document.querySelector(`.block[data-x="${+x+1}"][data-y="${+y+2}"]`)
            horse.style.cssText = "border: solid 1px grey; background-color: lightgreen";
        }
        if (+x+1 < 9 && +y-2 >= 0 && +x+1 && +y-2) {
            let horse = document.querySelector(`.block[data-x="${+x+1}"][data-y="${+y-2}"]`)
            horse.style.cssText = "border: solid 1px grey; background-color: lightgreen";
        }
        if (+x-1 < 9 && +y-2 >= 0 && +x-1 && +y-2) {
            let horse = document.querySelector(`.block[data-x="${+x-1}"][data-y="${+y-2}"]`)
            horse.style.cssText = "border: solid 1px grey; background-color: lightgreen";
        }
    }
})