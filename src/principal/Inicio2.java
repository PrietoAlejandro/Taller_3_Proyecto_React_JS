//FABIAN ALEJANDRO OSPITIA PRIETO
//2465879
//RETO 2 EJECUCION CALCULAR IMC RETORNO
package principal;
import salud.Persona2;

public class Inicio2 
{
    public static void main(String[] args) 
    {
        Double peso=0.0;
        Persona2 datos = new Persona2();
        datos.pedirDatos();
        datos.mostrarPersona();
        double pesoActual = datos.calcularImc2(peso);
        
        if(pesoActual<20)
        {
            System.out.println("El peso para su estatura esta por debajo de lo ideal");
            System.out.println("");   
        }
        else if (pesoActual>=20 && pesoActual<=25)
        {
            System.out.println("El peso para su estatura es la ideal");
            System.out.println("");
        }
        else if(pesoActual>25)
        {
            System.out.println("El peso para su estatura no es la ideal, tiene sobrepeso");
            System.out.println("");
        }
        datos.mayorEdad();
    }
}
