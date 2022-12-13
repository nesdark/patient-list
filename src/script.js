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

function createPatient(name, age, weight, height) {
  const patientsTable = document.querySelector('#patientsTable');

  patientsTable.innerHTML += `
    <tr>
      <td class="name">${name}</td>
      <td>${age}</td>
      <td>${weight}kg</td>
      <td>${height}m</td>
      <td>
        <select id="status" onchange="updateSelectToContaminated(this)">
          <option value="normal">Normal</option>
          <option value="contaminated">Contaminated</option>
        </select>
      </td>
    </tr>
  `;
}

function addPatient() {
  let name = document.querySelector('#patientName');
  let age = document.querySelector('#patientAge');
  let weight = document.querySelector('#patientWeight');
  let height = document.querySelector('#patientHeight');

  createPatient(name.value, age.value, weight.value, height.value);

  name.value = '';
  age.value = '';
  weight.value = '';
  height.value = '';
}

function openModal() {
  Modal.open();
}

function closeModal() {
  Modal.close();
}

function submitInfo() {
  Modal.close();
  addPatient();
  removeNoPatients();
  updateSelectToContaminated();
}

function removeNoPatients() {
  const noPatientsElement = document.querySelector('#no-patients');

  noPatientsElement.innerHTML = '';
}
