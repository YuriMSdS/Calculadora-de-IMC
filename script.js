function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);

    if (isNaN(altura) || isNaN(peso)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores numéricos para altura e peso.";
    } else if (altura <= 0 || peso <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores positivos para altura e peso.";
    } else {
        var imc = peso / (altura * altura);
        var status;

        if (imc < 18.5) {
            status = "Abaixo do peso";
        } else if (imc < 25) {
            status = "Peso normal";
        } else if (imc < 30) {
            status = "Sobrepeso";
        } else if (imc < 35) {
            status = "Obesidade Grau 1";
        } else if (imc < 40) {
            status = "Obesidade Grau 2";
        } else {
            status = "Obesidade Grau 3";
        }

        document.getElementById("resultado").innerHTML = `Seu IMC é ${imc.toFixed(2)} e seu status de peso é "${status}"`;
    }
}