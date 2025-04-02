function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(async (el) => {
        const file = el.getAttribute('data-include');
        try {
            const response = await fetch(file);
            if (response.ok) {
                el.innerHTML = await response.text();
            } else {
                console.error(`Failed to load ${file}: ${response.status}`);
            }
        } catch (error) {
            console.error(`Error fetching ${file}:`, error);
        }
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);