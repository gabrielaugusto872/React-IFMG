// Evento submit
document.getElementById("meuForm").addEventListener("submit", function(event) {
event.preventDefault();
console.log("Formulário enviado!");
});

// Evento input para validação em tempo real
document.getElementById("email").addEventListener("input", function() {
const email = this.value;
if (email.includes("@")) {
emailError.textContent = "";
} else {
emailError.textContent = "Email inválido";
}
});