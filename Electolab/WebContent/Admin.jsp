<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Admin</title>
</head>
<body>
<h2>Admin</h2>
<p><b>Número de usuarios activos: </b>${fn:length(usuarios)}</p>

<h2>Usuarios</h2>
<table border="1">
<c:forEach items="${usuarios}" var="usuari">
<tr>
<td>${usuari.name}</td>
<td>${usuari.email}</td>


</tr>
</c:forEach>
</table>




<%@ include file = "FormLogout.jsp" %>
</body>
</html>