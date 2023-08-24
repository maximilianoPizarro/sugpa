<%@page import="com.dgcactysv.funciones.Funciones"%>
<%@page import="com.dgcactysv.modelo.Vehiculo" %>
<%@page import="java.util.List"%>
<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="ISO-8859-1"%>
<%@include file="header.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
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
		      <li><a href="buscar">Buscar Vehiculo</a></li>
		      <li><a href="listarVehiculosPlaya">Fuera de plazo</a></li>
		      <li><a href="listarVehiculos">Más de 60 días</a></li>
		      <li><a href="#"><span class="glyphicon glyphicon-user"></span> <%=request.getAttribute("usuario")%></a></li>
      		  <li><a href="inicio"><span class="glyphicon glyphicon-log-in"></span> Salir</a></li>
      		</ul> 
          </div>
        </div>
      </div>
    </nav>
    <!-- FIN DE NAVEGACIÓN PRINCIPAL --> 


<div class="container">


  <h2>Playa rio cuarto</h2>
  <p>Esta tabla representa los vehiculos en playa:</p>            
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
		 <th>MODIFICADO POR</th>        
      </tr>
    </thead>
    <tbody>
					<%
						List<Vehiculo> vehiculos = Funciones.getLstVehiculos();
						for (Vehiculo vehiculo : vehiculos) {
					%>
					<tr>
						<td><%=vehiculo.getRegistro()%></td>
						<td><%=vehiculo.getFecha()%></td>
						<td><%=vehiculo.getHora()%></td>
						<td><%=vehiculo.getDominio()%></td>
						<td><%=vehiculo.getMarca()%></td>
						<td><%=vehiculo.getModelo()%></td>
						<td><%=vehiculo.getMotivo()%></td>
						<td><%=vehiculo.getUsuario()%></td>
						
					</tr>
					<% } %>
    </tbody>
  </table>
  
  <h2>Playa Sarmiento</h2>
  <p>Esta tabla representa los vehiculos en playa:</p> 
  
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
      </tr>
    </thead>
    <tbody>
					<%
						for (Vehiculo vehiculo : vehiculos) {
					%>
					<tr>
						<td><%=vehiculo.getRegistro()%></td>
						<td><%=vehiculo.getFecha()%></td>
						<td><%=vehiculo.getHora()%></td>
						<td><%=vehiculo.getDominio()%></td>
						<td><%=vehiculo.getMarca()%></td>
						<td><%=vehiculo.getModelo()%></td>
						<td><%=vehiculo.getMotivo()%></td>
						
					</tr>
					<% } %>
    </tbody>
  </table> 
  
<table class="table table-striped">
    <h2>Estado listados</h2> 
    <thead>
      <tr>
		 <th>MOTIVO</th>
		 <th>FUERA DE PLAZO</th>
		 <th>MAS DE 60 DÍAS</th> 
      </tr>
    </thead>
    <tbody>
					<tr>
						<td>CONTABILIZACION</td>
						<td>60</td>
						<td>40</td>
						
					</tr>
    </tbody>
  </table>
  
   
</div>

	

 <%@include file="footer.jsp" %>
</body>
</html>