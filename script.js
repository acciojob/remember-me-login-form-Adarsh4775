//your JS code here. If required.
     const loginForm = document.getElementById("loginForm");
        const rememberMeCheckbox = document.getElementById("rememberMe");
        const existingUserButton = document.getElementById("existing");

        // Check if there are saved details in LocalStorage
        const savedUsername = localStorage.getItem("username");

        if (savedUsername) {
            existingUserButton.style.display = "block";
        }

        // Event listener for the submit button
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Check if the "Remember me" checkbox is checked
            if (rememberMeCheckbox.checked) {
                localStorage.setItem("username", username);
            } else {
                localStorage.removeItem("username");
            }

            alert("Logged in as " + username);
        });

        // Event listener for the "existing" button
        existingUserButton.addEventListener("click", function () {
            alert("Logged in as " + savedUsername);
        });