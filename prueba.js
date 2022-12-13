const e = require('express');
const { process_params } = require('express/lib/router');
const readline = require ('readline-sync');
function scanf(type, question){
    var ret = readline.question(`${question}`);

    switch(type)
    {
        case "%i": 
            ret = parseInt(ret);
            break;
        case "%f":
            ret = parseFloat(ret);
            break;
        case "%s":
            ret = ret;
            break
    }

    return ret;
}
/*   FIBO EN FUNCION NORMAL
function fibo (a, b, str)
{
    var an = new String();
    an = a;
    str += an + " ";
    if (b<10000)
        fibo(b,(a+b), str);
    else
        console.log(str);
}
fibo (0, 1, "");
*/
/* FIBO EN FLECHA
fibo = (a, b) => 
{
    process.stdout.write(`${a}`);
    if (b<10000)
    {
        process.stdout.write(", ");
        fibo(b, (a+b));
    }
}
fibo (0, 1);
*/

/*FIBO HASTA EL 100 EN FLECHA
let suma = 0;
fibo = (a, b) => 
{
    process.stdout.write(`${a}`);
    suma = suma + a;
    if (b<144)
    {
        process.stdout.write(", ");
        fibo(b, (a+b));
    }
}
fibo (0, 1);
process.stdout.write(" y su suma es: " + suma);
console.log("");
*/
 
/*   Numero al reves: 
var a = scanf("%i", "Entre el numero: ");
var b = 0;
reves = (a) =>
{
    if(a < 10)
        process.stdout.write(`${a}`);
    else
    {
        b = a % 10;
        process.stdout.write(`${b}`);
        reves ((a - b) / 10);
    }
        
}
reves (a);
console.log("");
*/

/*
numeros = (num, contador, mayores, mayor, menor, negativos, positivos) =>
{
    if (contador < 75)
    {
        num = scanf("%i", "Digite el numero: ");
        if(num == 0)
            numeros(0, contador, mayores, mayor, menor, negativos, positivos);
        else
        {
            if(num > 150)
                mayores ++;
            if(num > mayor)
                mayor = num;
            else
            if(num < menor)
                menor = num;
            if(num < 0)
                negativos++;
            else
                positivos = positivos + num;
        }
        numeros(0, contador + 1, mayores, mayor, menor, negativos, positivos);
    }
    else
    {
    let promedio = positivos/contador;
    process.stdout.write(`Cantidad de numeros mayores a 150: ${mayores} \n Numero mayor: ${mayor} \n Numero menor: ${menor} \n Cantidad de negativos: ${negativos} \n Promedio de positivos encontrados: ${promedio}`);
    console.log("");
    }
}
numeros(0, 0, 0, 0, 0, 0, 0);
*/

/* TABLAS DE MULTIPLICAR
CI = (num1, num2) =>
{
    if(num2 <= 10)
    {
        process.stdout.write(`${num1} x ${num2} = ${num1 * num2}\n`);
        CI(num1, num2 + 1);
    }
}

CE = (num1) =>
{
    if(num1 <= 10)
    {
        CI(num1, 1);
        console.log("");
        CE(num1 + 1);

    }
}
CE(1);
*/

var num = scanf("%i","Ingrese el numero: ");
factorial = (num) =>
{
    if(num == 0)
        return 1;
    else 
        return num * factorial(num - 1);
}

impresion = (num, contador) =>
{
    if(contador == num)
        process.stdout.write(` ${num} = ${factorial(num)}`);
    else
    {
        process.stdout.write(``);
    }
}
