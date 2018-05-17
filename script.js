function checkf() {
    /* var name = document.getElementById("form_fname").value;
       var sname = document.getElementById("form_sname").value;
       var address = document.getElementById("form_address").value;
       var email = document.getElementById("form_email").value;*/
    /*if(!name.match(/^[A-Za-zА-Яа-я]+$/)){
       alert("Невірно введене ім'я!")
    }

    if(!sname.match(/^[A-Za-zА-Яа-я]+$/)){
        alert("Невірно введене призвіще!");
    }

    if(!address.match(/\d{5}/)){
        alert("Невірна адреса!")
    }

    if(!email.match('@')){
      alert("Невірно введений email");
    }*/

    var mid = "form_fname";
    validate(mid, re);
    var itemq = document.getElementById("SMT");
    console.log(itemq);
}

function validate(id, condition) {

    var item = document.getElementById(id);
    if (!item.value.match(condition)) {
        item.style.backgroundColor = 'red';
        item.value = "Невірно введені данні";
    }
    else {
        console.log(item.id + ": success");
    }


}