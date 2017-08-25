<%@page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@page import="com.dgcactysv.negocio.Facade" %>
<%@page import="com.dgcactysv.negocio.RegistroABM" %>

<%Facade facade= new Facade();
RegistroABM facede= facade.getRegistroABM();%>
{
  "draw": 1,
  "recordsTotal": <%=facede.Contablilizacion()%>,
  "recordsFiltered": 10,
  "data": <%=facede.traerEnPlayaJson()%>
}				