function calculate() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);

    const result = number1 + number2;

    document.getElementById("result").innerText = `Result: ${result}`;
}

function printPDF() {
    // Implement PDF printing logic here
    alert("Printing PDF...");
    window.print();
    // You can use a library like jsPDF to generate PDFs on the client side.
}







