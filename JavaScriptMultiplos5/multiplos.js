function multiple(valor, multiple)
{
    resto = valor % multiple;
    if(resto==0)
        return true;
    else
        return false;
}

var multiplos_5 = [];
var suma = 0;

for(var i=1; i<=100; i++)
{
    if(multiple(i,5)){
        multiplos_5.push(i);
    }       
}

multiplos_5.forEach (function(numero){
    suma += numero;
});


document.write("Los multiplos de 5 son: ", multiplos_5);
document.write(" La suma de los multiplos de 5 es: " + suma)