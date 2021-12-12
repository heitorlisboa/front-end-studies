class ArrayNotas {
	constructor() {
		this.array = [];
		this._inscritos = [];
	}

	inscrever(func) {
		this._inscritos.push(func);
	}

	desinscrever(func) {
		this._inscritos = this._inscritos.filter((element) => element !== func);
	}

	notificar() {
		this._inscritos.forEach((func) => {
			func(this.array);
		});
	}

	criarNota(titulo, categoria, texto) {
		[titulo, texto] = [titulo.trim(), texto.trim()];
		const novaNota = new Nota(titulo, categoria, texto);
		this.array.push(novaNota);

		this.notificar();
	}

	deletarNota(index) {
		this.array.splice(index, 1);

		this.notificar();
	}
}

class Nota {
	constructor(titulo, categoria, texto) {
		this.titulo = titulo;
		this.categoria = categoria;
		this.texto = texto;
	}
}

export default ArrayNotas;
