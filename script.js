'use strict';

const modal = document.querySelector('.modal');
const contactBtn = document.getElementById('contact-btn');
const contactBtn2 = document.getElementById('contact-btn-2')
const closeBtn = document.querySelector('.close');

// Open modal when button is clicked
contactBtn.onclick = function() {
  modal.style.display = 'block';
}

contactBtn2.onclick = function() {
    modal.style.display = 'block';
}

// Close modal when 'X' is clicked
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// Close modal when pressing ESC key
document.onkeydown = function(event) {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
  }
}