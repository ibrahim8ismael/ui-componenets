const modalEl = document.getElementById('promo-popup');
const promoModal = new Modal(modalEl, {
    placement: 'center'
});

promoModal.show();

const closeModalEl = document.getElementById('close-modal');
closeModalEl.addEventListener('click', function() {
    promoModal.hide();
    alert('not interested')
});