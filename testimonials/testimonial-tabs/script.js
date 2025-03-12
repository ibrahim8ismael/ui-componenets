// check out the Flowbite Tabs JS behaviour docs for more information: https://flowbite.com/docs/components/tabs/#javascript-behaviour

// create an array of objects with the id, trigger element (eg. button), and the content element
const tabElements = [
    {
        id: 'testimonial-1',
        triggerEl: document.querySelector('#testimonial-1-tab'),
        targetEl: document.querySelector('#testimonial-1')
    },
    {
        id: 'testimonial-2',
        triggerEl: document.querySelector('#testimonial-2-tab'),
        targetEl: document.querySelector('#testimonial-2')
    },
    {
        id: 'testimonial-3',
        triggerEl: document.querySelector('#testimonial-3-tab'),
        targetEl: document.querySelector('#testimonial-3')
    }
];

// options with default values
const options = {
    defaultTabId: 'settings',
    activeClasses: 'bg-gray-100 dark:bg-gray-700',
    inactiveClasses: 'bg-white dark:bg-gray-900',
    onShow: () => {
        console.log('tab is shown');
    }
};

const tabs = new Tabs(tabElements, options);