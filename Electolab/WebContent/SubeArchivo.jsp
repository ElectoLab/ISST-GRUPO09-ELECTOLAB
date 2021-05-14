<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body style="background-color:#F0F8FF;">
<form action="SubeArchivoServlet" method="post" enctype="multipart/form-data">
    <input type="hidden" name="email" value="${usuario.email}" />
    <input type="file"  name="file" />
    <button type="submit">Guardar simulacion</button>
</form>
</body>
</html>