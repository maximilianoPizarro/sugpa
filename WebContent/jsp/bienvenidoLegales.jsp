<%@page import="com.dgcactysv.funciones.Funciones"%>
<%@page import="com.dgcactysv.modelo.Registro" %>
<%@page import="java.util.ArrayList"%>
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
      <li><a href="listarVehiculosPlaya">Listado Playas</a></li>
    </ul>  
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> <%=request.getAttribute("usuario")%></a></li>
      <li><a href="inicio"><span class="glyphicon glyphicon-log-in"></span> Salir</a></li>
    </ul>
  </div>
</nav>

<div class="container">
  <h2>Busqueda de vehiculos</h2>
   
  <p>Lista de vehiculos de la reparticion:</p>           
  <table class="table table-striped table-bordered table-hover" id="mydata2">
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
		 <th>DETALLE</th>
      </tr>
    </thead>
    

    <tbody>
					<%
					ArrayList<Registro> vehiculos= (ArrayList<Registro>) request.getAttribute("lstRegistros");
					
					for (Registro vehiculo : vehiculos) {
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
						<td><img id="lupa" style="cursor: pointer;" src="img/detail.png" data-toggle="modal" data-target="#mostrarDetalle" /></td>		
					</tr>
					<% } %>
    </tbody>
  </table>
  
</div> 

<!-- Modal -->
<div id="mostrarDetalle" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
  <div class="modal-dialog modal-lg">
  
   <!-- Modal content-->
     
     <div class="modal-content" >
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Detalles del registro</h4>
          
        <p id=row>  
        </div> 
        
        <div class="modal-body">
			  <table class="table table-striped table-bordered table-hover" >
			    <thead>
			      <tr>
					 <th>FECHA</th>
					 <th>HORA</th>
					 <th>ACTA CONTRAVENCIONAL</th>
					 <th>BOLETA DE CITACION</th>
					 <th>AGENTE LABRANTE</th>
			      </tr>
			    </thead>
			    
			
			    <tbody>
			
								<tr>
									<td>12/06/2017</td>
									<td>12:00</td>
									<td>123455</td>
									<td>Z0001244</td>
									<td>GALIAN MATIAS</td>
							</tr>
			    </tbody>
			  </table>
			  
			  	<table class="table table-striped table-bordered table-hover" >
			    <thead>
			      <tr>
					 <th>LEVANTADO EN</th>
					 <th>CHOFER DE GRUA</th>
					 <th>AGENTE DE PLAYA</th>
					 <th>NUMERO DE MOTOR</th>
					 <th>NUMERO DE CHASIS</th>
			      </tr>
			    </thead>
			    
			
			    <tbody>
			
								<tr>
									<td>100</td>
									<td>FUENTES</td>
									<td>PIZARRO</td>
									<td>14235235235</td>
									<td>12343423E</td>
							</tr>
			    </tbody>
			  </table>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div> 	

</body>

 <%@include file="footer.jsp" %>
</html>