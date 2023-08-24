<%@page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="ISO-8859-1"%>
<%@page import="com.dgcactysv.modelo.Registro" %>
<%@include file="header.jsp"%>	
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>


</head>
<body>

<script src="js/jquery-1.12.4.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/validarDatosEgreso.js"></script>

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
												
												<label for="motivo">Motivo/s:</label> 
												<p class="boton-margen-inferior">
												<%=vehiculo.getMotivo()%></p>
									
								    </div>
								    </div>
								    
								  <br>	
								   
								          <div class="panel panel-primary">
		     								 <div class="panel-heading">Datos de la persona</div>
		      								 <div class="panel-body">
																								
												<div id="divTipo" class="form-group">
												<label for="tipo">Tipo:</label>
												<p class="boton-margen-inferior">
												<select class="form-control input-lg" id="tipo"  name="tipo" onchange='validarDatosEgreso(this.form, "<%=vehiculo.getMotivo()%>");'>
													<option value="-1" selected="">Seleccionar</option>
													<option value="titular">TITULAR/CONDUCTOR AUTORIZADO</option>
													<option value="apoderado">APODERADO</option>													
													<option value="policia">FUERZA DE SEGURIDAD</option>
												</select></p>
												</div>
															
												<div id="divPActaDeEntrega" class="form-group">
										      	<label for="actaDeEntrega">¿Presenta Acta de entrega? SI</label>
										      	<input class="boton-margen-inferior" type="radio" name="actaDeEntrega" id="actaDeEntrega" value="SI" onclick='validarDatosEgreso(this.form, "<%=vehiculo.getMotivo()%>");'>
										      	<label for="actaDeEntrega">NO</label>
										      	<input class="boton-margen-inferior" type="radio" name="actaDeEntrega" id="actaDeEntrega" value="NO" onclick='validarDatosEgreso(this.form, "<%=vehiculo.getMotivo()%>");'>
										      	</div>
												
												<div id="divPLicencia" class="form-group" style="display: none">
										      	<label for="presentaLicencia">¿Presenta Licencia? SI</label>
										      	<input class="boton-margen-inferior" type="radio" name="presentaLicencia" id="presentaLicencia" value="SI" onclick='validarDatosEgreso(this.form, "<%=vehiculo.getMotivo()%>");'>
										      	<label for="presentaLicencia">NO</label>
										      	<input class="boton-margen-inferior" type="radio" name="presentaLicencia" id="presentaLicencia" value="NO" onclick='validarDatosEgreso(this.form, "<%=vehiculo.getMotivo()%>");'>
										      	</div>
												
												<div id="divPActaZ" class="form-group" style="display: none">
										      	<label for="presentaActaZ">¿Presenta Acta Z? SI</label>
										      	<input class="boton-margen-inferior" type="radio" name="presentaActaZ" id="presentaActaZ" value="SI" onclick='validarDatosEgreso(this.form, "<%=vehiculo.getMotivo()%>");'>
										      	<label for="presentaLicencia">NO</label>
										      	<input class="boton-margen-inferior" type="radio" name="presentaActaZ" id="presentaActaZ" value="NO" onclick='validarDatosEgreso(this.form, "<%=vehiculo.getMotivo()%>");'>
										      	</div>
												
												<p>
										      	<label for="tipo">Retira Acarreado (SI/NO):</label>
										      	<input class="boton-margen-inferior" type="checkbox" name="acarreado" value="acarreado">
										      	</p>

												<label for="apellido">Apellido:</label> 
												<p class="boton-margen-inferior">
												<input class="form-control input-lg" id="apellido" required name="apellido" type="text" /></p>
												
												<label for="nombre">Nombre:</label>
												<p class="boton-margen-inferior">
												<input class="form-control input-lg" required name="nombre" type="text" /></p>
												
												<label for="tipo">Tipo de documento:</label>
												<p class="boton-margen-inferior">
												<select class="form-control input-lg" id="tipoDoc"  name="tipoDoc">
													<option value="-1" selected="">Seleccionar</option>
													<option value="DNI">DNI</option>
													<option value="LE">LE</option>
													<option value="LC">LC</option>													
													<option value="EX">EX</option>
												</select></p>
												
												<label for="dni">Numero de documento:</label> 
												<p class="boton-margen-inferior">
												<input class="form-control input-lg" required name="dni" type="text" /></p>
									
								    </div>
								    </div>
								    </div>
								    
								    <div class="col-lg-4">
								          <div class="panel panel-primary">
		     								 <div class="panel-heading">Documentacion presentada</div>
		      								 <div class="panel-body">
		      								 
		      								 	<div id="divActaEntrega" class="form-group" style="display: none">
									              <label for="actaEntrega">Copia Acta de Entrega: </label>
									              <input id="actaEntrega" type="file" name="actaEntrega">
									              <p class="help-block">Hasta 2Mb en formato <strong>pdf</strong></p>
									            </div> 
		      								
									            <div id="divDNI" class="form-group">
									              <label for="dniDoc">Copia DNI: </label>
									              <input id="dniDoc" type="file" name="dniDoc">
									              <p class="help-block">Hasta 2Mb en formato <strong>pdf</strong></p>
									            </div> 

									            <div id="divLicencia" class="form-group" style="display: none">
									              <label for="licencia">Copia Licencia: </label>
									              <input id="licencia" type="file" name="licencia">
									              <p class="help-block">Hasta 2Mb en formato <strong>pdf</strong></p>
									            </div>

												<div id="divActaZ" class="form-group" style="display: none">
													<label for="actaZ">Copia Acta Z: </label>
													<input id="actaZ" type="file" name="actaZ">
													<p class="help-block"> Hasta 2Mb en formato <strong>pdf</strong></p>
												</div>
												
												<div id="divCedulaVerde" class="form-group" style="display: none">
									              <label for="cedulaVerde">Copia Cedula Verde: </label>
									              <input id="cedulaVerde" type="file" name="cedulaVerde">
									              <p class="help-block">Hasta 2Mb en formato <strong>pdf</strong></p>
									            </div>
									            
									            <div id="divCedula" class="form-group" style="display: none">
									              <label for="cedula">Copia Cedula o Titulo: </label>
									              <input id="cedula" type="file" name="cedula">
									              <p class="help-block">Hasta 2Mb en formato <strong>pdf</strong></p>
									            </div> 
									            
									            <div id="divSeguro" class="form-group" style="display: none">
									              <label for="seguro">Copia Seguro: </label>
									              <input id="seguro" type="file" name="seguro">
									              <p class="help-block">Hasta 2Mb en formato <strong>pdf</strong></p>
									            </div> 
		
									            <div id="divVTV" class="form-group" style="display: none">
									              <label for="vtv">Copia VTV: </label>
									              <input id="vtv" type="file" name="vtv">
									              <p class="help-block">Hasta 2Mb en formato <strong>pdf</strong></p>
									            </div>
												
									            <div id="divDGAI" class="form-group" style="display: none">
									              <label for="DGAI">Copia DGAI: </label>
									              <input id="DGAI" type="file" name="DGAI">
									              <p class="help-block">Hasta 2Mb en formato <strong>pdf</strong></p>
									            </div> 

												<div id="divPoder" class="form-group" style="display: none">
									              <label for="poder">Copia Poder Firmado: </label>
									              <input id="poder" type="file" name="poder">
									              <p class="help-block">Hasta 2Mb en formato <strong>pdf</strong></p>
									            </div>
									            
									            <div id="divOficio" class="form-group" style="display: none">
									              <label for="oficio">Copia Oficio Judicial: </label>
									              <input id="oficio" type="file" name="oficio">
									              <p class="help-block">Hasta 2Mb en formato <strong>pdf</strong></p>
									            </div>

								    </div>
								    </div>
								    </div>
								    
								    <div class="col-lg-3">
								          <div class="panel panel-primary">
		     								 <div class="panel-heading">Confirmar egreso</div>
		      								 <div class="panel-body">
								            <label for="inputdefault">Observaciones:</label>
											<p class="boton-margen-inferior">
								            <textarea class="form-control input-lg" name="observaciones" rows="4" cols="20"></textarea></p>
								 
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