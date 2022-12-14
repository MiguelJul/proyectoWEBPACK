function Piloto(escuderia,nombre,habilidad,puntos) {
    this.escuderia=escuderia;
    this.nombre=nombre;
    this.habilidad=habilidad;
    this.puntos=puntos;
    function getEscuderia(){
        return this.escuderia;
    }
    function getNombre(){
        return this.nombre;
    }
    function getHabilidad(){
        return this.escuderia;
    }
    function getPuntos(){
        return this.puntos;
    }

}