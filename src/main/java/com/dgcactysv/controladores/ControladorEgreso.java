package com.dgcactysv.controladores;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.dgcactysv.modelo.Registro;
import com.dgcactysv.negocio.Facade;
import com.dgcactysv.negocio.RegistroABM;



public class ControladorEgreso extends HttpServlet {
	//Hotel hotel=Hotel.getInstanciaHotel();		
	private static final long serialVersionUID = 1L;
	
	/* NO deberia atender por GET */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws
	ServletException, IOException {
		
		doPost(request, response);

	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws
	ServletException, IOException {
		
		HttpSession session = request.getSession();
		request.setAttribute("usuario", (String) session.getAttribute("usuario"));
		Facade facade=new Facade();
		RegistroABM adm= facade.getRegistroABM();

		try {
			Registro vehiculo=adm.traerRegistro(request.getParameter("demo"));
			request.setAttribute("vehiculo",vehiculo);
			session.setAttribute("vehiculo",vehiculo);
		} catch (Exception e) {
			request.getRequestDispatcher("/errorCarga.jsp").forward(request, response);	
		}
		
	
		
		request.getRequestDispatcher("/egresarVehiculo.jsp").forward(request, response);	

	}
}