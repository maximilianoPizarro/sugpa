<%@page import="com.dgcactysv.funciones.Funciones"%>
<%@page import="com.dgcactysv.modelo.Vehiculo" %>
<%@page import="com.dgcactysv.modelo.Registro" %>
<%@page import="com.dgcactysv.funciones.Funciones" %>
<%@page import="java.util.List"%>
<%@include file="header.jsp" %>
<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Playas de Acarreo DGCACTYSV:</title>

<script>
	$(document).ready(function(){
	    $("#verDoc").click(function(){
	        $("object").hide();
	    });
	    $("#verDoc").click(function(){
	        $("object").show();
	    });
	});

</script>

</head>
<body>

<!-- NAVEGACIÓN PRINCIPAL -->
    <nav class="navbar navbar-default" role="navigation">
      <div class="container">
        <div class="row">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#" title="Sistema Ušnico de Gestión de Playas de Acarreo">SUGPA</a>
          </div>
          <div class="collapse navbar-collapse" id="main-nav">
            <ul class="nav navbar-nav navbar-right">
		      <li><a href="inicioo">Inicio</a></li>
		      <li><a href="buscar">Volver a buscar</a></li>
		      <li><a href="#"><span class="glyphicon glyphicon-user"></span> <%=request.getAttribute("usuario")%></a></li>
      		  <li><a href="inicio"><span class="glyphicon glyphicon-log-in"></span> Salir</a></li>
      		</ul> 
          </div>
        </div>
      </div>
    </nav>
    <!-- FIN DE NAVEGACIÓN PRINCIPAL --> 

<div class="container">
  <h2>Resultado de busqueda:</h2> <br>
  <div class="panel-group">

    <div class="panel panel-primary">
      <div class="panel-heading">Realizar una accion</div>
      <div class="panel-body">
       
						  <table class="table table-striped">
						    <thead>
						      <tr>
								 <th>REGISTRO</th>
								 <th>FECHA</th>
								 <th>HORA</th>
								 <th>DOMINIO</th>
								 <th>MARCA</th>
								 <th>MODELO</th>
								 <th>MOTIVO</th>
								 <th>DESCRIPCION</th>
								 <th>ACTA DE COMPROBACION</th>
						      </tr>
						    </thead>
						    <tbody>
							 			<%Registro vehiculo = (Registro) request.getAttribute("vehiculo");
							 			
							 			//Automotor automotor=new Automotor();
							 			//automotor=(Automotor) request.getAttribute("automotor");
							 			
											 %>		 
											<tr>
												<td><%=vehiculo.getRegistro()%></td>
												<td><%=Funciones.traerFechaCorta4(vehiculo.getFechaEgr())%></td>
												<td><%=vehiculo.getHoraIng()%></td>
												<td><%=vehiculo.getDominio()%></td>
												<td><%=vehiculo.getMarca()%></td>
												<td><%=vehiculo.getModelo()%></td>
												<td><%=vehiculo.getMotivo()%></td>
												<td><%=vehiculo.getDescripcion()%></td>
												<td><%=vehiculo.getActaDeComprobacion()%></td>	
											</tr>
											
						
						    </tbody>
						    
						  </table>
						  
						      				<%if(request.getAttribute("usuario").equals("Miraglia Walter")==true && vehiculo.getRegistro().equals("null")==false ){
												%>
													<table class="table table-striped">
													    <thead>
													      <tr>
															 <th></th>			    
													      </tr>
													    </thead>
													    <tbody>
																		<tr>												
																			<td><form action="editarRegistro">
																			<input class="btn btn-primary btn-lg" type="submit" name="editar" value="Editar Registro"/>	
																			</form></td>					
																		</tr>
													    </tbody>
													  </table>	
											  <table class="table table-striped">
											    <thead>
											      <tr>
													 <th><a href="img/dni.pdf" download title="Descargar documento">DNI</a></th>
													 <th><a href="img/licencia.pdf" download title="Descargar documento">LICENCIA</a></th>
													 <th><a href="img/cedula.pdf" download title="Descargar documento">CEDULA</a></th>
											      </tr>
											    </thead>
											    <tbody>
																<tr>
																	<td><object width="300" height="400" data="img/dni.pdf"></object></td>
																	<td><object width="300" height="400" data="img/licencia.pdf"></object></td>
																	<td><object width="300" height="400" data="img/cedula.pdf"></object></td>
																</tr>
											    </tbody>
											  </table>
											  
											  	<table class="table table-striped">
											    <thead>
											      <tr>
													 <th><a href="img/seguro.pdf" download title="Descargar documento">SEGURO</a></th>
													 <th><a href="img/dgai.pdf" download title="Descargar documento">DGAI</a></th>
											      </tr>
											    </thead>
											    <tbody>
																<tr>
																	<td><object width="300" height="400" data="img/seguro.pdf"></object></td>
																	<td><object width="300" height="400" data="img/dgai.pdf"></object></td>
																</tr>
											    </tbody>
											  </table>
											  
											  
											
											<%} %>
											
											<%if(request.getAttribute("usuario").equals("Decurgez Mateo")==true && vehiculo.getRegistro().equals("null")==false){%>
												<div class="col-md-16 text-center">
												<form action="editarRegistro">
												<p class="boton-margen-inferior">
												<input class="btn btn-primary btn-lg" type="submit" name="editar" value="Editar Registro"/></p>	
												</form>
												</div>
											<%} %>
						
											<%if(request.getAttribute("usuario").equals("Pizarro Maximiliano")==true && vehiculo.getRegistro().equals("null")==false){%>
											<form action="egreso">
												<input class="btn btn-primary btn-lg" type="submit" name="egresar" value="Egresar"/>		
											</form>	
											<p class="boton-margen-inferior"></p>
											<form action="editarRegistro">
												<input class="btn btn-primary btn-lg" type="submit" name="editar" value="Editar Registro"/>
											</form>
											<%} %>
											
											<%if(request.getAttribute("usuario").equals("Pietrafesa Sergio")==true && vehiculo.getRegistro().equals("null")==false){%>
											<form action="egreso">
											<div class="col-md-16 text-center">
												<p class="boton-margen-inferior">
												<input class="btn btn-primary btn-lg" type="submit" name="egresar" value="Egresar vehiculo"/></p>	
											</div>
											</form>	
											<%} %>
											
						    				<%if(vehiculo.getRegistro().equals("null")==true){
												String mensaje="No se encontro el vehiculo";%>
											<h2><%=mensaje %></h2>
											<%} %>
						</div>

</div>
</div>
</div>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
	
<%@include file="footer.jsp" %>
</body>
</html>