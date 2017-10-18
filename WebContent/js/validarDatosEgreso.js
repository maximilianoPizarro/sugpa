function validarDatosEgreso(form, motivo){
	// if($("input[name='actaDeEntrega']:checked").val()==="NO") PARA SABER EL VALOR DE UN RADIO BUTTON
	document.getElementById("divTipo").style.display = "inline";
	document.getElementById("divActaEntrega").style.display = "none";
	document.getElementById("divDNI").style.display = "inline";
	document.getElementById("divLicencia").style.display = "none";
	document.getElementById("divCedula").style.display = "none";
	document.getElementById("divSeguro").style.display = "none";
	document.getElementById("divDGAI").style.display = "none";
	document.getElementById("divActaZ").style.display = "none";
	document.getElementById("divCedulaVerde").style.display = "none";
	document.getElementById("divVTV").style.display = "none";
	document.getElementById("divPoder").style.display = "none";
	document.getElementById("divOficio").style.display = "none";

	//DATOS QUE SE MUESTRAN EN FORMA GENERAL SEGUN LOS MOTIVOS
	if(motivo.indexOf("DOC") != -1){ //Si la palabra se encuentra en el string
		document.getElementById("divDGAI").style.display = "inline"; //Si acta de entrega no esta chequeada muestra el DGAI
	}
	if(form.tipo[2].selected) document.getElementById("divPoder").style.display = "inline";
	//VALIDACIONES DE EXAMINAR SEGUN LO SELECCIONADO:
	if((form.tipo[1].selected) || (form.tipo[2].selected)){
		document.getElementById("divPLicencia").style.display = "inline";
		document.getElementById("divPActaZ").style.display = "inline";
		//Reglas documentacion
		if((motivo.indexOf("DOC") != -1) && ((form.tipo[1].selected) || (form.tipo[2].selected))){ //Tipos de egreso segun documentacion y titular, apoderado
			if($("#presentaLicencia").is(':checked')){ //Documentacion y titular, apoderado (6 reglas)
				document.getElementById("divLicencia").style.display = "inline";
				document.getElementById("divCedulaVerde").style.display = "inline";
				document.getElementById("divSeguro").style.display = "inline";
				document.getElementById("divVTV").style.display = "inline";
			}
			else if($("#presentaActaZ").is(':checked')){
				document.getElementById("divActaZ").style.display = "inline";
				document.getElementById("divCedulaVerde").style.display = "inline";
				document.getElementById("divSeguro").style.display = "inline";
				document.getElementById("divVTV").style.display = "inline";
			}
			else{
				document.getElementById("divCedula").style.display = "inline";
				document.getElementById("divDGAI").style.display = "inline";
			}
		} //Doc y Titular, Apoderado
		//Reglas Alcoholemia Positivo
		if((motivo.indexOf("ALCO") != -1) && ((form.tipo[1].selected) || (form.tipo[2].selected))){//Tipos de egreso segun alcoholemia+ y titular, apoderado
			if(($("#presentaLicencia").is(':checked')) && ($("#presentaActaZ").is(':checked'))){ //Alcoholemia positivo y titular,apoderado (6 reglas)
				document.getElementById("divLicencia").style.display = "inline";
				document.getElementById("divActaZ").style.display = "inline";
				document.getElementById("divCedulaVerde").style.display = "inline";
				document.getElementById("divSeguro").style.display = "inline";
				document.getElementById("divVTV").style.display = "inline";
			}
			else if($("#presentaActaZ").is(':checked')){
				document.getElementById("divActaZ").style.display = "inline";
				document.getElementById("divCedulaVerde").style.display = "inline";
				document.getElementById("divSeguro").style.display = "inline";
				document.getElementById("divVTV").style.display = "inline";
			}
			else{
				document.getElementById("divCedula").style.display = "inline";
			}
		} //Alco+ y Titular, Apoderado
		//Reglas Alcoholemia Negativo
		if((motivo.indexOf("ALCN") != -1) && ((form.tipo[1].selected) || (form.tipo[2].selected))){//Tipos de egreso segun alcoholemia- y titular, apoderado
			if($("#presentaLicencia").is(':checked')){ //Alcoholemia negativo y titular,apoderado (4 reglas)
				document.getElementById("divLicencia").style.display = "inline";
				document.getElementById("divCedulaVerde").style.display = "inline";
				document.getElementById("divSeguro").style.display = "inline";
				document.getElementById("divVTV").style.display = "inline";
				document.getElementById("divDGAI").style.display = "inline";
			}
			else{
				document.getElementById("divCedula").style.display = "inline";
			}
		} //Alco- y Titular, Apoderado
		//Reglas Estacionamiento prohibido
		if((motivo.indexOf("EST") != -1) && ((form.tipo[1].selected) || (form.tipo[2].selected))){//Tipos de egreso segun estacionamiento prohibido y titular, apoderado
			if(($("#presentaLicencia").is(':checked')) && ($("#presentaActaZ").is(':checked'))){ //Estacionamiento prohibido y titular,apoderado (6 reglas)
				document.getElementById("divLicencia").style.display = "inline";
				document.getElementById("divActaZ").style.display = "inline";
				document.getElementById("divCedulaVerde").style.display = "inline";
				document.getElementById("divSeguro").style.display = "inline";
				document.getElementById("divVTV").style.display = "inline";
			}
			else{
				document.getElementById("divCedula").style.display = "inline";
			}
		} //Est. prohib. y Titular, Apoderado
	}
	else{
		document.getElementById("divPLicencia").style.display = "none";
		document.getElementById("divPActaZ").style.display = "none";
		$('input[name=presentaLicencia]').attr('checked',false);
		$('input[name=presentaActaZ]').attr('checked',false);
	}
	if(form.tipo[3].selected){ //Se desactivan todas las copias y se activa oficio judicial
		document.getElementById("divOficio").style.display = "inline";
		document.getElementById("divActaEntrega").style.display = "none";
		document.getElementById("divDNI").style.display = "none";
		document.getElementById("divLicencia").style.display = "none";
		document.getElementById("divCedula").style.display = "none";
		document.getElementById("divSeguro").style.display = "none";
		document.getElementById("divDGAI").style.display = "none";
		document.getElementById("divActaZ").style.display = "none";
		document.getElementById("divCedulaVerde").style.display = "none";
		document.getElementById("divVTV").style.display = "none";
		document.getElementById("divPoder").style.display = "none";
	}

	if($("input[name='actaDeEntrega']:checked").val()==="SI"){ //Se desactivan todas las copias y se activa acta de entrega
		document.getElementById("divTipo").style.display = "none"; //No se permite seleccionar el tipo que lo va a retirar
		document.getElementById("divActaEntrega").style.display = "inline";
		document.getElementById("divDNI").style.display = "none";
		document.getElementById("divLicencia").style.display = "none";
		document.getElementById("divCedula").style.display = "none";
		document.getElementById("divSeguro").style.display = "none";
		document.getElementById("divDGAI").style.display = "none";
		document.getElementById("divActaZ").style.display = "none";
		document.getElementById("divCedulaVerde").style.display = "none";
		document.getElementById("divVTV").style.display = "none";
		document.getElementById("divPoder").style.display = "none";
		document.getElementById("divOficio").style.display = "none";
	}
}