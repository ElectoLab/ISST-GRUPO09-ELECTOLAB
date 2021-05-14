<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Simulacion del usuario</title>
</head>
<body style="background-color:#F0F8FF;">

<h2>Datos del Usuario</h2>
<p><b>Nombre: </b>${usuario.name}</p>
<p><b>Email: </b>${usuario.email}</p>




	<div class="flex-container">

	<a href="Presentacion1.jsp"><img src="foto1.jpg" alt="" width="300px" height="250px"><h3>Reparto de escaños congreso</h3></a>
	
	<a href="Presentacion2.jsp"><img src="foto2.jpg" alt="" width="400px" height="250px"><h3>Representación de escaños congreso</h3></a>
	
	<a href="Presentacion3.jsp"><img src="foto3.jpg" alt="" width="300px" height="250px"><h3>Reparto de escaños asamblea</h3></a>
	</div>
	<div class="flex-container2">
	
	<a href="MisSimulaciones.jsp"><img src="foto4.png" alt="" width="400px" height="250px"><h3>Mis simulaciones</h3></a>
	<a href="SimulacionesAnteriores.jsp"><img src="foto5.png" alt="" width="400px" height="250px"><h3>Elecciones Anteriores</h3></a>
	
	</div>
	<style>
    .flex-container {
        display: flex;
        justify-content: center;
       
        
    }
    .container {
        justify-content: center;
     
    }
    .flex-container2{
       display: flex;
       justify-content: center;
           }
    
	</style>


<%@ include file = "FormLogout.jsp" %>
</body>
</html>