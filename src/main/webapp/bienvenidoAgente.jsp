<%@page import="com.dgcactysv.funciones.Funciones"%>
<%@page import="com.dgcactysv.modelo.Registro" %>
<%@page import="java.util.ArrayList"%>
<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="ISO-8859-1"%>
<%@include file="header.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta name="viewport" content="width=device-width, initial-scale=1">


<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
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
		      <li><a href="buscar">Busqueda Avanzada</a></li>
		      <li><a href="cargar">Ingresar Vehiculo</a></li>
		      <li><a href="#"><span class="glyphicon glyphicon-user"></span> <%=request.getAttribute("usuario")%></a></li>
      		  <li><a href="inicio"><span class="glyphicon glyphicon-log-in"></span> Salir</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- FIN DE NAVEGACIÓN PRINCIPAL --> 

<div class="container">
  <h2>Playa rio cuarto</h2> <br>
  <div class="panel-group">

    <div class="panel panel-primary">
      <div class="panel-heading">Lista de vehiculos en playa</div>
      <div class="panel-body">
			  <table class="table table-striped" id="mydata">    
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
					 <th>AGENTE DE PLAYA</th>
					 <th>AGENTE LABRANTE</th>
					 <th>INFRACTOR/CONTRAVENTOR</th>
					 <th>CHOFER DE GRUA</th>
					 <th>LEVANTADO EN</th>
			      </tr>
			    </thead>
			
			  </table>		
  
		 <div class="col-md-8 text-center">
		<p class="boton-margen-inferior">
		    <a onclick="printPage()" class="btn btn-primary btn-l">
		      <span class="glyphicon glyphicon-print"></span> Imprimir Listado 
		    </a>&nbsp;&nbsp;&nbsp;&nbsp;
		    <a onclick="tableToExcel('mydata', 'Listado de vehiculos')" class="btn btn-primary btn-l">
		      <span class="glyphicon glyphicon-export"></span> Exportar a Excel 
		    </a>
		</p>
		
		</div>
		</div>
	</div>
</div>
</div>		



<div class="container">
  <h2>Contabilizacion</h2> <br>
  <div class="panel-group">

    <div class="panel panel-primary">
      <div class="panel-heading">Contabilizacion de vehiculos en playa</div>
      <div class="panel-body">
	
			<table class="table table-striped">
			    <thead>
			      <tr>
					 <th>TIPO</th>
					 <th>VEHICULOS</th>
					 <th>MOTOVEHICULOS</th>
					 <th>TOTAL</th>		 
			      </tr>
			    </thead>
			    <tbody>
								<tr>
									<td>CANTIDAD</td>
									<td><%=request.getAttribute("contabilizacionAutos")%></td>
									<td><%=request.getAttribute("contabilizacionMotos") %></td>
									<td><%=request.getAttribute("contabilizacion")%></td>
								</tr>
			    </tbody>
			</table>
		</div>
	</div>
</div>
</div>			
 
 
 
</body>
<%@include file="footer.jsp" %>
</html>