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
/*FIBO EN FLECHA
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

/* Factorial de un número con impresión en pantalla
var num = 0;

revision = (num) =>
{
    num = scanf("%i","Ingrese el numero: ");
    if (num < 0)
        revision(0);
    else
    {
        process.stdout.write(`${num}! = `);
        impresion (num, 1);
    }
}

factorial = (num) =>
{
    if(num == 0)
        return 1;
    else 
        return num * factorial(num - 1);
}

factorial = num => num == 0 ? 1 : num * factorial(num - 1);

impresion = (num, contador) =>
{
    if(contador == num)
    {
        process.stdout.write(`${num} = ${factorial(num)}`);
        console.log("");
    }
    else
    {
        process.stdout.write(`${contador} x `);
        impresion (num, contador + 1);
    }
}

revision (0);
*/


/* Suma del factorial de un numero
revision = (num) =>
{
    if (num < 0)
        revision(0);
    else
    {
        process.stdout.write(`${num}! = `);
        impresion (num, 1);
    }
}

factorial = (num) =>
{
    if(num == 0)
        return 1;
    else 
        return num * factorial(num - 1);
}

SumaFactorial = (num, suma) =>
{
    if(num >= 0)
    {
        suma = suma + factorial(num);
        return SumaFactorial (num - 1, suma);
    }
    else{
    return suma;
    }
}

impresion = (num, contador) =>
{ 
    if(contador == num)
    {
        process.stdout.write(`${num}! = ${SumaFactorial(num, 0)}`);
        console.log("");
    }
    else
    {
        process.stdout.write(`${contador}! + `);
        impresion (num, contador + 1);
    }
}

var num = scanf("%i", "Entre su número: ");
revision (num);
*/

/* dos columnas de numeros
columnas = (num1, num2) =>
{
    if (num1 <= 9)
    {
        process.stdout.write(`${num1} ${num2}\n`);
        if ((num1 % 2) == 0 && num1 != 0)
            columnas (num1 + 1, num2 + 1);
        else
            columnas (num1 + 1, num2);
    }
}
columnas (0, 1);
*/

/* 3 Columnas de numeros
columnas = (num1, num2, num3) =>
{
    if (num1 <= 9)
    {
        process.stdout.write(`${num1} ${num2} ${num3}\n`);
        if ((num1 % 3) == 0)
            columnas (num1 + 1, num2 + 1, 1);
        else
            columnas (num1 + 1, num2, num3 + 1);
    }
}
columnas (1, 1, 1);
*/

/* 
movimiento = (contador) =>
{
    if(contador <= 4)
        if(contador == 1)
        {
            process.stdout.write(`A`);
            espacios (0, 6);
            process.stdout.write(`A\n`);
            movimiento (contador + 1);
        }
        else
            if(contador == 2)
            {
                espacios (0, 1);
                process.stdout.write(`A`);
                espacios (0, 4);
                process.stdout.write(`A\n`);
                movimiento (contador + 1);
            }
            else 
                if(contador == 3)
                {
                    espacios (0, 2);
                    process.stdout.write(`A`);
                    espacios (0, 2);
                    process.stdout.write(`A\n`);
                    movimiento (contador + 1);
                }
                else
                {
                    espacios (0, 3);
                    process.stdout.write(`A`);
                    process.stdout.write(`A\n`);
                    movimiento (contador + 1); 
                }  
}
espacios = (contador, limite) =>
{
    if (contador < limite)
    {
        process.stdout.write(` `);
        espacios (contador + 1, limite);
    }
}
movimiento (1);
*/

