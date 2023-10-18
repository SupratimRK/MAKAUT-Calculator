function convert() {
    const evenSGPA = parseFloat(document.getElementById("evenSGPA").value);
    const oddSGPA = parseFloat(document.getElementById("oddSGPA").value);

    if (isNaN(evenSGPA) || isNaN(oddSGPA) || evenSGPA < 5 || evenSGPA > 10 || oddSGPA < 5 || oddSGPA > 10) {
        document.getElementById("result").textContent = "Please enter valid SGPA values between 5.0 and 10.";
    } else {
        const ygpa = (evenSGPA + oddSGPA) / 2; // Average of even and odd semester SGPA
        const percentage = ((ygpa - 0.75) * 10).toFixed(2);
        const result = `<b>Your YGPA is: ${ygpa.toFixed(2)}<br>Your Percentage is: ${percentage}%</b><br><br>Made with 💙 by Supratim`;
        document.getElementById("result").innerHTML = result;
    }
}
