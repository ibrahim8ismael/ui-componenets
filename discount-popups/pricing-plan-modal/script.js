const modalEl = document.getElementById('pro-version-popup');
const discountModal = new Modal(modalEl, {
    placement: 'center'
});

discountModal.show();

const closeModalEl = document.getElementById('closeModal');
closeModalEl.addEventListener('click', function() {
    discountModal.hide();
});