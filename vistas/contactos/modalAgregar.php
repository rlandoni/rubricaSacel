<!-- Modal -->
<div class="modal fade" id="modalAgregarContacto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Inserisci nuovo contatto</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="frmAgregarContacto">
          <div id="categoriasId"></div>
          <label for="nombre">Nome</label>
          <input type="text" class="form-control" id="nombre" name="nombre">
          <label for="apaterno">Cognome</label>
          <input type="text" class="form-control" id="apaterno" name="apaterno">
          <label for="amaterno">Cognome 2</label>
          <input type="text" class="form-control" id="amaterno" name="amaterno">
          <label for="telefono">Cellulare</label>
          <input type="text" class="form-control" id="telefono" name="telefono">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email" name="email">
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
        <button type="button" class="btn btn-primary" id="btnAgregarContacto">Salva</button>
      </div>
    </div>
  </div>
</div>


<script type="text/javascript">
  $(document).ready(function() {
    $('#categoriasId').load("vistas/contactos/selectCategorias.php");
  });
</script>