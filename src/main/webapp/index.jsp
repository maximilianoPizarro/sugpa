<%@page language="java"  contentType="text/html; charset=utf-8" pageEncoding="ISO-8859-1" %>
 <%@include file="header.jsp" %><!-- import="com.unla.datos.-usuario" -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>


</head>


    <!-- NAVEGACI�N PRINCIPAL -->
    <nav class="navbar navbar-default" role="navigation">
      <div class="container">
        <div class="row">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="inicioo" title="Sistema Unico de Gestin de Playas de Acarreo">SUGPA</a>
          </div>

        </div>
      </div>
    </nav>
    <!-- FIN DE NAVEGACI�N PRINCIPAL -->

<body>

<form role="form" method="post" action="/sugpa/bienvenido">
    <main class="main-container no-padding-top" role="main">
      <section>
      
        <div class="container">
          <h2 class="h1 text-left">Iniciar Sesion</h2>
          <br>
            <div class="form-group">
              <label for="usuario">Usuario</label>
              <div class="row">
                <div class="col-xs-6"><input class="form-control input-lg"  autocomplete="off" type="text" placeholder="Usuario" id="usuario" name="usuario" required="" autofocus></div>
              </div>
              <br> 
              <label for="usuario">Clave</label>
              <div class="row">
                <div class="col-xs-6"><input class="form-control input-lg"  autocomplete="off" type="password" placeholder="Contrase�a" id="Contrase�a" required=""></div>
              </div>
              <br>
              <div class="row">
              <div class="col-xs-6"><button type="submit" class="btn btn-primary btn-lg">Ingresar</button></div>
              </div>
            </div>
            
        </div>
     </section>    
    </main>      
 </form>           
            <br>
 
<%@include file="footer.jsp" %>	
</body>   

</html>