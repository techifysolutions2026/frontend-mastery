function countUp() {
    // Get all elements that need to count up
    const counters = document.querySelectorAll(".stat-num");

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target"); // The final number
        let current = 0; // Start from 0

        // Run this every 20ms until we reach the target
        const timer = setInterval(() => {
            current += Math.ceil(target / 100); // Increase by 1% of target each step

            if (current >= target) {
                counter.textContent = target; // Set exact number at the end
                clearInterval(timer);          // Stop the timer
            } else {
                counter.textContent = current; // Show current number
            }
        }, 20);
    });
}

// Watch for when the stats section becomes visible on screen
const statsSection = document.querySelector(".stats");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {  // If section is visible...
            countUp();               // ...start counting
            observer.disconnect();   // ...and stop watching
        }
    });
});
observer.observe(statsSection);