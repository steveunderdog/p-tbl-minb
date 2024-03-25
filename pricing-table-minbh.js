document.addEventListener('DOMContentLoaded', function() {
    const planOptionsMin = document.querySelectorAll('.plan-option-min');
    const planContentsMin = document.querySelectorAll('.plan-content-min');

    planOptionsMin.forEach(function(option) {
        option.addEventListener('click', function() {
            const selectedPlan = this.getAttribute('data-plan');

            // Update 'selected' class for options
            planOptionsMin.forEach(function(option) {
                option.classList.remove('selected');
            });
            this.classList.add('selected');

            // Toggle 'active' class for contents
            planContentsMin.forEach(function(content) {
                if (content.getAttribute('data-plan') === selectedPlan) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});

// JavaScript for expandable section
document.addEventListener('DOMContentLoaded', function() {
    const expandableSectionMin = document.querySelector('.expandable-section-min');
    const expandableContentMin = document.querySelector('.expandable-content-min');

    expandableSectionMin.addEventListener('click', function() {
        expandableContentMin.style.display = expandableContentMin.style.display === 'none' ? 'block' : 'none';
    });
});

// JavaScript for opening schedule embed and hiding package details
document.addEventListener('DOMContentLoaded', function() {
    const founder15BookNowBtnMin = document.getElementById('founder15-book-now-min');
    const founder15ScheduleEmbedMin = document.getElementById('founder15-schedule-embed-min');
    const founder15PackageDetailsMin = document.getElementById('founder15-package-details-min');
    const founder15BackToFeaturesMin = document.getElementById('founder15-back-to-features-min');

    founder15BookNowBtnMin.addEventListener('click', function(event) {
        event.preventDefault();
        founder15ScheduleEmbedMin.style.display = 'block';
        founder15PackageDetailsMin.style.display = 'none';
        founder15BackToFeaturesMin.style.display = 'block';
    });

    founder15BackToFeaturesMin.addEventListener('click', function() {
        founder15ScheduleEmbedMin.style.display = 'none';
        founder15PackageDetailsMin.style.display = 'block';
        founder15BackToFeaturesMin.style.display = 'none';
    });

    const growthBookNowBtnMin = document.getElementById('growth-book-now-min');
    const growthScheduleEmbedMin = document.getElementById('growth-schedule-embed-min');
    const growthPackageDetailsMin = document.getElementById('growth-package-details-min');
    const growthBackToFeaturesMin = document.getElementById('growth-back-to-features-min');

    growthBookNowBtnMin.addEventListener('click', function(event) {
        event.preventDefault();
        growthScheduleEmbedMin.style.display = 'block';
        growthPackageDetailsMin.style.display = 'none';
        growthBackToFeaturesMin.style.display = 'block';
    });

    growthBackToFeaturesMin.addEventListener('click', function() {
        growthScheduleEmbedMin.style.display = 'none';
        growthPackageDetailsMin.style.display = 'block';
        growthBackToFeaturesMin.style.display = 'none';
    });

    const accelerateBookNowBtnMin = document.getElementById('accelerate-book-now-min');
    const accelerateScheduleEmbedMin = document.getElementById('accelerate-schedule-embed-min');
    const acceleratePackageDetailsMin = document.getElementById('accelerate-package-details-min');
    const accelerateBackToFeaturesMin = document.getElementById('accelerate-back-to-features-min');

    accelerateBookNowBtnMin.addEventListener('click', function(event) {
        event.preventDefault();
        accelerateScheduleEmbedMin.style.display = 'block';
        acceleratePackageDetailsMin.style.display = 'none';
        accelerateBackToFeaturesMin.style.display = 'block';
    });

    accelerateBackToFeaturesMin.addEventListener('click', function() {
        accelerateScheduleEmbedMin.style.display = 'none';
        acceleratePackageDetailsMin.style.display = 'block';
        accelerateBackToFeaturesMin.style.display = 'none';
    });
});
// Function to update prices based on currency
function updatePrices(currency, exchangeRates) {
    const founder15Price = document.querySelector('.price-min');
    const growthPrice = document.querySelectorAll('.price-min')[1];
    const acceleratePrice = document.querySelectorAll('.price-min')[2];

    founder15Price.innerHTML = `<span class="currency-symbol">${currency}</span>${(15 * exchangeRates[currency]).toFixed(2)} <span class="price-details-min">for 15 minutes</span>`;
    growthPrice.innerHTML = `<span class="currency-symbol">${currency}</span>${(175 * exchangeRates[currency]).toFixed(2)} <span class="price-details-min">/ month</span>`;
    acceleratePrice.innerHTML = `<span class="currency-symbol">${currency}</span>${(295 * exchangeRates[currency]).toFixed(2)} <span class="price-details-min">/ month</span>`;
}

// Function to get user's location and fetch exchange rates
function getLocation() {
    return fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => data.currency)
        .catch(error => {
            console.error('Error getting location:', error);
            return 'USD'; // Default to USD if location retrieval fails
        });
}

// Function to fetch exchange rates from the provided API
function getExchangeRates() {
    return fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca\\_live\\_4fQvTnMtgAGxeLCvSiljao9XAm8kjizf4kl37IE1&currencies=EUR,USD,CAD,AUD,GBP&base_currency=GBP')
        .then(response => response.json())
        .then(data => data.data)
        .catch(error => {
            console.error('Error getting exchange rates:', error);
            return { USD: 1, GBP: 1 }; // Default to USD and GBP with exchange rate 1 if retrieval fails
        });
}

// Main function to update prices based on user's location
async function updatePricesBasedOnLocation() {
    const userCurrency = await getLocation();
    const exchangeRates = await getExchangeRates();
    const currencySymbol = getCurrencySymbol(userCurrency);
    updatePrices(userCurrency, exchangeRates);
}

// Function to get currency symbol based on currency code
function getCurrencySymbol(currency) {
    const currencySymbols = {
        USD: '$',
        EUR: '€',
        GBP: '£',
        CAD: 'CA$',
        AUD: 'A$',
    };
    return currencySymbols[currency] || '$';
}

// Update prices when the page loads
document.addEventListener('DOMContentLoaded', updatePricesBasedOnLocation);

// Update prices when switching between tabs
document.addEventListener('DOMContentLoaded', function() {
    const planOptionsMin = document.querySelectorAll('.plan-option-min');
    const planContentsMin = document.querySelectorAll('.plan-content-min');

    planOptionsMin.forEach(function(option) {
        option.addEventListener('click', function() {
            const selectedPlan = this.getAttribute('data-plan');

            // Update 'selected' class for options
            planOptionsMin.forEach(function(option) {
                option.classList.remove('selected');
            });
            this.classList.add('selected');

            // Toggle 'active' class for contents
            planContentsMin.forEach(function(content) {
                if (content.getAttribute('data-plan') === selectedPlan) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });

            // Update prices when switching tabs
            updatePricesBasedOnLocation();
        });
    });
});
