document.addEventListener('DOMContentLoaded', function() {
    // Example 1: Modify the h1 text when clicked
    const heading = document.querySelector('h1');
    heading.addEventListener('click', function() {
        this.textContent = 'Hello JavaScript!';
    });

    // Example 2: Handle form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        const nameInput = this.querySelector('input[name="name"]');
        alert('Form submitted with name: ' + nameInput.value);
    });

    // Example 3: Toggle checkbox message
    const checkbox = document.getElementById('agree');
    checkbox.addEventListener('change', function() {
        alert(this.checked ? 'Agreed!' : 'Disagreed!');
    });
});