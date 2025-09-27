// Object to store vote counts
const votes = {
    javascript: 0,
    python: 0,
    java: 0,
    cpp: 0
};

// Function to calculate the percentage for progress bars
function calculatePercentage() {
    const total = Object.values(votes).reduce((a, b) => a + b, 0);
    if (total === 0) return { javascript: 0, python: 0, java: 0, cpp: 0 };
    
    return {
        javascript: (votes.javascript / total) * 100,
        python: (votes.python / total) * 100,
        java: (votes.java / total) * 100,
        cpp: (votes.cpp / total) * 100
    };
}

// Function to update the UI with current vote counts and percentages
function updateVotes() {
    const percentages = calculatePercentage();
    
    // Update vote counts and progress bars for each language
    Object.keys(votes).forEach(lang => {
        // Update vote count
        document.getElementById(`${lang}-votes`).textContent = votes[lang];
        
        // Update progress bar
        document.getElementById(`${lang}-progress`).style.width = `${percentages[lang]}%`;
    });
}

// Function to handle voting
function vote(language) {
    votes[language]++;
    updateVotes();
}

// Simulate real-time votes from other users
function simulateVotes() {
    const languages = ['javascript', 'python', 'java', 'cpp'];
    
    setInterval(() => {
        // Randomly select a language to receive a vote
        const randomLang = languages[Math.floor(Math.random() * languages.length)];
        
        // 50% chance to add a vote
        if (Math.random() > 0.5) {
            votes[randomLang]++;
            updateVotes();
        }
    }, 2000); // Updates every 2 seconds
}

// Initialize the simulation when the page loads
window.onload = () => {
    updateVotes(); // Initialize the display
    simulateVotes(); // Start the simulation
};