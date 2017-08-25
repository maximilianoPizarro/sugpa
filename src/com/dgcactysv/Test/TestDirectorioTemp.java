package com.dgcactysv.Test;

import java.io.File;
import java.io.FileOutputStream;


import com.dgcactysv.modelo.Registro;
import com.dgcactysv.negocio.RegistroABM;
import com.dgcactysv.negocio.Facade;

public class TestDirectorioTemp {

	public static void main(String[] args) {
		Facade facade=new Facade();
		RegistroABM adm= facade.getRegistroABM();		
		
		try {
			Registro a = adm.traerRegistro("SUM819");


		// TODO Auto-generated method stub
        String tempFolder =  System.getProperty("java.io.tmpdir") ;
        String pathSeparator = System.getProperty("file.separator") ;
        
        
        
       /* String tempFile = tempFolder + "temporal.txt" ; 
                                                                       
        System.out.println(tempFile);                                                              
     */   
        String tempNewFolder = tempFolder + "carpeta" + pathSeparator;
        
        System.out.println(tempNewFolder);
        
        File file = new File(tempNewFolder);
        
        file.mkdirs();
        
        //byte[] bAvatar = a.getCedula(); escribo el archivo en una carpeta temporal

        try{
            FileOutputStream fos = new FileOutputStream(tempNewFolder+"asda.pdf");
            fos.write(1);
            fos.close();
        }catch(Exception e){
            e.printStackTrace();
        }
       
        
		} catch (Exception e) {
			e.printStackTrace();
		}
        

}
}	
