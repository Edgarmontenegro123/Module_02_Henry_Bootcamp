var traverseDomAndCollectElements = function(matchFunc, startEl){
  var resultSet = [];

  if (typeof startEl === "undefined"){
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que hagan match en resultSet
  // usa matchFunc para identificar elementos que hagan match

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)){
    resultSet.push(startEl);
  }
  for(let i = 0; i < startEl.children.length; i++){
    traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc, startEl.children[i]));
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function(selector){
  // tu código aquí

  // Compruebo si es un id buscando si comienza con #
  if(selector[0] === '#') return 'id';

  // Compruebo si es una class buscando si comienza con .
  if(selector[0] === '.') return 'class';

  // Compruebo si es un tag.class buscando si existe un punto en medio
  if(selector.split(".").length > 1) return 'tag.class';

  // Última opción que me queda className
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector){
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if(selectorType === "id"){ 
   matchFunction = function (el){
     return(`#${el.id}` === selector)
   }
  } 
  else if(selectorType === "class"){
    matchFunction = function(el){
      for(let i = 0; i < el.classList.length; i++){
        if(`.${el.classList[i]}` === selector){
          return true;
        }
      }
        return false;
    }
  } 
  else if(selectorType === "tag.class"){
    matchFunction = function(el){
    let [tag, clase] = selector.split(".");
    
    return matchFunctionMaker(tag)(el) &&  matchFunctionMaker(`.${clase}`)(el);
    }
  } 
  else if(selectorType === "tag"){
    matchFunction = function (el){
      return(el.tagName.toLowerCase() === selector.toLowerCase());
    };
  }
  return matchFunction;
};

var $ = function(selector){
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};



