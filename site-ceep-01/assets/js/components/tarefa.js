import BotaoConcluirTarefa from "./concluirTarefa.js"
import BotaoDeletarTarefa from "./deletarTarefa.js"

const Tarefa = (valor) => {
    const elemento = document.createElement('li')
    const conteudo = `<p class="content">${valor}</p>`

    elemento.classList.add('task')
    elemento.innerHTML = conteudo

    const div = document.createElement('div')
    div.appendChild(BotaoConcluirTarefa())
    div.appendChild(BotaoDeletarTarefa())

    elemento.appendChild(div)

    return elemento
}

export default Tarefa