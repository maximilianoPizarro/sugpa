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

/**
 * Servlet implementation class ControladorInicio
 */


public class ControladorIngresar extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ControladorIngresar() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.getRequestDispatcher("/jsp/index.jsp").forward(request, response);
}

}
