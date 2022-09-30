//FABIAN ALEJANDRO OSPITIA PRIETO
//2465879
//RETO 3 EJECUCION PERSONA_EMPLEADO
package principal;
import java.util.Scanner;
import salud.Empleado;
public class Ejecucion3
{
    public static void main(String[] args) 
    {
        String tipoDoc = "";
        int documento = 0;
        String nombre = "";
        String apellido = "";
        String sexo = "";
        String cargo = "";
        int valorHora = 0;
        int horasTrabajadas = 0;
        
        Scanner lectura = new Scanner(System.in);
        
        System.out.println("Registre su tipo de documento");
        tipoDoc = lectura.next();
        System.out.println("Digite su numero de documento");
        documento = lectura.nextInt();
        System.out.println("Digite su nombre");
        nombre = lectura.next();
        System.out.println("Digite su apellido");
        apellido = lectura.next();
        System.out.println("Digite su genero");
        sexo=lectura.next();
        System.out.println("Digite su cargo");
        cargo=lectura.next();
        System.out.println("Digite las horas trabajadas");
        horasTrabajadas=lectura.nextInt();
        System.out.println("Digite el valor por hora");
        valorHora=lectura.nextInt();

        Empleado datos = new Empleado(tipoDoc, documento, nombre, apellido, sexo, cargo, valorHora, horasTrabajadas);
        datos.mostrarEmpleado();
        datos.calcularHonorarios();
        
        lectura.close();
    } 
}
