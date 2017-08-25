package com.dgcactysv.dao;

import java.io.File;
import java.io.FileInputStream;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.dgcactysv.modelo.Registro;

public class RegistroDao {
	
	
	private static Session session;

	private Transaction tx;
	
	private void iniciaOperacion() throws HibernateException {
		session = HibernateUtil.getSessionFactory().openSession();
		tx = session.beginTransaction();
	}

	private void manejaExcepcion(HibernateException he) throws HibernateException {
		tx.rollback();
		throw new HibernateException("ERROR en la capa de acceso a datos", he);
	}
	
	public Registro traerRegistro(String dominio) throws HibernateException {
		Registro objeto = null;
		try {
			iniciaOperacion();
	
			String hql="from Registro where dominio =:dominio";
			objeto=(Registro) session.createQuery(hql).setParameter("dominio", (String)dominio).uniqueResult();
	
		}catch (HibernateException he) {
			manejaExcepcion(he);
			throw he;
		} finally {
				session.close();
				}
		return objeto;
		}
	
	public Registro traerRegistro1(String registro) throws HibernateException {
		Registro objeto = null;
		try {
			iniciaOperacion();
	
			String hql="from Registro where registro =:registro";
			objeto=(Registro) session.createQuery(hql).setParameter("registro", (String)registro).uniqueResult();
	
		}catch (HibernateException he) {
			manejaExcepcion(he);
			throw he;
		} finally {
				session.close();
				}
		return objeto;
		}
//Listar Vehiculos
	
	@SuppressWarnings("unchecked")

	public List<Registro> traerListaRegistro() throws HibernateException {
		List<Registro> lista=null;
		try {
			iniciaOperacion();
			lista= session.createQuery( "from Registro" ).list( );
		} finally {
			session.close();
		}
		return lista;
	}

	@SuppressWarnings("unchecked")
	public List<Registro> traerEnPlaya() throws HibernateException {
		List<Registro> lista=null;
		try {
			iniciaOperacion();
			lista= session.createQuery( "from Registro where fecha_egr is null" ).list( );
		} finally {
			session.close();
		}
		return lista;
	}
	
	@SuppressWarnings("unchecked")
	public List<Registro> traerEgresos() throws HibernateException {
		List<Registro> lista=null;
		try {
			iniciaOperacion();
			lista= session.createQuery( "from Registro where fecha_egr is not null" ).list( );
		} finally {
			session.close();
		}
		return lista;
	}
	
//contabliziacion	
	public int Contablilizacion() throws HibernateException {
		int conta;
		try {
			iniciaOperacion();
			Query query= session.createQuery( "select count(*) from Registro where fecha_egr is null" );
			conta=((Number) query.uniqueResult()).intValue();
		} finally {
			session.close();
		}
		
		return conta;	
	}
	
	public int ContablilizacionAutos() throws HibernateException {
		int conta;
		try {
			iniciaOperacion();
			Query query= session.createQuery( "select count(*) from Registro where fecha_egr is null AND descripcion=:AUTO").setParameter("AUTO", "AUTO");
			conta=((Number) query.uniqueResult()).intValue();
		} finally {
			session.close();
		}	
		return conta;	
	}
	
	public int ContablilizacionMotos() throws HibernateException {
		int conta;
		try {
			iniciaOperacion();
			Query query= session.createQuery( "select count(*) from Registro where fecha_egr is null AND descripcion=:MOTO").setParameter("MOTO", "MOTO");
			conta=((Number) query.uniqueResult()).intValue();
		} finally {
			session.close();
		}	
		return conta;	
	}
	
//Agregar registro
	
	public void agregar(Registro objeto) {
		try {
			iniciaOperacion();
			session.save(objeto);
			tx.commit();
		} catch (HibernateException he) {
			manejaExcepcion(he);
			throw he;
		} finally {
			session.close();
		}

	}
//Modificar
	
	public void actualizar(Registro objeto) throws HibernateException {

		try {
			iniciaOperacion();
			session.update(objeto);
			tx.commit();
		} catch (HibernateException he) {
			manejaExcepcion(he);
			throw he;
		} finally {
			session.close();
		}
	}
	
	

}
