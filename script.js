function getFormvalue() {
    //Write your code here
    const form = document.querySelector('#form1');

    // Get the values of the first and last name input fields
    const firstName = form.fname.value;
    const lastName = form.lname.value;

    // Display the first and last name using an alert
    alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
  
    // Prevent form submission
    return false;
}