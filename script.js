let tarefas = []

function adicionarTarefa() {
  const inputTarefa = document.getElementById("inputTarefa")
  const tarefa = inputTarefa.value.trim()
  const mensagem = document.getElementById("mensagem")

  if (tarefa == "") {
    let mensagemError = "Write down your task to add on the list!"
    mensagem.textContent = mensagemError
    mensagem.classList.remove("mensagem__success")
    mensagem.classList.add("mensagem__error")

  } else {
    let mensagemAcerto = "Your task was succesfull added!"
    mensagem.textContent = mensagemAcerto;
    mensagem.classList.remove("mensagem__error")
    mensagem.classList.add("mensagem__success")
    tarefas.push(tarefa)
    renderizarTarefa()
  }
  inputTarefa.value = ""
}

function renderizarTarefa() {
  const listaTarefas = document.getElementById("listaTarefas")
  listaTarefas.innerHTML = ""

  if (tarefas.length > 0) {
    let limparLista = document.getElementById("limparLista")
    limparLista.classList.remove("hidden")
  }
  
  for (let i = 0; i < tarefas.length; i++) {  
      let novaTarefa = document.createElement("li")
      novaTarefa.textContent = tarefas[i]

      let botaoRemover = document.createElement("button")
      botaoRemover.classList.add("remover")
      let removerMensagem = "Remove"
      botaoRemover.textContent = removerMensagem
      botaoRemover.onclick = () => removerTarefa(i)
      
      
      let botaoEditar = document.createElement("button")
      botaoEditar.classList.add("editar")
      let editarMensagem = "edit"
      botaoEditar.textContent = editarMensagem
      botaoEditar.onclick = () => editarTarefa(i)
      novaTarefa.appendChild(botaoRemover)
      novaTarefa.appendChild(botaoEditar)
      listaTarefas.appendChild(novaTarefa)
  }
}

function editarTarefa(i) {
  let tarefaEditada = prompt("Edict your task ^^")
  if (tarefaEditada.trim() !== "") {
    tarefas[i] = tarefaEditada
    renderizarTarefa()
  }

}

function removerTarefa(i) {
  tarefas.splice(i, 1)
  renderizarTarefa()
  if (tarefas.length == 0) {
    let limparLista = document.getElementById("limparLista")
    limparLista.classList.add("hidden")
  }
}

function limparLista() {
    tarefas.length = 0
    renderizarTarefa()
    let mensagemLimparLista = "List successfully cleaned! :))"
    mensagem.textContent = mensagemLimparLista
    let limparLista = document.getElementById("limparLista")
    limparLista.classList.add("hidden")
}

