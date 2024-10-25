const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
container.classList.remove("right-panel-active");
});

function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirm]');

    if (password.value.length < 6) {
      password.setCustomValidity('Password must be at least 6 characters long.');
    } else {
      password.setCustomValidity('');
    }

    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  }

  function onInputChange(){
    const name = document.querySelector('input[name=name]');
    const email = document.querySelector('input[name=email]');
    const invalidStartPattern = /^[\s!@#$%^&*~`(),.?":{}|<>]/;

    if (invalidStartPattern.test(name.value)) {
      name.setCustomValidity('Name cannot start with whitespace or special character.');
    } else {
      name.setCustomValidity('');
    }

    if (invalidStartPattern.test(email.value)) {
      email.setCustomValidity('Email cannot start with whitespace or special character.');
    } else {
      email.setCustomValidity('');
    }
  }
  document.querySelector('input[name=name]').addEventListener('input',  onInputChange);
  document.querySelector('input[name=email]').addEventListener('input',  onInputChange);

  document.getElementById('createAccount').addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;
    const password = document.querySelector('input[name=password]').value;

    if (!localStorage.getItem(email)) {
      localStorage.setItem(email, password);
      alert('Account created successfully! You can now log in.');
      document.getElementById('createAccount').reset();
    } else {
      alert('Email already exists. Please log in.');
    }
  });

  document.getElementById('loginForm').addEventListener('submit', function (event){
    event.preventDefault();

    const email = document.querySelector('input[name="loginEmail"]').value;
    const password = document.querySelector('input[name="loginPassword"]').value;

    if (localStorage.getItem(email) === password) {
      alert('Login successfully!');
      window.location.href = '/index.html';
    } else {
      alert('Invalid email or password.');
    }
  });