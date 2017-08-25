package com.dgcactysv.funciones;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.StringReader;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import com.dgcactysv.modelo.Vehiculo;

public class Funciones {

	private static final List<Vehiculo> lstVehiculos = cargarLstVehiculos();

	public static List<Vehiculo> getLstVehiculos() {
		return lstVehiculos;
	}

	// DIA
	public static String traerDia(GregorianCalendar fecha) {
		String dia = String.valueOf(traerNroDia(fecha));
		if (traerNroDia(fecha) < 10) {
			dia = "0" + dia;
		}
		return dia;
	}

	public static int traerNroDia(GregorianCalendar fecha) {
		return fecha.get(Calendar.DAY_OF_MONTH);
	}

	public static int traerNroDeDia(GregorianCalendar fecha) {
		return fecha.get(Calendar.DAY_OF_WEEK);
	}

	public static String traerDiaEnLetras(GregorianCalendar fecha) {
		String[] diaEnLetra = { "Domingo", "Lunes", "Martes", "Miercoles",
				"Jueves", "Viernes", "Sabado" };
		return diaEnLetra[traerNroDeDia(fecha) - 1];
	}

	public static boolean esDiaHabil(GregorianCalendar fecha) {
		boolean respuesta = false;
		if (!(traerDiaEnLetras(fecha).compareTo("Domingo") == 0))
			if (!(traerDiaEnLetras(fecha).compareTo("Sabado") == 0))
				respuesta = true;

		return respuesta;
	}

	// MES
	public static String traerMes(GregorianCalendar fecha) {
		String mes = String.valueOf(traerNroMes(fecha));
		if (traerNroMes(fecha) < 10) {
			mes = "0" + mes;
		}
		return mes;
	}

	public static int traerNroMes(GregorianCalendar fecha) {
		return fecha.get(Calendar.MONTH) + 1;
	}

	public static String traerMesEnLetras(GregorianCalendar fecha) {

		String[] mesEnLetra = { "Diciembre", "Enero", "Febrero", "Marzo",
				"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
				"Octubre", "Noviembre" };
		return mesEnLetra[traerNroMes(fecha)];
	}

	// AÑO
	public static String traerAnio(GregorianCalendar fecha) {
		return String.valueOf(traerNroAnio(fecha));
	}

	public static int traerNroAnio(GregorianCalendar fecha) {
		return fecha.get(Calendar.YEAR);
	}

	// FORMATO FECHAS

	public static String traerFechaCorta(GregorianCalendar fecha) {
		return traerDia(fecha) + "/" + traerMes(fecha) + "/" + traerAnio(fecha);
	}

	public static String traerFechaLarga(GregorianCalendar fecha) {
		return traerDia(fecha) + " de " + traerMesEnLetras(fecha) + " de "
				+ traerAnio(fecha);

	}

	public static GregorianCalendar traerFecha(int anio, int mes, int dia) {
		return new GregorianCalendar(anio, mes - 1, dia);
	}

	public static String traerFechaCorta3(Calendar fecha) {
		DateFormat dateFormat = new SimpleDateFormat("YYYY-MM-dd HH:mm:SS");
		return dateFormat.format(fecha.getTime());
	}

	public static String traerFechaCorta4(Calendar fecha) {
		
		if (fecha==null){
			fecha= new GregorianCalendar();
		}
		DateFormat dateFormat = new SimpleDateFormat("dd/MM/YYYY");
		return dateFormat.format(fecha.getTime());
	}

	// HORA
	public static String traerHora(GregorianCalendar f)

	{
		String ap = "am";
		String hora = "";
		if (f.get(Calendar.AM_PM) == 1) {
			ap = "pm";

		}
		hora = "" + f.get(Calendar.HOUR_OF_DAY) + ":"
				+ dosCeros(String.valueOf(f.get(Calendar.MINUTE))) + ":"
				+ dosCeros(String.valueOf(f.get(Calendar.SECOND))) + " " + ap;

		return hora;
	}
	
	public static String traerHora2(GregorianCalendar f)

