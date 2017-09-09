<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="ISO-8859-1"%>
<%@include file="header.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Playas de Acarreo DGCACTYSV:</title>
</head>

<!-- jQuery library -->

 <script src="js/jquery-1.12.4.js"></script>
<script src="js/jquery-ui.js"></script>

<body>


  <script>
  $( function() {
    var availableTags = ["ABARTH","ALFA ROMEO","ASTON MARTIN","AUDI","BMW","CHEVROLET","BENTLEY","CITROEN","DFSK","BYD","DACIA","DS","FERRARI","FIAT","FORD","HONDA","HYUNDAI","INFINITI","ISUZU","JAGUAR","JEEP","KIA","LADA","LAMBORGHINI","LANCIA","LAND ROVER","LEXUS","MAHINDRA","MASERATI","MAZDA","MERCEDES","MINI","MITSUBISHI","MORGAN","NISSAN","OPEL","SKODA","PEUGEOT","SMART","PORSCHE","RENAULT","ROLLS-ROYCE","SEAT","SSANGYONG","VOLKSWAGEN","SUBARU","SUZUKI","TATA","TESLA","TOYOTA","VOLVO" 
    ];
    $( "#marca" ).autocomplete({
      source: availableTags
    });
  } );
  </script>
<script>
  $( function() {
    var availableTags = ["abat","adiva","adly","aeon","aiyumo","aprilia","azel","benelli","big-bear-choppers","bimota","bmw","brammo",
                         "buell","bultaco","byebyke","cagiva","can-am","cfmoto","clipic","cpi","crs","daelim","derbi","ducati",
                         "e-max","fantic","f-b-mondial","garelli","gas-gas","generic","gilera","goccia","goes","govecs","hanway",
                         "harley-davidson","headbanger","hm","honda","hudson-boss","husaberg","husqvarna","hyosung","i-moto",
                         "indian","italjet","kawasaki","keeway","kenrod","ksr-moto","ktm","kymco","lambretta","lemev","leonart",
                         "linhai","lml","lotus","macbor","malaguti","mash","metrakit","mh","mini","montesa","motivas","moto-guzzi",
                         "moto-morini","mtr","mv-agusta","mx-motor","nimoto","oset","ossa","oxygen","peugeot","pgo","piaggio","polaris",
                         "polini","quadro","quantya","rav","rieju","riya","royal-enfield","scomadi","scorpa","scutum","sherco","smart",
                         "sumco","suzuki","sym","tacita","tgb","tm-racing","torrot","triumph","ural","vectrix","vespa","victory","volta",
                         "victory","volta","voxan","vyrus","xero","yamaha","zero","zanella","beta","motomel","mondial"
                         ];
    $( "#marcaM" ).autocomplete({
      source: availableTags
    });
  } );
</script>



<script>  
     function desactivarInput(){  
    	 document.getElementById("dominio").value = "";
          if(document.getElementById("chequeable").checked == true){  
              document.getElementById("dominio").disabled = true;
          }else{
            document.getElementById("dominio").disabled = false;
          }  
     }  
</script> 

