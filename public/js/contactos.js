$(document).ready(function () {
	$('#cargaTablaContactos').load('vistas/contactos/tablaContactos.php');

	$('#btnAgregarContacto').click(function () {

		if ($('#idCategoriaSelect').val() == 0) {
			swal("Devi selezionare una categoria");
			return false;
		} else if ($('#nombre').val() == "") {
			swal("Devi aggiungere il nome");
			return false;
		}

		agregarContacto();
	});

	$('#btnActualizarContacto').click(function () {
		actualizarContacto();
	});
});


function agregarContacto() {
	$.ajax({
		type: "POST",
		url: "procesos/contactos/agregarContacto.php",
		data: $('#frmAgregarContacto').serialize(),
		success: function (respuesta) {
			respuesta = respuesta.trim();
			if (respuesta == 1) {
				$('#frmAgregarContacto')[0].reset();
				$('#cargaTablaContactos').load('vistas/contactos/tablaContactos.php');
				swal("Bravo!", "Aggiunto con successo!", "success");
			} else {
				swal("Buh!", "Impossibile aggiungere!", "error");
			}
		}
	});
}

function actualizarContacto() {
	$.ajax({
		type: "POST",
		url: "procesos/contactos/actualizarContacto.php",
		data: $('#frmAgregarContactoU').serialize(),
		success: function (respuesta) {
			respuesta = respuesta.trim();
			if (respuesta == 1) {
				$('#cargaTablaContactos').load('vistas/contactos/tablaContactos.php');
				$('#modalActualizarContacto').modal("toggle");
				swal("Bravo!", "Aggiunto con successo!", "success");
			} else {
				swal("Buh!", "Impossibile aggiungere!", "error");
			}
		}
	});
}


function eliminarContacto(idContacto) {
	swal({
		title: "Sei sicuro di eliminare questo contatto?",
		text: "Una volta eliminato non può essere recuperato!",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
		.then((willDelete) => {
			if (willDelete) {
				$.ajax({
					type: "POST",
					data: "idContacto=" + idContacto,
					url: "procesos/contactos/eliminarContacto.php",
					success: function (respuesta) {
						respuesta = respuesta.trim();
						if (respuesta == 1) {
							$('#cargaTablaContactos').load('vistas/contactos/tablaContactos.php');
							swal("Bravo!", "Eliminato con successo!", "success");
						} else {
							swal("Buh!", "Impossibile eliminare!", "error");
						}
					}
				});
			}
		});
}

function obtenerDatosContacto(idContacto) {
	$.ajax({
		type: "POST",
		data: "idContacto=" + idContacto,
		url: "procesos/contactos/obtenerDatosContacto.php",
		success: function (respuesta) {
			respuesta = jQuery.parseJSON(respuesta);
			idCategoria = respuesta['id_categoria'];

			$('#nombreU').val(respuesta['nombre']);
			$('#apaternoU').val(respuesta['paterno']);
			$('#amaternoU').val(respuesta['materno']);
			$('#telefonoU').val(respuesta['telefono']);
			$('#emailU').val(respuesta['email']);
			$('#idContactoU').val(respuesta['id_contacto']);
			$('#categoriasIdU').load("vistas/contactos/selectCategoriasUpdate.php?idCategoria=" + idCategoria);

		}
	});
}


