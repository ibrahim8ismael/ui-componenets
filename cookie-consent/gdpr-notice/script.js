const modalEl = document.getElementById('cookies-modal');
const cookiesModal = new Modal(modalEl, {
    placement: 'center'
});

cookiesModal.show();

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