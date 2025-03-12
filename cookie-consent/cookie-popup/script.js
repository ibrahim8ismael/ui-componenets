// Learn more on how to use the Modal object from Flowbite: https://flowbite.com/docs/components/modal/#javascript-behaviour

const modalEl = document.getElementById('cookies-corner-modal');
const cookiesModal = new Modal(modalEl, {
    placement: 'bottom-right'
});

cookiesModal.show();

const closeModalEl = document.getElementById('close-modal');
closeModalEl.addEventListener('click', function() {
    cookiesModal.hide();
});

const acceptCookiesEl = document.getElementById('accept-cookies');
acceptCookiesEl.addEventListener('click', function() {
    // handle cookie accept
    alert('cookies accepted');
    cookiesModal.hide();
});

const blockCookiesEl = document.getElementById('block-cookies');
blockCookiesEl.addEventListener('click', function() {
    // handle cookie block
    alert('cookies block');
    cookiesModal.hide();
});