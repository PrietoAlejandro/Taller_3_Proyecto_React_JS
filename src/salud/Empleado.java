//FABIAN ALEJANDRO OSPITIA PRIETO
//2465879
//RETO 3 PERSONA_EMPLEADO 
package salud;
public class Empleado extends Persona3
{
    String cargo;
    int valorHora;
    int horasTrabajadas;
    Double valorTotal;

    public Empleado(String tipoDoc, int documento, String nombre, String apellido, String sexo, String cargo, int valorHora, int horasTrabajadas) 
    {
        super(tipoDoc, documento, nombre, apellido, sexo);
        this.cargo=cargo;
        this.valorHora=valorHora;
        this.horasTrabajadas=horasTrabajadas;
    }
    public void mostrarEmpleado()
    {
        System.out.println("Tipo de documento: " + gettipoDoc() + " y Numero de documento: " + getdocumento());
        System.out.println("Nombre y Apellido: " + getnombre() + " " + getapellido());
        System.out.println("Genero: " + getsexo());
        System.out.println("Cargo: " + cargo);
        System.out.println("Horas trabajadas: " + horasTrabajadas + " horas");
        System.out.println("Valor por hora: $" + valorHora);
    } 
    public void calcularHonorarios()
    {
        Double calculo = ((valorHora*horasTrabajadas)*0.966)/100;
        valorTotal = calculo - horasTrabajadas;
        System.out.println("Sus honorarios son: " + valorTotal);
    } 
}