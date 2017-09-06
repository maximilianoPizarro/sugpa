package com.dgcactysv.negocio;

public class Facade {
	public AutomotorABM getAutomotorABM() {
		return new AutomotorABM();
	}
	
	public RegistroABM getRegistroABM() {
		return new RegistroABM();
	}

//	public CuotaABM getCuotaABM() {
//		return new CuotaABM();
//	}
}