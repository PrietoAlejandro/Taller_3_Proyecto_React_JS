package salud;
public class Perro extends Animal
    {
        int patas;
        public Perro(String nombre,int edad, int patas) 
            {
            super(nombre,edad);
            this.patas=patas;
            }

        public void mostrarPerro()
            {
            System.out.println("El nombre del animal es "+getnombre()+" la edad es "+getedad()+" y tiene "+patas+" patas");
            }
        
    }