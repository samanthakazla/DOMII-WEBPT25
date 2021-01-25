// Your code goes here
//1
const logo = document.querySelector('.logo-heading');
logo.addEventListener("mouseenter", () => {
  logo.style.transform = "scale(1.2)";
  logo.style.transition = "all 0.3s"
});

//2
const nav = document.querySelectorAll('.nav-link');
nav.forEach (element => {
  element.addEventListener('dblclick', () => {
    element.style.backgroundColor = 'pink';
  })
});

//3
const paragraph = document.querySelectorAll('p')

paragraph.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.color = 'pink';
    })
});

//4
const button = document.querySelectorAll('.btn')

button.forEach(element => {
    element.addEventListener('click', () => {
        element.style.color = 'yellow';
    })
});

//5
const h4 = document.querySelectorAll('h4')

h4.forEach(element => {
    element.addEventListener('wheel', (event) => {
        event.target.style.background = 'pink';
        element.style.fontSize = '50px';

    })
});

//6
 const img = document.querySelectorAll('img');
    img.forEach(item => {
        item.addEventListener('mousemove', () => {
           item.style.opacity = '0.4';
        });
        item.addEventListener('mouseout', () =>{
            item.style.opacity = '1.0'
        });
     });

//7
window.addEventListener('load', (event) => {
        console.log('page loaded');
    });
