function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var inputUnitLabel = document.getElementById("inputUnitLabel");
    var convertedValueField = document.getElementById("convertedValue");
    var convertedValue;

    if (inputUnit === "meter" && outputUnit === "feet") {
        inputUnitLabel.textContent = "Meter";
        convertedValue = inputValue * 3.28084; // Convert meter to feet
    } else if (inputUnit === "meter" && outputUnit === "kilometer") {
        inputUnitLabel.textContent = "Meter";
        convertedValue = inputValue / 1000; // Convert meter to kilometer
    } else if (inputUnit === "meter" && outputUnit === "mile") {
        inputUnitLabel.textContent = "Meter";
        convertedValue = inputValue / 1609.34; // Convert meter to mile
    } else if (inputUnit === "feet" && outputUnit === "meter") {
        inputUnitLabel.textContent = "Feet";
        convertedValue = inputValue / 3.28084; // Convert feet to meter
    } else if (inputUnit === "feet" && outputUnit === "kilometer") {
        inputUnitLabel.textContent = "Feet";
        convertedValue = inputValue / 3280.84; // Convert feet to kilometer
    } else if (inputUnit === "feet" && outputUnit === "mile") {
        inputUnitLabel.textContent = "Feet";
        convertedValue = inputValue / 5280; // Convert feet to mile
    } else if (inputUnit === "kilometer" && outputUnit === "meter") {
        inputUnitLabel.textContent = "Kilometer";
        convertedValue = inputValue * 1000; // Convert kilometer to meter
    } else if (inputUnit === "kilometer" && outputUnit === "feet") {
        inputUnitLabel.textContent = "Kilometer";
        convertedValue = inputValue * 3280.84; // Convert kilometer to feet
    } else if (inputUnit === "kilometer" && outputUnit === "mile") {
        inputUnitLabel.textContent = "Kilometer";
        convertedValue = inputValue / 1.60934; // Convert kilometer to mile
    } else if (inputUnit === "mile" && outputUnit === "meter") {
        inputUnitLabel.textContent = "Mile";
        convertedValue = inputValue * 1609.34; // Convert mile to meter
    } else if (inputUnit === "mile" && outputUnit === "feet") {
        inputUnitLabel.textContent = "Mile";
        convertedValue = inputValue * 5280; // Convert mile to feet
    } else if (inputUnit === "mile" && outputUnit === "kilometer") {
        inputUnitLabel.textContent = "Mile";
        convertedValue = inputValue * 1.60934; // Convert mile to kilometer
    } else {
        inputUnitLabel.textContent = "Invalid unit";
        convertedValue = "Invalid input unit";
    }

    convertedValueField.textContent = convertedValue.toFixed(2);
}
