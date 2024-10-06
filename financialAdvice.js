const readline = require('readline');

// Create an interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function financialAdvice(status, income) {
    let advice;
    const highIncomeThreshold = 50000; // Example threshold for high income

    if (status === "low savings") {
        if (income > highIncomeThreshold) {
            advice = "You should try to save at least 30% of your income since you have a higher income.";
        } else {
            advice = "You should try to save at least 20% of your income.";
        }
    } else if (status === "high debt") {
        advice = "Focus on paying off your high-interest debt first.";
    } else if (status === "good standing") {
        advice = "Great job! Keep up the good financial habits.";
    } else {
        advice = "Please provide a valid financial status.";
    }

    return advice;
}

// Prompt user for input
rl.question('Enter your financial status (low savings, high debt, good standing): ', (status) => {
    rl.question('Enter your income: ', (incomeStr) => {
        const income = parseFloat(incomeStr); // Convert input to a float
        if (!isNaN(income)) {
            const advice = financialAdvice(status, income);
            console.log(advice);
        } else {
            console.log("Please enter a valid number for income.");
        }
        rl.close(); // Close the readline interface
    });
});
