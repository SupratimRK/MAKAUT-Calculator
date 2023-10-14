function convert() {
    const evenSGPA = parseFloat(document.getElementById("evenSGPA").value);
    const oddSGPA = parseFloat(document.getElementById("oddSGPA").value);

    if (isNaN(evenSGPA) || isNaN(oddSGPA)) {
        document.getElementById("result").textContent = "Please enter valid SGPA values.";
    } else {
        const ygpa = (evenSGPA + oddSGPA) / 2; // Average of even and odd semester SGPA
        const percentage = ((ygpa - 0.75) * 10).toFixed(2);
        const result = `Your YGPA is: ${ygpa.toFixed(2)}<br>Your Percentage is: ${percentage}%`;
        document.getElementById("result").innerHTML = result;
    }
}
