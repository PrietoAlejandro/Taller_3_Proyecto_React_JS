//FABIAN ALEJANDRO OSPITIA PRIETO
//2465879
//RETO 3 EJECUCION HERENCIA ANIMAL PERRO
package principal;
import java.util.Scanner;
import salud.Perro;
public class Ejecucion
{
    public static void main(String[] args) 
    {
        String nombre="";
        int edad=0;
        int patas=0;
        
        Scanner entrada=new Scanner(System.in);
        

        System.out.println("Digite el nombre del perro");
        nombre=entrada.next();
        System.out.println("Digite la edad del perro");
        edad=entrada.nextInt();
        System.out.println("Digite la cantidad de patas");
        patas=entrada.nextInt();
        
        Perro datos = new Perro(nombre, edad, patas);
        datos.mostrarPerro();        
        

    } 
}

