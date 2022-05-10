var submitButton = document.getElementById("submitter");
submitButton.addEventListener("click", onSubmit);

var textArea = document.getElementById("area");

function onSubmit() {
    alert(textArea.value);
}