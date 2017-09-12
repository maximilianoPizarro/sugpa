package com.dgcactysv.modelo;
import java.util.GregorianCalendar;

import com.dgcactysv.funciones.Funciones;


public class Registro {
	private String registro;
	private GregorianCalendar fechaIng;
	private String horaIng;
	private String descripcion;
	private String dominio;
	private String marca;
	private String modelo;
	private String motivo;
	private String calle;
	private String numero;
	private String entreCalles;
	private String actaDeComprobacion;
	private String actaContravencional;
	private String boletaDeCitacion;
	private String agenteLabrante;
	private String infractor;
	private String agenteDePlaya;
	private String gruaChofer;
	private String inventario;
	private String nChasisNmotor;
	private GregorianCalendar fechaEgr;
	private String horaEgr;
	private String personaQretiro;
	private String entregaAgente;
	private String notas;
	private String controlDeLegales;
	private String trasladoAcompactacion;
	
	public Registro(){};
	
	public Registro(String registro, GregorianCalendar fechaIng, String horaIng, String descripcion, String dominio,
			String marca, String modelo, String motivo, String calle, String numero, String entreCalles, String actaDeComprobacion,
			String actaContravencional, String boletaDeCitacion, String agenteLabrante, String infractor,
			String agenteDePlaya, String gruaChofer, String inventario, String nChasisNmotor,
			GregorianCalendar fechaEgr, String horaEgr, String personaQretiro, String entregaAgente, String notas,
			String controlDeLegales, String trasladoAcompactacion) {
		this.registro = registro;
		this.fechaIng = fechaIng;
		this.horaIng = horaIng;
		this.descripcion = descripcion;
		this.dominio = dominio;
		this.marca = marca;
		this.modelo = modelo;
		this.motivo = motivo;
		this.calle = calle;
		this.numero = numero;
		this.entreCalles = entreCalles;
		this.actaDeComprobacion = actaDeComprobacion;
		this.actaContravencional = actaContravencional;
		this.boletaDeCitacion = boletaDeCitacion;
		this.agenteLabrante = agenteLabrante;
		this.infractor = infractor;
		this.agenteDePlaya = agenteDePlaya;
		this.gruaChofer = gruaChofer;
		this.inventario = inventario;
		this.nChasisNmotor = nChasisNmotor;
		this.fechaEgr = fechaEgr;
		this.horaEgr = horaEgr;
		this.personaQretiro = personaQretiro;
		this.entregaAgente = entregaAgente;
		this.notas = notas;
		this.controlDeLegales = controlDeLegales;
		this.trasladoAcompactacion = trasladoAcompactacion;
	}
	
