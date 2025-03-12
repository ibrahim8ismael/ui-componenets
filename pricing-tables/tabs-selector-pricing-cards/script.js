const pricingTabEls = [
    {
        id: 'starter',
        triggerEl: document.querySelector('#starter-tab'),
        targetEl: document.querySelector('#starter-content'),
        pricingEl: document.querySelector('#starter-plan')
    },
    {
        id: 'standard',
        triggerEl: document.querySelector('#standard-tab'),
        targetEl: document.querySelector('#standard-content'),
        pricingEl: document.querySelector('#standard-plan')
    },
    {
        id: 'premium',
        triggerEl: document.querySelector('#premium-tab'),
        targetEl: document.querySelector('#premium-content'),
        pricingEl: document.querySelector('#premium-plan')
    },
    {
        id: 'enterprise',
        triggerEl: document.querySelector('#enterprise-tab'),
        targetEl: document.querySelector('#enterprise-content'),
        pricingEl: document.querySelector('#enterprise-plan')
    }
  ];
  
  const options = {
    defaultTabId: 'standard',
    activeClasses: 'text-gray-900 bg-gray-100 dark:bg-gray-600 dark:text-white',
    inactiveClasses: 'bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-700 dark:hover:bg-gray-600',
    onShow(context) {
        const activeTab = context.getActiveTab();
        pricingTabEls.map(function(el) {
            el.pricingEl.classList.add('hidden')
        })
        activeTab.pricingEl.classList.remove('hidden');
    }
  }
  
  const pricingTabs = new Tabs(pricingTabEls, options);
  
  // if you're using Flowbite v2+ please also use a parent tabs wrapper:
  
  // const parentPricingTabs = document.getElementById('pricingTabs');
  // const pricingTabs = new Tabs(parentPricingTabs, pricingTabEls, options);