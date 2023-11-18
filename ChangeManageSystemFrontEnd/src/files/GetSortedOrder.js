export function getSortOrder(prop) {
    return function(a, b) {  
        console.log(a.changeId + ":" + a[prop]);
        console.log(b.changeId + ":" + b[prop]);
      if (a[prop] > b[prop]) {  
        console.log(a[prop] + " is higher than " + b[prop]);
          return 1;  
      } else if (a[prop] < b[prop]) {  
        console.log(a[prop] + " is lower than " + b[prop]);
          return -1;  
      }  
      return 0;  
  } 
  }
