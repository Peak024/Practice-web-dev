let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let vaule = window.scrollY;

    text.style.marginTop = vaule * 2.5 + 'px';
    leaf.style.top = vaule * -1.5 + 'px';
    leaf.style.left = vaule * 1.5 + 'px';
    hill5.style.left = vaule * 1.5 + 'px';
    hill4.style.left = vaule * -1.5 + 'px';
    hill1.style.top = vaule *  + 'px';
});