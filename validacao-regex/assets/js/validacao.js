document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const inputName = document.getElementById('inputName');
    const inputEmail = document.getElementById('inputEmail');
    const inputCpf = document.getElementById('inputCpf');
    const button = document.getElementById('button');

    const nameRegex = /^[A-Za-zÀ-ú]{2,}(?:\s[A-Za-zÀ-ú]{2,})+$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; 
   
    inputName.addEventListener('input', validateForm);
    inputEmail.addEventListener('input', validateForm);
    inputCpf.addEventListener('input', validateForm);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            const data = {
                name: inputName.value.trim(),
                email: inputEmail.value.trim(),
                cpf: inputCpf.value.trim()
            };

            localStorage.setItem('formData', JSON.stringify(data));
            
           
            alert('Cadastro realizado com sucesso!');
            form.reset();
            resetValidationStyles();
        }
    });

  
    function validateForm() {
        const isNameValid = validateField(inputName, nameRegex, 'Nome completo (ex: João Silva)');
        const isEmailValid = validateField(inputEmail, emailRegex, 'E-mail válido (ex: email@exemplo.com)');
        const isCpfValid = validateField(inputCpf, cpfRegex, 'CPF no formato 000.000.000-00');

        
        button.disabled = !(isNameValid && isEmailValid && isCpfValid);
        
        return isNameValid && isEmailValid && isCpfValid;
    }

  
    function validateField(inputElement, regex, errorMessage) {
        const value = inputElement.value.trim();
        const isValid = regex.test(value);
        
        
        inputElement.classList.remove('is-valid', 'is-invalid');
        clearErrorMessage(inputElement);
        
        if (value === '') {
            inputElement.style.boxShadow = 'inset 8px 8px 15px #d9d9d9, inset -8px -8px 15px #e7e7e7';
        } else if (isValid) {
            inputElement.classList.add('is-valid');
        } else {
            inputElement.classList.add('is-invalid');
            showErrorMessage(inputElement, errorMessage);
        }
        
        return isValid;
    }


    function showErrorMessage(inputElement, message) {
        clearErrorMessage(inputElement);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        inputElement.insertAdjacentElement('afterend', errorDiv);
    }

    function clearErrorMessage(inputElement) {
        const nextElement = inputElement.nextElementSibling;
        if (nextElement && nextElement.className === 'error-message') {
            nextElement.remove();
        }
    }

    
    function resetValidationStyles() {
        [inputName, inputEmail, inputCpf].forEach(input => {
            input.classList.remove('is-valid', 'is-invalid');
            input.style.boxShadow = 'inset 8px 8px 15px #d9d9d9, inset -8px -8px 15px #e7e7e7';
            clearErrorMessage(input);
        });
        button.disabled = false;
    }

   
    validateForm();
});