/* tabla de A, derecha a izquierda
tabla = (contador) =>
{
    if(contador >= 0)
    {
        espacios (0, contador);
        impresion (0, 80 - contador);
        process.stdout.write(`\n`);
        tabla (contador - 1);
    }
}

espacios = (contador, limite) =>
{
    if (contador < limite)
    {
        process.stdout.write(` `);
        espacios (contador + 1, limite);
    }
}

impresion = (contador, limite) =>
{
    if (contador < limite)
    {
        process.stdout.write(`A`);
        impresion (contador + 1, limite);
    }
}

tabla (79);

*/
/* Numeros cambiantes
tabla = (contador) =>
{
    if(contador <= 7)
    {
        if(contador == 1)
        {
            impresion (0,13,"P");
            process.stdout.write(`\n`);
            tabla(contador + 1);
        }
        else
            if(contador == 2)
            {
                espacios (0, 1);
                impresion (0,11,"N");
                process.stdout.write(`\n`);
                tabla(contador + 1);
            }
            else
                if(contador == 3)
                {
                    espacios (0, 2);
                    impresion (0,9,"L");
                    process.stdout.write(`\n`);
                    tabla(contador + 1);
                }
                else
                    if(contador == 4)
                    {
                        espacios (0, 3);
                        impresion (0,7,"J");
                        process.stdout.write(`\n`);
                        tabla(contador + 1);
                    }
                    else
                        if(contador == 5)
                        {
                            espacios (0, 4);
                            impresion (0,5,"H");
                            process.stdout.write(`\n`);
                            tabla(contador + 1);
                        }
                        else
                            if(contador == 6)
                            {
                                espacios (0, 5);
                                impresion (0,3,"F");
                                process.stdout.write(`\n`);
                                tabla(contador + 1);
                            }
                            else
                                {
                                    espacios (0, 6);
                                    impresion (0,1,"D");
                                    process.stdout.write(`\n`);
                                    tabla(contador + 1);
                                }
    }
}
impresion = (contador, limite, caracter) =>
{
    if (contador < limite)
    {
        process.stdout.write(`${caracter}`);
        impresion (contador + 1, limite, caracter);
    }
}

espacios = (contador, limite) =>
{
    if (contador < limite)
    {
        process.stdout.write(` `);
        espacios (contador + 1, limite);
    }
}
tabla(1);
*/
/* P tabla en la columna 40
tabla = (contador) =>
{
    if(contador <= 7)
    {
        if(contador == 1)
        {
            espacios (0, 33);
            impresion (0,13,"P");
            process.stdout.write(`\n`);
            tabla(contador + 1);
        }
        else
            if(contador == 2)
            {
                espacios (0, 34);
                impresion (0,11,"P");
                process.stdout.write(`\n`);
                tabla(contador + 1);
            }
            else
                if(contador == 3)
                {
                    espacios (0, 35);
                    impresion (0,9,"P");
                    process.stdout.write(`\n`);
                    tabla(contador + 1);
                }
                else
                    if(contador == 4)
                    {
                        espacios (0, 36);
                        impresion (0,7,"P");
                        process.stdout.write(`\n`);
                        tabla(contador + 1);
                    }
                    else
                        if(contador == 5)
                        {
                            espacios (0, 37);
                            impresion (0,5,"P");
                            process.stdout.write(`\n`);
                            tabla(contador + 1);
                        }
                        else
                            if(contador == 6)
                            {
                                espacios (0, 38);
                                impresion (0,3,"P");
                                process.stdout.write(`\n`);
                                tabla(contador + 1);
                            }
                            else
                                {
                                    espacios (0, 39);
                                    impresion (0,1,"P");
                                    process.stdout.write(`\n`);
                                    tabla(contador + 1);
                                }
    }
}
impresion = (contador, limite, caracter) =>
{
    if (contador < limite)
    {
        process.stdout.write(`${caracter}`);
        impresion (contador + 1, limite, caracter);
    }
}

espacios = (contador, limite) =>
{
    if (contador < limite)
    {
        process.stdout.write(` `);
        espacios (contador + 1, limite);
    }
}
tabla(1);
*/

