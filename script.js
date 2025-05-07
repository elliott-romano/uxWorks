console.log('Script loaded');

function toggleContent() {
    console.log('Button clicked');
    const content = document.querySelector('.hidden-content');
    console.log('Content element:', content);
    
    content.classList.toggle('show');
    this.textContent = content.classList.contains('show') ? 'Show Less' : 'Show More';
}

// Wait for DOM to be fully loaded
window.addEventListener('load', function() {
    console.log('Page loaded');
    const button = document.querySelector('.show-more-button');
    console.log('Button element:', button);
    
    if (button) {
        button.addEventListener('click', toggleContent);
        console.log('Event listener added');
    }
}); 