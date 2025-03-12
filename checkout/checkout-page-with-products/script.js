function toggleCompanyInfo() {
    const companyAddressRadio = document.getElementById("company-address");
    const companyInfoContainer = document.getElementById("company-info-container");
  
    companyInfoContainer.classList.toggle("hidden", !companyAddressRadio.checked);
  }
  
  toggleCompanyInfo();
  document.querySelectorAll('[name="address-type"]').forEach((radio) => {
    radio.addEventListener("change", toggleCompanyInfo);
  });