const items = document.querySelectorAll('.item');
let toggleClass;

items.forEach(function(item) {
    item.addEventListener('click', function(){
        item.classList.toggle('open');
    });
});