<%@page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="ISO-8859-1"%>
<%@page import="com.dgcactysv.modelo.Registro" %>
<%@include file="header.jsp"%>	
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Playas de Acarreo DGCACTYSV:</title>

<!-- nav bar -->
  <meta name="viewport" content="width=device-width, initial-scale=1">


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
		      <li><a href="#"><span class="glyphicon glyphicon-user"></span> <%=request.getAttribute("usuario")%></a></li>
      		  <li><a href="inicio"><span class="glyphicon glyphicon-log-in"></span> Salir</a></li>
      		</ul> 
          </div>
        </div>
      </div>
    </nav>
    <!-- FIN DE NAVEGACIÓN PRINCIPAL --> 
 

<form method="post" action="egresado">

<div class="container">
  <h2>Egresar vehiculo:</h2> <br>
  <div class="panel-group">

    <div class="panel panel-primary">
      <div class="panel-heading">Complete los datos del egreso</div>
      <div class="panel-body">
								  <div class="row">
								  
								  	<div class="col-lg-4">
								          <div class="panel panel-primary">
		     								 <div class="panel-heading">Datos del vehiculo</div>
		      								 <div class="panel-body">
										      		<%Registro vehiculo= (Registro) request.getAttribute("vehiculo"); %>		 
												
												<label for="tipo">Registro:</label>
												<p class="boton-margen-inferior">
												<%=vehiculo.getRegistro()%></p>
												
												<label for="apellido">Dominio:</label> 
												<p class="boton-margen-inferior">
												<%=vehiculo.getDominio()%></p>
												
												<label for="nombre">Marca:</label>
												<p class="boton-margen-inferior">
												<%=vehiculo.getMarca()%></p>
												
												<label for="dni">Modelo:</label> 
												<p class="boton-margen-inferior">
												<%=vehiculo.getModelo()%></p>
									
								    </div>
								    </div>
								    
								  <br>	
								  
								   
								          <div class="panel panel-primary">
		     								 <div class="panel-heading">Datos de la persona</div>
		      								 <div class="panel-body">
										      	
												
												<label for="tipo">Tipo:</label>
												<p class="boton-margen-inferior">
												<select class="form-control input-lg" id="tipo"  name="tipo">
													<option value="-1" selected="">Selecciona</option>
													<option value="titular">TITULAR</option>
													<option value="ca">CONDUCTOR AUTORIZADO</option>
													<option value="policia">FUERZA DE SEGURIDAD</option>
												</select></p>
												
												<label for="apellido">Apellido:</label> 
												<p class="boton-margen-inferior">
												<input class="form-control input-lg" required name="apellido" type="text" /></p>
												
												<label for="nombre">Nombre:</label>
												<p class="boton-margen-inferior">
												<input class="form-control input-lg" required name="nombre" type="text" /></p>
												
												<label for="dni">DNI:</label> 
												<p class="boton-margen-inferior">
												<input class="form-control input-lg" required name="dni" type="text" /></p>
									
								    </div>
								    </div>
								    </div>
								    
								    <div class="col-lg-4">
								          <div class="panel panel-primary">
		     								 <div class="panel-heading">Documentacion presentada</div>
		      								 <div class="panel-body">
												<label for="dniDoc">Copia DNI: </label> 
												<p class="boton-margen-inferior">
												<input type="file"  name="dniDoc" /></p>
												 
												<label for="licencia">Copia Licencia: </label> 
												<p class="boton-margen-inferior">
												<input type="file"  name="licencia" /></p>
												
												<label for="cedula">Copia Cedula: </label> 
												<p class="boton-margen-inferior">				
												<input type="file"  name="cedula" /></p>
												 
												<label for="seguro">Copia Seguro: </label> 
												<p class="boton-margen-inferior">
												<input type="file"  name="seguro" /></p>
												 
												<label for="comunicado">Copia DGAI: </label> 
												<p class="boton-margen-inferior">
												<input type="file"  name="comunicado" /></p>
														
								    </div>
								    </div>
								    </div>
								    
								    <div class="col-lg-3">
								          <div class="panel panel-primary">
		     								 <div class="panel-heading">Confirmar egreso</div>
		      								 <div class="panel-body">
								            <label for="inputdefault">Observaciones:</label>
											<p class="boton-margen-inferior">
								            <textarea name="observaciones" rows="4" cols="20"></textarea></p>
								 
											<p class="boton-margen-inferior">
											<input onclick="mensajeConfirma()" class="btn btn-primary btn-lg" type="submit" name="cargar"	value="Cargar Egreso" /></p>
								      </div>
								      </div>
								      </div>
								      
								
								</div>
								  	
				</div>
								
			</div>
		</div>	
</div>		
</form>

	<%@include file="footer.jsp"%>
</body>
</html>