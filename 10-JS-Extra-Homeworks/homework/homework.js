// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var list = [];
  for (let clave in objeto) {
    list.push([clave, objeto[clave]]);
  }
  return list;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var suma = 0;
  var list = {};
  for (var i=0;i<string.length;i++) {
    list[string[i]] = 0;
  }
  for (let num in list) {
    for (var j=0;j<string.length;j++) {
      if (num === string[j]) {
        suma += 1;
      }
    }
    list[num] = suma;
    var suma = 0;
  }
  return list;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var st1 = "";
  var st2 = "";
  for (var i =0; i<s.length;i++) {
    if (s[i] === s[i].toUpperCase()) {
      st1 += s[i];
    } else {
      st2 += s[i];
    }
  }
  return st1+st2;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var list = str.split(" ");
  var st = "" ;
  for (var i = 0;i<list.length;i++) {
    for (var j=list[i].length - 1; j>=0;j--) {
      st += list[i][j];
    }
    if (i<list.length -1 ) {
      st += " ";
    }
  }
  return st;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
   var reverso = "";
   var normal = ""+numero;
   for (var i=normal.length-1; i>=0;i--) {
    reverso += normal[i];
   }
  if (reverso === normal) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var st = "";
  for (var i = 0; i<cadena.length; i++) {
    if (cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c" ) {
      continue;
    } else {
      st += cadena[i];
    }
  }
  return st;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var list = [];
  var l = 0;
  for (var i=0;i<100;i++) {
    for (var j=0;j<arr.length ;j++) {
      if (arr[j].length === l) {
        list.push(arr[j]);
      }
    }
    l++;
  }
  return list;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var list = [];
  for (i in arreglo1) {
    for (j in arreglo2) {
      if (arreglo1[i]===arreglo2[j]) {
        list.push(arreglo1[i]);
      } 
    }
  }
  return list;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

