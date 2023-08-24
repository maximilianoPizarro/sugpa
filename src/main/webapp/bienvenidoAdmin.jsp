<%@page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
 <%@include file="header.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Playas de Acarreo DGCACTYSV:</title>
</head>
<body>


<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">SUGPA</a>
    </div>
    <ul class="nav navbar-nav">
      <li><a href="buscar">Buscar Avanzada</a></li>
      <li><a href="verEstadisticas">Ver estadisticas</a></li>
      <li><a href="listarVehiculosPlaya">Listado Playas</a></li>
      <li><a href="listarVehiculos">Más de 60 días</a></li>
      <li><a href="egreso">Egresar vehiculo</a></li>   </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> <%=request.getAttribute("usuario")%></a></li>
      <li><a href="inicio"><span class="glyphicon glyphicon-log-in"></span> Salir</a></li>
    </ul>
  </div>
</nav>	



<div class="container">
  <h2>Estado Playas de Acarreo</h2> <br>
  <div class="panel-group">
				<div class="row">
				 <div class="col-lg-18">
    <div class="panel panel-primary">
      <div class="panel-heading">Graficos de ocupacion en tiempo real de las playas</div>
      <div class="panel-body">

		      <table class="table table-striped">
		    <thead>
		      <tr>
				 <th></th>
				 <th></th>
				 <th></th>
				 <th></th> 
		      </tr>
		    </thead>
		    <tbody>
							<tr>
							<!--<td><img src="img/ocupacion.jpg" class="img-rounded" alt="Cinque Terre" width="304" height="236"> </td>  -->
								<td><img src="img/ocupacion.jpg" class="img-rounded" alt="Cinque Terre" width="270" height="200"> </td>
								<td><img src="img/ocupacion2.jpg" class="img-rounded" alt="Cinque Terre" width="270" height="200"> </td>
								<td><img src="img/ocupacion3.jpg" class="img-rounded" alt="Cinque Terre" width="270" height="200"> </td>
								<td><img src="img/ocupacion4.jpg" class="img-rounded" alt="Cinque Terre" width="270" height="200"> </td>
								
							</tr>
												
		
		    </tbody>
		    
		  </table>
		 </div>   
	</div>
	</div>
</div>		 
</div>
</div>

<div class="container">
  <h2>Busqueda de vehiculos</h2> <br>
  <div class="panel-group">

    <div class="panel panel-primary">
      <div class="panel-heading">Lista de vehiculos de la reparticion</div>
      <div class="panel-body">
			
			  <table class="table table-striped table-bordered table-hover table-responsive" id="mydata">    
			    <thead>
			      <tr>
			      	 <th></th>
					 <th>REGISTRO</th>
					 <th>DOMINIO</th>
					 <th>MARCA</th>
					 <th>MODELO</th>
					 <th>MOTIVO</th>
					 <th>DESCRIPCION</th>
					 <th>ACTA C</th>
					 <th>ACTA Z</th>
					 <th>ACTA CONTRAVENCIONAL</th>
			      </tr>
			    </thead>
			
			  </table>		
  
		 <div class="col-md-8 text-center">
		<p class="boton-margen-inferior">
		    <a onclick="printPage()" class="btn">
		      <span class="glyphicon glyphicon-print"></span> Imprimir Listado 
		    </a>
		</p>
		</div>
		</div>
	</div>
</div>
</div>		
	
	
	<!--<div class="col-md-2"><img class="imagen-torta" src="img/Torta.jpg"></div>  -->	
 <%@include file="footer.jsp" %>
</body>
</html>