	{
	
		String hora = "";

		hora = "" + f.get(Calendar.HOUR_OF_DAY) + ":"
				+ dosCeros(String.valueOf(f.get(Calendar.MINUTE))) + ":"
				+ dosCeros(String.valueOf(f.get(Calendar.SECOND))) + " ";

		return hora;
	}

	public static String dosCeros(String s) {
		if (s.compareTo("0") == 0) {
			s = s + "0";
		}
		return s;
	}

	public static String dosCeros(int i) {
		String s = String.valueOf(i);
		if (i < 10) {
			s = "0" + s;
		}
		return s;
	}

	// Fecha en String de 12 (dd/mm/aaaa) separado por / y por -

	// Funciones de comparacion de fechas:dos fechas como parametros
	// Mayores
	public static boolean esDiaMayor(GregorianCalendar f,
			GregorianCalendar fecha) {
		return (traerNroDia(f) > traerNroDia(fecha));
	}

	public static boolean esMesMayor(GregorianCalendar f,
			GregorianCalendar fecha) {
		return (traerNroMes(f) > traerNroMes(fecha));
	}

	public static boolean esAnioMayor(GregorianCalendar f,
			GregorianCalendar fecha) {
		return (traerNroAnio(f) > traerNroAnio(fecha));
	}

	// Iguales
	public static boolean esDiaIgual(GregorianCalendar f,
			GregorianCalendar fecha) {
		return (traerNroDia(f) == traerNroDia(fecha));
	}

	public static boolean esMesIgual(GregorianCalendar f,
			GregorianCalendar fecha) {
		return (traerNroMes(f) == traerNroMes(fecha));
	}

	public static boolean esAnioIgual(GregorianCalendar f,
			GregorianCalendar fecha) {
		return (traerNroAnio(f) == traerNroAnio(fecha));
	}

	// Menores
	/* Para años con diferencias menores que 1, ej:2015 y 2014, retorna true */
	public static boolean diferenciaAnioDeUno(GregorianCalendar f,
			GregorianCalendar fecha) {
		return (traerNroAnio(f) - traerNroAnio(fecha) == 1);
	}

	public static int cantidadDiasMes(GregorianCalendar fecha) {
		Integer[] cantidad = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
		return cantidad[traerNroMes(fecha) - 1];
	}

	public static int cantidadDiasMes(int anio, int mes) {
		Integer[] cantidad = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
		if (esBisiesto(anio)) {
			cantidad[1] = 29;
		}

		return cantidad[mes - 1];
	}

	public static int cantidadDiasMesAnterior(GregorianCalendar fecha) {
		Integer[] cantidad = { 31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30 };
		return cantidad[traerNroMes(fecha) - 1];
	}

	public static boolean esBisiesto(int anio)

	{
		boolean respuesta = false;
		if (anio % 4 == 0 && anio % 100 != 0 || anio % 400 == 0) {
			respuesta = true;
		}
		return respuesta;

	}

	public static boolean esBisiesto(GregorianCalendar fecha) {
		boolean a = false;
		if (fecha.get(GregorianCalendar.YEAR) % 4 == 0) {
			a = true;
			if (fecha.get(GregorianCalendar.YEAR) % 100 == 0) {
				a = false;
				if (fecha.get(GregorianCalendar.YEAR) % 400 == 0) {
					a = true;
				}
			}
		}
		return a;
	}

	public static boolean esFechaValida(int anio, int mes, int dia) {
		boolean respuesta = false;
		if (anio > 0) {
			if (mes > 0 && mes < 13) {
				mes = cantidadDiasMes(anio, mes);
				if (dia > 0 && dia <= mes) {
					respuesta = true;
				}
			}
		}
		return respuesta;
	}

	public static GregorianCalendar traerFecha(String fecha) {
		// 0 1 2 3 4 5 6 7 8 9
		// 2 4 / 0 5 / 1 9 9 1
		int dia = Integer.parseInt(fecha.substring(0, 2));
		int mes = Integer.parseInt(fecha.substring(3, 5));
		int anio = Integer.parseInt(fecha.substring(6, 10));

		return traerFecha(anio, mes, dia);

	}

	public static boolean sonFechasIguales(GregorianCalendar fecha,
			GregorianCalendar fecha1) {
		return (traerNroAnio(fecha) == traerNroAnio(fecha1)
				&& traerNroMes(fecha) == traerNroMes(fecha1) && traerNroDia(fecha) == traerNroDia(fecha1));
	}

