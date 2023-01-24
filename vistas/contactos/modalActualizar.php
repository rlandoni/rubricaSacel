<!-- Modal -->
<div class="modal fade" id="modalActualizarContacto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Aggiungi contatto</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="frmAgregarContactoU">
          <div id="categoriasIdU"></div>
          <input type="text" id="idContactoU" name="idContactoU" hidden="">
          <label for="nombreU">Nome</label>
          <input type="text" class="form-control" id="nombreU" name="nombreU">
          <label for="apaternoU">Cognome</label>
          <input type="text" class="form-control" id="apaternoU" name="apaternoU">
          <label for="amaternoU">Cognome 2</label>
          <input type="text" class="form-control" id="amaternoU" name="amaternoU">
          <label for="telefonoU">Cellulare</label>
          <input type="text" class="form-control" id="telefonoU" name="telefonoU">
          <label for="emailU">Email</label>
          <input type="text" class="form-control" id="emailU" name="emailU">
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
        <button type="button" class="btn btn-warning" id="btnActualizarContacto">Salva</button>
      </div>
    </div>
  </div>
</div>