const count =(x, n) => {   
    if (n < 1) {
     console.log ( "Не является натуральным числом" );
  } else {
    let result = x;
    
    for (let i = 1; i < n; i++) {
      result *= x;
    }
     console.log( result); 
  }
  }
  count(5,3);