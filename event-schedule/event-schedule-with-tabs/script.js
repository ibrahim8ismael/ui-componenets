

const tabElements = [
    {
      id: 'day1',
      triggerEl: document.querySelector('#day1-tab'),
      targetEl: document.querySelector('#day1')
    },
    {
      id: 'day2',
      triggerEl: document.querySelector('#day2-tab'),
      targetEl: document.querySelector('#day2')
    },
    {
      id: 'day3',
      triggerEl: document.querySelector('#day3-tab'),
      targetEl: document.querySelector('#day3')
    }
  ];
  
  // options with default values
  const options = {
    defaultTabId: 'day1',
    activeClasses: 'bg-primary-600 text-white dark:bg-primary-500',
    inactiveClasses: 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400'
  };
  
  const tabs = new Tabs(tabElements, options);