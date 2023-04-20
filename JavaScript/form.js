if (window.location.href.includes =( 'index.html')) {
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
  
    // var createUserElement = ({ user, email}) => {

    //   var userDiv = document.createElement("div");
    //   var usertName = document.createElement("h2");
    //   var userEmail = document.createElement("p");
  
    //   usertName.innerText = "user name: " + user;
    //   userEmail.innerText = "user email: " + email;
  
    //   userDiv.append(usertName, userEmail);
    //   userContainer.appendChild(userDiv);
  
    //   userContainer.style.display = users.length === 0 ? "none" : "flex";
    // };
  
    // userContainer.style.display = users.length === 0 ? "none" : "flex";
  
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