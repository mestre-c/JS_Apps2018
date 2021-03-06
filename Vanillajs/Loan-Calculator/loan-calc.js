// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){

    // Hide Results
    document.getElementById('results').style.display = 'none';

    // Show Loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// Calculate Results
function calculateResults() {
    
    console.log('Calculating...');
    
    // UI vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const montlyPayment = document.getElementById('montly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute montly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const montly = (principal * x * calculatedInterest) / (x- 1);

    if (isFinite(montly)) {
        montlyPayment.value = montly.toFixed(2);
        totalPayment.value = (montly * calculatedPayments).toFixed(2);
        totalInterest.value = ((montly * calculatedPayments) - principal).toFixed(2);

        // Show results
        document.getElementById('results').style.display = 'block';

        // Hide the spinner/loader
        document.getElementById('loading').style.display = 'none';

    } else {
        showWarnings('Please, check your numbers');
        
    }
}

// Show warnnings/errors
function showWarnings(error) {

    // Hide Results
    document.getElementById('results').style.display = 'none';

    // Hide loader
    document.getElementById('loading').style.display = 'none';

    // Create a div
    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add class
    errorDiv.className = 'alert alert-danger';

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
    document.querySelector('.alert').remove();
}