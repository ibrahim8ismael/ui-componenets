var hideSideNavButtonEl = document.getElementById('show-secondary-sidenav-button');
var showSideNavButtonEl = document.getElementById('hide-secondary-sidenav-button');
var sidenavEl = document.getElementById('secondary-sidenav');

// learn more about the Drawer object: https://flowbite.com/docs/components/drawer/#javascript-behaviour
var sideNav = new Drawer(sidenavEl, {
    backdrop: false,
    bodyScrolling: true,
    onHide: function() {
        showSideNavButtonEl.classList.remove('hidden');
        hideSideNavButtonEl.classList.add('hidden');
    },
    onShow: function() {
        showSideNavButtonEl.classList.add('hidden');
        hideSideNavButtonEl.classList.remove('hidden');
    }
});

// show by default
sideNav.show();

hideSideNavButtonEl.addEventListener('click', function() {
    sideNav.hide();
});

showSideNavButtonEl.addEventListener('click', function() {
    sideNav.show();
});