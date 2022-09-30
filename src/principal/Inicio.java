//FABIAN ALEJANDRO OSPITIA PRIETO
//2465879
//RETO 1 EJECUCION CALCULAR IMC
package principal;
import salud.Persona;
public class Inicio
{
    public static void main(String[] args) 
    {
        Persona datos=new Persona();
        datos.pedirDatos();
        datos.mostrarPersona();
        datos.calcularImc();
        datos.mayorEdad();
    } 
}