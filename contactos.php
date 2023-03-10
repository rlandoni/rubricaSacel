<!DOCTYPE html>
<html>

<head>
	<title>Contatti - Rubrica Sacel </title>
	<link rel="icon" type="image/x-icon" href="https://img.italiaonline.it/0WO5p000003esvcGAA_logoSacelink.png">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<?php require_once "dependencias.php"; ?>
</head>

<body>
	<div class="container ">
		<?php require_once "menu.php"; ?>
		<div class="jumbotron">
			<h1 class="display-4">Contatti</h1>
			<button class="btn btn-primary" data-toggle="modal" data-target="#modalAgregarContacto">
				<span class="fas fa-user-plus"></span> Inserisci contatti
			</button>
			<hr class="my-4">
			<div id="cargaTablaContactos"></div>

		</div>

		<?php
		require_once "vistas/contactos/modalAgregar.php";
		require_once "vistas/contactos/modalActualizar.php";
		?>

	</div>

	<script src="public/js/contactos.js"></script>
</body>

</html>