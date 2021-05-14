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
<%@ include file="BajaArchivo.jsp" %> 
<%@ include file="BorraArchivo.jsp" %>
</div>
<div class="container">
<%@ include file="BajaArchivo2.jsp" %>
<%@ include file="BorraArchivo2.jsp" %>
</div>
<div class="container">
<%@ include file="BajaArchivo3.jsp" %>
<%@ include file="BorraArchivo3.jsp" %>
</div>
<div class="container">
<%@ include file="BajaArchivo4.jsp" %>
<%@ include file="BorraArchivo4.jsp" %>
</div>
<div class="container">
<%@ include file="BajaArchivo5.jsp" %>
<%@ include file="BorraArchivo5.jsp" %>
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

