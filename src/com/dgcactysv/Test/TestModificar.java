package com.dgcactysv.Test;

import java.util.GregorianCalendar;

import com.dgcactysv.funciones.Funciones;
import com.dgcactysv.modelo.Registro;
import com.dgcactysv.negocio.Facade;
import com.dgcactysv.negocio.RegistroABM;

public class TestModificar {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Facade facade=new Facade();
	RegistroABM adm= facade.getRegistroABM();
	
	Registro r= new Registro("4840",new GregorianCalendar(), Funciones.traerHora2(new GregorianCalendar()), "MOTO", "554LOY", "HONDA", "TITAN", "DOC", "Pedro escobar 1290", "C00123445", "S/D","S/D", "GALIAN MATIAS", "JUANJO MENDEZ", "PIZARRO", "MARTINEZ", "SI", "980981029809582ANNA",null,null,null,null,null,null,null);
	
	//REGISTRO EXISTENTE
	try {
	adm.modificar(r);
	} catch (Exception e) {
	
		e.printStackTrace();
	}

	}

}
