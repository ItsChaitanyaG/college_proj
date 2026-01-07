//email Validation

let emailVal = document.getElementById("emailVal");

function EmailValid(){

    let emailInp = document.getElementById("email").value.trim();
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if(emailInp === ""){
        emailVal.innerText="Email is required!";
    } else if(!regex.test(emailInp)){
        emailVal.innerText="Please enter valid email.";
    } else {
        emailVal.innerText="";
    }
}

// Message validation

let msgVal = document.getElementById("msgVal");

function MsgLimit(){

    let msgLen = document.getElementById("msg").value.trim().length;
    let remain = 500-msgLen;

    if(msgLen > 500){
        msgVal.innerText = "Message limit exceeded!!";
        msgVal.classList.add("text-danger");
    } else {
        msgVal.innerText = "Remaining: " + remain;
        msgVal.classList.remove("text-danger");
    }
}

//Filter function

function filterItems(type){

    let items = document.querySelectorAll(".filter-item");

    items.forEach(item => {
        if(type === "all"){
            item.style.display = "block";
        } else if(item.classList.contains(type)){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });

    document.querySelectorAll(".btn-group .btn").forEach(btn => {
        btn.classList.remove("active");
    })

    event.target.classList.add("active");
}