let name_user = "Anonimus"
let mess = ""

function hello() {
    name_user = prompt("Hello, entry your name:");
    if (name_user.length != 0) {
        document.getElementById(`name_user`).innerText=`${name_user}`;
    };
    localStorage.setItem(`name`,name_user);
    alert(`Hello ${name_user}!`);
}

function chat() {
    document.location = `chat.html`;
}

function bmi() {
    let mass = prompt("Input your mass (kg)");
    let hight = prompt("Input your hight (m)");

    let index = mass / (hight * hight);
 
    let result = (index < 25)? "Normal":(index < 30)? "Overwight": "Obese";
    alert(`Your index: ${index} \n ${result}`);
}

function send() {
    name_user = localStorage.getItem(`name`);
    mess = mess + `${name_user}: ` + (document.getElementById(`mes`).value) + "\n";
    document.getElementById(`c_f`).innerText=mess;
}
