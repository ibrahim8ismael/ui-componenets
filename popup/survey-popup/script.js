const modalEl = document.getElementById('survey-pop-up');
const surveyModal = new Modal(modalEl, {
    placement: 'center'
});

surveyModal.show();

const closeModalEl = document.getElementById('close-modal');
closeModalEl.addEventListener('click', function() {
    surveyModal.hide();
});