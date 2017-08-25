package com.dgcactysv.modelo;

import java.io.File;


public class Automotor {
	private int idAutomotor;
	private String dominio;
	private String modelo;
	private String marca;
	private byte[] cedula;
	
	public Automotor(){};

	public Automotor(String dominio, String modelo, String marca) {
		super();
		this.dominio = dominio;
		this.modelo = modelo;
		this.marca = marca;
	}

	public int getIdAutomotor() {
		return idAutomotor;
	}

	protected void setIdAutomotor(int idAutomotor) {
		this.idAutomotor = idAutomotor;
	}

	public String getDominio() {
		return dominio;
	}

	public void setDominio(String dominio) {
		this.dominio = dominio;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}



	public byte[] getCedula() {
		return cedula;
	}

	public void setCedula(byte[] cedula) {
		this.cedula = cedula;
	}

	@Override
	public String toString() {
		return "Automotor [idAutomotor=" + idAutomotor + ", dominio=" + dominio + ", modelo=" + modelo + ", marca="
				+ marca +", cedula="+ cedula + "]";
	}
	
	
	
}

/*CREATE TABLE `automotor` (
  `idAutomotor` int(11) NOT NULL AUTO_INCREMENT,
  `dominio` varchar(45) NOT NULL,
  `modelo` int(11) NOT NULL,
  `marca` varchar(45) NOT NULL,
  `idContribuyente` int(11) NOT NULL,
  PRIMARY KEY (`idAutomotor`),
  KEY `fk_automotor_contribuyente_id` (`idContribuyente`),
  CONSTRAINT `fk_automotor_contribuyente` FOREIGN KEY (`idContribuyente`) REFERENCES `contribuyente` (`idContribuyente`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
*/