
        document.querySelectorAll('.dropdown').forEach(function(dropdown) {
            var menu = dropdown.querySelector('.dropdown-menu');
            dropdown.addEventListener('mouseleave', function() {
                menu.classList.remove('active');
            });
            dropdown.addEventListener('mouseenter', function() {
                menu.classList.add('active');
            });
            dropdown.querySelector('.nav-link').addEventListener('focus', function() {
                menu.classList.add('active');
                dropdown.querySelector('.nav-link').setAttribute('aria-expanded', 'true');
            });
            dropdown.querySelector('.nav-link').addEventListener('blur', function() {
                menu.classList.remove('active');
                dropdown.querySelector('.nav-link').setAttribute('aria-expanded', 'false');
            });
            dropdown.querySelector('.nav-link').addEventListener('click', function(e) {
                e.preventDefault();
                menu.classList.toggle('active');
                dropdown.querySelector('.nav-link').setAttribute('aria-expanded', menu.classList.contains('active'));
            });
        });
        document.addEventListener('click', function(e) {
            document.querySelectorAll('.dropdown-menu.active').forEach(function(menu) {
                if (!menu.contains(e.target) && !menu.parentElement.contains(e.target)) {
                    menu.classList.remove('active');
                    menu.parentElement.querySelector('.nav-link').setAttribute('aria-expanded', 'false');
                }
            });
        });

        // User dropdown menu
        const userTrigger = document.querySelector('.user-menu-trigger');
        const userDropdown = document.querySelector('.user-dropdown');
        userTrigger.addEventListener('click', function(e) {
            e.stopPropagation();
            userDropdown.classList.toggle('active');
            userTrigger.setAttribute('aria-expanded', userDropdown.classList.contains('active'));
        });
        userTrigger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                userDropdown.classList.toggle('active');
                userTrigger.setAttribute('aria-expanded', userDropdown.classList.contains('active'));
            }
        });
        document.addEventListener('click', function(e) {
            if (!userDropdown.contains(e.target) && !userTrigger.contains(e.target)) {
                userDropdown.classList.remove('active');
                userTrigger.setAttribute('aria-expanded', 'false');
            }
        });

        // Dark mode toggle
        const darkToggle = document.getElementById('darkModeToggle');
        darkToggle.addEventListener('click', function() {
            darkToggle.classList.toggle('on');
            darkToggle.setAttribute('aria-checked', darkToggle.classList.contains('on'));
            if (darkToggle.classList.contains('on')) {
                document.body.style.background = '#181818';
                document.body.style.color = '#eee';
            } else {
                document.body.style.background = '#fff';
                document.body.style.color = '#222';
            }
        });
        darkToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                darkToggle.click();
            }
        });