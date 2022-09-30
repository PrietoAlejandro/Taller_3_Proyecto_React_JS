package salud;
public class Ave extends Animal
{
    double alas;
    public Ave(String nombre,int edad, Double alas) 
    {
    super(nombre,edad);
    this.alas=alas;
    }
    public void mostrarAve()
    {
    System.out.println("El nombre del animal es "+getnombre()+" la edad del animal es "+getedad()+" y tiene "+alas);
    }
}