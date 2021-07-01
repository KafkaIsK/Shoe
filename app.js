// Movement Animation
const card = document.querySelectorAll('.card');
const container = document.querySelectorAll('.container');
// Items
const title = document.querySelectorAll('.title');
const sneaker = document.querySelectorAll('.sneaker img');
const purchase = document.querySelectorAll('.purchase');
const description = document.querySelectorAll('.info');
const sizes = document.querySelectorAll('.sizes');

// Moving Event
container[0].addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX - 560) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    card[0].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container[1].addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    card[1].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container[2].addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX + 560) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    card[2].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


for (let i =0; i < container.length; i++) {
    container[i].addEventListener('mouseenter', e => {
        card[i].style.transition = 'none';
        // Popout
        title[i].style.transform = 'translateZ(150px)';
        sneaker[i].style.transform = 'translateZ(200px) rotateZ(-45deg)';
        description[i].style.transform = 'translateZ(125px)';
        sizes[i].style.transform = 'translateZ(150px)';
        purchase[i].style.transform = 'translateZ(150px)';
    })
    
    container[i].addEventListener('mouseleave', e => {
        card[i].style.transition = 'all 0.5s ease';
        // Reset
        card[i].style.transform = 'rotateY(0deg) rotateX(0deg)';
        title[i].style.transform = 'translateZ(0px)';
        sneaker[i].style.transform = 'translateZ(0px) rotateZ(0deg)';
        description[i].style.transform = 'translateZ(0px)';
        sizes[i].style.transform = 'translateZ(0px)';
        purchase[i].style.transform = 'translateZ(0px)';
    });
}