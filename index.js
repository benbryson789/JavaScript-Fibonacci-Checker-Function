function FibonacciChecker(num) { 
    let array=[];
      let result;
      for(let k=0;;k++){
        array.push(k<2 ? k:array[k-2]+array[k-1]);
        if(array[k]===num){
          result='yes';
          break;
        } 
        if(array[k]>num){
          result='no';
          break;
        } 
      } 
      
      return result; 
             
    }
    
    console.log(FibonacciChecker(34))//yes
    console.log(FibonacciChecker(54))//no