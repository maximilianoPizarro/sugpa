<%@page language="java"  contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
 <%@include file="header.jsp" %><!-- import="com.unla.datos.-usuario" -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

<title>Playa de Acarreo D.G.C.A.T.y.S.V.</title>

</head>


<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="inicioo">SUGPA</a>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="inicio"><span class="glyphicon glyphicon-user"></span> Ingresar</a></li>
      <li><a href="#"></a></li>
    </ul>
  </div>
</nav>	


<body>

    <div class="container" style="margin-top:40px">
		<div class="row">
			<div class="col-sm-6 col-md-4 col-md-offset-4">
				<div class="panel panel-default">
					<div class="panel-heading">
						<strong> Login</strong>
					</div>
					<div class="panel-body">
						<form role="form" method="post" action="bienvenido">
							<fieldset>
								<div class="row">
									<div class="center-block">
										<img class="profile-img"
											src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120" alt="">
									</div>
								</div>
								<div class="row">
									<div class="col-sm-12 col-md-10  col-md-offset-1 ">
										<div class="form-group">
											<div class="input-group">
												<span class="input-group-addon">
													<i class="glyphicon glyphicon-user"></i>
												</span> 
												<input class="form-control" autocomplete="off" placeholder="Email" name="usuario" type="text" autofocus>
											</div>
										</div>
										<div class="form-group">
											<div class="input-group">
												<span class="input-group-addon">
													<i class="glyphicon glyphicon-lock"></i>
												</span>
												<input class="form-control" autocomplete="off" placeholder="Clave" name="clave" type="password" value="">
											</div>
										</div>
										<div class="form-group">
											<input type="submit" class="btn btn-lg btn-primary btn-block" value="Ingresar">
										</div>
									</div>
								</div>
							</fieldset>
						</form>
					</div>
                </div>
			</div>
		</div>
	</div>

</body>    
<%@include file="footer.jsp" %>	
</html>