const items = document.querySelectorAll('.item');

items.forEach(function(item) {
    item.addEventListener('click', function(){
        item.classList.toggle('open');
    });
});