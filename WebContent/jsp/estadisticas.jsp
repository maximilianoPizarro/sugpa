<%@page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="ISO-8859-1"%>
<%@include file="header.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<title>Estadisticas</title>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">


<link rel="stylesheet"
	href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
 <script
	src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
	


<script>
 $.datepicker.regional['es'] = {
 closeText: 'Cerrar',
 prevText: '< Ant',
 nextText: 'Sig >',
 currentText: 'Hoy',
 monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
 monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
 dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
 dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
 dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
 weekHeader: 'Sm',
 dateFormat: 'dd/mm/yy',
 firstDay: 1,
 isRTL: false,
 showMonthAfterYear: false,
 yearSuffix: ''
 };
 $.datepicker.setDefaults($.datepicker.regional['es']);
$(function () {
$("#datepicker_desde").datepicker();
});
$(function () {
	$("#datepicker_hasta").datepicker();
	});
$(document).ready(function(){
    $("#hide").click(function(){
        $("#div1").hide();
    });
    $("#show").click(function(){
        $("#div1").show();
    });
});	
</script>


<title>Playas de Acarreo DGCACTYSV:</title>
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

<div class="container">
  <h2>Estadisticas:</h2> <br>
  <div class="panel-group">

    <div class="panel panel-primary">
      <div class="panel-heading">Realizar una accion</div>
      <div class="panel-body"> 
				  <table class="table table-striped">
				    <thead>
				      <tr>
						 <th>TIPO</th>
						 <th>MOTIVO</th>
						 <th>FECHA DESDE</th>
						 <th>FECHA HASTA</th>    
				      </tr>
				    </thead>
				    <tbody>
				
									<tr>
										<td>
										<p class="boton-margen-inferior">			    
										<select class="form-control input-lg" id="tipo" name="tipo">
										  <option value="-1" selected="">Selecciona</option>
									      <option value="moto">VEHICULO</option>
									      <option value="auto">MOTOVEHICULO</option>
									    </select></p></td>
										<td><p class="boton-margen-inferior">
											<select class="form-control input-lg" id="motivo" name="motivo">
													<option value="-1" selected="">Selecciona</option>
													<option value="todos">TODOS</option>
													<option value="doc">DOCUMENTACION</option>
													<option value="est">ESTACIONAMIENTO PROHIBIDO</option>
													<option value="placas">PLACAS DE DOMINIO</option>
													<option value="alcoholemia">ALCOHOLEMIA</option>
													<option value="abandonado">ABANDONADO</option>
													<option value="uber">UBER</option>
											</select></p>
										</td>
				
									 <td><p class="boton-margen-inferior"><input class="form-control input-lg"	id="datepicker_desde" /></p></td>
									<td><p class="boton-margen-inferior"><input class="form-control input-lg" id="datepicker_hasta" /></p></td>
										
									</tr>
				    </tbody>
				  </table>
				  
				  <div id="div1" style="display:none;">				
				<img  src="img/Autos.jpg" class="img-rounded" alt="Cinque Terre" width="957" height="569"></div>
				<p> </p>
				<div class="col-md-8">
				<br>	
				<button id="show" class="btn btn-primary btn-lg">Mostrar Grafico</button>
				<br>
				<br>
				<button id="hide" class="btn btn-primary btn-lg">Ocultar Grafico</button>
				</div>	
				  
				</div> 
				</div>
				<br>
				<br>		
				<div class="col-md-16 text-center">
				<p class="boton-margen-inferior">
				    <a onclick="printPage()" class="btn btn-primary btn-lg">
				      <span class="glyphicon glyphicon-print"></span> Imprimir Grafico 
				    </a>
				</p>
				</div>
</div>
</div>

<%@include file="footer.jsp" %>
</body>
 
</html>