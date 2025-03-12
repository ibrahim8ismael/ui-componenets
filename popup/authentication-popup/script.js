const modalEl = document.getElementById('auth-pop-up');
const authModal = new Modal(modalEl, {
    placement: 'center'
});

authModal.show();

const closeModalEl = document.getElementById('close-modal');
closeModalEl.addEventListener('click', function() {
    authModal.hide();
});