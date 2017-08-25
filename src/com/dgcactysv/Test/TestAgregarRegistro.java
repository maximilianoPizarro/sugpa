package com.dgcactysv.Test;
import java.util.GregorianCalendar;

import com.dgcactysv.funciones.Funciones;
import com.dgcactysv.negocio.Facade;
import com.dgcactysv.negocio.RegistroABM;

public class TestAgregarRegistro {

	public static void main(String[] args) {
		Facade facade=new Facade();
	RegistroABM adm= facade.getRegistroABM();
	
	
	
	/*REGISTRO EXISTENTE
	try {
	adm.agregar(new GregorianCalendar(), Funciones.traerHora2(new GregorianCalendar()), "AUTO", "LOY554", "HONDA", "TITAN", "DOC", "Pedro escobar 1290", "C00123445", "S/D","S/D", "GALIAN MATIAS", "JUANJO MENDEZ", "PIZARRO", "MARTINEZ", "SI", "980981029809582ANNA");
	} catch (Exception e) {
	
		e.printStackTrace();
	}*/
	
	
	//REGISTRO NUEVO
	try {
	adm.agregar(new GregorianCalendar(), Funciones.traerHora2(new GregorianCalendar()), "MOTO", "324ASD", "YAMAHA", "YBR", "DOC", "Pedro escobar 1290", "C00123445", "S/D","S/D", "GALIAN MATIAS", "JUANJO MENDEZ", "PIZARRO", "MARTINEZ", "SI", "980981029809582ANNA");
	} catch (Exception e) {
	
		e.printStackTrace();
	}
	

	}

}
