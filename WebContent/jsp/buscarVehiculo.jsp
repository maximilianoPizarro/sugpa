<%@page import="com.dgcactysv.funciones.Funciones"%>
<%@page import="com.dgcactysv.modelo.Vehiculo" %>
<%@page import="java.util.List"%>
<%@include file="header.jsp" %>
<%@page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

<link rel="stylesheet"
	href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>


<title>Playas de Acarreo DGCACTYSV:</title>
</head>
<body>

<script type="text/javascript">
$(document).ready(function() {
	$("#datepicker_fecha").datepicker();
});
</script>


<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">SUGPA</a>    
    </div>
    <ul class="nav navbar-nav">
      <li><a href="inicioo">Inicio</a></li>
    </ul>

    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> <%=request.getAttribute("usuario")%></a></li>
      <li><a href="inicio"><span class="glyphicon glyphicon-log-in"></span> Salir</a></li>
    </ul>
  </div>
</nav>	


<form method="post" action="mostrarVehiculo">

<div class="container">
  <h2>Busqueda de vehiculos:</h2> <br>
  <div class="panel-group">

    <div class="panel panel-primary">
      <div class="panel-heading">Complete un dato de busqueda</div>
      <div class="panel-body">

				  <table class="table table-striped">
				    <thead>
				      <tr>
						 <th>DOMINIO:</th>
						 <th>AGENTE LABRANTE:</th>
						 <th>INFRACTOR/CONTRAVENTOR:</th>
						 <th>LEVANTADO EN:</th> 
						 <th>FECHA DE INGRESO:</th> 
						    
				      </tr>
				    </thead>
				    <tbody>
				
									<tr>
										<td>
										<p class="boton-margen-inferior">
										<input class="input-ingresar"  name="dominio" type="text"/></p></td>
										
										<td><p class="boton-margen-inferior">
										<input class="input-ingresar"  name="agente" type="text"/></p>	
										</td>
				
										<td><p class="boton-margen-inferior">
										<input class="input-ingresar"  name="infractor" type="text"/></p>
										</td>
										
										<td><p class="boton-margen-inferior">
										<input class="input-ingresar"  name="levantadoEn" type="text"/></p>
										</td>
										
										<td><p class="boton-margen-inferior"><input class="input-ingresar"	id="datepicker_fecha" /></p></td>
										
									</tr>
				    </tbody>
				  </table>
				  		<div class="col-md-16 text-center">	<p class="boton-margen-inferior"><input class="boton input-ingresar" type="submit" name="buscar" value="Buscar"/></p>
						</div>
		</div>
		</div>
	</div>	
</div>	
</form>

	
	 <%@include file="footer.jsp" %>
</body>
</html>