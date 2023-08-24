### Sistema Único de Gestión de Playas de Acarreo 

*Trabajo Final Proyecto de Software 2017 Licenciatura en Sistemas. UNLa.*

Prototipado del Artefacto Web para dar soporte a la gestión de las playas de acarreo de vehículos 
de la Dirección General del Cuerpo de Agentes de Control del Tránsito y Seguridad Vial.

Integrantes del equipo y Roles Asignados:
- Pizarro Maximiliano: Líder de proyecto y analista funcional.
- Defelippe Joan Manuel: Arquitecto/diseñador y desarrolador.
- Federico Juan Pablo: Desarrollador y tester.
- Fiorentino Kevin: Diseñador de base de datos y desarrollador.
&nbsp;

### Screens
&nbsp;
• Login
&nbsp;
<p align="center">
  <img src="https://raw.githubusercontent.com/maximilianoPizarro/sugpa/master/screensMaqueta/1 - Iniciar sesión.jpg" width="800" title="hover text">
</p>  
&nbsp;
• Busqueda de vehículos
&nbsp;
<p align="center">
  <img src="https://raw.githubusercontent.com/maximilianoPizarro/sugpa/master/screensMaqueta/10 - Buscar vehículo.png" width="800" title="hover text">
</p>  
&nbsp;
• Carga de vehículos
&nbsp;
<p align="center">
  <img src="https://raw.githubusercontent.com/maximilianoPizarro/sugpa/master/screensMaqueta/11 - Ingresar vehículo.jpg" width="800" title="hover text">
</p>  
&nbsp;
• Analitica 
&nbsp;
<p align="center">
  <img src="https://raw.githubusercontent.com/maximilianoPizarro/sugpa/master/screensMaqueta/3 - Bienvenido direccion 1.jpg" width="800" title="hover text">
</p>  
&nbsp;


docker exec -it 2ec9b1456dec mysql --user=root --password=agente --host=127.0.0.1 --database=sugpa -e "source /workspace/sugpa/src/main/resources/db/bdrio_vehiculos 25-09.sql" --force