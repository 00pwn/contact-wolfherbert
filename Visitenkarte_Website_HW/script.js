
const shareBtn = document.getElementById('shareBtn');
const shareModal = document.getElementById('shareModal');
const closeShare = document.getElementById('closeShare');

shareBtn.addEventListener('click', () => {
  shareModal.classList.toggle('show');
});

closeShare.addEventListener('click', () => {
  shareModal.classList.remove('show');
});





const saveBtn = document.getElementById('saveBtn');
const saveModal = document.getElementById('saveModal');
const closeSave = document.getElementById('closeSave');


saveBtn.addEventListener('click', () => {
  saveModal.classList.toggle('show'); 
});

closeSave.addEventListener('click', () => {
  saveModal.classList.remove('show');
});