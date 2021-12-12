const BotaoConcluirTarefa = () => {
    const elemento = document.createElement('button')

    elemento.classList.add('check-button')
    elemento.innerText = 'concluir'
    elemento.addEventListener('click', concluirTarefa)

    return elemento
}

const concluirTarefa = (evento) => {
    const tarefaAConcluir = evento.target.parentElement.parentElement

    tarefaAConcluir.classList.toggle('done')
}

export default BotaoConcluirTarefa