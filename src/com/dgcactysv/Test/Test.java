package com.dgcactysv.Test;

import java.util.List;

import com.dgcactysv.funciones.Funciones;
import com.dgcactysv.modelo.Vehiculo;

public class Test {

	public static void main(String[] args) {
		String dominio="";
		List<Vehiculo> vehiculos = Funciones.getLstVehiculos();

		for (Vehiculo vehiculo : vehiculos) {
			if(vehiculo.getDominio().compareTo("EXQ608")==0){
				dominio=";"+vehiculo.getRegistro()+";"+vehiculo.getDominio()+";"+vehiculo.getMarca()+";"+vehiculo.getModelo()+";"+vehiculo.getMotivo()+";"+vehiculo.getPlaya();
				
			
			}
			
		}
		
	System.out.println(dominio);	
	
	}
	


}
