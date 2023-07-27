function calcular() {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    const operacao = document.getElementById("operacao").value;
    let resultado;
  
    if (isNaN(valor1) || isNaN(valor2)) {
      document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
      return;
    }
  
    switch (operacao) {
      case "+":
        resultado = valor1 + valor2;
        break;
      case "-":
        resultado = valor1 - valor2;
        break;
      case "*":
        resultado = valor1 * valor2;
        break;
      case "/":
        if (valor2 === 0) {
          resultado = "Não é possível dividir por zero.";
        } else {
          resultado = valor1 / valor2;
        }
        break;
      default:
        resultado = "Operação inválida.";
    }
  
    document.getElementById("resultado").value = resultado;
  }
  
  function limparCampos() {
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
    document.getElementById("operacao").selectedIndex = 0;
    document.getElementById("resultado").value = "";
  }