document.addEventListener('DOMContentLoaded', function() {
    // Function to handle dropdowns based on screen width
    function handleDropdowns() {
        // Select all <li> elements with class 'dropdown'
        var dropdowns = document.querySelectorAll('li.dropdown');

        // Determine the screen width
        var isWideScreen = window.innerWidth >= 1200;

        // Function to handle mouse over
        function handleMouseOver() {
            this.classList.add('open');
            var toggleLink = this.querySelector('a.dropdown-toggle');
            if (toggleLink) {
                toggleLink.setAttribute('aria-expanded', 'true');
            }
        }

        // Function to handle mouse out
        function handleMouseOut() {
            this.classList.remove('open');
            var toggleLink = this.querySelector('a.dropdown-toggle');
            if (toggleLink) {
                toggleLink.setAttribute('aria-expanded', 'false');
            }
        }

        // Iterate over each dropdown
        dropdowns.forEach(function(dropdown) {
            if (isWideScreen) {
                // Add event listeners if wide screen
                dropdown.addEventListener('mouseover', handleMouseOver);
                dropdown.addEventListener('mouseout', handleMouseOut);
            } else {
                // Remove event listeners if narrow screen
                dropdown.removeEventListener('mouseover', handleMouseOver);
                dropdown.removeEventListener('mouseout', handleMouseOut);
                dropdown.classList.remove('open');
                var toggleLink = dropdown.querySelector('a.dropdown-toggle');
                if (toggleLink) {
                    toggleLink.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }

    // Initial check on page load
    handleDropdowns();

    // Re-check on window resize
    window.addEventListener('resize', handleDropdowns);
});