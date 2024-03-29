const formadepago = document.getElementById('formadepago');
const placeholder = document.getElementById('placeholder');

formadepago.addEventListener('change', (event) => {
    placeholder.innerHTML = null;
    
    switch (formadepago.value) {
        case 'tarjetadedebito':
            var lbl = document.createElement("label");
            lbl.id = "lblTarjetaDebito";
            lbl.setAttribute('for', 'inputTarjeta');
            lbl.innerText = "Ingrese los 16 dígitos de su tarjeta:"

            placeholder.appendChild(lbl);

            var input = document.createElement("input");
            input.id = "inputTarjeta";
            input.setAttribute('type', 'text');
            input.className += " form-control";
            input.setAttribute('value', '');
            input.setAttribute('maxlength', 16);

            placeholder.appendChild(input);
            break;
        case 'tarjetadecredito':
            var lbl = document.createElement("label");
            lbl.id = "labelTarjetaCredito";
            lbl.setAttribute('for', 'inputTarjeta');
            lbl.innerText = "Ingrese los 16 dígitos de su tarjeta:"

            placeholder.appendChild(lbl);

            var input = document.createElement("input");
            input.id = "inputTarjeta";
            input.setAttribute('type', 'text');
            input.className += " form-control";
            input.setAttribute('value', '');
            input.setAttribute('maxlength', 16);

            placeholder.appendChild(input);
            break;
        case 'transferencia':
            var lbl = document.createElement("label");
            lbl.id = "lblTransferencia";
            lbl.setAttribute('for', 'inputTransferencia');
            lbl.innerText = "Copie nuestro CBU para realizar la transferencia:"

            placeholder.appendChild(lbl);

            var input = document.createElement("input");
            input.id = "inputTransferencia";
            input.setAttribute('type', 'text');
            input.className += " form-control";
            input.setAttribute('value', '2850590940090418135201');
            input.setAttribute('maxlength', 16);
            input.setAttribute('readonly', 'true');

            placeholder.appendChild(input);
            break;
        case 'debitoautomatico':
            var lbl = document.createElement("label");
            lbl.id = "lblCbu";
            lbl.setAttribute('for', 'inputCbu');
            lbl.innerText = "Ingrese su CBU:"

            placeholder.appendChild(lbl);

            var input = document.createElement("input");
            input.id = "inputCbu";
            input.setAttribute('type', 'text');
            input.className += " form-control";
            input.setAttribute('value', '');
            input.setAttribute('maxlength', 22);

            placeholder.appendChild(input);

            break;
    }
});

document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        confirmar();
    }
});

function confirmar() {
    const inputNombre = document.getElementById('firstname');
    const inputApellido = document.getElementById('lastname');
    const selectFormaDePago = document.getElementById('formadepago');
    const inputDatosDePago = document.getElementById('inputTarjeta');
    const cotizacion = {
        nombre: inputNombre.value, 
        apellido: inputApellido.value,
        formadepago: selectFormaDePago.value,
        datosdepago: inputDatosDePago.value,
    }
    const cotizacionstring = JSON.stringify(cotizacion);
    localStorage.setItem('cotizacion', cotizacionstring);
    alert("Contratado. Muchas gracias por su compra.");
}

