import Tarefa from "./components/tarefa.js"

(() => {
    const criarTarefa = (evento) => {
        evento.preventDefault()
        
        const lista = document.querySelector('[data-list]')
        const input = document.querySelector('[data-form-input]')
        const valor = input.value.trim()
    
        if (valor) {
            lista.appendChild(Tarefa(valor))
        }
    
        input.value = ""
    }

    const botaoCriarTarefa = document.querySelector('[data-form-button]')

    botaoCriarTarefa.addEventListener('click', criarTarefa)
})()