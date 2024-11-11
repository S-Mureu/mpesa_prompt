function initiatePayment() {
    // Get the values from the input fields
    let phoneNumber = document.getElementById('phoneNumber').value.trim();
    let amount = document.getElementById('amount').value.trim();

    
    // Validate inputs
    if (!phoneNumber || !/^\d{9,15}$/.test(phoneNumber)) {
        alert("Please enter a valid M-Pesa registered phone number.");
        return;
    }

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
        alert("Please enter a valid amount.");
        return;
    }


    // Show confirmation dialog
    let confirmation = confirm(`You are about to make a payment of ${amount} using M-Pesa to the number: ${countryCode}${phoneNumber}.\nReason: ${message}. Do you want to proceed?`);

    if (confirmation) {
        // This is where you'd send the payment details to your server to interact with the M-Pesa API
        // For now, we'll simulate this with a message
        document.getElementById('paymentMessage').innerHTML = `
            Payment of ${amount} has been initiated. You will receive a prompt on your phone to complete the payment.<br>
            If the payment doesn't complete, please check your M-Pesa account or try again.
        `;
        document.getElementById('paymentMessage').style.color = 'green';
    } else {
        // If user cancels, show cancellation message
        document.getElementById('paymentMessage').innerHTML = 'Payment has been canceled.';
        document.getElementById('paymentMessage').style.color = 'red';
    }
}