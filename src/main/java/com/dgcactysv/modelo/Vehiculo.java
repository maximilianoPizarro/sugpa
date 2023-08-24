package com.dgcactysv.modelo;

public class Vehiculo {
	
	private String registro;
	private String  fecha;
	private String	hora;
	private String	descripcion;
	private String  dominio;
	private String 	marca;
	private String 	modelo;
	private String	motivo;
	private String 	playa;
	private String usuario;
	
	public Vehiculo(){}
	
	public Vehiculo(String registro, String fecha, String hora, String descripcion, String dominio,
			String marca, String modelo, String motivo, String playa,String usuario) {
		super();
		this.registro = registro;
		this.fecha = fecha;
		this.hora = hora;
		this.descripcion = descripcion;
		this.dominio = dominio;
		this.marca = marca;
		this.modelo = modelo;
		this.motivo = motivo;
		this.playa = playa;
		this.usuario= usuario;
	}

	public String getRegistro() {
		return registro;
	}

	public void setRegistro(String registro) {
		this.registro = registro;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	public String getHora() {
		return hora;
	}

	public void setHora(String hora) {
		this.hora = hora;
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

	public String getPlaya() {
		return playa;
	}

	public void setPlaya(String playa) {
		this.playa = playa;
	}
	
	

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	@Override
	public String toString() {
		return "Vehiculo [registro=" + registro  + ", fecha=" + fecha + ", hora=" + hora
				+ ", descripcion=" + descripcion + ", dominio=" + dominio + ", marca=" + marca + ", modelo=" + modelo
				+ ", motivo=" + motivo +", playa=" + playa +", usuario=" + usuario + "]";
	}
	
	
	
}
