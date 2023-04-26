window.onload = function() {
  let emailState = false;
  let emailModal = document.getElementsByClassName('email-modal')[0];
  let closeButton = document.getElementsByClassName('email-modal__close-btn')[0];
  let emailInput = document.getElementsByClassName('email-modal__input')[0];
  let emailButton = document.getElementsByClassName('email-modal__button')[0];
  const errorMessage = document.querySelector('.email-modal__error-message');
  const formGroup = document.querySelector('.email-modal__form-group');

  function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  let showModal = () => {
    if(emailState == false) {
      emailModal.classList.add('email-modal--visible');
      emailState = true;
    }
  }

  let closeModal = () => {
    emailModal.classList.remove('email-modal--visible');
  }

  let addErrors = () => {
    errorMessage.classList.add('email-modal__error-message--show');
    formGroup.classList.add('email-modal__form-group--error');
  }

  let removeErrors = () => {
    errorMessage.classList.remove('email-modal__error-message--show');
    formGroup.classList.remove('email-modal__form-group--error');
  }

  emailInput.addEventListener('click', () => {
    removeErrors();
  })

  emailButton.addEventListener('click', () => {
    if (emailIsValid(emailInput.value)) {
      console.log(emailInput.value);
    } else {
      addErrors();
    }
  });

  closeButton.addEventListener('click', () => {
    closeModal();
  });

  document.body.addEventListener('mouseleave', () => {
    showModal();
  });
}