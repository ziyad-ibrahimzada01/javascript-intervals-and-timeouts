//1.Ekrana sehife açılandan sonra consola-a Hello world cixsin

const helloW='Hello World'
setTimeout(() => {
        console.log(helloW);
    }, 2000);
    
    
    
    
//2.Counter = 0.her 5 saniyeden bir counter 1 vahid artsin,10olarsa dayansin

function countUp() {
    let count = 0;
    let intervals = setInterval(() => {
      console.log(count);
      count++;
      if (count >10) {
        clearInterval(intervals);
        console.log("saymaq dayandi");
      }
    } , 5000);
  }
  countUp()