// Wait for the DOM to be fully loaded

document.getElementById("profileDisplay").style.display = 'none';

document.addEventListener('DOMContentLoaded', function () {
    // Toggle dark mode
    document.getElementById('toggleDarkMode').addEventListener('click', function () {
        document.body.classList.toggle('light-mode');
        document.querySelector('.container').classList.toggle('light-mode');
        const heading = document.querySelector('h2');
        heading.classList.toggle('light-mode');

        const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="file"], textarea');
        inputs.forEach(input => input.classList.toggle('light-mode'));

        const submitButton = document.querySelector('input[type="submit"]');
        submitButton.classList.toggle('light-mode');
    });

    // Form submission handling
    document.getElementById('myForm').addEventListener('submit', function (event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const mail = document.getElementById('mail').value;
        const department = document.getElementById('department').value;
        const projects = document.getElementById('projects').value;
        const description = document.getElementById('description').value; // No character limit
        const profileImage = document.getElementById('profileImage').files[0];
        const profileDisplay = document.getElementById('profileDisplay');
        profileDisplay.style.opacity = '0';
        
        setTimeout(() => {
            document.getElementById("profileDisplay").style.display = 'block';
            profileDisplay.style.display = 'flex';
            profileDisplay.style.opacity = '1';
            document.getElementById('form-container').style.display = 'none';
            document.getElementById('displayUsername').textContent = username || 'N/A';
            document.getElementById('displayMail').textContent = mail || 'N/A';
            document.getElementById('displayDepartment').textContent = department || 'N/A';
            document.getElementById('displayProjects').textContent = projects || 'N/A';
            document.getElementById('displayDescription').textContent = description || 'N/A';

            if (profileImage) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    document.getElementById('profilePic').src = e.target.result;
                }
                reader.readAsDataURL(profileImage);
            } 
        }, 500);
    });
});
