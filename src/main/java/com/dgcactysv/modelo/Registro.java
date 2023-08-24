package com.dgcactysv.modelo;
import java.util.GregorianCalendar;

import com.dgcactysv.funciones.Funciones;


public class Registro {
	private String registro;
	private String playaIng;
	private GregorianCalendar fechaIng;
	private String horaIng;
	private String tipo;
	private String tipoDominio;
	private String dominio;
	private String marca;
	private String modelo;
	private String color;
	private String motivo;
	private String nChasis_nMotor;
	private String actaContravencional;
	private String actaDeComprobacion;
	private String actaZ;
	private String agenteLabrante;
	private String nombreInfractor;
	private String tipoDoc;
	private String nDoc;
	private String choferDNI;
	private String calle;
	private String numero;
	private String entreCalle1;
	private String entreCalle2;
	private String referenciaLugar;
	private String observaciones;
	private String agenteDePlaya;
	private String inventario;
	private GregorianCalendar fechaEgr;
	private String horaEgr;
	private String personaQretiro;
	private String entregaAgente;
	private String notas;
	private String controlDeLegales;
	private String trasladoAcompactacion;
	
	public Registro(){}

	public Registro(String registro, String playaIng, GregorianCalendar fechaIng,
			String horaIng, String tipo, String tipoDominio, String dominio,
			String marca, String modelo, String color, String motivo,
			String nChasis_nMotor, String actaContravencional,
			String actaDeComprobacion, String actaZ, String agenteLabrante,
			String nombreInfractor, String tipoDoc, String nDoc,
			String choferDNI, String calle, String numero, String entreCalle1,
			String entreCalle2, String referenciaLugar, String observaciones,
			String agenteDePlaya, String inventario,
			GregorianCalendar fechaEgr, String horaEgr, String personaQretiro,
			String entregaAgente, String notas, String controlDeLegales,
			String trasladoAcompactacion) {
		super();
		this.registro = registro;
		this.playaIng = playaIng;
		this.fechaIng = fechaIng;
		this.horaIng = horaIng;
		this.tipo = tipo;
		this.tipoDominio = tipoDominio;
		this.dominio = dominio;
		this.marca = marca;
		this.modelo = modelo;
		this.color = color;
		this.motivo = motivo;
		this.nChasis_nMotor = nChasis_nMotor;
		this.actaContravencional = actaContravencional;
		this.actaDeComprobacion = actaDeComprobacion;
		this.actaZ = actaZ;
		this.agenteLabrante = agenteLabrante;
		this.nombreInfractor = nombreInfractor;
		this.tipoDoc = tipoDoc;
		this.nDoc = nDoc;
		this.choferDNI = choferDNI;
		this.calle = calle;
		this.numero = numero;
		this.entreCalle1 = entreCalle1;
		this.entreCalle2 = entreCalle2;
		this.referenciaLugar = referenciaLugar;
		this.observaciones = observaciones;
		this.agenteDePlaya = agenteDePlaya;
		this.inventario = inventario;
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

	protected void setRegistro(String registro) {
		this.registro = registro;
	}

	public String getPlayaIng() {
		return playaIng;
	}

	public void setPlayaIng(String playaIng) {
		this.playaIng = playaIng;
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

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getTipoDominio() {
		return tipoDominio;
	}

	public void setTipoDominio(String tipoDominio) {
		this.tipoDominio = tipoDominio;
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

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getMotivo() {
		return motivo;
	}

	public void setMotivo(String motivo) {
		this.motivo = motivo;
	}

	public String getnChasis_nMotor() {
		return nChasis_nMotor;
	}

	public void setnChasis_nMotor(String nChasis_nMotor) {
		this.nChasis_nMotor = nChasis_nMotor;
	}

	public String getActaContravencional() {
		return actaContravencional;
	}

	public void setActaContravencional(String actaContravencional) {
		this.actaContravencional = actaContravencional;
	}

	public String getActaDeComprobacion() {
		return actaDeComprobacion;
	}

	public void setActaDeComprobacion(String actaDeComprobacion) {
		this.actaDeComprobacion = actaDeComprobacion;
	}

	public String getActaZ() {
		return actaZ;
	}

	public void setActaZ(String actaZ) {
		this.actaZ = actaZ;
	}

	public String getAgenteLabrante() {
		return agenteLabrante;
	}

	public void setAgenteLabrante(String agenteLabrante) {
		this.agenteLabrante = agenteLabrante;
	}

	public String getNombreInfractor() {
		return nombreInfractor;
	}

	public void setNombreInfractor(String nombreInfractor) {
		this.nombreInfractor = nombreInfractor;
	}

	public String getTipoDoc() {
		return tipoDoc;
	}

	public void setTipoDoc(String tipoDoc) {
		this.tipoDoc = tipoDoc;
	}

	public String getnDoc() {
		return nDoc;
	}

	public void setnDoc(String nDoc) {
		this.nDoc = nDoc;
	}

	public String getChoferDNI() {
		return choferDNI;
	}

	public void setChoferDNI(String choferDNI) {
		this.choferDNI = choferDNI;
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

	public String getEntreCalle1() {
		return entreCalle1;
	}

	public void setEntreCalle1(String entreCalle1) {
		this.entreCalle1 = entreCalle1;
	}

	public String getEntreCalle2() {
		return entreCalle2;
	}

	public void setEntreCalle2(String entreCalle2) {
		this.entreCalle2 = entreCalle2;
	}

	public String getReferenciaLugar() {
		return referenciaLugar;
	}

	public void setReferenciaLugar(String referenciaLugar) {
		this.referenciaLugar = referenciaLugar;
	}

	public String getObservaciones() {
		return observaciones;
	}

	public void setObservaciones(String observaciones) {
		this.observaciones = observaciones;
	}

	public String getAgenteDePlaya() {
		return agenteDePlaya;
	}

	public void setAgenteDePlaya(String agenteDePlaya) {
		this.agenteDePlaya = agenteDePlaya;
	}

	public String getInventario() {
		return inventario;
	}

	public void setInventario(String inventario) {
		this.inventario = inventario;
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
		return "Registro [registro=" + registro + ", playaIng=" + playaIng
				+ ", fechaIng=" + fechaIng + ", horaIng=" + horaIng + ", tipo="
				+ tipo + ", tipoDominio=" + tipoDominio + ", dominio="
				+ dominio + ", marca=" + marca + ", modelo=" + modelo
				+ ", color=" + color + ", motivo=" + motivo
				+ ", nChasis_nMotor=" + nChasis_nMotor
				+ ", actaContravencional=" + actaContravencional
				+ ", actaDeComprobacion=" + actaDeComprobacion + ", actaZ="
				+ actaZ + ", agenteLabrante=" + agenteLabrante
				+ ", nombreInfractor=" + nombreInfractor + ", tipoDoc="
				+ tipoDoc + ", nDoc=" + nDoc + ", choferDNI=" + choferDNI
				+ ", calle=" + calle + ", numero=" + numero + ", entreCalle1="
				+ entreCalle1 + ", entreCalle2=" + entreCalle2
				+ ", referenciaLugar=" + referenciaLugar + ", observaciones="
				+ observaciones + ", agenteDePlaya=" + agenteDePlaya
				+ ", inventario=" + inventario + ", fechaEgr=" + fechaEgr
				+ ", horaEgr=" + horaEgr + ", personaQretiro=" + personaQretiro
				+ ", entregaAgente=" + entregaAgente + ", notas=" + notas
				+ ", controlDeLegales=" + controlDeLegales
				+ ", trasladoAcompactacion=" + trasladoAcompactacion + "]";
	};
	

}
