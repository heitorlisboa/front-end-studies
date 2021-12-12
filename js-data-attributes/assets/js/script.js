(() => {
    const abas = document.querySelectorAll('[data-aba]')

    const esconderConteudos = () => {
        const conteudos = document.querySelectorAll('[data-conteudo]')

        conteudos.forEach(conteudo => conteudo.classList.add('hide'))
    }

    const inativarAbas = () => {
        abas.forEach(aba => aba.classList.remove('ativa'))
    }

    const ativarConteudo = (valor) => {
        const conteudo = document.querySelector(`[data-conteudo="${valor}"]`)

        conteudo.classList.remove('hide')
    }

    const ativarAba = (aba) => {
        aba.classList.add('ativa')
    }

    abas.forEach(aba => aba.addEventListener('click', () => {
        const valor = aba.dataset.aba

        esconderConteudos()
        inativarAbas()
        ativarConteudo(valor)
        ativarAba(aba)
    }))
})()