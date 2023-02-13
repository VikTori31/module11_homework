function sum(a){
    return function num(b){    
      result = a + b;
      console.log ( result )
    }
  }
  sum(117)(98);