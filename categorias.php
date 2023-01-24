<!DOCTYPE html>
<html>

<head>
	<title>Categorie - Rubrica Sacel </title>
	<link rel="icon" type="image/x-icon" href="https://img.italiaonline.it/0WO5p000003esvcGAA_logoSacelink.png">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<?php require_once "dependencias.php"; ?>
</head>

<body>
	<div class="container">
		<?php require_once "menu.php"; ?>

		<div class="jumbotron">
			<h1 class="display-4">Categorie</h1>
			<button class="btn btn-primary" data-toggle="modal" data-target="#modalAgregarCategoria">
				<span class="fas fa-book"></span> Inserisci categoria
			</button>
			<hr class="my-4">

			<div id="cargaTablaCategorias"></div>
		</div>

		<?php
		require_once "vistas/categorias/modalAgregar.php";
		require_once "vistas/categorias/modalActualizar.php";
		?>
	</div>

	<script src="public/js/categorias.js"></script>
</body>

</html>