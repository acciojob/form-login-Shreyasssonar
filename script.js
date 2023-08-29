function getFormvalue() {

  event.preventDefault(); // Prevent form submission from reloading the page

  const firstName = document.getElementsByName('fname')[0].value;
  const lastName = document.getElementsByName('lname')[0].value;

  alert(` ${firstName} ${lastName}`);
}

