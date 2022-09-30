//FABIAN ALEJANDRO OSPITIA PRIETO
//2465879
//RETO 1 CALCULAR IMC
package salud;
import java.util.Scanner;

public class Persona 
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
    public void calcularImc()
    {
        pesoActual=peso/(estatura*estatura);
        
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