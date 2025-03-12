const elements = document.querySelectorAll('[name="category"]');

elements.forEach(function(el) {
    const className = 'peer';
    el.classList.add(className);
});