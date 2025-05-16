

document.querySelector('.form').addEventListener('submit', (event) => {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const nameLabel = document.querySelector('#for-name');
    const emailLabel = document.querySelector('#for-email');

    event.preventDefault();

  const isNameInvalid = /\d/.test(nameInput.value) || /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(nameInput.value);
  const isEmailInvalid = !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value);

  nameInput.readOnly = !0;
  emailInput.readOnly = !0;

  if (isNameInvalid) {
    nameLabel.textContent = 'Нажаль, числа та спец. символи не можна вводити';

    setTimeout(() => {
      nameLabel.textContent = '';
      nameInput.readOnly = !1;
      nameInput.value = '';
    }, 2500);

  }

  else if (nameInput.value === '') {
    nameLabel.textContent = 'Заповніть будь ласка цю форму';

    setTimeout(() => {
      nameLabel.textContent = '';
      nameInput.readOnly = !1;
      nameInput.value = ''
    }, 2500);

  } 
   
   else {
    nameLabel.textContent = '';
    nameInput.readOnly = !1;
  }


 if (emailInput.value === '') {
    emailLabel.textContent = 'Заповніть будь ласка цю форму';

    setTimeout(() => {
      emailLabel.textContent = '';  
      emailInput.value = '';
      emailInput.readOnly = !1;
    }, 2500);
  } 
  
else if (isEmailInvalid) {
    emailLabel.textContent = `Можливо, ви не ввели ім'я користувача/@/домен`;
    
    
    setTimeout(() => {
      emailInput.readOnly = !1;
      emailInput.value = '';
      emailLabel.textContent = '';
    }, 2500);
  } 

 
  else {
    emailInput.readOnly = !1;
    emailLabel.textContent = '';
  }

  if (!isNameInvalid && !isEmailInvalid && nameInput.value !== '') {
    alert(`Дякуємо за відправку форми, ${nameInput.value}`);
    nameInput.readOnly = !1;
    emailInput.readOnly = !1;
    nameInput.value = '';
    emailInput.value = '';
  }
});