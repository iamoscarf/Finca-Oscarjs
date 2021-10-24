
var fo = document.getElementById("fincaOscar");
var papel = fo.getContext("2d");
var mapa = "tile.png";

var fondo = {
    url: "tile.png",
    cargaOK: false
}; 

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

var vaca = {
url: "vaca.png",
cargaOK: false
};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

var pollo ={
    url: "pollo.png",
    cargaOK: false
};
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

var cerdo ={
    url: "cerdo.png",
    cargaOK: false
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);


function cargarFondo() 
{
fondo.cargaOK = true;3
dibujar();
}
function cargarVaca() 
{
vaca.cargaOK = true;
dibujar();
}
function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar();
}
function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar();
}

function dibujar() 
{
    if (fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
     
    }
    if(vaca.cargaOK)
    {
        var cantidad = aleatorio(10, 15);
        for(var v=0; v< cantidad; v++) 
        {

     var x = aleatorio(0, 420)
     var y = aleatorio(0, 420)
     papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(pollo.cargaOK)
    {
        var cantidad = aleatorio(10, 15);
        for(var v=0; v< cantidad; v++)
        {
            var x = aleatorio(0, 420)
            var y = aleatorio(0, 420)
            papel.drawImage(pollo.imagen, x, y);
        }   
            
     }
    if(cerdo.cargaOK)
    {
        var cantidad = aleatorio(10, 15);
        for(var v=0; v< cantidad; v++)
        {
     var x = aleatorio(0, 420)
     var y = aleatorio(0, 420)
        papel.drawImage(cerdo.imagen, x, y);
        
        }
    }
}

function aleatorio(min, maxi) 
{
var resultado;
resultado = Math.floor(Math.random()* maxi -  min + 1 ) + min;
return resultado;   
}







