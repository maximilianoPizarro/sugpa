<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="ISO-8859-1"%>
<%@include file="header.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Playas de Acarreo DGCACTYSV:</title>
</head>

<!-- jQuery library -->

<script src="js/jquery-1.12.4.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/select.js"></script>

	<script>
		 function validarPatente(form){
				if(document.getElementById('dominio').value == "SIN PATENTE")
					document.getElementById('dominio').value = "";
					
				if(form.tipoDominio[5].selected){
					document.getElementById('dom').style.display="none";
					document.getElementById('dominio').style.display="none";
					document.getElementById('dominio').value = "SIN PATENTE";
				}
				else{
					document.getElementById('dom').style.display="inline";
					document.getElementById('dominio').style.display="inline";
				}
		  }						    
	</script>



<body>


 <!-- NAVEGACIÓN PRINCIPAL -->
    <nav class="navbar navbar-default" role="navigation">
      <div class="container">
        <div class="row">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#" title="Sistema Ušnico de Gestión de Playas de Acarreo">SUGPA</a>
          </div>
          <div class="collapse navbar-collapse" id="main-nav">
            <ul class="nav navbar-nav navbar-right">
			  <li><a href="inicioo">Inicio</a></li>
		      <li><a href="#"><span class="glyphicon glyphicon-user"></span> <%=request.getAttribute("usuario")%></a></li>
      		  <li><a href="inicio"><span class="glyphicon glyphicon-log-in"></span> Salir</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- FIN DE NAVEGACIÓN PRINCIPAL --> 


