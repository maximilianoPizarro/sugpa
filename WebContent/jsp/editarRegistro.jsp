<%@page import="com.dgcactysv.funciones.Funciones"%>
<%@page import="com.dgcactysv.modelo.Registro" %>
<%@page import="java.util.List"%>
<%@include file="header.jsp" %>
<%@page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
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
      <li><a href="inicioo">Inicio</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> <%=request.getAttribute("usuario")%></a></li>
      <li><a href="inicio"><span class="glyphicon glyphicon-log-in"></span> Salir</a></li>
    </ul>
  </div>
</nav>	

<form method="post" action="editado">
<div class="container">
  <h2>Editar Registro</h2> <br>
  <div class="panel-group">

    <div class="panel panel-primary">
      <div class="panel-heading">Modificar datos del registro</div>
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
      </tr>
    </thead>
    <tbody>
	 			<%Registro vehiculo= (Registro) request.getAttribute("vehiculo");
					 %>		 
					<tr>
						<td><%=vehiculo.getRegistro()%></td>
						<td><%=Funciones.traerFechaCorta4(vehiculo.getFechaEgr())%></td>
						<td><%=vehiculo.getHoraIng()%></td>
						<td><input type="text" name="dominio" value="<%=vehiculo.getDominio()%>"/></td>
						<td><input type="text" name="marca" value="<%=vehiculo.getMarca()%>"/></td>
						<td><input type="text" name="modelo" value="<%=vehiculo.getModelo()%>"/></td>
						<td><input type="text" name="motivo" value="<%=vehiculo.getMotivo()%>"/></td>
						<td><input type="text" name="descripcion" value="<%=vehiculo.getDescripcion()%>"/></td>
					</tr>
	
    </tbody>
  </table>      
  
    <table class="table table-striped">
    <thead>
      <tr>
		 <th>ACTA C</th>
		 <th>ACTA Z</th>
		 <th>ACTA CONTRAVENCIONAL</th>
		 <th>AGENTE LABRANTE</th>
		 <th>INFRACTOR/CONTRAVENTOR</th>
      </tr>
    </thead>
    <tbody> 
					<tr>
						<td><input type="text" name="actac" value="<%=vehiculo.getActaDeComprobacion()%>"/></td>
						<td><input type="text" name="actaz" value="<%=vehiculo.getBoletaDeCitacion()%>"/></td>
						<td><input type="text" name="acta" value="<%=vehiculo.getActaContravencional()%>"/></td>
						<td><input type="text" name="agente" value="<%=vehiculo.getAgenteLabrante()%>"/></td>
						<td><input type="text" name="infractor" value="<%=vehiculo.getInfractor()%>"/></td>

					</tr>
	
    </tbody>
  </table>  
    <table class="table table-striped">
    <thead>
      <tr>
		 <th>AGENTE DE PLAYA</th>
		 <th>CHOFER DE GRUA</th>
		 <th>LEVANTADO EN</th> 
      </tr>
    </thead>
    <tbody> 
					<tr>
						<td><input type="text" name="agentep" value="<%=vehiculo.getAgenteDePlaya()%>"/></td>
						<td><input type="text" name="chofer" value="<%=vehiculo.getGruaChofer()%>"/></td>
						<td><input type="text" size="50" name="levantadoEn" value="<%=vehiculo.getLevantadoEn()%>"/></td>

					</tr>
	
    </tbody>
  </table>   
 
 
        
  			<label for="inputdefault">Observaciones:</label>
			<p class="boton-margen-inferior">
  			<textarea name="observaciones" rows="4" cols="180"></textarea></p>
  			
  			<p class="boton-margen-inferior">
			<input onclick="myFunction()" class="boton input-ingresar" type="submit" name="Guardar" value="Guardar Cambios"/></p>
  </div>
</div>
</div>
</div>
</form>
	
	 <%@include file="footer.jsp" %>
</body>
</html>