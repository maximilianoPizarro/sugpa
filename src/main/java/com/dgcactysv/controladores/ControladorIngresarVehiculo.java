package com.dgcactysv.controladores;

import java.io.IOException;
import java.util.GregorianCalendar;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.dgcactysv.funciones.Funciones;
import com.dgcactysv.modelo.Registro;
import com.dgcactysv.negocio.Facade;
import com.dgcactysv.negocio.RegistroABM;

/**
 * Servlet implementation class ControladorInicio
 */


public class ControladorIngresarVehiculo extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session= (HttpSession) request.getSession();
		request.setAttribute("usuario", (String) session.getAttribute("usuario"));
		Facade facade=new Facade();
		RegistroABM adm= facade.getRegistroABM();
		
		response.setContentType("text/html;charset=UTF-8");
		try {
		String playaIng= request.getParameter("playaIngreso");
		GregorianCalendar fechaIng= new GregorianCalendar();
		String horaIng= Funciones.traerHora2(new GregorianCalendar());
		String tipo;
		if(request.getParameter("tipo").equalsIgnoreCase("otro")){ //Validando si el tipo es uno precargado u otro
			tipo = request.getParameter("iTipo");
		}
		else tipo= request.getParameter("tipo");
		String tipoDominio= request.getParameter("tipoDominio");
		String dominio= request.getParameter("dominio");
		//Validando marca:
		String marca="sin marca", linea="sin linea";
		if(request.getParameter("tipo").equalsIgnoreCase("particular")) marca = request.getParameter("marcaParticular");
		else if(request.getParameter("tipo").equalsIgnoreCase("moto")) marca = request.getParameter("marcaMoto");
		else if(request.getParameter("tipo").equalsIgnoreCase("colectivo")) linea = request.getParameter("lineaColectivo");
		else marca=request.getParameter("iMarca");
		//Validando modelo:
		String modelo="sin modelo", empresa="sin empresa";
		if(request.getParameter("tipo").equalsIgnoreCase("particular")) modelo = request.getParameter("modeloP");
		else if(request.getParameter("tipo").equalsIgnoreCase("moto")) modelo = request.getParameter("modeloM");
		else if(request.getParameter("tipo").equalsIgnoreCase("colectivo")) empresa = request.getParameter("empresaColectivo");
		else modelo= request.getParameter("iModelo");
		String color= request.getParameter("color");
		String motivo= request.getParameter("motivo");
		String nChasis_nMotor= request.getParameter("chasis")+"/"+request.getParameter("motor");
		String actaContravencional= request.getParameter("actaCont");
		String actaComprobacion= request.getParameter("actaComp");
		String actaZ= request.getParameter("actaZ");
		String agenteLabrante= request.getParameter("agenteLabrante");
		String nombreInfractor= request.getParameter("infractorNombre");
		String tipoDoc= request.getParameter("tipoDoc");
		String nDoc= request.getParameter("nDocumento");
		String choferDNI= request.getParameter("choferDNI");
		String calle= request.getParameter("calle");
		String numeroCalle= request.getParameter("numeroCalle");
		String entreCalle1= request.getParameter("entreCalle1");
		String entreCalle2= request.getParameter("entreCalle2");
		String referenciaLugar= request.getParameter("referenciaLugar");
		String observaciones= request.getParameter("observaciones");
		String agentePlaya = (String) session.getAttribute("usuario");
		//Hasta aca va todo en orden
		
			adm.agregar(playaIng, fechaIng, horaIng, tipo, tipoDominio, dominio, marca, modelo, color,
					motivo, nChasis_nMotor, actaContravencional, actaComprobacion, actaZ, agenteLabrante, nombreInfractor,
					tipoDoc, nDoc, choferDNI, calle, numeroCalle, entreCalle1, entreCalle2, referenciaLugar, observaciones, agentePlaya);
			
			//adm.agregar(new GregorianCalendar(), Funciones.traerHora2(new GregorianCalendar()), tipo.toUpperCase(), dominio.toUpperCase(), marca.toUpperCase(), modelo.toUpperCase(), motivo.toUpperCase(), calle.toUpperCase(), numero.toUpperCase(), entreCalles.toUpperCase(), actaC.toUpperCase(), acta,boleta.toUpperCase(), agente.toUpperCase(), infractor.toUpperCase(), "PIZARRO", chofer.toUpperCase(), "SI", nChasisNmotor.toUpperCase());
			request.setAttribute("contabilizacion", adm.Contablilizacion());
			request.setAttribute("contabilizacionAutos", adm.ContablilizacionAutos());
			request.setAttribute("contabilizacionMotos", adm.ContablilizacionMotos());

			request.getRequestDispatcher("/jsp/bienvenidoAgente.jsp").forward(request, response);	

		} catch (Exception e2) {
				request.getRequestDispatcher("/jsp/errorCarga.jsp").forward(request, response);
			}
		
		}

}
