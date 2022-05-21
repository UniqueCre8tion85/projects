document.getElementById("calculateButton").onclick = () => {
    const totalInput = document.getElementById("total");
    const tipInput = document.getElementById("tip");

    console.log(typeof totalInput.value);
    console.log(typeof tipInput.value);

    const total = parseFloat(totalInput.value);
    const tip = parseInt(tipInput.value);

    const tipAmount = total * (tip / 100);

    document.getElementById("results").innerHTML = "Your tip should be $" + numberRounder(tipAmount) + ". For a total of $" + numberRounder(total + tipAmount) + ".";
};

const numberRounder = (input) => {
    return Math.round(input * 100)/  100;
};