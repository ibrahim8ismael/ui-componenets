window.addEventListener("load", function () {
    // Define a map of keys and their corresponding class names for tooltip and icons
    const map = {
      amount: "tooltip-amount default-icon-amount success-icon-amount",
      currency: "tooltip-currency default-icon-currency success-icon-currency",
      beneficiary: "tooltip-beneficiary default-icon-beneficiary success-icon-beneficiary",
      "account-number": "tooltip-account-number default-icon-account-number success-icon-account-number",
      "swift-code": "tooltip-swift-code default-icon-swift-code success-icon-swift-code",
      address: "tooltip-address default-icon-address success-icon-address",
    };
  
    // Iterate over the map
    Object.entries(map).forEach(([key, classNames]) => {
      // Split the classNames into separate variables for tooltip and icon IDs
      const [tooltipId, defaultId, successId] = classNames.split(" ");
      // Get instances and elements based on the key and IDs
      const clipboard = FlowbiteInstances.getInstance("CopyClipboard", key);
      const tooltip = FlowbiteInstances.getInstance("Tooltip", tooltipId);
      const defaultMessage = document.getElementById(defaultId);
      const successMessage = document.getElementById(successId);
      const defaultIcon = document.getElementById(`default-tooltip-message-${key}`);
      const successIcon = document.getElementById(`success-tooltip-message-${key}`);
  
      // Attach event listener for clipboard copying
      clipboard.updateOnCopyCallback(() => {
        // Show success messages and icons
        showSuccess(defaultMessage, successMessage);
        showSuccess(defaultIcon, successIcon);
        // Show tooltip
        tooltip.show();
        // Reset to default state after 2 seconds
        setTimeout(() => {
          resetToDefault(defaultMessage, successMessage);
          resetToDefault(defaultIcon, successIcon);
          tooltip.hide();
        }, 2000);
      });
    });
  
    // Function to show success message and icon
    const showSuccess = ($defaultEl, $successEl) => {
      $defaultEl.classList.add("hidden");
      $successEl.classList.remove("hidden");
    };
  
    // Function to reset to default state
    const resetToDefault = ($defaultEl, $successEl) => {
      $defaultEl.classList.remove("hidden");
      $successEl.classList.add("hidden");
    };
  });