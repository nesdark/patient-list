function updateSelectToContaminated(statusText) {
  statusText.classList.toggle('contaminated');
}

const body = document.querySelector('body');
const Modal = {
  open: function () {
    body.classList.add('modal-active');
  },
  close: function () {
    body.classList.remove('modal-active');
  },
};

function openModal() {
  Modal.open();
}

function closeModal() {
  Modal.close();
}
