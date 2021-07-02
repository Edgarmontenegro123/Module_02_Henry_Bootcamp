// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // [2, 5, 5, 7, 1]
  //        piv
  //     i
  // [2, 1]  [5]  [7]
  if(array.length <= 1) return array;

  //pivote // array a derecha // array a izquierda // array equals
  // a la derecha, los valores mas grandes que el pivote
  // a la izquierda, los valores mas chicos que el pivote
  var pivote = array[Math.floor(Math.random() * array.length)];
  var right = [];
  var left = [];
  var equals = [];

  for(var i=0; i<array.length; i++){
    if(array[i] < pivote){
      left.push(array[i]);
    }else if(array[i] > pivote){
      right.push(array[i]);
    }else{
      equals.push(array[i]);
    }
  }
  return quickSort(left).concat(equals).concat(quickSort(right));
}

function split(array){
  //[6, 7, 8, 9, 3, 5, 1]
  //          i
  var middle = Math.floor(array.length/2);
  var left = array.slice(0, middle);
  var right = array.slice(middle);

  return [left, right]; // [[left], [right]];
}
// [27, 38]     [3, 43, 56, 89, 96] > slice(indexRight) = [43, 56, 89, 96]
//          left  right
// 3, 27, 38, 43, 56, 89, 96

function merge(left, right){
  var indexLeft = 0;
  var indexRight = 0;
  var array = [];
  while(indexLeft < left.length && indexRight < right.length) {
    if(left[indexLeft] < right[indexRight]){
      array.push(left[indexLeft]);
      indexLeft++;
    }else{
      array.push(right[indexRight]);
      indexRight++;
    }
  }
  return array.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}



function mergeSort(array) { //O(N log N)
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length === 1) return array;

  var div = split(array);
  var left = div[0];
  var right = div[1];

  return merge(mergeSort(left), mergeSort(right));


}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
