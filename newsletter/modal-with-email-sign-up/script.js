const modalEl = document.getElementById('newsletter-modal');
  const newsletterModal = new Modal(modalEl, {
      placement: 'center'
  });

  newsletterModal.show();

  const closeModalEl = document.getElementById('close-modal');
  closeModalEl.addEventListener('click', function() {
      newsletterModal.hide();
  });