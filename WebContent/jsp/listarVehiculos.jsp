<%@page import="com.dgcactysv.funciones.Funciones"%>
<%@page import="com.dgcactysv.modelo.Registro" %>
<%@page import="java.util.ArrayList"%>
<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="ISO-8859-1"%>
<%@include file="header.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1">

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
  <h2 class="text-center">Listado de vehiculos</h2> <br>
  <div class="panel-group">

    <div class="panel panel-primary">
      <div class="panel-heading">Esta tabla representa los vehiculos en playa que superaron los 60 días de estadia.</div>
      <div class="panel-body">

  <table class="table table-striped table-bordered table-hover table-responsive" id="mydata2">
    <thead>
      <tr>
		 <th>REGISTRO</th>
		 <th>FECHA</th>
		 <th>DESCRIPCION</th>
		 <th>DOMINIO</th>
		 <th>MARCA</th>
		 <th>MODELO</th>
		 <th>MOTIVO</th>
		 <th>PLAYA</th>
		 <th>NOTIFICADO</th>        
      </tr>
    </thead>
    <tbody>
					<%
					ArrayList<Registro> vehiculos = (ArrayList<Registro>) request.getAttribute("lstRegistros");
						for (Registro vehiculo : vehiculos) {
					%>
					<tr>
						<td><%=vehiculo.getRegistro()%></td>
						<td><%=Funciones.traerFechaCorta4(vehiculo.getFechaIng())%></td>
						<td><%=vehiculo.getDescripcion()%></td>
						<td><%=vehiculo.getDominio()%></td>
						<td><%=vehiculo.getMarca()%></td>
						<td><%=vehiculo.getModelo()%></td>
						<td><%=vehiculo.getMotivo()%></td>
						<td>Rio_cuarto</td>						
						<td><input type="checkbox"></td>
						
					</tr>
					<% } %>
    </tbody>
  </table>

			<div class="col-md-2"></div><p> </p>
			<div class="col-md-8 text-center">			
			<form method="post" action="/www.playasdeacarreo.gob/actualizarListaSesenta"><input class="btn btn-primary btn-lg" type="submit" name="cargarNotificados" value="Cargar Notificados"/>
			</form>	</div>
				<BR>
			</div>	
</div>
</div>
</div>
	
<div class="container">
  <div class="panel-group">
				<div class="row">
				 <div class="col-lg-8">
	    <div class="panel panel-primary">
	      <div class="panel-heading">Enviar listado por mail</div>
	      <div class="panel-body">
	
				<form action="EmailSendingServlet" method="post">

						<label for="para">Para :</label>
						<p class="boton-margen-inferior">
						<input type="text" name="recipient" size="50"/></p>
					
						<label for="para">Asunto :</label>
						<p class="boton-margen-inferior">
						<input type="text" name="subject" size="50" value="Listado más de 60 dias"/></p>
					
						<label for="para">Cuerpo :</label>
						<p class="boton-margen-inferior">
						<textarea rows="15" cols="80" name="content"></textarea></p>
					
						<p class="boton-margen-inferior">
						<input class="btn btn-primary btn-lg" type="submit" value="Enviar"/>
						</p>	
				
				</form>	
			</div>
		</div>
		</div>
				</div>
</div>
</div>
</body>
<%@include file="footer.jsp" %>
</html>