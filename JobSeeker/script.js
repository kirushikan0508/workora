// Authentication Form Toggle
document.addEventListener('DOMContentLoaded', function() {
    const authTabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const toggleLinks = document.querySelectorAll('.toggle-form');

    // Tab switching functionality
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabType = tab.dataset.tab;
            
            // Update active tab
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Show corresponding form
            if (tabType === 'login') {
                loginForm.style.display = 'block';
                registerForm.style.display = 'none';
            } else {
                loginForm.style.display = 'none';
                registerForm.style.display = 'block';
            }
        });
    });

    // Toggle form links
    toggleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetForm = link.textContent.toLowerCase();
            
            // Find and click the corresponding tab
            const targetTab = Array.from(authTabs).find(tab => 
                tab.dataset.tab === targetForm
            );
            if (targetTab) targetTab.click();
        });
    });

    // Form submission handlers
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const userType = document.getElementById('login-user-type').value;
            // Here you would typically make an API call to your backend
            console.log('Login attempt:', { email, password, userType });
            // For demo purposes, redirect based on user type
            if (userType === 'jobseeker') {
                window.location.href = 'jobseeker.html';
            } else {
                window.location.href = 'index.html';
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = {
                name: document.getElementById('register-name').value,
                email: document.getElementById('register-email').value,
                password: document.getElementById('register-password').value,
                age: document.getElementById('register-age').value,
                university: document.getElementById('register-university').value,
                location: document.getElementById('register-location').value,
                phone: document.getElementById('register-phone').value,
                nic: document.getElementById('register-nic').value,
                userType: document.getElementById('register-user-type').value
            };
            // Here you would typically make an API call to your backend
            console.log('Registration attempt:', formData);
            // For demo purposes, redirect based on user type
            if (formData.userType === 'jobseeker') {
                window.location.href = 'jobseeker.html';
            } else {
                window.location.href = 'index.html';
            }
        });
    }
});

// Post Interaction Handlers
document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.like-btn');
    const applyButtons = document.querySelectorAll('.apply-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.color = 'var(--accent-color)';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.color = 'var(--text-color)';
            }
        });
    });

    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Here you would typically handle the job application process
            alert('Application submitted successfully!');
        });
    });
});

// Job Filter Functionality
function filterJobs() {
    const location = document.getElementById('location-filter')?.value;
    const jobType = document.getElementById('job-type-filter')?.value;
    const category = document.getElementById('category-filter')?.value;

    // Here you would typically make an API call to filter jobs
    console.log('Filtering jobs:', { location, jobType, category });
}

// Profile Image Upload Preview
function previewProfileImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.querySelector('.profile-image-preview');
            if (preview) {
                preview.src = e.target.result;
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Form Validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;

    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// Add error styling to CSS
const style = document.createElement('style');
style.textContent = `
    .error {
        border-color: var(--accent-color) !important;
    }
    .error-message {
        color: var(--accent-color);
        font-size: 0.8rem;
        margin-top: 0.3rem;
    }
`;
document.head.appendChild(style);

// Profile Page: Project & Certificate Management
if (window.location.pathname.includes('profile.html')) {
    // Remove all modal and form logic for Add Project and Add Certificate from the profile page section.
} 