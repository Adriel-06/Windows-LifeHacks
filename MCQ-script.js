$(document).ready(function () {
    const allQuestions = [
    {
        text: "What is the shortcut key to open Task Manager in Windows?",
        options: ["Ctrl + Alt + Del", "Ctrl + Shift + Esc", "Alt + Tab", "Ctrl + Shift + Del"],
        correct: "Ctrl + Shift + Esc"
    },
    {
        text: "What is the default browser in Windows 10?",
        options: ["Google Chrome", "Mozilla Firefox", "Microsoft Edge", "Internet Explorer"],
        correct: "Microsoft Edge"
    },
    {
        text: "Which file system does Windows primarily use?",
        options: ["NTFS", "FAT32", "exFAT", "APFS"],
        correct: "NTFS"
    },
    {
        text: "What is the name of the digital assistant in Windows 10?",
        options: ["Siri", "Alexa", "Cortana", "Google Assistant"],
        correct: "Cortana"
    },
    {
        text: "What is the maximum character limit for a file name in Windows?",
        options: ["255", "128", "512", "Unlimited"],
        correct: "255"
    },
    {
        text: "What does BitLocker do in Windows?",
        options: ["Boosts performance", "Encrypts drives", "Deletes files permanently", "Restores system settings"],
        correct: "Encrypts drives"
    },
    {
        text: "Which Windows feature allows you to create multiple virtual desktops?",
        options: ["Task Manager", "Task View", "Control Panel", "Windows Defender"],
        correct: "Task View"
    },
    {
        text: "What is the default tool for creating system backups in Windows?",
        options: ["File History", "System Restore", "Task Scheduler", "Disk Cleanup"],
        correct: "File History"
    },
    {
        text: "Which of these is NOT a default Windows app?",
        options: ["Paint", "Calculator", "GarageBand", "Notepad"],
        correct: "GarageBand"
    },
    {
        text: "What does the 'snipping tool' do?",
        options: ["Plays music", "Captures screenshots", "Manages storage", "Edits files"],
        correct: "Captures screenshots"
    },
    {
        text: "What does the Windows + D shortcut do?",
        options: ["Minimizes all windows", "Opens Device Manager", "Opens the Desktop", "Duplicates a file"],
        correct: "Minimizes all windows"
    },
    {
        text: "Which shortcut locks your Windows PC?",
        options: ["Ctrl + L", "Alt + L", "Windows + L", "Shift + L"],
        correct: "Windows + L"
    },
    {
        text: "What is the shortcut to open File Explorer?",
        options: ["Ctrl + E", "Windows + E", "Alt + E", "Shift + E"],
        correct: "Windows + E"
    },
    {
        text: "To switch between open apps in Windows which shortcut is used?",
        options: ["Ctrl + Tab", "Alt + Tab", "Shift + Tab", "Windows + Tab"],
        correct: "Alt + Tab"
    },
    {
        text: "Which shortcut takes a screenshot and copies it to the clipboard?",
        options: ["Print Screen", "Windows + Print Screen", "Alt + Print Screen", "Ctrl + Print Screen"],
        correct: "Print Screen"
    },
    {
        text: "What does Windows Defender protect your PC against?",
        options: ["Performance issues", "Viruses and malware", "Network connectivity problems", "Outdated drivers"],
        correct: "Viruses and malware"
    },
    {
        text: "What is a firewall used for?",
        options: ["Cleaning your PC", "Managing system resources", "Blocking unauthorized access to your network", "Backing up data"],
        correct: "Blocking unauthorized access to your network"
    },
    {
        text: "How can you check if a website is secure in a browser?",
        options: ["Look for a padlock symbol in the address bar", "Check if the URL has 'http'", "Ensure the website has ads", "Ask your antivirus program"],
        correct: "Look for a padlock symbol in the address bar"
    },
    {
        text: "What is the purpose of two-factor authentication?",
        options: ["To speed up login", "To reduce the number of passwords", "To add an extra layer of security", "To track your activity"],
        correct: "To add an extra layer of security"
    },
    {
        text: "Which tool lets you view and manage permissions for apps in Windows?",
        options: ["Task Manager", "Control Panel", "Privacy Settings", "Device Manager"],
        correct: "Privacy Settings"
    },
    {
        text: "Which tool is used to manage startup programs in Windows?",
        options: ["Disk Cleanup", "Task Manager", "Control Panel", "Device Manager"],
        correct: "Task Manager"
    },
    {
        text: "What is 'Disk Cleanup' used for?",
        options: ["Formatting your disk", "Freeing up storage space", "Backing up files", "Encrypting files"],
        correct: "Freeing up storage space"
    },
    {
        text: "Which shortcut opens the Run dialog box?",
        options: ["Windows + R", "Windows + M", "Alt + R", "Ctrl + R"],
        correct: "Windows + R"
    },
    {
        text: "How can you optimize your PC for gaming?",
        options: ["Update drivers", "Lower display resolution", "Use 'Game Mode'", "All of the above"],
        correct: "All of the above"
    },
    {
        text: "Which tool shows the system's hardware and performance?",
        options: ["Task Manager", "Resource Monitor", "System Information", "All of the above"],
        correct: "All of the above"
    },
    {
        text: "What does 'Safe Mode' do?",
        options: ["Prevents file deletion", "Starts Windows with minimal drivers and services", "Speeds up startup", "Encrypts your files"],
        correct: "Starts Windows with minimal drivers and services"
    },
    {
        text: "How can you access Windows Recovery options?",
        options: ["Press F8 during startup", "Use Settings > Update & Security > Recovery", "Boot from installation media", "All of the above"],
        correct: "All of the above"
    },
    {
        text: "What does 'blue screen of death' (BSOD) usually indicate?",
        options: ["A virus infection", "A hardware or software issue", "An outdated driver", "A low battery"],
        correct: "A hardware or software issue"
    },
    {
        text: "How can you fix a slow Windows PC?",
        options: ["Uninstall unnecessary programs", "Use Disk Cleanup", "Disable startup apps", "All of the above"],
        correct: "All of the above"
    },
    {
        text: "What does 'System Restore' do?",
        options: ["Backs up files", "Reinstalls Windows", "Restores your PC to a previous state", "Deletes all data"],
        correct: "Restores your PC to a previous state"
    },
    {
        text: "What year was Windows 10 released?",
        options: ["2013", "2015", "2017", "2018"],
        correct: "2015"
    },
    {
        text: "What does 'Ctrl + Z' do?",
        options: ["Saves changes", "Undoes the last action", "Copies text", "Closes a window"],
        correct: "Undoes the last action"
    },
    {
        text: "Which app store comes with Windows?",
        options: ["Microsoft Store", "Windows Market", "App Depot", "Play Store"],
        correct: "Microsoft Store"
    },
    {
        text: "What does 'Hibernate' mode do?",
        options: ["Shuts down the PC", "Puts the PC to sleep", "Saves the current state to the hard drive and shuts down", "Clears the cache"],
        correct: "Saves the current state to the hard drive and shuts down"
    },
    {
        text: "Which tool in Windows allows you to uninstall apps?",
        options: ["Task Manager", "Control Panel", "File Explorer", "Device Manager"],
        correct: "Control Panel"
    },
    {
        text: "Which Windows feature allows you to undo recent updates or changes to the system?",
        options: ["File History", "System Restore", "Disk Cleanup", "Troubleshoot Mode"],
        correct: "System Restore"
    },
    {
        text: "Which tool in Windows can be used to manage hard drive partitions?",
        options: ["Disk Cleanup", "Disk Management", "Resource Monitor", "Task Scheduler"],
        correct: "Disk Management"
    },
    {
        text: "What does the 'Event Viewer' in Windows do?",
        options: ["Displays system performance data", "Tracks and logs system events and errors", "Manages apps and files", "Updates Windows software"],
        correct: "Tracks and logs system events and errors"
    },
    {
        text: "What does the 'Windows + X' shortcut do?",
        options: ["Opens the Quick Link menu", "Opens the Taskbar", "Launches File Explorer", "Minimizes all windows"],
        correct: "Opens the Quick Link menu"
    },
    {
        text: "Which command is used to check the IP configuration in Command Prompt?",
        options: ["ipconfig", "ping", "tracert", "netstat"],
        correct: "ipconfig"
    },
    {
        text: "What is the primary purpose of 'Device Manager' in Windows?",
        options: ["Update software", "Manage hardware devices", "View system logs", "Delete temporary files"],
        correct: "Manage hardware devices"
    },
    {
        text: "Which feature in Windows helps reduce eye strain?",
        options: ["Blue Light Filter", "Game Mode", "System Restore", "Cortana"],
        correct: "Blue Light Filter"
    },
    {
        text: "What is the maximum RAM supported by a 32-bit version of Windows?",
        options: ["2GB", "4GB", "8GB", "16GB"],
        correct: "4GB"
    },
    {
        text: "What does the Windows 'Snip & Sketch' app do?",
        options: ["Captures screenshots", "Plays video files", "Deletes temporary files", "Updates drivers"],
        correct: "Captures screenshots"
    },
    {
        text: "What does 'Windows + P' do?",
        options: ["Opens Display Settings", "Opens the Print menu", "Switches display modes", "Opens the Project menu"],
        correct: "Switches display modes"
    },
    {
        text: "Which file format is primarily used for Windows system backups?",
        options: [".iso", ".bak", ".zip", ".vhdx"],
        correct: ".vhdx"
    },
    {
        text: "Which command is used to check disk errors in Command Prompt?",
        options: ["chkdsk", "diskpart", "format", "sfc"],
        correct: "chkdsk"
    },
    {
        text: "What does the 'Windows Update' tool do?",
        options: ["Installs new software", "Updates drivers", "Keeps Windows OS up to date", "Cleans temporary files"],
        correct: "Keeps Windows OS up to date"
    },
    {
        text: "What does 'Task Scheduler' allow you to do?",
        options: ["Schedule backups", "Run tasks automatically", "Manage app permissions", "Update Windows"],
        correct: "Run tasks automatically"
    },
    {
        text: "Which Windows 10 feature allows syncing of files across devices?",
        options: ["OneDrive", "File Explorer", "System Restore", "Disk Cleanup"],
        correct: "OneDrive"
    },
    {
        text: "What is the default location of installed apps on Windows?",
        options: ["C:\\Program Files", "D:\\Apps", "C:\\Windows", "E:\\Installed Programs"],
        correct: "C:\\Program Files"
    },
    {
        text: "What does the 'Windows Security' app protect against?",
        options: ["Outdated software", "Malware and threats", "Disk fragmentation", "File corruption"],
        correct: "Malware and threats"
    },
    {
        text: "Which shortcut key opens the Settings app in Windows?",
        options: ["Windows + I", "Windows + S", "Ctrl + I", "Alt + I"],
        correct: "Windows + I"
    },
    {
        text: "What is the purpose of 'Remote Desktop' in Windows?",
        options: ["Access another PC remotely", "Share files between PCs", "Update Windows remotely", "Reinstall drivers"],
        correct: "Access another PC remotely"
    },
    {
        text: "What does the 'Windows + L' shortcut do?",
        options: ["Locks the PC", "Logs out of the account", "Opens the login screen", "All of the above"],
        correct: "Locks the PC"
    },
    {
        text: "What does 'sfc /scannow' do in Command Prompt?",
        options: ["Scans and repairs system files", "Deletes temporary files", "Checks for malware", "Formats a drive"],
        correct: "Scans and repairs system files"
    },
    {
        text: "What does 'System Information' in Windows provide?",
        options: ["Performance metrics", "Driver updates", "Detailed hardware and software details", "Disk usage information"],
        correct: "Detailed hardware and software details"
    }
];


let selectedQuestions = [];
let timer;
let timeLeft = 600; // 10 minutes in seconds
let timerRunning = false;

function startQuiz() {
    $("#start-quiz-btn").hide();
    $("#quiz-questions").show();
    $("#timer").show();

    selectedQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);

    $("#quiz-questions").html("");
    selectedQuestions.forEach((q, index) => {
        let questionHtml = `
            <div class="question">
                <p><strong>Q${index + 1}:</strong> ${q.text}</p>
                ${q.options.map(option => `
                    <label>
                        <input type="radio" name="q${index}" value="${option}">
                        ${option}
                    </label>
                `).join('')}
            </div>`;
        $("#quiz-questions").append(questionHtml);
    });

    // Add a Submit Button to the Quiz
    $("#quiz-questions").append('<button id="submit-button">Submit Quiz</button>');

    // Bind the submit button click event
    $("#submit-button").click(submitQuiz);

    startTimer();
}


function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timer = setInterval(() => {
            $("#timer").text(`Time Left: ${timeLeft}s`);
            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(timer);
                submitQuiz(); // Auto-submit when time runs out
            }
        }, 1000);
    }
}