/* Tabla P desde la primera columna
tabla = (contador) =>
{
    if(contador <= 7)
    {
        if(contador == 1)
        {
            impresion (0,13,"P");
            process.stdout.write(`\n`);
            tabla(contador + 1);
        }
        else
            if(contador == 2)
            {
                espacios (0, 1);
                impresion (0,11,"P");
                process.stdout.write(`\n`);
                tabla(contador + 1);
            }
            else
                if(contador == 3)
                {
                    espacios (0, 2);
                    impresion (0,9,"P");
                    process.stdout.write(`\n`);
                    tabla(contador + 1);
                }
                else
                    if(contador == 4)
                    {
                        espacios (0, 3);
                        impresion (0,7,"P");
                        process.stdout.write(`\n`);
                        tabla(contador + 1);
                    }
                    else
                        if(contador == 5)
                        {
                            espacios (0, 4);
                            impresion (0,5,"P");
                            process.stdout.write(`\n`);
                            tabla(contador + 1);
                        }
                        else
                            if(contador == 6)
                            {
                                espacios (0, 5);
                                impresion (0,3,"P");
                                process.stdout.write(`\n`);
                                tabla(contador + 1);
                            }
                            else
                                {
                                    espacios (0, 6);
                                    impresion (0,1,"P");
                                    process.stdout.write(`\n`);
                                    tabla(contador + 1);
                                }
    }
}
impresion = (contador, limite, caracter) =>
{
    if (contador < limite)
    {
        process.stdout.write(`${caracter}`);
        impresion (contador + 1, limite, caracter);
    }
}

espacios = (contador, limite) =>
{
    if (contador < limite)
    {
        process.stdout.write(` `);
        espacios (contador + 1, limite);
    }
}
tabla(1);
*/
/* A desde columna 28 variada
tabla = (contador) =>
{
    if(contador <= 7)
    {
        if(contador == 1)
        {
            espacios(0, 27);
            impresion (0, 1,"A");
            espacios(0, 5);
            impresion (0,1,"A");
            process.stdout.write(`\n`);
            tabla(contador + 1);
        }
        else
            if(contador == 2)
            {
                espacios(0, 27);
                impresion (0, 2,"A");
                espacios(0, 3);
                impresion (0, 2,"A")
                process.stdout.write(`\n`);
                tabla(contador + 1);
            }
            else
                if(contador == 3)
                {
                    espacios(0, 27);
                    impresion (0, 3,"A");
                    espacios(0, 1);
                    impresion (0, 3,"A")
                    process.stdout.write(`\n`);
                    tabla(contador + 1);
                }
                else
                    if(contador == 4)
                    {
                        espacios(0, 27);
                        impresion (0, 7,"A");
                        process.stdout.write(`\n`);
                        tabla(contador + 1);
                    }
                    else
                        if(contador == 5)
                        {
                            espacios(0, 27);
                            impresion (0, 3,"A");
                            espacios(0, 1);
                            impresion (0, 3,"A");
                            process.stdout.write(`\n`);
                            tabla(contador + 1);
                        }
                        else
                            if(contador == 6)
                            {
                                espacios(0, 27);
                                impresion (0, 2,"A");
                                espacios(0, 3);
                                impresion (0, 2,"A");
                                process.stdout.write(`\n`);
                                tabla(contador + 1);
                            }
                            else
                                {
                                    espacios(0, 27);
                                    impresion (0, 1,"A");
                                    espacios(0, 5);
                                    impresion (0,1,"A");
                                    process.stdout.write(`\n`);
                                    tabla(contador + 1);
                                }
    }
}
impresion = (contador, limite, caracter) =>
{
    if (contador < limite)
    {
        process.stdout.write(`${caracter}`);
        impresion (contador + 1, limite, caracter);
    }
}

espacios = (contador, limite) =>
{
    if (contador < limite)
    {
        process.stdout.write(` `);
        espacios (contador + 1, limite);
    }
}
tabla(1);
*/
/* Impresion Z columna 10
tabla = (contador) =>
{
    if(contador <= 7)
    {
        if(contador == 1)
        {
            espacios (0,9);
            impresion (0, 1, "Z");
            process.stdout.write(`\n`);
            tabla(contador + 1);
        }
        else
            if(contador == 2)
            {
                espacios (0,8);
                impresion (0, 3, "Z");
                process.stdout.write(`\n`);
                tabla(contador + 1);
            }
            else
                if(contador == 3)
                {
                    espacios (0,7);
                    impresion (0, 5, "Z");
                    process.stdout.write(`\n`);
                    tabla(contador + 1);
                }
                else
                    if(contador == 4)
                    {
                        espacios (0,6);
                        impresion (0, 7, "Z");
                        process.stdout.write(`\n`);
                        tabla(contador + 1);
                    }
                    else
                        if(contador == 5)
                        {
                            espacios (0,7);
                            impresion (0, 5, "Z");
                            process.stdout.write(`\n`);
                            tabla(contador + 1);
                        }
                        else
                            if(contador == 6)
                            {
                                espacios (0,8);
                                impresion (0, 3, "Z");
                                process.stdout.write(`\n`);
                                tabla(contador + 1);
                            }
                            else
                                {
                                    espacios (0,9);
                                    impresion (0, 1, "Z");
                                    process.stdout.write(`\n`);
                                    tabla(contador + 1);
                                }
    }
}
impresion = (contador, limite, caracter) =>
{
    if (contador < limite)
    {
        process.stdout.write(`${caracter}`);
        impresion (contador + 1, limite, caracter);
    }
}

espacios = (contador, limite) =>
{
    if (contador < limite)
    {
        process.stdout.write(` `);
        espacios (contador + 1, limite);
    }
}
tabla(1);
*/
/* Impresion de Z
impresion = (contador1, contador2) =>
{
    if (contador1 < 9)
    {
        espacios(0, contador1);
        process.stdout.write(`Z`);
        espacios(0, contador2);
        process.stdout.write(`Z`);
        console.log("");
        impresion (contador1 + 1, contador2 - 2);
    }
    else
        if (contador1 == 9)
        {
            espacios(0, contador1);
            process.stdout.write(`Z`);
            espacios(0, contador2);
            console.log("");
            impresion (contador1 + 1, contador2 - 2);
        }
}

espacios = (contador, limite) =>
{
    if (contador < limite)
    {
        process.stdout.write(` `);
        espacios(contador + 1, limite);
    }
}

impresion (0, 17);

*/
/* Impresion de Z invertida
impresion = (contador1, contador2) =>
{
    if (contador1 == 9)
        {
            espacios(0, contador1);
            process.stdout.write(`Z`);
            espacios(0, contador2 - 1);
            console.log("");
            impresion (contador1 - 1, contador2 + 2);
        }
    else
        if (contador1 > 0)
        {
            espacios(0, contador1);
            process.stdout.write(`Z`);
            espacios(0, contador2 - 1);
            process.stdout.write(`Z`);
            console.log("");
            impresion (contador1 - 1, contador2 + 2);
        }
}

espacios = (contador, limite) =>
{
    if (contador < limite)
    {
        process.stdout.write(` `);
        espacios(contador + 1, limite);
    }
}

impresion (9, 0);
*/

