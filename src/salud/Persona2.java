//FABIAN ALEJANDRO OSPITIA PRIETO
//2465879
//RETO 2 CALCULAR IMC RETORNO
package salud;
import java.util.Scanner;

public class Persona2 
{
    //Atributos
    String tipoDoc;
    int documento;
    String nombre;
    String apellido;
    Double peso;
    Double estatura;
    int edad;
    String sexo;
    Double pesoActual;
    Scanner lectura=new Scanner(System.in);
    //Metodos
    public void pedirDatos()
    {
        System.out.println("Registre su tipo de documento");
        tipoDoc=lectura.next();
        System.out.println("Digite su documento");
        documento=lectura.nextInt();
        System.out.println("Digite su nombre");
        nombre=lectura.next();
        System.out.println("Digite su apellido");
        apellido=lectura.next();
        System.out.println("Digite su peso");
        peso=lectura.nextDouble();
        System.out.println("Digite su estatura");
        estatura=lectura.nextDouble();
        System.out.println("Digite su edad");
        edad=lectura.nextInt();
        System.out.println("Digite su genero");
        sexo=lectura.next();
        System.out.println("");

        lectura.close();
    }
    public void mostrarPersona()
    {
        System.out.println("Nombre: "+nombre+" "+apellido);
        System.out.println("Tipo de documento: "+tipoDoc);
        System.out.println("Numero de documento: "+documento);
        System.out.println("Genero: "+sexo);
        System.out.println("");
    } 
    public double calcularImc2(double peso)
    {
        double pesoActual=peso/(estatura*estatura);
        return pesoActual;
    }
    public void mayorEdad()
    {
        if (edad>=18) 
        {
            System.out.println("Usted es mayor de edad");
        }
        else if(edad<18)
        {
            System.out.println("Usted es menor de edad");
        }
    }
}
