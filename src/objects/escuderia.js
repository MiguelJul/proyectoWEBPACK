function Escuderia(nombre,puntos) {
    this.nombre=puntos;
    this.puntos=nombre;
    function getEscuderia(){
        return this.puntos;
    }
    function getNombre(){
        return this.nombre;
    }
}