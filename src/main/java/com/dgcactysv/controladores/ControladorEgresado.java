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



public class ControladorEgresado extends HttpServlet {
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
		
		r.setFechaEgr(new GregorianCalendar());
		r.setHoraIng(Funciones.traerHora2(new GregorianCalendar()));
		r.setPersonaQretiro(request.getParameter("tipo")+request.getParameter("nombre")+request.getParameter("apellido")+request.getParameter("dni"));
		r.setNotas(request.getParameter("observaciones"));
	
		
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
}
}