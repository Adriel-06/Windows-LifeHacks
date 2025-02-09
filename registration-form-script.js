document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const nic = document.getElementById('nic').value.trim();
    const firstName = document.getElementById('firstName').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    const errors = [];
  
    // NIC Validation
    if (nic.length < 10 || nic.length > 12) errors.push('NIC must be between 10 and 12 characters.');
    if (!/^\d{9}[Vv]?$|^\d{12}$/.test(nic)) errors.push('NIC must be 9 digits followed by "V" or 12 digits.');
  
    // Name Validation
    if (!/^[a-zA-Z]+$/.test(firstName)) errors.push('First Name must contain only characters.');
    if (!/^[a-zA-Z]+$/.test(surname)) errors.push('Surname must contain only characters.');
  
    // Phone Validation
    if (!/^\d{7}$/.test(phone)) errors.push('Phone number must contain exactly 7 digits.');
    if (!/^\d{7,10}$/.test(phone)) errors.push('Phone number must be between 7 and 10 digits.');

    // Email Validation
    if (!/^\w+@\w+\.\w{2,}$/.test(email)) errors.push('Email must be in a valid format (username@domain.com).');
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    errors.push('Email must be in a valid format (e.g., user@example.com).');
    }

    // Username Validation
    if (username.length <= 8 || !username.includes(nic.substring(0, 8))) {
      errors.push('Username must be more than 8 characters and include the first 8 characters of the NIC.');
    }
    if (username.length < 9 || (nic.length >= 8 && !username.includes(nic.substring(0, 8)))) {
      errors.push('Username must be more than 8 characters and include the first 8 characters of the NIC.');
    }
  
    // Password Match Validation
    if (password !== confirmPassword) errors.push('Passwords do not match.');
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
    errors.push('Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.');
}
  
    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }
  
    // **Format the user data**
    const userData = `NIC: ${nic}\nFirst Name: ${firstName}\nSurname: ${surname}\nPhone: ${phone}\nEmail: ${email}\nUsername: ${username}\nPassword: ${password}\n\n`;

    // **1️ Save Individual User Data (Force Download NIC.txt)**
    downloadFile(`${nic}.txt`, userData);

    // **2️ Append to the Master File (Stored in LocalStorage)**
    let allUsers = localStorage.getItem('all_users') || '';
    allUsers += userData;
    localStorage.setItem('all_users', allUsers);

    // **3️ Download the Updated Master File**
    downloadFile('all_users.txt', allUsers)

    alert('Form successfully validated!');
    window.location.href = 'nextpage.html';
  });

  // **Function to Create and Download a Text File**
function downloadFile(filename, content) {
  const blob = new Blob([content], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Get the video element
const video = document.getElementById('policy-video');

// Play/Pause functionality
video.addEventListener('play', () => {
    console.log('Video is playing');
});

video.addEventListener('pause', () => {
    console.log('Video is paused');
});

// Mute/Unmute functionality
const muteButton = document.createElement('button');
muteButton.innerText = 'Mute';
document.body.appendChild(muteButton);

muteButton.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        muteButton.innerText = 'Mute';
    } else {
        video.muted = true;
        muteButton.innerText = 'Unmute';
    }
});