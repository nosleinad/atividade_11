
let listaPaciente = [];

if (localStorage.getItem('listaPaciente') != null) {
    listaPaciente = JSON.parse(localStorage.getItem('listaPaciente'));
}

let cor = {
    "Pré-Operatório": "warning",
    "Transferido": "info",
    "Em Cirurgia": "danger",
    "Em Recuperação": "success",

}

function gravar() {
    let paciente = {};
    paciente.nome = document.getElementById('nome').value.toUpperCase();
    if (paciente.nome.length < 3) {
        alert('Obrigatório informar um nome.');
        return;
    }

    paciente.status = document.getElementById('status').value;
    paciente.local = document.getElementById('local').value;
    paciente.hora01 = document.getElementById('hora01').value;
    paciente.hora02 = document.getElementById('hora02').value;
    paciente.hora03 = document.getElementById('hora03').value;
    paciente.hora04 = document.getElementById('hora04').value;

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

        let status = listaPaciente[i].status;
        let local = (listaPaciente[i].local);
        let statusLocal = status;

        if (local != '') {
            statusLocal = `${status} (${local})`
        }

        tabela += `<tr onclick='editar(${i})'>
                     <td>${listaPaciente[i].nome}</td>
                    <td class='${cor[status]}'>${statusLocal}</td>
                    <td>${listaPaciente[i].hora01}</td>
                    <td>${listaPaciente[i].hora02}</td>
                    <td>${listaPaciente[i].hora03}</td>
                    <td>${listaPaciente[i].hora04}</td>
                </tr>`;
    }
    document.getElementById('tbCorpo').innerHTML = tabela;
}

function editar(i) {
    document.getElementById('id').value = i;
    document.getElementById('nome').value = listaPaciente[i].nome;
    document.getElementById('status').value = listaPaciente[i].status;
    document.getElementById('local').value = listaPaciente[i].local;
    document.getElementById('hora01').value = listaPaciente[i].hora01;
    document.getElementById('hora02').value = listaPaciente[i].hora02;
    document.getElementById('hora03').value = listaPaciente[i].hora03;
    document.getElementById('hora04').value = listaPaciente[i].hora04;
}


function novo() {
    document.getElementById('id').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('status').value = '';
    document.getElementById('local').value = '';
    document.getElementById('hora01').value = '';
    document.getElementById('hora02').value = '';
    document.getElementById('hora03').value = '';
    document.getElementById('hora04').value = '';

}

function apagar() {
    let i = document.getElementById('id').value;
    listaPaciente.splice(i, 1);
    localStorage.setItem('listaPaciente', JSON.stringify(listaPaciente));
    carregarTable();
    novo();

}

carregarTable();