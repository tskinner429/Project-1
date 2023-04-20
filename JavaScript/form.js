if (window.location.href.includes =( 'super-team-project')) {
    var userForm = document.getElementById("signup-form");
    var userContainer = document.querySelector(".user");
    var nameInput = document.getElementById('username');
    var emailInput = document.getElementById('email');

    var users = JSON.parse(localStorage.getItem("users")) || [];

    var addUser = (username, email) => {
      users.push({
        username,
        email,
      });

      localStorage.setItem("users", JSON.stringify(users));

      return { username, email};
    };

    // users.forEach(createUserElement)
    userForm.onsubmit = e => {
      e.preventDefault();

      var newUser = addUser(
        nameInput.value,
        emailInput.value,
      );

    //   createUserElement(newUser);
      nameInput.value = "";
      emailInput.value = "";
    };
  };