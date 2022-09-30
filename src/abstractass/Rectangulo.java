//FABIAN ALEJANDRO OSPITIA PRIETO
//2465879
//RETO 4 FIGURAS_RECTANGULO
package abstractass;
public class Rectangulo extends Figuras 
{
    int base;
    double altura;

    public Rectangulo(int base, double altura)
    {
        this.base=base;
        this.altura=altura;
    }
    public void calcularArea()
    {
        double area=(base*altura);
        System.out.println("El area del Rectangulo es "+area+", la base es "+base+" y la altura "+altura);
    }
}
