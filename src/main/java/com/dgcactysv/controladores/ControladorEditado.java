package com.dgcactysv.controladores;

import com.dgcactysv.negocio.*;
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
		r.setActaDeComprobacion(request.getParameter("actac"));
		r.setActaContravencional(request.getParameter("acta"));
		r.setAgenteLabrante(request.getParameter("agente"));
		r.setAgenteDePlaya(request.getParameter("agentep"));
		r.setCalle(request.getParameter("calle"));
		r.setNumero(request.getParameter("numero"));
		
		try {
			adm.modificar(r);
			request.setAttribute("contabilizacion", adm.Contablilizacion());
			request.setAttribute("contabilizacionAutos", adm.ContablilizacionAutos());
			request.setAttribute("contabilizacionMotos", adm.ContablilizacionMotos());

			request.getRequestDispatcher("/bienvenidoAgente.jsp").forward(request, response);	

		} catch (Exception e) {
			// TODO Auto-generated catch block
			request.getRequestDispatcher("/errorEdicion.jsp").forward(request, response);	

		}
		
		
/*		
		Vehiculo vehiculo = (Vehiculo) request.getAttribute("vehiculo");
		
		request.setAttribute("vehiculo", vehiculo);
*/		
 		
	

	}
}