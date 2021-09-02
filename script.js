const item = document.querySelector('.item');
let toggleClass;

item.addEventListener('click', toggleClass = function() {
    item.classList.toggle('open');
})
