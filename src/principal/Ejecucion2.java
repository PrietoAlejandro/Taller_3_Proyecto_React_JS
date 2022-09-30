//FABIAN ALEJANDRO OSPITIA PRIETO
//2465879
//RETO 3 EJECUCION HERENCIA ANIMAL AVE
package principal;
import java.util.Scanner;
import salud.Ave;
public class Ejecucion2
{
    public static void main(String[] args) 
    {
        String nombre="";
        int edad=0;
        double alas=0;
        
        Scanner entrada=new Scanner(System.in);
        
        System.out.println("Digite el nombre");
        nombre=entrada.next();
        System.out.println("Digite la edad");
        edad=entrada.nextInt();
        System.out.println("Digite la cantidad de alas");
        alas=entrada.nextDouble();
        
        Ave datos = new Ave(nombre, edad, alas);
        datos.mostrarAve();        
        

    } 
}
