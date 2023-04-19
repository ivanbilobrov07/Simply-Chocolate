const form = document.getElementById('buy-modal__form');
const btn = document.getElementById('buy-modal-form__btn');
const checkboxes = document.querySelectorAll('.buy-modal-checkbox');

form.addEventListener('submit', function (event) {
  let checked = false;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checked = true;
      break;
    }
  }
  if (!checked) {
    btn.disabled = true;
    event.preventDefault();
  }
});

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', function () {
    let checked = false;
    for (let j = 0; j < checkboxes.length; j++) {
      if (checkboxes[j].checked) {
        checked = true;
        break;
      }
    }
    btn.disabled = !checked;
  });
}
