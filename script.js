const cadastroForm = document.getElementById('cadastroForm');
const usuariosDiv = document.getElementById('usuarios');

cadastroForm.addEventListener('submit', function(event) {
event.preventDefault();

const username = cadastroForm.querySelector('#username').value;
const password = cadastroForm.querySelector('#password').value;

const usuario = document.createElement('p');
usuario.innerText = `Usuário: ${username} - Senha: ${password}`;
usuariosDiv.appendChild(usuario);

cadastroForm.reset();
});
