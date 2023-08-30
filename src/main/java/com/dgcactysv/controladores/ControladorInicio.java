package com.dgcactysv.controladores;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.dgcactysv.modelo.Registro;
import com.dgcactysv.negocio.*;

/**
 * Servlet implementation class ControladorInicio
 */


public class ControladorInicio extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ControladorInicio() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session= (HttpSession) request.getSession(true);
		request.setAttribute("usuario", (String) session.getAttribute("usuario"));
		String usuario=(String) session.getAttribute("usuario");
		
		
		Facade facade= new Facade();
		RegistroABM facede= facade.getRegistroABM();
		List<Registro> vehiculos = facede.traerListaRegistro();
		
		request.setAttribute("lstRegistros", vehiculos);
		request.setAttribute("contabilizacion", facede.Contablilizacion());
		request.setAttribute("contabilizacionAutos", facede.ContablilizacionAutos());
		request.setAttribute("contabilizacionMotos", facede.ContablilizacionMotos());
		
		
		try {
		if(usuario.compareTo("Pizarro Maximiliano")==0){
			request.getRequestDispatcher("/bienvenidoAgente.jsp").forward(request, response);	
		}else
			if(usuario.compareTo("Decurgez Mateo")==0){
				request.getRequestDispatcher("/bienvenidoLegalesAbandonados.jsp").forward(request, response);
			}else
				if(usuario.compareTo("Pietrafesa Sergio")==0){
					request.getRequestDispatcher("/bienvenidoGerencia.jsp").forward(request, response);
				}else
					if(usuario.compareTo("Miraglia Walter")==0){
						request.getRequestDispatcher("/bienvenidoLegales.jsp").forward(request, response);
					}
			else{request.getRequestDispatcher("/errorlogin.jsp").forward(request, response);}	
		}catch (Exception e) {
			request.getRequestDispatcher("/errorlogin.jsp").forward(request, response);
			
		}	
		
		request.getRequestDispatcher("/index.jsp").forward(request, response);
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
