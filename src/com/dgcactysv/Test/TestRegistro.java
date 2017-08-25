package com.dgcactysv.Test;

import com.dgcactysv.negocio.RegistroABM;
import com.google.gson.Gson;
import com.google.gson.JsonArray;

import java.util.List;

import com.dgcactysv.modelo.Registro;
import com.dgcactysv.negocio.Facade;

public class TestRegistro {
	public static void main(String[] args) {
	
		Facade facade=new Facade();
	RegistroABM adm= facade.getRegistroABM();

	try {
		//System.out.println( adm.traerRegistro("981ASD").toString());
		//System.out.println("Contablilizacion "+ adm.Contablilizacion());
		//System.out.println("Contablizacion " + adm.ContablilizacionAutos());
		//System.out.println("Contablizacion " + adm.ContablilizacionMotos());
		
		List<Registro> inspecciones = adm.traerEnPlaya();
		Gson gson = new Gson();
		
		String jsonNames = gson.toJson(inspecciones);
		
		System.out.println(jsonNames);
		
	} catch (Exception e) {
		e.printStackTrace();
	}
/*Todos los registros	
	try {
		List<Registro> inspecciones = adm.traerListaRegistro();
		for(Registro i:inspecciones){
			System.out.println(i.toString());
		}
		
	} catch (Exception e) {
		e.printStackTrace();
	}*/
/*Registros en playa	
	try {
		List<Registro> inspecciones = adm.traerEnPlaya();
		for(Registro i:inspecciones){
			System.out.println(i.toString());
		}
		
	} catch (Exception e) {
		e.printStackTrace();
	}*/

/*Registros en playa
	try {
		List<Registro> inspecciones = adm.traerEgresos();
		for(Registro i:inspecciones){
			System.out.println(i.toString());
		}
		
	} catch (Exception e) {
		e.printStackTrace();
	}	
*/
	
	
}
}
