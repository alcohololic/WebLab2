function checkf() {

    validate(form_fname, /^[A-Za-zА-Яа-я]+$/) ? succesMessage(form_fname) : errorMessage(form_fname);
    validate(form_sname, /^[A-Za-zА-Яа-я]+$/) ? succesMessage(form_sname) : errorMessage(form_sname);
    validate(form_address, /\d{5}/) ? succesMessage(form_address) : errorMessage(form_address);
    validate(form_email, '@') ? succesMessage(form_email) : errorMessage(form_email);

}

function validate(item, condition) {
    if (!item.value.match(condition)) {
        return false;
    }
    else {
        return true;
    }
}

function errorMessage(id) {
    id.style.border = '1px solid red';
    id.value = 'Невірно введені дані';
}

function succesMessage(id) {
    id.style.border = '1px solid green';
}