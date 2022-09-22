function adicionarFilme() {
	var filmeFavorito = document.getElementById("filme").value;
	if (filmeFavorito.endsWith(".png")) {
		listarFilmesNaTela(filmeFavorito);
	}
	else {
		console.error("Endereço de filme inválido");
	}
	document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
		console.log(filme);
	  var elementoFilmeFavorito = "<img src=" + filme + ">"
		var elementolistaFilmes = document.getElementById("listaFilmes")
		elementolistaFilmes.innerHTML = elementolistaFilmes.innerHTML + 							elementoFilmeFavorito;
}