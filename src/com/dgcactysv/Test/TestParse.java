package com.dgcactysv.Test;

import java.util.List;

import com.dgcactysv.funciones.Funciones;
import com.dgcactysv.modelo.Vehiculo;

public class TestParse {

	public static void main(String[] args) {
		
		String dominio="";
		List<Vehiculo> vehiculos = Funciones.getLstVehiculos();


		for (Vehiculo vehiculo : vehiculos) {
			if(vehiculo.getDominio().compareTo("EXQ608")==0){
				dominio= vehiculo.getRegistro()+";"+vehiculo.getFecha()+";"+vehiculo.getHora()+";"+vehiculo.getDominio()+";"+vehiculo.getMarca()+";"+vehiculo.getModelo()+";"+vehiculo.getMotivo()+";"+vehiculo.getPlaya();
			}
			
		}
		
	System.out.println(dominio);	
	
	String partido[]= dominio.split(";");
	String part1=partido[0];
	String part2=partido[1];		

	System.out.println(part1+"-"+part2);	
		
		// TODO Auto-generated method stub

	}

}
