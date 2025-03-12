// Learn more about the Tabs API here: https://flowbite.com/docs/components/tabs/#javascript-behaviour

const tabElements = [
    {
        id: 'ios',
        triggerEl: document.querySelector('#ios-tab'),
        targetEl: document.querySelector('#ios')
    },
    {
        id: 'android',
        triggerEl: document.querySelector('#android-tab'),
        targetEl: document.querySelector('#android')
    }
];

// options with default values
const options = {
    defaultTabId: 'ios',
    onShow: () => {
        console.log('tab is shown');
    }
};

const tabs = new Tabs(tabElements, options);

tabs.show('ios');