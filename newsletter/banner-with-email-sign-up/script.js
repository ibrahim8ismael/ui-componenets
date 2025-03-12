const bannerEl = document.getElementById('newsletter-banner');
const banner = new Modal(bannerEl, {
    placement: 'top-left'
});

banner.show();

const closeBannerEl = document.getElementById('close-banner');
closeBannerEl.addEventListener('click', function() {
    banner.hide();
});