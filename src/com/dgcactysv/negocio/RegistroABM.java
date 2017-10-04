package com.dgcactysv.negocio;

import com.dgcactysv.dao.RegistroDao;
import com.dgcactysv.modelo.Registro;
import com.google.gson.Gson;

import java.io.File;
import java.util.GregorianCalendar;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

public class RegistroABM {
	
	private RegistroDao daoA=new RegistroDao();
	
	public Registro traerRegistro(String dominio) throws Exception {

		Registro a = daoA.traerRegistro(dominio);

		if (a == null) {
			throw new Exception("No existe Registro con ese dominio");
		}
		return a;
	}
	public Registro traerRegistro1(String registro) throws Exception{
	
		Registro r= daoA.traerRegistro1(registro);
		if(r == null) throw new Exception ("No existe el registro");// implementar si c es null lanzar Exception
		return r;
	}
	
	public List<Registro> traerListaRegistro(){
		
		return daoA.traerListaRegistro();
		}
	
	public List<Registro> traerEnPlaya(){
		
		return daoA.traerEnPlaya();
		}
	
	public String traerEnPlayaJson(){
		
		Gson gson = new Gson();
		String jsonNames = gson.toJson(daoA.traerEnPlaya());
		
		return jsonNames;
		}
	
	public List<Registro> traerEgresos(){
		
		return daoA.traerEgresos();
		}
	
	public int Contablilizacion(){
		return daoA.Contablilizacion();
	}
	
	public int ContablilizacionAutos(){
		return daoA.ContablilizacionAutos();
	}
	
	public int ContablilizacionMotos(){
		return daoA.ContablilizacionMotos();
	}
	
	
	public void agregar(String playaIng, GregorianCalendar fechaIng, String horaIng, String tipo, String tipoDominio, String dominio,
			String marca, String modelo, String color, String motivo, String nChasis_nMotor, String actaContravencional, String actaComprobacion,
			String actaZ, String agenteLabrante, String nombreInfractor, String tipoDoc, String nDoc, String choferDNI, String calle,
			String numeroCalle, String entreCalle1, String entreCalle2, String referenciaLugar, String observaciones, String agentePlaya) throws Exception{ 
		Registro r = new Registro();
		boolean encontro = false;
		int i = 0;
		while(i<daoA.traerEnPlaya().size() && !encontro)
		{
			if(daoA.traerEnPlaya().get(i).getDominio().compareTo(dominio)==0)
			{
				encontro=true;
				throw new Exception("El registro ya existe en playa");
			}
			else i++;
		}
		
		if(!encontro)
		{
		
		r = new Registro(Integer.valueOf(traerMaximoId()+1).toString(), playaIng, fechaIng, horaIng, tipo, tipoDominio, dominio, marca, modelo, color,
				motivo, nChasis_nMotor, actaContravencional, actaComprobacion, actaZ, agenteLabrante, nombreInfractor,
				tipoDoc, nDoc, choferDNI, calle, numeroCalle, entreCalle1, entreCalle2, referenciaLugar, observaciones, agentePlaya,
				null, null, null, null, null, null, null, null);
		daoA.agregar(r);
		//INSERT INTO vehiculos VALUES ('2566','2017-05-11 00:00:00','11:30:00','AUTO','FBI276','CHEVROLET','CORSA','DOC','AV.PASEO COLON Y AV MARTIN GARCIA','C00837526','S/D','S/D','RODRIGUEZ ALEJANDRA','CALLEGARI DIEGO','CARRILLO','SICA','SI',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

		}
		
	}
		
		public int traerMaximoId()
		{
			int max=0;
			int i=0;
			while(i<daoA.traerEnPlaya().size()){
				if(Integer.parseInt(daoA.traerEnPlaya().get(i).getRegistro()) > max)
					max=Integer.parseInt(daoA.traerEnPlaya().get(i).getRegistro());
				i++;
			}
			return max;
		}

		public void modificar(Registro r) throws Exception{
			/* implementar antes de actualizar que no exista un cliente con el mismo documento a modificar y con el mismo id, lanzar la Exception */
			Registro r2=daoA.traerRegistro1(r.getRegistro());
			if(r2!=null)
			{
			daoA.actualizar(r);
			}else{
				throw new Exception("No existe el registro en playa");
			}
		}
	
	}