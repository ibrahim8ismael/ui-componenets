const modalEl = document.getElementById('signup-popup');
const discountModal = new Modal(modalEl, {
    placement: 'bottom-right'
});

discountModal.show();

const closeModalEl = document.getElementById('closeModal');
closeModalEl.addEventListener('click', function() {
    discountModal.hide();
});