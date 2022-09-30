//FABIAN ALEJANDRO OSPITIA PRIETO
//2465879
//RETO 4 FIGURAS_TRIANGULO
package abstractass;
public class Triangulo extends Figuras 
{
    int base;
    double altura;

    public Triangulo(int base, double altura)
    {
        this.base=base;
        this.altura=altura;
    }
    public void calcularArea()
    {
        double area=(base*altura)/2;
        System.out.println("El area del triangulo es "+area+", la base es "+base+" y la altura "+altura);
    }
}

