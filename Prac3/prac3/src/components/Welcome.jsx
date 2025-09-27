import React, { useState, useEffect } from 'react';

function Welcome() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(timer);
    }, []); // Empty dependency array means this effect runs only once on mount

    return (
        <div className="welcome-container">
            <h1>Welcome!</h1>
            <p>Current Date and Time:</p>
            <p>{currentTime.toLocaleString()}</p>
        </div>
    );
}

export default Welcome;