	public static double aproximar2Decimal(double valor) {
		String valorStr = String.valueOf(0.0055 + valor);
		String cadena[] = valorStr.split("[.]");
		return Double.parseDouble(cadena[0] + "." + cadena[1].substring(0, 2));
	}

	public static double aproximar1Decimal(double valor) {
		String valorStr = String.valueOf(0.0555 + valor);
		String cadena[] = valorStr.split("[.]");
		return Double.parseDouble(cadena[0] + "." + cadena[1].substring(0, 1));
	}

	public static String sacarGuiones(String cuil) {
		// 27-36084320-9
		return String.valueOf(Integer.valueOf(cuil.substring(0, 2)))
				+ String.valueOf(Integer.valueOf(cuil.substring(3, 11)))
				+ String.valueOf(Integer.valueOf(cuil.substring(12, 13)));
	}

	public static String verificarCuil(String cuil) {
		cuil = sacarGuiones(cuil);
		int i = 0;
		int valor1 = 0;
		Integer[] numMul = { 5, 4, 3, 2, 7, 6, 5, 4, 3, 2 };
		while (i < cuil.length() - 1) {
			valor1 = valor1 + Integer.parseInt(cuil.substring(i, i + 1))
					* numMul[i];
			i++;
		}
		cuil = String.valueOf(11 - (valor1 % 11));
		if (Integer.parseInt(cuil) == 11)
			cuil = "0";
		else {
			if (Integer.parseInt(cuil) == 10)
				cuil = "9";
		}
		return cuil;
	}

	public static boolean verificarFormato(String cadena) {
		// Para ver si el orden esta bien definido ("LLLNNN") siendo L letra y N
		// numeros)
		boolean respuesta = true;
		if (comprobarCaracter(cadena)) {
			int i = 0, f = 3;
			// BJS210
			// 012345
			while (i < 3 && f < 6) {
				if (!(cadena.substring(i, i + 1).matches("[A-Z]"))
						|| (!(cadena.substring(f, f + 1).matches("[0-9]"))))
					respuesta = false;
				i++;
				f++;
			}
		} else {
			respuesta = false;
		}
		return respuesta;
	}

	public static boolean comprobarCaracter(String cadena) {
		// Para comprobar que todos los caracteres de las cadenas sean numeros o
		// letras válidas
		int i = 0;
		boolean respuesta = true;
		while (i < cadena.length()) {
			if (!(cadena.substring(i, i + 1)).matches("[A-Z0-9].*"))
				respuesta = false;
			i++;
		}
		return respuesta;
	}

	public static boolean esNumero(char c) {
		boolean respuesta = false;
		String cadena;
		cadena = String.valueOf(c);
		if (cadena.matches("[0-9]"))
			respuesta = true;
		return respuesta;
	}

	public static boolean esCaracter(char c) {
		boolean respuesta = false;
		String cadena;
		cadena = String.valueOf(c);
		if (cadena.matches("[A-Za-z.*]"))
			respuesta = true;
		return respuesta;
	}

	public static boolean esCadenaNumero(String cadena) {
		boolean respuesta = true;
		int i = 0;
		while (i < cadena.length()) {
			if (!cadena.substring(i, i + 1).matches("[0-9.*]"))
				respuesta = false;
			i++;
		}
		return respuesta;
	}

	public static boolean esCadenaLetras(String cadena) {
		boolean respuesta = true;
		int i = 0;
		while (i < cadena.length()) {
			if (!cadena.substring(i, i + 1).matches("[a-zA-Z.*]"))
				respuesta = false;
			i++;
		}
		return respuesta;
	}

	public static String traerFechaCorta(List<GregorianCalendar> lista) {
		String fecha = "";
		int i = 0;
		while (i < lista.size()) {
			fecha = traerDia(lista.get(i)) + "/" + traerMes(lista.get(i)) + "/"
					+ traerAnio(lista.get(i));
			i++;
		}
		return fecha;
	}

