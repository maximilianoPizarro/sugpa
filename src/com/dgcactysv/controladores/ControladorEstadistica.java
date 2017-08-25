package com.dgcactysv.controladores;


import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;





public class ControladorEstadistica extends HttpServlet {
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

		request.getRequestDispatcher("/jsp/estadisticas.jsp").forward(request, response);	
	

	}
}