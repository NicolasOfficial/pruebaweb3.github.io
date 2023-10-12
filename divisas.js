document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '6caa2fe36043a17a2225a350a3d4ab5c'; // Replace with your ExchangeRatesAPI key

    // Elements
    const currentDateSpan = document.getElementById('currentDate');
    const eurToMxnRateSpan = document.getElementById('eurToMxnRate');

    // Function to fetch the current date
    function getCurrentDate() {
        const currentDate = new Date();
        currentDateSpan.textContent = currentDate.toDateString();
    }

    // Function to fetch the EUR to MXN exchange rate
    function getEurToMxnRate() {
        fetch(`https://api.apilayer.com/exchangerates_data/latest?base=EUR&symbols=MXN`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        })
        .then(response => response.json())
        .then(data => {
            const eurToMxnRate = data.rates.MXN;
            eurToMxnRateSpan.textContent = `1 EUR = ${eurToMxnRate.toFixed(2)} MXN`;
        })
        .catch(error => console.error('Error fetching EUR to MXN exchange rate:', error));
    }

    // Call the functions to update the date and exchange rate
    getCurrentDate();
    getEurToMxnRate();
});

function getEurToMxnRate() {
    fetch(`https://api.apilayer.com/exchangerates_data/latest?base=EUR&symbols=MXN`, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Add this line to check the API response in the browser console
        const eurToMxnRate = data.rates.MXN;
        eurToMxnRateSpan.textContent = `1 EUR = ${eurToMxnRate.toFixed(2)} MXN`;
    })
    .catch(error => console.error('Error fetching EUR to MXN exchange rate:', error));
}