<script>	
	//Script para los desplegables con dependencia
		function habilitar(form) {
			//ARRAYS
			var mAcura = [{ text: 'CL', value: 'CL'}];
			var mAlfaRomeo = [{ text: '145', value: '145'}, { text: '146', value: '146'}, { text: '147', value: '147'}, { text: '156', value: '156'}, { text: '159', value: '159'}, { text: 'Brera', value: 'Brera'}, { text: 'Giulietta', value: 'Giulietta'}, { text: 'Mito', value: 'Mito'}, { text: 'Spider', value: 'Spider'}];
			var mAro = [{ text: '243', value: '243'}];
			var mAudi = [{ text: '3', value: '3'}, { text: 'Serie 1', value: 'Serie 1'}, { text: 'Serie 3', value: 'Serie 3'}, { text: 'Serie 3 Sedán', value: 'Serie 3 Sedan'}, { text: 'Serie 4 Coupé', value: 'Serie 4 Coupe'}, { text: 'Serie 4 Grand Coupé', value: 'Serie 4 Grand coupe'}, { text: 'Serie 5', value: 'Serie 5'}, { text: 'Serie 5 Sedán', value: 'Serie 5 Sedan'}, { text: 'Serie 6', value: 'Serie 6'}, { text: 'Serie 6 Grand Coupé', value: 'Serie 6 Grand Coupe'}, { text: 'Serie 7', value: 'Serie 7'}, {text: 'Serie 8', value: 'Serie 8'}, {text: 'Serie M', value: 'Serie M'}, {text: 'X1', value: 'X1'}, {text: 'X3', value: 'X3'}, {text: 'X5', value: 'X5'}, {text: 'X6', value: 'X6'}, {text: 'Z3', value: 'Z3'}, {text: 'Z4', value: 'Z4'}, {text: 'Otro Modelo', value: 'Otro'}];			
			var mCadillac = [{ text: 'Deville', value: 'Deville'}, { text: 'Otro Modelo', value: 'Otro'}];
			//INICIO DE FUNCION
			var valorParticular = document.getElementById('marcaParticular').value;
			
			if(form.tipo[1].selected){
				form.marcaSinSeleccion.style.display = "none";
				form.marcaParticular.style.display = "inline";
				$("#modeloP option:not(:first)").remove();
				if(form.marcaParticular[1].selected){
					$.each(mAcura, function(i, el) 
							{    $('#modeloP').append( new Option(el.text,el.value) );});
				}
				if(form.marcaParticular[2].selected){
					$.each(mAlfaRomeo, function(i, el) 
							{    $('#modeloP').append( new Option(el.text,el.value) );});
				}
				if(form.marcaParticular[3].selected){
					$.each(mAro, function(i, el) 
							{    $('#modeloP').append( new Option(el.text,el.value) );});
				}
				if(form.marcaParticular[4].selected){
					$.each(mAudi, function(i, el) 
							{    $('#modeloP').append( new Option(el.text,el.value) );});
				}
				if(form.marcaParticular[5].selected){
					$.each(mCadillac, function(i, el) 
							{    $('#modeloP').append( new Option(el.text,el.value) );});
				}
				
			}
			
			
			
			//$('#tipo').empty();
			//$("#selectBox option[value='option1']").remove();
			//this.$('select#tipo').append('<option value="prueba">proban2</option>');
			//$("#tipo option[value='TAXI']").hide();
			//$("#tipo option[value='TAXI']").show();
			//$('select').children('option:not(:first)').remove(); eliminar todas menos la primera
			
			$.each(mAlfaRomeo, function(i, el) 
				{    $('#tipo').append( new Option(el.text,el.value) );});
	}
