//FABIAN ALEJANDRO OSPITIA PRIETO
//2465879
//RETO 4 FIGURAS_CIRCULO
package abstractass;
public class Circulo extends Figuras 
{
    int radio;
    double pi=3.14;

    public Circulo(int radio)
    {
        this.radio=radio;
    }
    public void calcularArea()
    {
        double area=pi*(radio*radio);
        System.out.println("El area del circulo es "+area+" y el radio es "+radio);
    }
}
