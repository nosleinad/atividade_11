
let listaPaciente = [];

if (localStorage.getItem('listaPaciente') != null) {
    listaPaciente = JSON.parse(localStorage.getItem('listaPaciente'));
}

function gravar() {
    let paciente = {};
    paciente.nome = document.getElementById('nome').value;

    let i = document.getElementById('id').value;

    if (i == '') {

        listaPaciente.push(paciente);
    } else {
        listaPaciente[i] = paciente;
    }

    localStorage.setItem('listaPaciente', JSON.stringify(listaPaciente));
    carregarTable();
    novo();
}

function carregarTable() {
    let tabela = '';
    for (i in listaPaciente) {
        tabela += `<tr onclick='editar(${i})'><td>${listaPaciente[i].nome}</td></tr>`;
    }
    document.getElementById('tbCorpo').innerHTML = tabela;
}

function editar(i) {
    document.getElementById('id').value = i;
    document.getElementById('nome').value = listaPaciente[i].nome;
}

function novo() {
    document.getElementById('id').value = '';
    document.getElementById('nome').value = '';
    
}

function apagar() {
    let i = document.getElementById('id').value;
    listaPaciente.splice(i, 1);
    localStorage.setItem('listaPaciente', JSON.stringify(listaPaciente));
    carregarTable();
    novo();
    
}

carregarTable();