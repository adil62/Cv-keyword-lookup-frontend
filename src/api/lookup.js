/* eslint-disable import/prefer-default-export */
const submit = formData =>
  fetch('http://127.0.0.1:8000/lookup', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });

export default {submit};