<form method="post" action="ingresarVehiculo">
<div class="container">
  <h2>Ingresar vehiculo:</h2> <br>
  <div class="panel-group">

    <div class="panel panel-primary">
      <div class="panel-heading">Complete los datos del ingreso</div>
      <div class="panel-body">
    

						
						  <div class="row">
						    <div class="col-lg-4">
						          <div class="panel panel-primary">
     								 <div class="panel-heading">Datos del vehiculo</div>
      								 <div class="panel-body">
      								 
      								 	<label for="motivo">Playa de ingreso:</label>
						  				<p class="boton-margen-inferior">
									    <select class="form-control input-lg" id="playaIngreso" required name="playaIngreso">
									    <option value="" selected="">Seleccionar</option>
									     <option value="PLAYA SARMIENTO">PLAYA SARMIENTO</option>
									     <option value="PLAYA RIO CUARTO">PLAYA RIO CUARTO</option>
									    </select></p>
									    
						  				<label for="motivo">Tipo:</label>
						  				<p class="boton-margen-inferior">
									    <select class="form-control input-lg" id="tipo" required name="tipo" onchange="habilitar(this.form)">
									      <option value="" selected="">Seleccionar</option>
									      <option value="PARTICULAR">PARTICULAR</option>
									      <option value="MOTO">MOTO</option>
									      <option value="TAXI">TAXI</option>
									      <option value="COMBI">COMBI</option>
									      <option value="PICK-UP">PICK-UP</option>
									      <option value="CAMION">CAMION</option>
										  <option value="COLECTIVO">COLECTIVO</option>
										  <option value="SIN DEFINIR">SIN DEFINIR</option>
										  <option value="ACOPLADO">ACOPLADO</option>
									      <option value="OTRO">OTRO</option>
									    </select></p>
									    
									    <input class="form-control input-lg"  id="iTipo" name="iTipo" placeholder="Tipo de vehiculo" style="display: none" type="text"/>
										
									    <label id="tipoDom" for="tipoDom">Tipo de dominio: </label>
									    <p class="boton-margen-inferior">
									    <select class="form-control input-lg" id="tipoDominio" required name="tipoDominio" onchange="validarPatente(this.form)"> 
										<option value="" selected="">Seleccionar</option>
											<option value="NUEVO">NUEVO</option>
											<option value="VIEJO">VIEJO</option>
											<option value="INTERNACIONAL">INTERNACIONAL</option>
											<option value="DIPLOMATICO">DIPLOMATICO</option>
											<option value="SIN PATENTE">SIN PATENTE</option>
										</select></p> 
									    
										<label id="dom" for="dom">Dominio: </label>
										<p class="boton-margen-inferior">
										<input class="form-control input-lg" required name="dominio" id="dominio" type="text" style="text-transform:uppercase" autocomplete="off"/></p>
										
										<label id="marca" for="marca">Marca:</label>
										<p class="boton-margen-inferior">
										<select class="form-control input-lg" id="marcaSinSeleccion" name="marcaSinSeleccion" onchange="habilitar(this.form)">
									      <option value="0" selected="">Seleccionar</option>
									     </select></p>
									     
									    <label id="linea" for="linea" style="display: none">Linea y empresa:</label>
									    <p class="boton-margen-inferior">
										<select class="form-control input-lg" id="marcaParticular" name="marcaParticular" style="display: none" onchange="habilitar(this.form)">
									      <option value="0" selected="">Seleccionar</option>
												<option value="ACURA">Acura</option>
												<option value="ALFA ROMEO">Alfa Romeo</option>
												<option value="ARO">Aro</option>
												<option value="AUDI">Audi</option>
												<option value="BMW">BMW</option>
												<option value="CADILLAC">Cadillac</option>
												<option value="CHERY">Chery</option>
												<option value="CHEVROLET">Chevrolet</option>
												<option value="CHRYSLER">Chrysler</option>
												<option value="CITROEN">Citroen</option>
												<option value="DS">DS</option>
												<option value="DAEWOO">Daewoo</option>
												<option value="DAIHATSU">Daihatsu</option>
												<option value="DODGE">Dodge</option>
												<option value="FERRARI">Ferrari</option>
												<option value="FIAT">Fiat</option>
												<option value="FORD">Ford</option>
												<option value="FORD IMPROTADOS">Ford Importados</option>
												<option value="FOTON">Foton</option>
												<option value="HONDA">Honda</option>
												<option value="HYUNDAI">Hyundai</option>
												<option value="IKA">Ika</option>
												<option value="ISUZU">Isuzu</option>
												<option value="IVECO">Iveco</option>
												<option value="JAGUAR">Jaguar</option>
												<option value="JEEP">Jeep</option>
												<option value="KIA">Kia</option>
												<option value="LADA">Lada</option>
												<option value="LAND ROVER">Land Rover</option>
												<option value="LIFAN">Lifan</option>
												<option value="MG">MG</option>
												<option value="MASERATI">Maserati</option>
												<option value="MAZDA">Mazda</option>
												<option value="MERCEDES BENZ">Mercedes Benz</option>
												<option value="MINI">Mini</option>
												<option value="MITSUBISHI">Mitsubishi</option>
												<option value="NISSAN">Nissan</option>
												<option value="OPEL">Opel</option>
												<option value="PEUGEOT">Peugeot</option>
												<option value="PORSCHE">Porsche</option>
												<option value="RAM">RAM</option>
												<option value="RASTROJERO">Rastrojero</option>
												<option value="RENAULT">Renault</option>
												<option value="ROVER">Rover</option>
												<option value="RUGBY">Rugby</option>
												<option value="SAAB">Saab</option>
												<option value="SEAT">Seat</option>
												<option value="SMART">Smart</option>
												<option value="SSANGYONG">Ssangyong</option>
												<option value="SUBARU">Subaru</option>
												<option value="SUZUKI">Suzuki</option>
												<option value="TOYOTA">Toyota</option>
												<option value="VOLKSWAGEN">Volkswagen</option>
												<option value="VOLVO">Volvo</option>
												<option value="OTRA">Otra Marca</option>
											</select></p>
										
										<p class="boton-margen-inferior">
										<select class="form-control input-lg" id="marcaMoto" name="marcaMoto" style="display: none" onchange="habilitar(this.form)">
									       <option value="0" selected="">Seleccionar</option>
												<option value="87">Aprilia</option>
												<option value="10">BMW</option>
												<option value="429">Bajaj</option>
												<option value="177">Beta</option>
												<option value="320">Betamotor</option>
												<option value="274">Bloower</option>
												<option value="253">Brava</option>
												<option value="199">Can Am</option>
												<option value="206">Cerro</option>
												<option value="277">Corven</option>
												<option value="90">Daelim</option>
												<option value="382">Dayama</option>
												<option value="91">Ducati</option>
												<option value="308">Gamma</option>
												<option value="94">Gilera</option>
												<option value="95">Guzzi</option>
												<option value="96">Harley Davidson</option>
												<option value="36">Honda</option>
												<option value="97">Husqvarna</option>
												<option value="98">Jaguar</option>
												<option value="99">Jawa</option>
												<option value="100">Jianshe</option>
												<option value="196">KTM</option>
												<option value="101">Kawasaki</option>
												<option value="348">Keeway</option>
												<option value="321">Keller</option>
												<option value="102">Kymco</option>
												<option value="104">Mondial</option>
												<option value="105">Motomel</option>
												<option value="267">Panther</option>
												<option value="65">Piaggio</option>
												<option value="106">Piaggio Vespa</option>
												<option value="272">Polaris</option>
												<option value="108">Royal Enfield</option>
												<option value="219">SYM</option>
												<option value="109">Siambretta</option>
												<option value="79">Suzuki</option>
												<option value="110">Triumph</option>
												<option value="111">Vespa</option>
												<option value="291">X-Screams</option>
												<option value="292">Xingyue</option>
												<option value="112">Yamaha</option>
												<option value="113">Zanella</option>
												<option value="127">Otra Marca</option>
										</select></p>

										<p class="boton-margen-inferior">
											<select class="form-control input-lg" id="lineaEmpresa"
												name="lineaEmpresa" style="display: none"
												onchange="habilitar(this.form)">
											<option value="0" selected="">Seleccionar</option>
												<option value="1">Linea 1 - Transportes San Cayetano S.A.C.</option>
												<option value="2">Linea 2 - Transportes Veintidos de Septiembre S.A.C.</option>
												<option value="4">Linea 4 - Transportes Sol de Mayo C.I.S.A.</option>
												<option value="5">Linea 5 - Transportes Rio Grande S.A.C.I.F.</option>
												<option value="6">Linea 6 - NUDO S.A.</option>
												<option value="7">Linea 7 - Transportes Automotores 12 de Octubre S.A.C.</option>
												<option value="8">Linea 8 - Transportes Rio Grande S.A.C.I.F.</option>
												<option value="9">Linea 9 - General Tomas Guido S.A.</option>
												<option value="10">Linea 10 - Linea 10 S.A.</option>
												<option value="12">Linea 12 - Transportes Automotores Callao S.A.</option>
												<option value="15">Linea 15 - Transportes Sur-Nor C.I.S.A.</option>
												<option value="17">Linea 17 - Linea 17 S.A.</option>
												<option value="19">Linea 19 - Microomnibus Saavedra S.A.</option>
												<option value="20">Linea 20 - Transporte Larrazabal C.I.S.A.</option>
												<option value="21">Linea 21 - Empresa Teniente General Roca S.A.</option>
												<option value="22">Linea 22 - Linea 22 S.A.</option>
												<option value="23">Linea 23 - Transportes Rio Grande S.A.C.I.F.</option>
												<option value="24">Linea 24 - NUDO S.A.</option>
												<option value="25">Linea 25 - General Tomas Guido S.A.</option>
												<option value="26">Linea 26 - 17 de Agosto S.A.</option>
												<option value="28">Linea 28 - DOTA S.A.</option>
												<option value="29">Linea 29 - Empresa de Transporte Pedro de Mendoza</option>
												<option value="31">Linea 31 - ROCARAZA S.A.</option>
												<option value="32">Linea 32 - El Puente S.A.T.</option>
												<option value="33">Linea 33 - Transportes Almirante Brown S.A.</option>
												<option value="34">Linea 34 - Juan B. Justo S.A.T.C.I.</option>
												<option value="36">Linea 36 - Grupo Plaza - Transporte Automotor Plaza S.A.C.I.</option>
												<option value="37">Linea 37 - 4 de Septiembre S.A.T.C.P</option>
												<option value="39">Linea 39 - Transportes Santa Fe S.A.C.I.</option>
												<option value="41">Linea 41 - Azul S.A.T.A.</option>
												<option value="42">Linea 42 - Transportes Colegiales S.A.C.I.</option>
												<option value="44">Linea 44 - DOTA S.A.</option>
												<option value="45">Linea 45 - Micro omnibus Cuarenta y Cinco S.A.C.I.F</option>
												<option value="46">Linea 46 - Union Transportista de Empresas S.A. - UTE S.A.</option>
												<option value="47">Linea 47 - Linea de Microomnibus 47 S.A.</option>
												<option value="49">Linea 49 - Buenos Aires Bus S.A.</option>
												<option value="50">Linea 50 - NUDO S.A.</option>
												<option value="51">Linea 51 - Empresa San Vicente S.A.T.</option>
												<option value="53">Linea 53 - Linea 213 S.A. de Transportes</option>
												<option value="55">Linea 55 - Almafuerte S.A.T.A.C.I.</option>
												<option value="56">Linea 56 - Transportes Lope de Vega S.A.C.I.</option>
												<option value="57">Linea 57 - Transportes Atlantica S.A. Comercial</option>
												<option value="59">Linea 59 - Microomnibus Ciudad de Buenos Aires S.A.T.C.I.</option>
												<option value="60">Linea 60 - Micro omnibus Norte S.A. (MONSA)</option>
												<option value="61">Linea 61 - Grupo Plaza - Transporte Automotor Plaza S.A.C.I.</option>
												<option value="62">Linea 62 - Grupo Plaza - Transporte Automotor Plaza S.A.C.I.</option>
												<option value="63">Linea 63 - Bernardino Rivadavia S.A.T.A.</option>
												<option value="64">Linea 64 - Vuelta de Rocha S.A.T.A.C.I.</option>
												<option value="65">Linea 65 - La Nueva Metropol S.A.T.A.C.I.</option>
												<option value="67">Linea 67 - Transportes del Tejar S.A.</option>
												<option value="68">Linea 68 - Transportes Sesenta y Ocho S.R.L.</option>
												<option value="70">Linea 70 - Transportes 270 S.A.</option>
												<option value="71">Linea 71 - Lina 71 S.A.</option>
												<option value="74">Linea 74 - Empresa San Vicente S.A.T.</option>
												<option value="75">Linea 75 - El Puente S.A.T.</option>
												<option value="76">Linea 76 - Transportes Lope de Vega S.A.C.I.</option>
												<option value="78">Linea 78 - Los Constituyentes S.A.T.</option>
												<option value="79">Linea 79 - Empresa San Vicente S.A.T.</option>
												<option value="80">Linea 80 - Transportes Nueva Chicago C.I.S.A.</option>
												<option value="84">Linea 84 - General Tomas Guido S.A.</option>
												<option value="85">Linea 85 - Sociedad Anonima Expreso Sudoeste</option>
												<option value="86">Linea 86 - DUVI S.A.</option>
												<option value="87">Linea 87 - Los Constituyentes S.A.T.</option>
												<option value="88">Linea 88 - Linea Expreso Liniers S.A.I.C.</option>
												<option value="90">Linea 90 - Micro omnibus Doscientos Ocho S.A. de Transporte Automotor (MODO)</option>
												<option value="91">Linea 91 - Transportes Lope de Vega S.A.C.I.</option>
												<option value="92">Linea 92 - Empresa de Transportes Microomnibus Saenz Pe\u00F1a S.R.L.</option>
												<option value="93">Linea 93 - Transportes 1º de Septiembre S.A.</option>
												<option value="95">Linea 95 - Empresa Antantida Argentina S.A.T.</option>
												<option value="96">Linea 96 - Transporte Ideal San Justo S.A.</option>
												<option value="97">Linea 97 - Bus del Oeste S.A.</option>
												<option value="98">Linea 98 - Expreso Quilmes S.A.</option>
												<option value="99">Linea 99 - Transportes 27 de Junio S.A.C.I.F.</option>
												<option value="100">Linea 100 - Transportes Automotores Riachuelo S.A. (TARSA)</option>
												<option value="101">Linea 101 - DOTA S.A.</option>
												<option value="102">Linea 102 - Transportes Sargento Cabral Sociedad Colectiva</option>
												<option value="103">Linea 103 - Transportes Quirno Costa S.A.C.I.</option>
												<option value="104">Linea 104 - Grupo Plaza - Transporte Automotor Plaza S.A.C.I.</option>
												<option value="105">Linea 105 - Empresa de Transportes America S.A.C.I.</option>
												<option value="106">Linea 106 - Colectiveros Unidos S.A.I.F. (CUSA)</option>
												<option value="107">Linea 107 - NUDO S.A.</option>
												<option value="108">Linea 108 - Empresa Teniente General Roca S.A.</option>
												<option value="109">Linea 109 - Transportes 9 de Julio S.A.C.</option>
												<option value="110">Linea 110 - General Pueyrredon S.A.T.C.I</option>
												<option value="111">Linea 111 - Los Constituyentes S.A.T.</option>
												<option value="112">Linea 112 - Expreso Lomas S.A.</option>
												<option value="113">Linea 113 - Bernardino Rivadavia S.A.T.A.</option>
												<option value="114">Linea 114 - Grupo Plaza - Transporte Automotor Plaza S.A.C.I.</option>
												<option value="115">Linea 115 - Transportes Automotores Riachuelo S.A. (TARSA)</option>
												<option value="117">Linea 117 - Transporte Larrazabal C.I.S.A.</option>
												<option value="118">Linea 118 - Microomnibus Barrancas de Belgrano S.A.</option>
												<option value="123">Linea 123 - Transportes Linea 123 S.A.C.I.</option>
												<option value="124">Linea 124 - Transportes Automotores Callao S.A.</option>
												<option value="126">Linea 126 - Cardenas S.A. Empresa de Transportes</option>
												<option value="127">Linea 127 - Los Constituyentes S.A.T.</option>
												<option value="128">Linea 128 - El Puente S.A.T.</option>
												<option value="129">Linea 129 - Grupo Plaza - Transporte Automotor Plaza S.A.C.I.</option>
												<option value="130">Linea 130 - Transportes Avenida Bernardo Ader S.A. (TABA)</option>
												<option value="132">Linea 132 - Nuevos Rumbos S.A</option>
												<option value="133">Linea 133 - Grupo Plaza - Transporte Automotor Plaza S.A.C.I.</option>
												<option value="134">Linea 134 - Transportes Automotores Riachuelo S.A. (TARSA)</option>
												<option value="135">Linea 135 - Transportes Lope de Vega S.A.C.I.</option>
												<option value="136">Linea 136 - Sargento Cabral S.A. de Transporte</option>
												<option value="140">Linea 140 - Grupo Plaza - Transporte Automotor Plaza S.A.C.I.</option>
												<option value="141">Linea 141 - Grupo Plaza - Transporte Automotor Plaza S.A.C.I.</option>
												<option value="143">Linea 143 - Grupo Plaza - Transporte Automotor Plaza S.A.C.I.</option>
												<option value="146">Linea 146 - ROCARAZA S.A.</option>
												<option value="148">Linea 148 - El Nuevo Halcon S.A.</option>
												<option value="150">Linea 150 - NUDO S.A.</option>
												<option value="151">Linea 151 - Micro omnibus Doscientos Ocho S.A. de Transporte Automotor (MODO)</option>
												<option value="152">Linea 152 - Empresa Tandilense S.A.C.I.F.I.Y DE S.</option>
												<option value="153">Linea 153 - Microomnibus Saavedra S.A. - Grupo ERSA</option>
												<option value="154">Linea 154 - Micro omnibus Cuarenta y Cinco S.A.C.I.F</option>
												<option value="159">Linea 159 - Micro Omnibus Quilmes S.A.C.I.F. (MOQSA)</option>
												<option value="160">Linea 160 - Micro omnibus Sur S.A.C.</option>
												<option value="161">Linea 161 - Transporte Larrazabal C.I.S.A.</option>
												<option value="163">Linea 163 - Sargento Cabral S.A. de Transporte</option>
												<option value="165">Linea 165 - Expreso Lomas S.A.</option>
												<option value="166">Linea 166 - Empresa Linea 216 S.A.T.</option>
												<option value="168">Linea 168 - Expreso San Isidro S.A. (ESISA)</option>
												<option value="169">Linea 169 - Transporte Escalada S.A.</option>
												<option value="172">Linea 172 - La Caba\u00F1a S.A.</option>
												<option value="174">Linea 174 - La Caba\u00F1a S.A.</option>
												<option value="175">Linea 175 - Transporte Escalada S.A.</option>
												<option value="176">Linea 176 - Expreso General Sarmiento S.A.</option>
												<option value="177">Linea 177 - Empresa San Vicente S.A.T.</option>
												<option value="178">Linea 178 - Compa\u00F1ia de Microomnibus La Colorada S.A.C.I.</option>
												<option value="179">Linea 179 - Grupo Linea 179 S.A.</option>
												<option value="180">Linea 180 - La Vecinal de Matanza S.A.C.I. de Microomnibus</option>
												<option value="181">Linea 181 - Transporte Automotor de Pasajeros Siglo XXI S.A.</option>
												<option value="182">Linea 182 - Sargento Cabral S.A. de Transporte</option>
												<option value="184">Linea 184 - La Central de Vicente Lopez S.A.C.</option>
												<option value="185">Linea 185 - Transporte Ideal San Justo S.A.</option>
												<option value="188">Linea 188 - Transporte Larrazabal C.I.S.A.</option>
												<option value="193">Linea 193 - DUVI S.A.</option>
												<option value="194">Linea 194 - La Nueva Metropol S.A.T.A.C.I.</option>
												<option value="195">Linea 195 - La Nueva Metropol S.A.T.A.C.I.</option>
											</select>
										</p>

										<input class="form-control input-lg" id="iMarca" name="iMarca" type="text" style="display: none"/>
										
										<label id="modelo" for="modelo">Modelo:</label>
										
										<label id="interno" for="interno" style="display: none">Interno:</label>
										
										<p class="boton-margen-inferior">
										<select class="form-control input-lg" id="modeloSinSeleccion" name="modeloSinSeleccion" style="display: none"> 
										<option value="0" selected="">Seleccionar</option>
										</select></p>  
										
										<p class="boton-margen-inferior">
										<select class="form-control input-lg" id="modeloP" name="modeloP"> 
										<option value="0" selected="">Seleccionar</option>
										</select></p>  
										
										<p class="boton-margen-inferior"> 
										<select class="form-control input-lg" id="modeloM" name="modeloM" style="display: none"> 
										<option value="0" selected="">Seleccionar</option>
										</select></p>  

										<input class="form-control input-lg" id="iInterno" required name="iInterno" type="text" style="display: none"/></p> 
										
										<input class="form-control input-lg" id="iModelo" name="iModelo" type="text" style="display: none"/></p> 
										
										<label id="color" for="color">Color:</label>
										<p class="boton-margen-inferior">
										<select class="form-control input-lg" id="color" required name="color"> 
										<option value="" selected="">Seleccionar</option>
											<option value="AMARILLO">AMARILLO</option>
											<option value="AZUL">AZUL</option>
											<option value="BLANCO">BLANCO</option>
											<option value="CELESTE">CELESTE</option>
											<option value="DORADO">DORADO</option>
											<option value="GRIS">GRIS</option>
											<option value="MARRON">MARRON</option>
											<option value="MORADO">MORADO</option>
											<option value="NARANJA">NARANJA</option>
											<option value="NEGRO">NEGRO</option>
											<option value="OXIDADO">OXIDADO</option>
											<option value="PLATEADO">PLATEADO</option>
											<option value="ROJO">ROJO</option>
											<option value="ROSA">ROSA</option>
											<option value="TURQUESA">TURQUESA</option>
											<option value="VERDE">VERDE</option>
											<option value="SIN ESPECIFICAR">SIN ESPECIFICAR</option>
										</select></p> 
										
									    <label for="motivo">Motivo:</label>
										<p class="boton-margen-inferior">
											<select class="form-control input-lg" id="motivo" required
												name="motivo">
											<option value="" selected="">Seleccionar</option>
												<option value="7063">7063 - Acompañante (MOTO) supera el límite alcohol en sangre</option>
												<option value="7062">7062 - Negarse Ctrl ALCOHOLEMIA /Estupef. / otra sustancia (Conductor vehíc/moto o acompañante)</option>
												<option value="6187">6187 - Negarse Ctrl ALCOHOLEMIA / Estupef. / otra sustancia (Taxi/Tte. Escolar, Pasajeros/Remises - en servicio)</option>
												<option value="8910">8910 - Cruzar BARRERA FFCC baja (Particulares)</option>
												<option value="8911">8911 - Cruzar BARRERA FFCC baja (Tte Escolar/Pasajeros/Carga)</option>
												<option value="6660">6660 - Evadir pago estación de PEAJE en Autopista</option>
												<option value="6762">6762 - Circular (Moto) x Ciclovía a CONTRAMANO en contracarril</option>
												<option value="6560">6560 - Circular en sentido contrario (en vías doble circulación)</option>
												<option value="6780">6780 - Circular x Artería peatonal / Zona carril (prohib- exclusivo- preferencial), o excede límite (dimensión/peso/potencia) permitida para la vía transitada</option>
												<option value="6761">6761 - Circular por carril del STR utilizado por el METROBÚS</option>
												<option value="6167">6167 - Obstruir vía carril exclusivo/Preferencial/Metrobús/Premetro</option>
												<option value="6680">6680 - Obstruir vía Transversal/Ciclovía/Vereda/Rampa Discapac. /Estacionamiento reservado</option>
												<option value="6490">6490 - Manipular CELULAR/Utilizar AURICULARES/reproductor VIDEO</option>
												<option value="6492">6492 - Redactar o enviar MENSAJE DE TEXTO</option>
												<option value="6540">6540 - Circular (VEHICULO) a CONTRAMANO</option>
												<option value="6640">6640 - Circular MARCHA ATRÁS en forma indebida y sin justificación</option>
												<option value="6600">6600 - GIRAR en "U" o hacia transversal en forma antirreglamentaria</option>
												<option value="6620">6620 - No respetar (PRIORIDAD PASO en BOCACALLE/cartel "PARE")</option>
												<option value="6580">6580 - No respetar carriles/ No advertir maniobras/ Conducta temeraria, maliciosa o imprudente</option>
												<option value="6191">6191 - No CONTAR con SEGURO obligatorio VIGENTE (cod.6191)</option>
												<option value="6161">6161 - No exhibir CÉDULA VERDE o CÉDULA AZUL</option>
												<option value="6190">6190 - No PORTAR cobertura, PÓLIZA o TARJETA seguro VIGENTE)</option>
												<option value="7064">7064 - Utilizar cartel/credencial/patente/docum. Acredite FRANQUICIA de tránsito/estaciona. Inexistente/antirreglam. o no aplicable a persona que lo utiliza/exhibe</option>
												<option value="6960">6960 - Enseñar a conducir vehíc. en lugar no habilitado (Academia)</option>
												<option value="6950">6950 - Enseñar a conducir vehíc. en lugar no habilitado (Particular)</option>
												<option value="6920">6920 - Estacionamiento TARIFADO/MEDIDO vencido</option>
												<option value="6910">6910 - Estacionar LUGAR RESERVADO (Serv.EMERG. / PARADA Tte.Pasaj/ Vehíc. Persona discapac./ RAMPA discapac./ ENTRADA vehíc./ CICLOVÍA/ CARRIL exclusivo/ corredor METROBUS/ zona Micro-Macrocentro)</option>
												<option value="6935">6935 - Estac. en ARTERIA PEATONAL, sobre ACERA o parte de de ella</option>
												<option value="6900">6900 - Estac. en lugar prohibido o en forma antirreglamentaria</option>
												<option value="6890">6890 - CARGA/DESCARGA fuera de hora, o en lugar prohibido (Respon. VEHÍCULO)</option>
												<option value="6185">6185 - CARGA/DESCARGA fuera de hora, o en lugar prohibido (Respon./Propietario COMERCIO)</option>
												<option value="7045">7045 - Vehíc. LIMITA/OBSTRUYE estacionamiento y/o circulación x colocación transitoria de un elemento/dispositivo</option>
												<option value="6980">6980 - No respetar indicaciones de agente que dirige el tránsito</option>
												<option value="6130">6130 - Conducir sin ANTEOJOS/LENTES contacto indicado en Licencia</option>
												<option value="6105">6105 - FALTA de Licencia y/o documentación habilitante de chofer y/o esté INHABILITADO para conducir (Tte. Público)</option>
												<option value="6122">6122 - Licencia/documentación habilitante VENCIDA (Tte. Público)</option>
												<option value="6120">6120 - Licencia VENCIDA o caduca</option>
												<option value="6100">6100 - NO PORTAR licencia</option>
												<option value="6140">6140 - No portar licencia que habilita conducir CATEGORÍA vehíc.</option>
												<option value="6882">6862 - NO POSEER licencia</option>
												<option value="6110">6110 - Permitir conducir sin licencia / doc. habilitante de chofer / inhabilitado para conducir (Tte. Público)</option>
												<option value="6121">6121 - Permitir conducir con Licencia o doc. vencida (Empresa Tte, titular, mandataria o Respons.)</option>
												<option value="6150">6150 - Permitir conducir vehíc. sin licencia que habilita CATEGORÍA del vehíc. (titular o empresa)</option>
												<option value="7065">7065 - Circular SIN LUCES encendidas en arteria obligatoria / Utilizar LUCES ALTAS cuando no está permitido</option>
												<option value="7066">7066 - Utilizar LUCES no reglamentarias o que induzcan a error</option>
												<option value="7050">7050 - Violar LUZ ROJA</option>
												<option value="6186">6186 - Violar LUZ ROJA (Taxi / Tte Escolar Pasajeros / Remise)</option>
												<option value="7021">7021 - (BICICLETAS) Circular ASIDO a otro vehíc. o apareado detrás/No usar CASCO/ Falta espejo, luces / Transportar persona en diseño vehíc. no apto / No respetar señalización vial</option>
												<option value="7010">7010 - Circular sin ANTIPARRAS (MOTO/ MOTONETA/ CICLOM. sin parabrisas)</option>
												<option value="7001">7001 - (MOTO) Circular ASIDO a otro vehíc. o apareado detrás/ No usar CASCO / Transportar persona en diseño vehíc. no apto / Transportar MENORES de 16 años</option>
												<option value="6970">6970 - (PEATON) - CRUZAR calzada x lugar no habilitado/no respetar SEMÁFORO que permita el cruce</option>
												<option value="6886">6886 - Circular por arteria no permitida o sin DISTINTIVO</option>
												<option value="6230">6230 - Circular con ANTIRADAR o ANTIFOTO</option>
												<option value="6430">6430 - Circular c/VIDRIOS TONALIZADOS impide distinguir ocupantes</option>
												<option value="6450">6450 - Circular sin ESPEJO retrovisor o c/objeto dificulta visión vidrio trasero/laterales (Vehíc.)</option>
												<option value="6470">6470 - Circular SIN TAPA tanque de COMBUSTIBLE</option>
												<option value="8885">8885 - Colocar/Instalar parada Tte. o señal/símbolo de tránsito sin autorización // Retirar, trasladar, ocultar, modificar, deteriorar o destruir cualquier SEÑALIZACIÓN VIAL</option>
												<option value="8884">8884 - Dificultar circulación vehíc. o no señalizar (Respons OBRA)</option>
												<option value="6250">6250 - FALTA de (FRENOS, LUCES, CINTURÓN / otro elem. seguridad) o Deficiente</option>
												<option value="6410">6410 - Falta de PARAGOLPES</option>
												<option value="6290">6290 - Falta dispositivo control de GASES o con Deficiencias</option>
												<option value="6280">6280 - Falta LIMITADOR de velocidad</option>
												<option value="6330">6330 - Falta SILENCIADOR o Deficiente/Alterado o c/salida total/parcial directa de gases</option>
												<option value="6271">6271 - MENOR de 4 años en ASIENTO TRASERO sin acompañante adulto o SIN DISPOSITIVO retención infantil</option>
												<option value="6501">6501 - MENOR en ASIENTO DELANTERO o de menor talla</option>
												<option value="6700">6700 - No CEDER PASO a Policía/Bomb/Ambul/Serv. Urgencia</option>
												<option value="6270">6270 - NO USAR CINTURÓN de seguridad</option>
												<option value="6160">6160 - Permitir/Ceder manejo de vehíc. persona sin edad necesaria</option>
												<option value="6370">6370 - Tener BOCINA o SIRENA antirreglamentarias</option>
												<option value="6390">6390 - Tener PARAGOLPES antirreglamentarios</option>
												<option value="6800">6800 - Transportar MAYOR nro. PERSONAS s/CAPACIDAD vehíc.</option>
												<option value="6350">6350 - Usar en forma indebida la BOCINA</option>
												<option value="6310">6310 - Verter COMBUSTIBLE/ Agua servida/ ARROJAR OBJETO o RESIDUO hacia el exterior del vehíc.</option>
												<option value="6720">6720 - Interrumpir FILAS ESCOLARES</option>
												<option value="6740">6740 - No respetar SENDA PEATONAL o PRIORIDAD PASO del peatón</option>
												<option value="8919">8919 - Asignar viaje Radiotaxi sin autorización</option>
												<option value="8920">8920 - Asignar viaje Radiotaxi sin Licencia de taxi (persona)</option>
												<option value="8921">8921 - Asignar viaje Radiotaxi sin Licencia taxi (Titu/Chofer/Respons)</option>
												<option value="8915">8915 - Asignar viaje x vía telef., mail, otros y no x Central Radio Taxi</option>
												<option value="8933">8933 - Cobrar distinta cant.fichas o adicional a Discapac.</option>
												<option value="6876">6876 - Cobrar por sobre/debajo VALOR TARIFA que fija GCBA</option>
												<option value="8938">8938 - Emplear equipo comunicación no homologado (Titu/Respons)</option>
												<option value="8935">8935 - Exhibir cartel Radio Taxi sin alta Empresa (Emp/Respon/Chofer)</option>
												<option value="8934">8934 - Exhibir cartel Radio Taxi sin equip.radio (Emp/Respon/Chofer)</option>
												<option value="6872">6872 - Incumplir obligac. SEC.COMU./Autoriz.anual VENCIDA/No cumplir requisitos s/norma vigte</option>
												<option value="6182">6182 - Negarse detener mecan./dispos.electr. PUBLICIDAD INTERIOR</option>
												<option value="6181">6181 - Negarse s/justific. transportar pasajero que solicita servicio</option>
												<option value="6183">6183 - No portar FICHA IDENTIFICAC.Titu.licencia/chofer o Cartel VALOR de TARIFA</option>
												<option value="7552">7552 - Poseer dispo.mecánico/electrónico que incrementa tarifa</option>
												<option value="6871">6871 - Prestar serv. SIN HABILITAC./ Con identificac. taxi sin poseer licencia/ Realizar actividad clandestina (Titu/Respons/Mandat)</option>
												<option value="8940">8940 - Prestar serv. con autorizac. radioelect. anual vencida + de 30 días (Titu/Respons)</option>
												<option value="8936">8936 - Prestar serv. con baja de Empresa y con señal Radio Taxi (Titu/Respons)</option>
												<option value="8937">8937 - Prestar serv. Radio Taxi sin estar abonado a empresa habilitada (Titu/Respons/Chofer)</option>
												<option value="8939">8939 - Prestar serv. Radio Taxi sin verificar/registrar en Autoridad la instalac/función equipo radio</option>
												<option value="6874">6874 - Radio Taxi con IRA VENCIDO y/o está de baja y no elimina señales que lo identificaban</option>
												<option value="6873">6873 - Radio Taxi NO ABONADO a estac.central o DIFIERE estac.central a la abonada</option>
												<option value="6875">6875 - Realizar promo./Cobrar TARIFA NO AUTORIZADA (Titu/Empr/Mandatario)</option>
												<option value="8928">8928 - Empresa RT c/trabajador que no cumple registración s/ley laboral</option>
												<option value="8932">8932 - Empresa RT tiene abonados sin tener equipo de radio</option>
												<option value="8924">8924 - Empresa RT incumple autorización funcionamiento</option>
												<option value="8917">8917 - Empresa RT Habilitación vencida (entre 181 y 360 días)</option>
												<option value="8916">8916 - Empresa RT Habilitación vencida (entre 30 y 180 días)</option>
												<option value="8918">8918 - Empresa RT Habilitación vencida (más de 360 días)</option>
												<option value="8929">8929 - Empresa RT no comunica cambio de localización Estac.Central</option>
												<option value="8925">8925 - Empresa RT no comunica detalle de abonados</option>
												<option value="8927">8927 - Empresa RT no cumplimenta previsión s/Cod. TyT</option>
												<option value="8930">8930 - Empresa RT no opera las 24 horas s/Cod. TyT</option>
												<option value="8931">8931 - Empresa RT opera con + de una Estación Central</option>
												<option value="8922">8922 - Empresa RT presta serv. a Radio Taxi que no cumple norma legal</option>
												<option value="8926">8926 - Empresa RT presta serv. c/menor cant. de abonados s/Cod. TyT</option>
												<option value="8923">8923 - Empresa RT realiza promoción no autorizada</option>
												<option value="8914">8914 - Empresa RT sin habilitación</option>
												<option value="6169">6169 - Dañar/alterar/retirar DISPOSITIVO de ALCOHOLEMIA (CONDUCTOR Vehíc. Tte Escolares)</option>
												<option value="6168">6168 - Dañar/alterar/retirar DISPOSITIVO de ALCOHOLEMIA (TITULAR o Respons. Vehíc. Tte. Escolares)</option>
												<option value="6184">6184 - Exceder PESO MÁXIMO establecido por EJE (Tte CARGA)</option>
												<option value="6870">6870 - No cumplir norma regula requisito vehíc. habilitado para prestar servicio o en infracción a habilitación concedida</option>
												<option value="7030">7030 - No cumplir norma regula servicio (Tte PRIVADO Pasajeros o ALQUILER de Autos sin conductor)</option>
												<option value="6840">6840 - No cumplir norma uso radio/reproduc. sonido o publicidad interior-ext/TRATO al pasajero/prohib.FUMAR (Tte. Pasajero)</option>
												<option value="6850">6850 - No cumplir HORARIO servicio / VESTIMENTA (Tte. Pasajeros)</option>
												<option value="6877">6877 - No poseer HABILITACIÓN para prestar servicio (Respons. vehíc. Tte CARGA o Pasajeros)</option>
												<option value="6820">6820 - No poseer PARADA ASC_DESC/no ARRIMAR a acera/circular PUERTA ABIERTA</option>
												<option value="6830">6830 - Permitir ocupar LUGAR NO DESTINADO a viajar en ellos</option>
												<option value="6880">6880 - Transporta carga s/permiso s/PESO/DIMENSIÓN, tener permiso y violar límite autorización/ CARGA DESCUBIERTA o no asegurada (Tte Carga)</option>
												<option value="6881">6881 - Transporta carga s/permiso s/PESO/DIMENSIÓN, tener permiso y violar límite autorización/ CARGA DESCUBIERTA o no aseguradate (Tte Explosivos /objetos inflamables -volátiles -insalubres/animales)</option>
												<option value="6180">6180 - No exhibir documentac. para Tte.Sust.PELIGROSA (Tte CARGA)</option>
												<option value="6166">6166 - Transportar Sust. ALIMENTICIAS sin habilitación</option>
												<option value="6670">6670 - Transportar Sust. PELIGROSA infringe norma regulan actividad</option>
												<option value="6165">6165 - Transportar Sust. PELIGROSA sin habilitación</option>
												<option value="6241">6241 - VTV VENCIDA/ sin realizar verificación (Vehíc/Moto)</option>
												<option value="6240">6240 - No PORTAR certificado VERIFIC. Técnica (Vehíc/Moto)</option>
												<option value="6242">6242 - No realizar Grabado de AUTOPARTES</option>
												<option value="6243">6243 - Incumplir Grabado AUTOPARTES (Gestor/ Mandat/Concesión /Intermediario)</option>
												<option value="6780">6780 - Prohibición circular según DÍA/HORA/CARACTERÍSTICA vehíc.</option>
											</select></p>

										<label for="chofer">N&uacute;mero de chasis:</label>
										<p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="chasis" type="text" autocomplete="off"/></p>
										<label for="chofer">N&uacute;mero de motor:</label>
										<p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="motor" type="text" autocomplete="off"/></p>							    
							</div>		
						    </div>
						    </div>
						    
						    <div class="col-lg-4">
						          <div class="panel panel-primary">
     								 <div class="panel-heading">Datos de la infraccion</div>
      								 <div class="panel-body">
      								       	
									    <label for="acta">Acta contravencional:</label>
									    <p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="actaCont" placeholder="Si no hay ingresar punto (.)" type="text" autocomplete="off"/></p>
										
									    <label for="actac">Acta de comprobacion:</label>
									    <p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="actaComp" placeholder="Si no hay ingresar punto (.)" type="text" autocomplete="off"/></p>
											
									    <label for="boleta">Acta Z:</label>
									    <p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="actaZ" placeholder="Si no hay ingresar punto (.)" type="text" autocomplete="off"/></p>
										
										<label for="agente">Agente Labrante: </label>
										<p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="agenteLabrante" type="text" placeholder="Nro. DNI" autocomplete="off"/></p>
										
										<label for="infractor">Infractor/Contraventor:</label>
										<p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="infractorNombre" type="text" placeholder="Apellido y nombre" autocomplete="off"/></p>
										<select class="form-control input-lg" id="tipoDoc" required name="tipoDoc"> 
										<option value="" selected="">Tipo de documento</option>
											 <option value="DNI">DNI</option>
											 <option value="LE">LE</option>
											 <option value="LC">LC</option>
											 <option value="EX">EX</option>
										</select></p>   
										<input type="number" class="form-control input-lg"  required name="nDocumento" id="nDocumento" type="text" placeholder="N&uacute;mero de documento"/></p>
										
										<label for="chofer">Chofer de grua:</label>
										<p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="choferDNI" id="choferDNI" type="text" placeholder="Nro. de DNI" autocomplete="off"/></p>
										
							</div>			
						   </div>
						   </div>
						    
						    <div class="col-lg-4">
						      		<div class="panel panel-primary" >
     								 <div class="panel-heading">Confirmar ingreso</div>
      								 <div class="panel-body">  
      								 
      								<fieldset>
      								 <label for="chofer">Levantado en:</label>
										<p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="calle" type="text" placeholder="Calle" aria-labelledby='chofer'/></p>
 										<input type="number" class="form-control input-lg"  required name="numeroCalle" type="text" placeholder="N&uacute;mero" aria-labelledby='chofer'/></p>
										<input class="form-control input-lg"  required name="entreCalle1" type="text" placeholder="Entre calle 1" aria-labelledby='chofer'/></p>
										<input class="form-control input-lg"  required name="entreCalle2" type="text" placeholder="Entre calle 2" aria-labelledby='chofer'/></p>
										<input class="form-control input-lg"  required name="referenciaLugar" type="text" placeholder="Referencia del lugar" aria-labelledby='chofer'/></p>
									</fieldset>
      								 	  
						      
									<div class="form-group">
									      <label for="inventario">Copia Inventario: </label>
									      <input id="inventario" type="file" name="inventario">
									      <p class="help-block">Hasta 2Mb en formato <strong>pdf</strong></p>
									</div>
									
						            <label for="inputdefault">Observaciones:</label>
									<p class="boton-margen-inferior">
									<textarea class="form-control input-lg"  name="observaciones" rows="5" cols="30"></textarea></p>
									

						     		<p class="boton-margen-inferior">
									<input class="btn btn-primary btn-lg"  name="ingresarRegistro" value="Registrar" type="submit" /></p>
		
						     </div>
						     </div>
						     </div>
						     </div>
				   
						     
				</div>
				
		</div>		
			</div>
</div>

 </form>
</body>

<%@include file="footer.jsp" %>
</html>