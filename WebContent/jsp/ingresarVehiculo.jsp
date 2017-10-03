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
										
										<script>
										$('#chequeable').change(function() {
   										 $('dominio').attr('disabled',!this.checked)
										});
										</script>
										
										
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
										<select class="form-control input-lg" id="lineaEmpresa" name="lineaEmpresa" style="display: none" onchange="habilitar(this.form)">
											<option value="0" selected="">Seleccionar</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">4</option>
											<option value="4">5</option>
											<option value="5">6</option>
											<option value="6">7</option>
											<option value="7">8</option>
											<option value="8">9</option>
											<option value="9">10</option>
											<option value="10">12</option>
											<option value="11">15</option>
											<option value="12">17</option>
											<option value="13">19</option>
											<option value="14">20</option>
											<option value="15">21</option>
											<option value="16">22</option>
											<option value="17">23</option>
											<option value="18">24</option>
											<option value="19">25</option>
											<option value="20">26</option>
											<option value="21">28</option>
											<option value="22">29</option>
											<option value="23">31</option>
											<option value="24">32</option>
											<option value="25">33</option>
											<option value="26">34</option>
											<option value="27">36</option>
											<option value="28">37</option>
											<option value="29">39</option>
											<option value="30">41</option>
											<option value="31">42</option>
											<option value="32">44</option>
											<option value="33">45</option>
											<option value="34">46</option>
											<option value="35">47</option>
											<option value="36">49</option>
											<option value="37">50</option>
											<option value="38">51</option>
											<option value="39">53</option>
											<option value="40">55</option>
											<option value="41">56</option>
											<option value="42">57</option>
											<option value="43">59</option>
											<option value="44">60</option>
											<option value="45">61</option>
											<option value="46">62</option>
											<option value="47">63</option>
											<option value="48">64</option>
											<option value="49">65</option>
											<option value="50">67</option>
											<option value="51">68</option>
											<option value="52">70</option>
											<option value="53">71</option>
											<option value="54">74</option>
											<option value="55">75</option>
											<option value="56">76</option>
											<option value="57">78</option>
											<option value="58">79</option>
											<option value="59">80</option>
											<option value="60">84</option>
											<option value="61">85</option>
											<option value="62">86</option>
											<option value="63">87</option>
											<option value="64">88</option>
											<option value="65">90</option>
											<option value="66">91</option>
											<option value="67">92</option>
											<option value="68">93</option>
											<option value="69">95</option>
											<option value="70">96</option>
											<option value="71">97</option>
											<option value="72">98</option>
											<option value="73">99</option>
											<option value="74">100</option>
											<option value="75">101</option>
											<option value="76">102</option>
											<option value="77">103</option>
											<option value="78">104</option>
											<option value="79">105</option>
											<option value="80">106</option>
											<option value="81">107</option>
											<option value="82">108</option>
											<option value="83">109</option>
											<option value="84">110</option>
											<option value="85">111</option>
											<option value="86">112</option>
											<option value="87">113</option>
											<option value="88">114</option>
											<option value="89">115</option>
											<option value="90">117</option>
											<option value="91">118</option>
											<option value="92">123</option>
											<option value="93">124</option>
											<option value="94">126</option>
											<option value="95">127</option>
											<option value="96">128</option>
											<option value="97">129</option>
											<option value="98">130</option>
											<option value="99">132</option>
											<option value="100">133</option>
											<option value="101">134</option>
											<option value="102">135</option>
											<option value="103">136</option>
											<option value="104">140</option>
											<option value="105">141</option>
											<option value="106">143</option>
											<option value="107">146</option>
											<option value="108">148</option>
											<option value="109">150</option>
											<option value="110">151</option>
											<option value="111">152</option>
											<option value="112">153</option>
											<option value="113">154</option>
											<option value="114">159</option>
											<option value="115">160</option>
											<option value="116">161</option>
											<option value="117">163</option>
											<option value="118">165</option>
											<option value="119">166</option>
											<option value="120">168</option>
											<option value="121">169</option>
											<option value="122">172</option>
											<option value="123">174</option>
											<option value="124">175</option>
											<option value="125">176</option>
											<option value="126">177</option>
											<option value="127">178</option>
											<option value="128">179</option>
											<option value="129">180</option>
											<option value="130">181</option>
											<option value="131">182</option>
											<option value="132">184</option>
											<option value="133">185</option>
											<option value="134">188</option>
											<option value="135">193</option>
											<option value="136">194</option>
											<option value="137">195</option>
										</select></p>
										
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
									    <select class="form-control input-lg" id="motivo" required name="motivo">
									      <option value="" selected="">Selecciona</option>
									      <option value="DOC">DOCUMENTACION</option>
									      <option value="EST.PROHIBIDO">EST.PROHIBIDO</option>
									      <option value="PLACAS">PLACAS DE DOMINIO</option>
									      <option value="ALCHOLEMIA">ALCOHOLEMIA</option>
									      <option value="ABANDONADO">ABANDONADO</option>
									      <option value="UBER">UBER</option>
									      <option value="ESTUPEFACIENTES">ESTUPEFACIENTES</option>
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
											 <option value="EXTRANJERO">EXTRANJERO</option>
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