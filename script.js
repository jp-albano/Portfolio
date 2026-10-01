const modal = document.querySelector('.modal');
const imgModal = modal.querySelector('.foto-expandida');

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('foto')) {
    imgModal.src = event.target.src;
    imgModal.alt = event.target.alt;
    modal.showModal();
  }
});

modal.addEventListener('click', () => modal.close());

