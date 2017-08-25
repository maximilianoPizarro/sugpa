<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<link href="css/styles.css" rel="stylesheet" type="text/css">
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

<!--
import="com.unla.datos.Hotel" //en principio poner de titulo la instancia del singleton
Hotel hotel=Hotel.getInstanciaHotel();
<title>hotel.getnombre();</title> -->


<script type="text/javascript">

/* Fecha y Hora By Chivi */ 

	/* COMIENZA EL SCRIPT DEL RELOJ */ 
function actualizaReloj(){  

	/* CAPTURAMOS LA HORA, LOS MINUTOS Y LOS SEGUNDOS */ 
marcacion = new Date()  

	/* CAPTURAMOS LA HORA */ 
Hora = marcacion.getHours()  

	/* CAPTURAMOS LOS MINUTOS */ 
Minutos = marcacion.getMinutes()  

	/* CAPTURAMOS LOS SEGUNDOS */ 
Segundos = marcacion.getSeconds()  

	/* SI LA HORA, LOS MINUTOS O LOS SEGUNDOS 
SIN MENORES O IGUAL A 9, LE AÑADIMOS UN 0 */ 

if (Hora<=9) 
Hora = "0" + Hora 

if (Minutos<=9) 
Minutos = "0" + Minutos 

if (Segundos<=9) 
Segundos = "0" + Segundos 
	/* TERMINA EL SCRIPT DEL RELOJ */

	/* COMIENZA EL SCRIPT DE LA FECHA */ 
var Dia = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", 

"Domingo"); 
var Mes = new 

Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"); 
var Hoy = new Date(); 
var Anio = Hoy.getFullYear(); 
var Fecha = "Ciudad Autónoma de Buenos Aires, " + Dia[Hoy.getDay()] + ", " + Hoy.getDate() + " de " + Mes[Hoy.getMonth()] + " de " + Anio + ". Hora local: "; 
	/* TERMINA EL SCRIPT DE LA FECHA */ 

	/* CREAMOS 4 VARIABLES PARA DARLE FORMATO A NUESTRO SCRIPT */ 
var Inicio, Script, Final, Total 

	/* EN INICIO LE INDICAMOS UN COLOR DE FUENTE Y UN TAMAÑO */ 
Inicio = " " 

	/* EN RELOJ LE INDICAMOS LA HORA, LOS MINUTOS Y LOS SEGUNDOS */ 
Script = Fecha + Hora + ":" + Minutos + ":" + Segundos 

	/* EN FINAL CERRAMOS EL TAG DE LA FUENTE */ 
Final = " " 

	/* EN TOTAL FINALIZAMOS EL RELOJ UNIENDO LAS VARIABLES */ 
Total = Inicio + Script + Final 

	/* CAPTURAMOS UNA CELDA PARA MOSTRAR EL RELOJ */ 
document.getElementById('Fecha_Reloj').innerHTML = Total 

	/* INDICAMOS QUE NOS REFRESQUE EL RELOJ CADA 1 SEGUNDO */ 
setTimeout("actualizaReloj()",1000)  
} 
</script>




<title>iniciar sesion</title>
</head>
<body onload="actualizaReloj()">
 <div class="im-centered">	

	<div class="row contenedor-titulo text-center">
		<div class="col-md-4"><img class="imagen-logo" src="img/Logo.jpg"></div>
		<div class="col-md-4"><h1 class="titulo">DGCACTYSV</h1></div>
		<div class="col-md-8">
			  
              <ul class="horizontal-menu__lista">
                  <li class="horizontal-menu__item"><a href="inicio">INICIO</a></li>
                  <li class="horizontal-menu__item"><a href="inicio">SALIR</a></li>
                  <li class="horizontal-menu__item" id="Fecha_Reloj"><a href="Index"></a></li>
              </ul>
         		
		</div>
		
	</div>
	</div>

</body>
</html>