</script>

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
									      				
						  				<label for="motivo">Tipo:</label>
						  				<p class="boton-margen-inferior">
									    <select class="form-control input-lg" id="tipo" name="tipo" onchange="habilitar(this.form)">
									      <option value="0" selected="">Seleccionar</option>
									      <option value="AUTO">PARTICULAR</option>
									      <option value="MOTO">MOTO</option>
									      <option value="TAXI">TAXI</option>
									      <option value="COMBI">COMBI</option>
									      <option value="PICK-UP">PICK-UP</option>
									      <option value="CAMION">CAMION</option>
									      <option value="OTRO">OTRO</option>
									    </select></p>
									    
									    
									    
										<label for="dominio">Dominio (SI/NO): </label>
										<input type="checkbox" id="chequeable" onclick="desactivarInput()"/>
										<p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="dominio" id="dominio" type="text" style="text-transform:uppercase"/></p>
										
										<script>
										$('#chequeable').change(function() {
   										 $('dominio').attr('disabled',!this.checked)
										});
										</script>
										
										
										<label  for="marca">Marca:</label>
										<p class="boton-margen-inferior">
										
										<select class="form-control input-lg" id="marcaSinSeleccion" name="marcaSinSeleccion" onchange="habilitar(this.form)">
									      <option value="0" selected="">Seleccionar</option>
									     </select></p>
									     
										<select class="form-control input-lg" id="marcaParticular" name="marcaParticular" style="display: none" onchange="habilitar(this.form)">
									      <option value="0" selected="">Seleccionar</option>
												<option value="1">Acura</option>
												<option value="2">Alfa Romeo</option>
												<option value="3">Aro</option>
												<option value="4">Audi</option>
												<option value="5">BMW</option>
												<option value="6">Cadillac</option>
												<option value="7">Chery</option>
												<option value="8">Chevrolet</option>
												<option value="9">Chrysler</option>
												<option value="10">Citroen</option>
												<option value="11">DS</option>
												<option value="12">Daewoo</option>
												<option value="13">Daihatsu</option>
												<option value="14">Dodge</option>
												<option value="15">Ferrari</option>
												<option value="16">Fiat</option>
												<option value="17">Ford</option>
												<option value="18">Ford Importados</option>
												<option value="19">Foton</option>
												<option value="20">Honda</option>
												<option value="21">Hyundai</option>
												<option value="22">Ika</option>
												<option value="23">Isuzu</option>
												<option value="24">Iveco</option>
												<option value="25">Jaguar</option>
												<option value="26">Jeep</option>
												<option value="27">Kia</option>
												<option value="28">Lada</option>
												<option value="29">Land Rover</option>
												<option value="30">Lifan</option>
												<option value="31">MG</option>
												<option value="32">Maserati</option>
												<option value="33">Mazda</option>
												<option value="34">Mercedes Benz</option>
												<option value="35">Mini</option>
												<option value="36">Mitsubishi</option>
												<option value="37">Nissan</option>
												<option value="38">Opel</option>
												<option value="39">Peugeot</option>
												<option value="40">Porsche</option>
												<option value="41">RAM</option>
												<option value="42">Rastrojero</option>
												<option value="43">Renault</option>
												<option value="44">Rover</option>
												<option value="45">Rugby</option>
												<option value="46">Saab</option>
												<option value="47">Seat</option>
												<option value="48">Smart</option>
												<option value="49">Ssangyong</option>
												<option value="50">Subaru</option>
												<option value="51">Suzuki</option>
												<option value="52">Toyota</option>
												<option value="53">Volkswagen</option>
												<option value="54">Volvo</option>
												<option value="55">Willys</option>
												<option value="56">Otra Marca</option>
												
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
												<option value="98">Jawa</option>
												<option value="99">Jianshe</option>
												<option value="196">KTM</option>
												<option value="101">Kawasaki</option>
												<option value="348">Keeway</option>
												<option value="321">Keller</option>
												<option value="102">Kymco</option>
												<option value="59">Mini</option>
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
												<option value="112">Yamaha</option>
												<option value="113">Zanella</option>
												<option value="127">Otra Marca</option>
											</select></p>
											
										<select class="form-control input-lg" id="marcaMoto" name="marcaMoto" style="display: none" onchange="habilitar(this.form)">
									       <option value="0" selected="">Seleccionar</option>
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
												<option value="98">Jawa</option>
												<option value="99">Jianshe</option>
												<option value="196">KTM</option>
												<option value="101">Kawasaki</option>
												<option value="348">Keeway</option>
												<option value="321">Keller</option>
												<option value="102">Kymco</option>
												<option value="59">Mini</option>
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
												<option value="112">Yamaha</option>
												<option value="113">Zanella</option>
												<option value="127">Otra Marca</option>
										</select></p>


										<label for="modelo">Modelo:</label>
										<p class="boton-margen-inferior">
										<select class="form-control input-lg" id="modeloP" name="modeloP"> 
										<option value="0" selected="">Seleccionar</option>
										</select></p>
										
										<select class="form-control input-lg" id="mAcura" name="mAcura" style="display: none"> 
										<option value="0" selected="">Seleccionar</option>
									   		    <option value="9">CL</option>
										</select></p>
										<select class="form-control input-lg" id="mAlfaRomeo" name="mAlfaRomeo" style="display: none"> 
										<option value="0" selected="">Seleccionar</option>
										<option value="70">145</option><option value="71">146</option><option value="73">155</option><option value="74">156</option><option value="83">Brera</option><option value="84">Giulietta</option><option value="87">Mito</option><option value="89">Spider</option>
										</select></p>
										<select class="form-control input-lg" id="mAro" name="mAro" style="display: none"> 
										<option value="0" selected="">Seleccionar</option>
										<option value="161">243</option>
										</select></p>
										<select class="form-control input-lg" id="mAudi" name="mAudi" style="display: none"> 
										<option value="0" selected="">Seleccionar</option>
										<option value="234">A1</option><option value="235">A3</option><option value="7964">A3 Sedán</option><option value="7425">A3 Sportback</option><option value="236">A4</option><option value="238">A5</option><option value="7192">A5 Coupé</option><option value="239">A6</option><option value="7965">A7 Sportback</option><option value="6811">A8 L</option><option value="244">Allroad</option><option value="8010">Q2</option><option value="7193">Q3</option><option value="249">Q5</option><option value="250">Q7</option><option value="251">R8</option><option value="255">S3</option><option value="256">S4</option><option value="257">S5</option><option value="262">TT</option><option value="7428">TT Coupé</option><option value="248">Otro Modelo</option>
										</select></p>
										<select class="form-control input-lg" id="mBMW" name="mBMW" style="display: none"> 
										<option value="0" selected="">Seleccionar</option>
										<option value="484">3</option><option value="557">Serie 1</option><option value="558">Serie 3</option><option value="7968">Serie 3 Sedán</option><option value="7431">Serie 4 Coupé</option><option value="7969">Serie 4 Grand Coupé</option><option value="559">Serie 5</option><option value="7970">Serie 5 Sedán</option><option value="560">Serie 6</option><option value="7971">Serie 6  Grand Coupé</option><option value="561">Serie 7</option><option value="562">Serie 8</option><option value="563">Serie M</option><option value="564">X1</option><option value="565">X3</option><option value="566">X5</option><option value="567">X6</option><option value="570">Z3</option><option value="571">Z4</option><option value="546">Otro Modelo</option>
										</select></p>
										<select class="form-control input-lg" id="mCadillac" name="mCadillac" style="display: none"> 
										<option value="0" selected="">Seleccionar</option>
										<option value="652">Deville</option><option value="660">Otro Modelo</option></select>
										</select></p>
										
									    
									    
									    
									    
									    
									    
									    <select class="form-control input-lg" id="motoBMW" name="motoBMW" style="display: none"> 
										<option value="0" selected="">Seleccionar</option>
										<option value="518">F 650 GS</option><option value="526">F800 R</option><option value="529">G 650 GS</option><option value="535">K 1200 LT</option><option value="537">K 1200 S</option><option value="549">R 1150 GS Adventure</option><option value="551">R 1200 GS</option><option value="556">S 1000 RR</option><option value="547">Otro Modelo</option>
										</select></p>
									    
									    
									    
									    <label for="motivo">Motivo:</label>
									    <p class="boton-margen-inferior">
									    <select class="form-control input-lg" id="motivo" name="motivo">
									      <option value="-1" selected="">Selecciona</option>
									      <option value="DOC">DOCUMENTACION</option>
									      <option value="EST.PROHIBIDO">EST.PROHIBIDO</option>
									      <option value="PLACAS">PLACAS DE DOMINIO</option>
									      <option value="ALCHOLEMIA">ALCOHOLEMIA</option>
									      <option value="ABANDONADO">ABANDONADO</option>
									      <option value="UBER">UBER</option>
									      <option value="ESTUPEFACIENTES">ESTUPEFACIENTES</option>
									    </select></p>
										<label for="chofer">N°Chasis:</label>
										<p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="chasis" type="text"/></p>
										<label for="chofer">N°Motor:</label>
										<p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="motor" type="text"/></p>							    
							</div>		
						    </div>
						    </div>
						    <div class="col-lg-4">
						          <div class="panel panel-primary">
     								 <div class="panel-heading">Datos de la infraccion</div>
      								 <div class="panel-body">
      								       	
									    <label for="acta">Acta contravencional:</label>
									    <p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="acta" type="text"/></p>
										
									    <label for="actac">Acta de comprobacion:</label>
									    <p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="actac" type="text"/></p>
											
									    <label for="boleta">Boleta de citación:</label>
									    <p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="boleta" type="text"/></p>
										
										<label for="agente">Agente Labrante: </label>
										<p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="agente" type="text" placeholder="Nro. de CUIT"/></p>
										
										<label for="infractor">Infractor/Contraventor:</label>
										<p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="infractor" type="text" placeholder="Apellido y nombre"/></p>
										
										<label for="chofer">Chofer de grua:</label>
										<p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="chofer" type="text" placeholder="Nro. de CUIT"/></p>
										
							</div>			
						   </div>
						   </div>
						    
						    <div class="col-lg-4">
						      		<div class="panel panel-primary" >
     								 <div class="panel-heading">Confirmar ingreso</div>
      								 <div class="panel-body">  
      								 
      								 <label for="chofer">Levantado en:</label>
										<p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="levantadoEn" type="text"/></p>
      								  
						      
						      		<label for="dniDoc">Copia Inventario: </label> 
									<p class="boton-margen-inferior">
									<input type="file"  name="inventario" /></p>
									
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