function endQuiz() {
    $("#quiz-questions").hide();
    $("#quiz-results").show();

    let score = 0;
    selectedQuestions.forEach((q, index) => {
        let selectedAnswer = $(`input[name="q${index}"]:checked`).val();
        if (selectedAnswer === q.correct) {
            score++;
        }
    });

    $("#quiz-results").html(`
        <h3>Quiz Completed!</h3>
        <p>You scored ${score} out of 10.</p>
        <button id="restart-quiz">Try Again</button>
    `);

    $("#restart-quiz").click(function () {
        location.reload();
    });
}

function submitQuiz() {
    // Check if all questions have been answered
    let allAnswered = true;
    selectedQuestions.forEach((q, index) => {
        if (!$(`input[name="q${index}"]:checked`).val()) {
            allAnswered = false;
        }
    });

    if (!allAnswered) {
        alert("Please answer all questions before submitting!");
        return; // Prevent quiz submission
    }

    clearInterval(timer); // Stop the timer if the user submits early
    timerRunning = false;

    $("#quiz-questions").hide();
    $("#quiz-results").show();

    let score = 0;
    selectedQuestions.forEach((q, index) => {
        let selectedAnswer = $(`input[name="q${index}"]:checked`).val();
        if (selectedAnswer === q.correct) {
            score++;
        }
    });

    $("#quiz-results").html(`
        <h3>Quiz Completed!</h3>
        <p>You scored ${score} out of 10.</p>
        <button id="restart-quiz">Try Again</button>
    `);

    $("#restart-quiz").click(function () {
        location.reload();
    });
}


// Bind event listeners
$("#start-quiz-btn").click(startQuiz);
$("#submit-button").click(submitQuiz);
});