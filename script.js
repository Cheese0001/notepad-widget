// Function to save the note to local storage
function saveNote() {
  const note = document.getElementById('notepad').value;
  localStorage.setItem('savedNote', note);
  alert('Note saved!');
}

// Function to clear the note area
function clearNote() {
  document.getElementById('notepad').value = '';
  localStorage.removeItem('savedNote');
  alert('Note cleared!');
}

// Load the saved note on page load
window.onload = function() {
  const savedNote = localStorage.getItem('savedNote');
  if (savedNote) {
    document.getElementById('notepad').value = savedNote;
  }
};
