//FABIAN ALEJANDRO OSPITIA PRIETO
//2465879
//RETO 3 PERSONA_EMPLEADO 
package salud;
public class Persona3
{
    //Atributos
    String tipoDoc;
    int documento;
    String nombre;
    String apellido;
    String sexo;

    public Persona3(String tipoDoc, int documento, String nombre, String apellido, String sexo) 
    {
        this.tipoDoc=tipoDoc;
        this.documento=documento;
        this.nombre=nombre;
        this.apellido=apellido;
        this.sexo=sexo;
    }

    public String gettipoDoc()
    {
        return tipoDoc;
    }
    public int getdocumento()
    {
        return documento;
    }
    public String getnombre()
    {
        return nombre;
    }
    public String getapellido()
    {
        return apellido;
    }
    public String getsexo()
    {
        return sexo;
    }          
}
