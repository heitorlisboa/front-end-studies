class ArrayCategorias {
	constructor() {
		this.array = ["sem categoria"];
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

	adicionarCategoria(novaCategoria) {
		this.array.push(novaCategoria);

		this.notificar();
	}
}

export default ArrayCategorias;
