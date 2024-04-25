function calcularPropina() {
    const montoCuenta = document.getElementById('billAmount').value;
    const porcentajePropina = document.getElementById('tipPercentage').value;
    const propinaTotal = (montoCuenta * (porcentajePropina / 100)).toFixed(2);
    document.getElementById('propinaTotal').innerText = `Propina Total: $${propinaTotal}`;
  }
  const inputNumber = document.querySelector('input[type="number"]');

  inputNumber.addEventListener('focus', () => {
    inputNumber.style.border = '2px solid #333'; /* Change border on focus */
    inputNumber.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)'; /* Add box shadow on focus */
  });
  
  inputNumber.addEventListener('blur', () => {
    inputNumber.style.border = '1px solid #ccc'; /* Reset border on blur */
    inputNumber.style.boxShadow = 'none'; /* Remove box shadow on blur */
  });
  