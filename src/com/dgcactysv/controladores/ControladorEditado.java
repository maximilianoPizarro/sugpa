package com.dgcactysv.controladores;

import com.dgcactysv.negocio.*;
import com.dgcactysv.datos.*;
import com.dgcactysv.modelo.Registro;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;





public class ControladorEditado extends HttpServlet {
	//Hotel hotel=Hotel.getInstanciaHotel();		
	private static final long serialVersionUID = 1L;
	
	/* NO deberia atender por GET */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws
	ServletException, IOException {
		
		doPost(request, response);

	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws
	ServletException, IOException {
		
		HttpSession session= (HttpSession) request.getSession();
		request.setAttribute("usuario", (String) session.getAttribute("usuario"));
		
		Facade facade=new Facade();
		RegistroABM adm= facade.getRegistroABM();
		
		Registro r = (Registro) session.getAttribute("vehiculo");

		r.setDominio(request.getParameter("dominio"));
		r.setMarca(request.getParameter("marca"));
		r.setModelo(request.getParameter("modelo"));
		r.setMotivo(request.getParameter("motivo"));
		r.setDescripcion(request.getParameter("descripcion"));
		r.setActaDeComprobacion(request.getParameter("actac"));
		r.setBoletaDeCitacion(request.getParameter("actaz"));
		r.setActaContravencional(request.getParameter("acta"));
		r.setAgenteLabrante(request.getParameter("agente"));
		r.setInfractor(request.getParameter("infractor"));
		r.setAgenteDePlaya(request.getParameter("agentep"));
		r.setGruaChofer(request.getParameter("chofer"));
		r.setLevantadoEn(request.getParameter("levantadoEn"));
		
		
		try {
			adm.modificar(r);
			request.setAttribute("contabilizacion", adm.Contablilizacion());
			request.setAttribute("contabilizacionAutos", adm.ContablilizacionAutos());
			request.setAttribute("contabilizacionMotos", adm.ContablilizacionMotos());

			request.getRequestDispatcher("/jsp/bienvenidoAgente.jsp").forward(request, response);	

		} catch (Exception e) {
			// TODO Auto-generated catch block
			request.getRequestDispatcher("/jsp/errorEdicion.jsp").forward(request, response);	

		}
		
		
/*		
		Vehiculo vehiculo = (Vehiculo) request.getAttribute("vehiculo");
		
		request.setAttribute("vehiculo", vehiculo);
*/		
 		
	

	}
}