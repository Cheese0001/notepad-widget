document.getElementById('saveButton').addEventListener('click', function() {
  const noteContent = document.getElementById('noteInput').value;
  if (noteContent) {
    localStorage.setItem('savedNote', noteContent);
    alert('Note saved!');
  } else {
    alert('Please write something before saving.');
  }
});

document.getElementById('clearButton').addEventListener('click', function() {
  document.getElementById('noteInput').value = '';
  localStorage.removeItem('savedNote');
  alert('Note cleared!');
});

// Load saved note on page load
window.onload = function() {
  const savedNote = localStorage.getItem('savedNote');
  if (savedNote) {
    document.getElementById('noteInput').value = savedNote;
  }
};