	public String getRegistro() {
		return registro;
	}
	public void setRegistro(String registro) {
		this.registro = registro;
	}
	public GregorianCalendar getFechaIng() {
		return fechaIng;
	}
	public void setFechaIng(GregorianCalendar fechaIng) {
		this.fechaIng = fechaIng;
	}
	public String getHoraIng() {
		return horaIng;
	}
	public void setHoraIng(String horaIng) {
		this.horaIng = horaIng;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String getDominio() {
		return dominio;
	}
	public void setDominio(String dominio) {
		this.dominio = dominio;
	}
	public String getMarca() {
		return marca;
	}
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public String getModelo() {
		return modelo;
	}
	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	public String getMotivo() {
		return motivo;
	}
	public void setMotivo(String motivo) {
		this.motivo = motivo;
	}
	public String getCalle() {
		return calle;
	}
	public void setCalle(String calle) {
		this.calle = calle;
	}
	public String getNumero() {
		return numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	public String getEntreCalles() {
		return entreCalles;
	}
	public void setEntreCalles(String entreCalles) {
		this.entreCalles = entreCalles;
	}

	public String getActaDeComprobacion() {
		return actaDeComprobacion;
	}
	public void setActaDeComprobacion(String actaDeComprobacion) {
		this.actaDeComprobacion = actaDeComprobacion;
	}
	public String getActaContravencional() {
		return actaContravencional;
	}
	public void setActaContravencional(String actaContravencional) {
		this.actaContravencional = actaContravencional;
	}
	public String getBoletaDeCitacion() {
		return boletaDeCitacion;
	}
	public void setBoletaDeCitacion(String boletaDeCitacion) {
		this.boletaDeCitacion = boletaDeCitacion;
	}
	public String getAgenteLabrante() {
		return agenteLabrante;
	}
	public void setAgenteLabrante(String agenteLabrante) {
		this.agenteLabrante = agenteLabrante;
	}
	public String getInfractor() {
		return infractor;
	}
	public void setInfractor(String infractor) {
		this.infractor = infractor;
	}
	public String getAgenteDePlaya() {
		return agenteDePlaya;
	}
	public void setAgenteDePlaya(String agenteDePlaya) {
		this.agenteDePlaya = agenteDePlaya;
	}
	public String getGruaChofer() {
		return gruaChofer;
	}
	public void setGruaChofer(String gruaChofer) {
		this.gruaChofer = gruaChofer;
	}
	public String getInventario() {
		return inventario;
	}
	public void setInventario(String inventario) {
		this.inventario = inventario;
	}
	public String getnChasisNmotor() {
		return nChasisNmotor;
	}
	public void setnChasisNmotor(String nChasisNmotor) {
		this.nChasisNmotor = nChasisNmotor;
	}
	public GregorianCalendar getFechaEgr() {
		return fechaEgr;
	}
	public void setFechaEgr(GregorianCalendar fechaEgr) {
		this.fechaEgr = fechaEgr;
	}
	public String getHoraEgr() {
		return horaEgr;
	}
	public void setHoraEgr(String horaEgr) {
		this.horaEgr = horaEgr;
	}
	public String getPersonaQretiro() {
		return personaQretiro;
	}
	public void setPersonaQretiro(String personaQretiro) {
		this.personaQretiro = personaQretiro;
	}
	public String getEntregaAgente() {
		return entregaAgente;
	}
	public void setEntregaAgente(String entregaAgente) {
		this.entregaAgente = entregaAgente;
	}
	public String getNotas() {
		return notas;
	}
	public void setNotas(String notas) {
		this.notas = notas;
	}
	public String getControlDeLegales() {
		return controlDeLegales;
	}
	public void setControlDeLegales(String controlDeLegales) {
		this.controlDeLegales = controlDeLegales;
	}
	public String getTrasladoAcompactacion() {
		return trasladoAcompactacion;
	}
	public void setTrasladoAcompactacion(String trasladoAcompactacion) {
		this.trasladoAcompactacion = trasladoAcompactacion;
	}
	
	@Override
	public String toString() {
		return "Registro [registro=" + registro + ", fechaIng=" +Funciones.traerFechaCorta4(fechaIng) + ", horaIng=" + horaIng + ", descripcion="
				+ descripcion + ", dominio=" + dominio + ", marca=" + marca + ", modelo=" + modelo + ", motivo="
				+ motivo + ", calle=" + calle + ", actaDeComprobacion=" + actaDeComprobacion
				+ ", actaContravencional=" + actaContravencional + ", boletaDeCitacion=" + boletaDeCitacion
				+ ", agenteLabrante=" + agenteLabrante + ", infractor=" + infractor + ", agenteDePlaya=" + agenteDePlaya
				+ ", gruaChofer=" + gruaChofer + ", inventario=" + inventario + ", nChasisNmotor=" + nChasisNmotor
				+ ", fechaEgr=" + Funciones.traerFechaCorta4(fechaEgr) + ", horaEgr=" + horaEgr + ", personaQretiro=" + personaQretiro
				+ ", entregaAgente=" + entregaAgente + ", notas=" + notas + ", controlDeLegales=" + controlDeLegales
				+ ", trasladoAcompactacion=" + trasladoAcompactacion + "]";
	}
	
	
	
	
	
	
	

}
