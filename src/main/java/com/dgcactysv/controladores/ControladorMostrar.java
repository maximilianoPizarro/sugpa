package com.dgcactysv.controladores;

import com.dgcactysv.negocio.*;

import com.dgcactysv.modelo.Vehiculo;
import com.dgcactysv.negocio.Facade;
import com.dgcactysv.negocio.AutomotorABM;
import com.dgcactysv.modelo.Automotor;
import com.dgcactysv.modelo.Registro;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;



public class ControladorMostrar extends HttpServlet {
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

		response.setContentType("text/html;charset=UTF-8");
		String dominio=request.getParameter("dominio");		
		
		
		Facade facade= new Facade(); 
		RegistroABM r=facade.getRegistroABM();
		Registro vehiculo=new Registro();
		try {
			vehiculo=r.traerRegistro(dominio);
	        request.setAttribute("vehiculo", vehiculo);
			session.setAttribute("vehiculo", vehiculo);
			request.getRequestDispatcher("/mostrarVehiculo.jsp").forward(request, response);	

		} catch (Exception e1) {
			request.getRequestDispatcher("/errorBusqueda.jsp").forward(request, response);
		}
		
		

/*
		VehiculoABM v= new VehiculoABM(); //busca de la xml
		Vehiculo vehiculo=new Vehiculo();
		vehiculo=v.buscarVehiculo(dominio);
		
		try {
		//busca de la bd bdvtv
		AutomotorABM s=facade.getAutomotorABM();  
		Automotor automotor=new Automotor();
		automotor=s.traerAutomotor(dominio);
		request.setAttribute("automotor", automotor);
		
		//copio el directorio donde voy a guardar la imagen y la escribo
		String filePath = session.getServletContext().getRealPath("img/");
        FileOutputStream fos = new FileOutputStream(filePath+"cedulaa.pdf");
        fos.write(automotor.getCedula());
        fos.close();
		
        request.setAttribute("vehiculo", vehiculo);
		session.setAttribute("vehiculo", vehiculo);
		request.getRequestDispatcher("/jsp/mostrarVehiculo.jsp").forward(request, response);	
	

		} catch (Exception e) {
			request.getRequestDispatcher("/jsp/errorBusqueda.jsp").forward(request, response);
		}
		
*/		


	}
}