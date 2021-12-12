const BotaoDeletarTarefa = () => {
    const elemento = document.createElement('button')

    elemento.classList.add('delete-button')
    elemento.innerText = 'deletar'
    elemento.addEventListener('click', deletarTarefa)

    return elemento
}

const deletarTarefa = (evento) => {
    const tarefaADeletar = evento.target.parentElement.parentElement

    tarefaADeletar.remove()
}

export default BotaoDeletarTarefa