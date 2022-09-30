package salud;
import java.util.Scanner;
public class Animal 
{
    private String nombre;    
    public int edad;

    public Animal(String nombre,int edad)
    {
        this.nombre=nombre;
        this.edad=edad;
    }
    Scanner lectura=new Scanner(System.in);

    public String getnombre()
    {
        return nombre;
    }
    public int getedad()
    {
        return edad;
    }
    
    public void mostrarAnimal()
    {
    System.out.println("El animal se llama "+nombre+" y su edad es "+edad);
    }
    
}