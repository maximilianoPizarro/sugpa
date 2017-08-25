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
		String tipo= request.getParameter("tipo");
		String dominio= request.getParameter("dominio");
		
		String marca=request.getParameter("marca");
		if(marca.compareTo("")==0){
			marca=request.getParameter("marcaM");
		}
		
		String modelo=request.getParameter("modelo");
		String motivo=request.getParameter("motivo");
		String levantadoEn=request.getParameter("levantadoEn");
		String actaC= request.getParameter("actac");
		String acta= request.getParameter("acta");
		String boleta= request.getParameter("boleta");
		String agente= request.getParameter("agente");
		String infractor=request.getParameter("infractor");
		String chofer=request.getParameter("chofer");
		String nChasisNmotor=request.getParameter("chasis")+request.getParameter("motor");
		
		
		
			adm.agregar(new GregorianCalendar(), Funciones.traerHora2(new GregorianCalendar()), tipo.toUpperCase(), dominio.toUpperCase(), marca.toUpperCase(), modelo.toUpperCase(), motivo.toUpperCase(), levantadoEn.toUpperCase(), actaC.toUpperCase(), acta,boleta.toUpperCase(), agente.toUpperCase(), infractor.toUpperCase(), "PIZARRO", chofer.toUpperCase(), "SI", nChasisNmotor.toUpperCase());
			request.setAttribute("contabilizacion", adm.Contablilizacion());
			request.setAttribute("contabilizacionAutos", adm.ContablilizacionAutos());
			request.setAttribute("contabilizacionMotos", adm.ContablilizacionMotos());

			request.getRequestDispatcher("/jsp/bienvenidoAgente.jsp").forward(request, response);	

		} catch (Exception e2) {
				request.getRequestDispatcher("/jsp/errorCarga.jsp").forward(request, response);
			}
		
		}

}
