function dados() {
    let dados = [{ "id": 1, "nome": "will", "senha": 123 },
    { "id": 2, "nome": "bob", "senha": 2222 },
    { "id": 3, "nome": "ringo", "senha": 3333 }
    ]
    let n = JSON.stringify(dados);
    localStorage.setItem("banco", n);
    return dados
}

function cadastrar() {
    var ClienteArray = JSON.parse(localStorage.getItem("banco"))
    let login = document.querySelector("#login").value
    let senha = document.querySelector("#senha").value
    let user = { id: Date.now(), nome: login, senha: senha }
    ClienteArray.push(user)
    localStorage.setItem("banco", JSON.stringify(ClienteArray))
    alert("Registro adicionado.")

}

function login() {
    const dados = JSON.parse(localStorage.getItem("banco"))
    let login = document.querySelector("#login").value
    let senha = document.querySelector("#senha").value

    for (let i = 0; dados.length > i; i++) {
        if (dados[i] == null) {
            alert("Verificando")
            //  alert("encontrou: " + dados[i].nome + ":" + i)
        } else {
            if (login == dados[i].nome && senha == dados[i].senha) {
                console.log("conectado")
                let n = JSON.stringify(dados[i]);
                sessionStorage.setItem("user", n)
                let url = "airline.html"
                window.open(url)
                break
            }
        }
    }
}

function buscar() {
    var dados = JSON.parse(localStorage.getItem("banco"))
    let login = document.querySelector("#login").value

    for (let i = 0; dados.length > i; i++) {
        if (dados[i] == null && dados[i] != login) {
            alert("Verificando")
        } else {
            if (login == dados[i].nome) {
                //alert("encontrou: " + dados[i].nome + ":" + i)
                document.querySelector("#id").value = dados[i].id
                document.querySelector("#login").value = dados[i].nome
                document.querySelector("#senha").value = dados[i].senha
                break
            }
        }
    }
}

function atualizar() {
    var dados = JSON.parse(localStorage.getItem("banco"))
    localStorage.removeItem("banco")
    let id = document.querySelector("#id").value
    let login = document.querySelector("#login").value
    let senha = document.querySelector("#senha").value

    for (let i = 0; dados.length > i; i++) {
        if (id == dados[i].id) {
            let user = { id: id, nome: login, senha: senha }
            dados[i] = user
            localStorage.setItem("banco", JSON.stringify(dados))
            alert("Atualizado!")
            break
        }
    }
}

function apagarItemVetor() {
    let id = parseInt(document.querySelector("#id").value)
    let login = document.querySelector("#login").value
    var dados = JSON.parse(localStorage.getItem("banco"))
    localStorage.removeItem("banco")

    for (let i = 0; dados.length > i; i++) {
        if (dados[i] == null) {
            alert("Verificando")
        } else {
            if (id == dados[i].id && login == dados[i].nome) {
                delete dados[i]
                break;
            }
        }
    }
    localStorage.setItem("banco", JSON.stringify(dados))
}

function limpar() {
    document.querySelector("#id").value = ""
    document.querySelector("#login").value = ""
    document.querySelector("#senha").value = ""
}


function logado() {
    let dados = JSON.parse(sessionStorage.getItem("user"))
    let nome = dados.nome
    document.getElementById("nome").innerHTML = "Bem vindo " + nome
    return nome
}

function logout() {
    sessionStorage.removeItem("user")
    let url = "localStorage.html"
    window.open(url)
    window.close()
}



document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});
