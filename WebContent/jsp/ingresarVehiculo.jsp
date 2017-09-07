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
function visibility(select) {
	   if(select.value==0){
		    document.getElementById('marcaO').style.display = "block";
		   } else{
		    document.getElementById('marcaO').style.display = "none";
		   }
	   if(select.value=="PARTICULAR"){
		    document.getElementById('marca').style.display = "block";
		   } else{
		    document.getElementById('marca').style.display = "none";
		   }
	   if(select.value=="MOTO"){
		    document.getElementById('marcaM').style.display = "block";
		   } else{
		    document.getElementById('marcaM').style.display = "none";
		   }
		} 	
</script>

<script>	
	//Script para los desplegables con dependencia
		function habilitar(form) {
			form.sinSeleccion.style.display = "none";
			if (form.marca[0].selected == true) form.sinSeleccion.style.display = "inline";
			else{
				form.sinSeleccion.style.display = "none";
			}
			if (form.marca[1].selected == true) form.mAcura.style.display = "inline";
			else{
				form.mAcura.style.display = "none";
				form.mAcura.selectedIndex = 0;
			}
			if (form.marca[2].selected == true) form.mAlfaRomeo.style.display = "inline";
			else{
				form.mAlfaRomeo.style.display = "none";
				form.mAlfaRomeo.selectedIndex = 0;
			}
			if (form.marca[3].selected == true) form.mAro.style.display = "inline";
			else{
				form.mAro.style.display = "none";
				form.mAro.selectedIndex = 0;
			}
			if (form.marca[4].selected == true) form.mAudi.style.display = "inline";
			else{
				form.mAudi.style.display = "none";
				form.mAudi.selectedIndex = 0;
			}
			if (form.marca[5].selected == true) form.mBMW.style.display = "inline";
			else{
				form.mBMW.style.display = "none";
				form.mBMW.selectedIndex = 0;
			}
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
									    <select class="form-control input-lg" id="tipo" name="tipo" onchange="visibility(this)">
									      <option value="0" selected="">Seleccionar</option>
									      <option value="AUTO">PARTICULAR</option>
									      <option value="MOTO">MOTO</option>
									      <option value="TAXI">TAXI</option>
									      <option value="COMBI">COMBI</option>
									      <option value="PICK-UP">PICK-UP</option>
									      <option value="CAMION">MOTO</option>
									      <option value="OTRO">OTRO</option>
									    </select></p>
									    
										<label for="dominio">Dominio: </label>
										<p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="dominio" type="text" style="text-transform:uppercase"/></p>
										
										<label  for="marca">Marca:</label>
										<p class="boton-margen-inferior">
										<select class="form-control input-lg" id="marca" name="marca" onchange="habilitar(this.form)">
									      <option value="0" selected="">Seleccionar</option>
												<option value="999">Acura</option>
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
											</select></p>
										
										<label for="modelo">Modelo:</label>
										<p class="boton-margen-inferior">
										<select class="form-control input-lg" id="sinSeleccion" name="sinSeleccion"> 
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
										<input class="form-control input-lg"  required name="agente" type="text"/></p>
										
										<label for="infractor">Infractor/Contraventor:</label>
										<p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="infractor" type="text"/></p>
										
										<label for="chofer">Chofer de grua:</label>
										<p class="boton-margen-inferior">
										<input class="form-control input-lg"  required name="chofer" type="text"/></p>
										
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