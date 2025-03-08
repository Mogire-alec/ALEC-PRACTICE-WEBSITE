function netSalaryCalculator() {
    const basicSalary = parseFloat(prompt("Enter basic salary:"));
    const benefits = parseFloat(prompt("Enter benefits:"));

    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Invalid input! Salary and benefits should be positive numbers.");
        return;
    }

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (Tax)
    let payee;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        payee = grossSalary * 0.25;
    } else {
        payee = grossSalary * 0.3;
    }

    // Calculate NHIF Deductions
    let nhifDeductions;
    if (grossSalary <= 5999) {
        nhifDeductions = 150;
    } else if (grossSalary <= 7999) {
        nhifDeductions = 300;
    } else if (grossSalary <= 11999) {
        nhifDeductions = 400;
    } else if (grossSalary <= 14999) {
        nhifDeductions = 500;
    } else if (grossSalary <= 19999) {
        nhifDeductions = 600;
    } else if (grossSalary <= 24999) {
        nhifDeductions = 750;
    } else if (grossSalary <= 29999) {
        nhifDeductions = 850;
    } else if (grossSalary <= 34999) {
        nhifDeductions = 900;
    } else if (grossSalary <= 39999) {
        nhifDeductions = 950;
    } else if (grossSalary <= 44999) {
        nhifDeductions = 1000;
    } else if (grossSalary <= 49999) {
        nhifDeductions = 1100;
    } else if (grossSalary <= 59999) {
        nhifDeductions = 1200;
    } else if (grossSalary <= 69999) {
        nhifDeductions = 1300;
    } else if (grossSalary <= 79999) {
        nhifDeductions = 1400;
    } else if (grossSalary <= 89999) {
        nhifDeductions = 1500;
    } else if (grossSalary <= 99999) {
        nhifDeductions = 1600;
    } else {
        nhifDeductions = 1700;
    }

    // Calculate NSSF Deductions (Tier I and II)
    const nssfDeductions = Math.min(grossSalary * 0.06, 1800);

    // Calculate net salary
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE (Tax): ${payee}`);
    console.log(`NHIF Deductions: ${nhifDeductions}`);
    console.log(`NSSF Deductions: ${nssfDeductions}`);
    console.log(`Net Salary: ${netSalary}`);
}

netSalaryCalculator();