<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Representacion de escanos congreso</title>
</head>
<body style="background-color:#F0F8FF;">

<h2>Datos del USUARIO</h2>
<p><b>Nombre: </b>${usuario.name}</p>
<p><b>Email: </b>${usuario.email}</p>


	
	





<div class="container">
    
    <%@ include file = "SubeArchivo.jsp" %>
    
	<p><a href="Plantilla votos por provincias.xlsx" download="">
        Descarga aqui tu plantilla </a></p>
    <p><script src="funcion2.js" type="text/javascript"></script></p>

    <div class="entrytext">
        <p><script src="spliter2.js" type="text/javascript"></script></p>

        <form style="width: 362px; margin-left: auto; margin-right: auto; text-align: center;" action="">
            <fieldset class="conjuntodecampos" style="margin: 0px;">
                <legend class="leyenda">Simulador de la Ley D Hondt</legend>
                <table>
                    <tbody>

                    <tr>
                        <td style="text-align: right">N?mero de partidos:</td>
                        <td><input size="7" name="numpartidos" value="19" class="cuadrotexto" type="text"> </td>
                    </tr>
                    <tr>
                        <td style="text-align: right">Votos en blanco:</td>
                        <td><input size="7" name="votblan" value="0" class="cuadrotexto" type="text"></td>
                    </tr>
                    </tbody></table>
                <p><input style="margin-top: 15px; margin-bottom: 15px;" class="boton" onclick="FormularioHondt(this.form)" value="Repartir los esca?os" type="button"><br>
                </p></fieldset>
        </form>
        <div id="resultados" style="padding-top: 10px; padding-bottom: 10px;"></div>
		
    </div>
    </div>

</body>
</html>