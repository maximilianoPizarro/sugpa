package com.dgcactysv.controladores;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.dgcactysv.modelo.Registro;
import com.dgcactysv.negocio.Facade;
import com.dgcactysv.negocio.RegistroABM;



public class ControladorLogin extends HttpServlet {
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
		
		Facade facade= new Facade();
		RegistroABM facede= facade.getRegistroABM();
		List<Registro> vehiculos = facede.traerEnPlaya();
		
		request.setAttribute("lstRegistros", vehiculos);
		request.setAttribute("contabilizacion", facede.Contablilizacion());
		request.setAttribute("contabilizacionAutos", facede.ContablilizacionAutos());
		request.setAttribute("contabilizacionMotos", facede.ContablilizacionMotos());
		
		
		try {
			String usuario= request.getParameter("usuario");
			
			if(usuario.compareTo("agente")==0){
				request.setAttribute("usuario","Pizarro Maximiliano");
				request.getRequestDispatcher("/jsp/bienvenidoAgente.jsp").forward(request, response);	
			}else{
				if(usuario.compareTo("legalesa")==0){
					request.setAttribute("usuario","Decurgez Mateo");
					request.getRequestDispatcher("/jsp/bienvenidoLegalesAbandonados.jsp").forward(request, response);	
				}else{
					if(usuario.compareTo("legales")==0){
						request.setAttribute("usuario","Miraglia Walter");
						request.getRequestDispatcher("/jsp/bienvenidoLegales.jsp").forward(request, response);	
					}else{
					if(usuario.compareTo("direccion")==0){
						request.setAttribute("usuario","Pietrafesa Sergio");
						request.getRequestDispatcher("/jsp/bienvenidoGerencia.jsp").forward(request, response);	
						}else{
							if(usuario.compareTo("admin")==0){
								request.setAttribute("usuario","admin admin");
								request.getRequestDispatcher("/jsp/bienvenidoAdmin.jsp").forward(request, response);	
								}else{			
						request.getRequestDispatcher("/jsp/errorlogin.jsp").forward(request, response);}		
			}}
				}
			}
	} catch (Exception e) {
		request.getRequestDispatcher("/jsp/errorlogin.jsp").forward(request, response);
		
	}	
		session.setAttribute("usuario", request.getAttribute("usuario"));
	}
}