<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body style="background-color:#F0F8FF;">
<div class="flex-container">
<div class="container">
<form action="BajaArchivoServlet" method="get">
        <input type="hidden" name="usuarioemail" value="administrador@gmail.com" />
        <button type="submit">Descargar congreso19</button>
  </form>
  </div>
  <div class="container">
  <form action="BajaArchivoServlet2" method="get">
        <input type="hidden" name="usuarioemail" value="administrador@gmail.com" />
        <button type="submit">Descargar congreso16</button>
  </form>
  </div>
  <div class="container">
  <form action="BajaArchivoServlet3" method="get">
        <input type="hidden" name="usuarioemail" value="administrador@gmail.com" />
        <button type="submit">Descargar congreso15</button>
  </form>
  </div>
  <div class="container">
  <form action="BajaArchivoServlet4" method="get">
        <input type="hidden" name="usuarioemail" value="administrador@gmail.com" />
        <button type="submit">Descargar congreso11</button>
  </form>
  </div>
  <div class="container">
  <form action="BajaArchivoServlet5" method="get">
        <input type="hidden" name="usuarioemail" value="administrador@gmail.com" />
        <button type="submit">Descargar congreso08</button>
  </form>
  </div>
   </div>
  <style>
  .flex-container {
        display: flex;
        justify-content: center;
        background: #F0F8FF;
    }
  .container {
        
        justify-content: center;
        background: #F0F8FF;
        width: 100px;
        padding: 15px;
    }
    </style>
</body>
</html>