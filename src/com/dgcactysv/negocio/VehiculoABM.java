package com.dgcactysv.negocio;
import com.dgcactysv.modelo.*;
import com.dgcactysv.funciones.*;

import java.util.List;



public class VehiculoABM {
	
	int bandera=0;
	
/*	public String buscarVehiculo(String dominio){
		List<Vehiculo> vehiculos = Funciones.getLstVehiculos();
		for (Vehiculo vehiculo : vehiculos) {
			if(vehiculo.getDominio().compareTo(dominio)==0){
				dominio=vehiculo.getRegistro()+";"+vehiculo.getFecha()+";"+vehiculo.getHora()+";"+vehiculo.getDominio()+";"+vehiculo.getMarca()+";"+vehiculo.getModelo()+";"+vehiculo.getMotivo()+";"+vehiculo.getPlaya()+";"+vehiculo.getUsuario();
				bandera=1;
			}
			
		}
		
		if(bandera==0){
			//dominio="No se encontro el vehiculo;;;;;;;;";
			dominio=" ; ; ; ; ; ; ; ; ;";
		}
		return dominio;
	}
*/	
	public Vehiculo buscarVehiculo(String dominio){
		List<Vehiculo> vehiculos = Funciones.getLstVehiculos();
		Vehiculo ve=new Vehiculo();
		
		for (Vehiculo vehiculo : vehiculos) {
			if(vehiculo.getDominio().compareTo(dominio)==0){
					ve=vehiculo;
					bandera=1;
			}
			
		}
		if(bandera==0){
			ve.setRegistro("null");
		}
		
		return ve;
	}

}