/* Ultima tabla
tabla = (contador) =>
{
    if(contador <= 11)
    {
        if(contador == 1 || contador == 11)
        {
            espacios(0, 39);
            impresion (0, 1,"A");
            process.stdout.write(`\n`);
            tabla(contador + 1);
        }
        else
            if(contador == 2 || contador == 10)
            {
                espacios(0, 38);
                impresion (0, 2,"A");
                process.stdout.write(`\n`);
                tabla(contador + 1);
            }
            else
                if(contador == 3 || contador == 9)
                {
                    espacios(0, 37);
                    impresion (0, 3,"A");
                    process.stdout.write(`\n`);
                    tabla(contador + 1);
                }
                else
                    if(contador == 4 || contador == 8)
                    {
                        espacios(0, 36);
                        impresion (0, 4,"A");
                        process.stdout.write(`\n`);
                        tabla(contador + 1);
                    }
                    else
                        if(contador == 5 || contador == 7)
                        {
                            espacios(0, 35);
                            impresion (0, 5,"A");
                            process.stdout.write(`\n`);
                            tabla(contador + 1);
                        }
                        else
                            if(contador == 6)
                            {
                                espacios(0, 34);
                                impresion (0, 6,"A");
                                process.stdout.write(`\n`);
                                tabla(contador + 1);
                            }        
    }
}

impresion = (contador, limite, caracter) =>
{
    if (contador < limite)
    {
        process.stdout.write(`${caracter}`);
        impresion (contador + 1, limite, caracter);
    }
}

espacios = (contador, limite) =>
{
    if (contador < limite)
    {
        process.stdout.write(` `);
        espacios (contador + 1, limite);
    }
}

tabla(1);
*/


/* OJO IMPORTANTE ACERCA DE LA FUNCION FLECHA
    Por que existe? Existe dedibo a su simplicidad a la hora de creacion de codigo, todo programador deberia actualizarse y empezara a utilizarla
    Como funciona?
    Antes de entender como funciona hay que entender su sintaxis, es por eso que:
    El "=" le da introduccion a los parametros para la funcion
    La "=>" Le da introduccion a lo que la funcion como tal va a realizar
    En caso de querer hacer un if, se puede usar simplemente una expresion para obtener un booleano
    Usar la expresion despues de la "=>", de esta forma... expresion ? seguidamente, lo que se desea retornar, con la diferencia de que el "return esta implicito" solo es necesario poner lo que se desea retornar
    Despues de la expresion y el #true de esta misma se puede poner un ":" que representa un else
    Prototipo flecha:
    Nombre de funcion = Parametros => lo que quiera hacer...; fin
    En caso de querer con expresiones que devuelvan booleano:
    Nombre de funcion = Parametros => expresion ? true : false;
*/
                                      
factorial = num => num == 0 ? 1 : num * factorial(num - 1);
e = (x, n) => (x ** n) / factorial(n);
sumae = (x, n, acumulador) => n >= 0 ? sumae (x, n - 1, acumulador + e(x, n)): acumulador;

sumae (3, 10);