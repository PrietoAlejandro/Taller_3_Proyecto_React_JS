//FABIAN ALEJANDRO OSPITIA PRIETO
//2465879
//RETO 4 EJECUCION FIGURAS
package abstractass;
import java.util.*;
public class Ejecucion 
{
    public static void main(String[] args) 
    {
        int valor;
        Scanner entrada=new Scanner(System.in);
        
        System.out.println("¿Cual es la figura que desea hallar le el area \n1.Circulo \n2.Triangulo \n3.Rectangulo?");
        valor=entrada.nextInt();
        
        if (valor==1)
        {
            System.out.println("Digite el radio del circulo");
            int radio=entrada.nextInt();
            Circulo circ=new Circulo(radio);
            circ.calcularArea();
        }
        else if (valor==2)
        {
            System.out.println("Digite la base del triangulo");
            int base=entrada.nextInt();
            System.out.println("Digite la altura del triangulo");
            double altura=entrada.nextDouble();
            Triangulo trian=new Triangulo(base, altura);
            trian.calcularArea();
        }
        else if(valor==3)
        {
            System.out.println("Digite la base del rectangulo");
            int base=entrada.nextInt();
            System.out.println("Digite la altura del rectangulo");
            double altura=entrada.nextDouble();
            Rectangulo rec=new Rectangulo(base, altura);
            rec.calcularArea();
        }
        entrada.close();
    }
}