	// fechaCorta formato AAAA-MM-DD
	public static String traerFechaCorta2(GregorianCalendar fecha) {
		int numeroDia = traerNroDia(fecha);
		String stringNumeroDia = "";
		if (numeroDia < 10) {
			stringNumeroDia = "0" + numeroDia;
		} else {
			stringNumeroDia = "" + numeroDia;
		}
		int numeroMes = traerNroMes(fecha);
		String stringNumeroMes = "";
		if (numeroMes < 10) {
			stringNumeroMes = "0" + numeroMes;
		} else {
			stringNumeroMes = "" + numeroMes;
		}
		int numeroAnio = traerNroAnio(fecha);
		String fechaCorta = numeroAnio + "-" + stringNumeroMes + "-"
				+ stringNumeroDia;
		return fechaCorta;
	}
/*
	public static boolean esHabil(GregorianCalendar fecha) {
		boolean respuesta = true;
		boolean encontro = false;
		int i = 0;
		while (i < lstFeriados.size() && !encontro) {
			if (esDiaHabil(fecha) == false
					|| (sonFechasIguales(lstFeriados.get(i), fecha))) {
				respuesta = false;
				encontro = true;
			} else
				i++;

		}
		return respuesta;
	}

	public static GregorianCalendar traerPrimerDiaHabil(GregorianCalendar f) {
		GregorianCalendar fechaDevuelta = new GregorianCalendar();
		GregorianCalendar fComparar = f;
		boolean bandera = false;
		for (int i = 0; i < cantidadDiasMes(traerNroAnio(f), traerNroMes(f))
				&& !bandera; i++)
			while (!bandera) {
				if (esHabil(fComparar)) {
					bandera = true;
					fechaDevuelta = fComparar;
				} else {
					fComparar.add(Calendar.DAY_OF_WEEK, 1);
				}

			}

		if ((traerDiaEnLetras(fComparar).compareTo("Domingo") == 0)) {
			fechaDevuelta.add(Calendar.DAY_OF_WEEK, -1);
		}

		return fechaDevuelta;

	}
*/
	public static List<Vehiculo> cargarLstVehiculos() {
		List<Vehiculo> vehiculos = new ArrayList<Vehiculo>();
		try {

			File dirBase = new File("/sugpa/src/com/dgcactysv/datos/vehiculos.xml");
			String ruta = dirBase.getAbsolutePath();
			BufferedReader br = new BufferedReader(new FileReader(ruta));
			String entrada;
			String cadena = "";
			while ((entrada = br.readLine()) != null)
				cadena += entrada;
			DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
			DocumentBuilder db = dbf.newDocumentBuilder();
			InputSource archivo = new InputSource();
			archivo.setCharacterStream(new StringReader(cadena));
			Document documento = db.parse(archivo);
			documento.getDocumentElement().normalize();

			NodeList nodeLista = documento.getElementsByTagName("vehiculo");
			String[] tags = { "registro", "fecha", "hora","descripcion","dominio","marca","modelo","motivo","playa","usuario" };
			
			for (int s = 0; s < nodeLista.getLength(); s++) {
				Node nodo = nodeLista.item(s);
				String[] valores = new String[tags.length];
				if (nodo.getNodeType() == Node.ELEMENT_NODE) {
					Element elemento = (Element) nodo;
					for (int i = 0; i < tags.length; i++) {
						NodeList nombreElementoLista = elemento
								.getElementsByTagName(tags[i]);
						Element nombreElemento = (Element) nombreElementoLista
								.item(0);
						NodeList nombre = nombreElemento.getChildNodes();
						valores[i] = ((Node) nombre.item(0)).getNodeValue()
								.toString();
					}
					
					String registro = valores[0];
					String  fecha= valores[1];
					String 	hora= valores[2];
					String	descripcion= valores[3];
					String  dominio= valores[4];
					String 	marca= valores[5];
					String 	modelo= valores[6];
					String	motivo= valores[7];
					String	playa= valores[8];
					String	usuario= valores[9];
					
					Vehiculo v = new Vehiculo(registro,fecha,hora,descripcion,dominio,marca,modelo,motivo,playa,usuario);

					vehiculos.add(v);
				}
			}
			br.close();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return vehiculos;

	}

}
