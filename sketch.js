
const field = document.getElementById("field");
const btn = document.getElementById("btn");
const hint = document.getElementById("hint");

const storedName = localStorage.getItem("username");
if (storedName != null){
    field.style.display = "none";
    btn.style.display = "none";
    hint.style.display = "none";

    const paragraph = document.createElement("p");
    paragraph.innerText = "Привіт, " + storedName;
    document.body.appendChild(paragraph);
}

function submit() {
    let username = field.value;
    localStorage.setItem("username", username);
    hint.style.display = "inline";
    field.value = "";
}
