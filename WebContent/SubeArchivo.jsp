<form action="SubeArchivoServlet" method="post" enctype="multipart/form-data">
	<input type="hidden" name="usuarioemail" value="${usuario.email}" />
    <input type="file" accept=".csv" id="file" />
	<button type="submit">Guardar simulacion</button>
</form>

