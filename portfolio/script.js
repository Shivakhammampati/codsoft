
 const scriptURL = 'https://script.google.com/macros/s/AKfycbyrEkYca5Rcr9jPs9gf37CBagCJam3E9zwTPLyZja9AmBQkir5_e68Q3L8Qi-c-Ir6u/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })