document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const menu = document.querySelector('.menu');
    const body = document.body;

    // Check if dark mode was previously enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        
        // Save dark mode preference to localStorage
        if (body.classList.contains('dark')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }

        // Toggle active state for dark mode button
        darkModeToggle.classList.toggle('active');
    });

    // Toggle menu visibility
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
        menuToggle.classList.toggle('active');
    });

    // Close the menu if clicked outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
            menu.classList.remove('show');
            menuToggle.classList.remove('active');
        }
    });

    // Close the menu if a menu item is clicked
    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.remove('show');
            menuToggle.classList.remove('active');
        });
    });
});
