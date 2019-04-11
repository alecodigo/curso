var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {

    url: "tile.png",
    cargaOK: false

};

var vaca = {

    url: "vaca.png",
    cargaOK: false

};

//para cargar las imagenes necesitamos crear un objeto imagen
fondo.imagen = new Image(); // empieza con mayuscula xq es una definicion de un objeto 
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

// forma indirecta de agregar 
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);




function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();


}

function cargarVaca()
{
    vaca.cargaOK = true;
    dibujar();

}



// Agregamos fondo en un canvas y establecemos el orden de como se
// añaden dentro del canvas
function dibujar()
{
    if(fondo.cargaOK == true)
    {
        papel.drawImage(fondo.imagen, 0, 0); // Se pasa la imagen y las posiciones en x, y
        
    }
    if(vaca.cargaOK)
    {
        papel.drawImage(vaca.imagen, 100, 100)
    }
    //if(vaca.cargaOK)
    //{
    //    papel.drawImage(vaca.imagen, 100, 0)
    //}
}



function aleatorio(min, maxi)
{

    var resultado;
    resultado =  Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;

}