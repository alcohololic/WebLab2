function checkf(event) {
    event.preventDefault();
    validate(form_fname, /^[A-Za-zА-Яа-я]+$/);
    validate(form_sname, /^[A-Za-zА-Яа-я]+$/);
    validate(form_address, /\d{5}/);
    validate(form_email, '@');

}

function validate(id, condition) {
    (id.value.match(condition)) ? successMessage(id) : errorMessage(id);
}

function errorMessage(id) {
    id.style.border = '1px solid red';
    id.value = 'Невірно введені дані';
}

function successMessage(id) {
    id.style.border = '1px solid green';
}

