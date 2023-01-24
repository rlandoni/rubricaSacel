$(document).ready(function () {

	$('#cargaTablaCategorias').load('vistas/categorias/tablaCategorias.php');

	$('#btnGuardarCategoria').click(function () {

		if ($('#nombreCategoria').val() == "") {
			swal("Devi aggiungere un nome di categoria!");
			return false;
		}

		agregarCategoria();
	});

	$('#btnActualizarCategoria').click(function () {
		actualizarCategoria();
	});
});


function agregarCategoria() {
	$.ajax({
		type: "POST",
		data: $('#frmAgregarCategoria').serialize(),
		url: "procesos/categorias/agregarCategoria.php",
		success: function (respuesta) {
			respuesta = respuesta.trim();
			if (respuesta == 1) {
				$('#frmAgregarCategoria')[0].reset();
				$('#cargaTablaCategorias').load('vistas/categorias/tablaCategorias.php');
				swal("Bravo!", "Aggiunto con successo!", "success");
			} else {
				swal("Buh!", "Impossibile aggiungere!", "error");
			}
		}
	});
}

function eliminarCategoria(idCategoria) {
	swal({
		title: "Sei sicuro di eliminare questa categoria?",
		text: "Una volta eliminata non può essere recuperata!",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
		.then((willDelete) => {
			if (willDelete) {
				$.ajax({
					type: "POST",
					data: "idCategoria=" + idCategoria,
					url: "procesos/categorias/eliminarCategoria.php",
					success: function (respuesta) {
						respuesta = respuesta.trim();
						if (respuesta == 1) {
							$('#cargaTablaCategorias').load('vistas/categorias/tablaCategorias.php');
							swal("Bravo!", "Eliminata con successo!", "success");
						} else {
							swal("Buh!", "Impossibile eliminare!", "error");
						}
					}
				});
			}
		});
}

function obtenerDatosCategoria(idCategoria) {
	$.ajax({
		type: "POST",
		data: "idCategoria=" + idCategoria,
		url: "procesos/categorias/obtenerDatosCategoria.php",
		success: function (respuesta) {
			respuesta = jQuery.parseJSON(respuesta);

			$('#idCategoria').val(respuesta['idCategoria']);
			$('#nombreCategoriaU').val(respuesta['nombre']);
			$('#descripcionU').val(respuesta['descripcion']);
		}
	});
}

function actualizarCategoria() {
	$.ajax({
		type: "POST",
		data: $('#frmActualizarCategoria').serialize(),
		url: "procesos/categorias/actualizarCategoria.php",
		success: function (respuesta) {
			respuesta = respuesta.trim();
			if (respuesta == 1) {
				$('#cargaTablaCategorias').load('vistas/categorias/tablaCategorias.php');
				$('#modalActualizarCategoria').modal("toggle");
				swal(":D", "Se actualizo con exito!", "success");
			} else {
				swal(":(", "No se pudo actualizar!", "error");
			}
		}
	});
}