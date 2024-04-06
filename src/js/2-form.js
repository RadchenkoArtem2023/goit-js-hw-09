document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageTextarea = form.querySelector('textarea[name="message"]');

  function saveFormState() {
    const formData = {
      email: emailInput.value.trim(),
      message: messageTextarea.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }

  function loadFormState() {
    const formDataJSON = localStorage.getItem('feedback-form-state');
    if (formDataJSON) {
      const formData = JSON.parse(formDataJSON);
      emailInput.value = formData.email;
      messageTextarea.value = formData.message;
    }
  }

  loadFormState();

  form.addEventListener('input', () => {
    saveFormState();
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = {
      email: emailInput.value.trim(),
      message: messageTextarea.value.trim(),
    };

    if (formData.email && formData.message) {
      console.log(formData);
      localStorage.removeItem('feedback-form-state');
      emailInput.value = '';
      messageTextarea.value = '';
    } else {
      console.log('Please fill in both email and message fields.');
    }
  });
});
