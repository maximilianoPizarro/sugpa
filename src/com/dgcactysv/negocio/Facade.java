package com.dgcactysv.negocio;

public class Facade {

	public RegistroABM getRegistroABM() {
		return new RegistroABM();
	}

//	public CuotaABM getCuotaABM() {
//		return new CuotaABM();
//	}
}