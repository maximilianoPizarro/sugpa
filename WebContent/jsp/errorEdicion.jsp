<%@page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@include file="header.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Error inesperado</title>
</head>
<body>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="inicio">SUGPA</a>
    </div>
    <ul class="nav navbar-nav">
      <li><a href="inicioo">Inicio</a></li>
      <li><a href="buscar">Volver a buscar</a></li>
    </ul>  
    
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> <%=request.getAttribute("usuario")%></a></li>
      <li><a href="inicio"><span class="glyphicon glyphicon-log-in"></span> Salir</a></li>
    </ul>
  </div>
</nav>	
	
<div class="container">
  <h2>Resultado de busqueda:</h2> <br>
  <div class="panel-group">

    <div class="panel panel-primary">
      <div class="panel-heading">Realizar una accion</div>
      <div class="panel-body">
      <h2>No se encontraron resultados</h2>
		<form action="buscar">
				<div class="col-md-16 text-center">
				<p class="boton-margen-inferior">
				<input class="boton input-ingresar" type="submit" name="buscar" value="Volver a Buscar"/></p>	
				</div>  
		</form>		    
      </div>
      </div>
  </div>
</div>      
	
	
	<%@include file="footer.jsp" %>
</body>
</html>