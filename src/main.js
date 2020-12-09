export default class App {

    factorial(numero) {
      let multiplicacion = 1;
        for(let i = numero; i > 0; i = i - 1) {
         multiplicacion = multiplicacion * i;
        }
        return multiplicacion;
    }

    convertirAString(numero) {
    let z = 1;
    let suma = "";
        while(z <= numero) {
        suma = suma + "*";
          
        z = z + 1;
        }
        return suma;
    }

    obtenerDivisibles(numero) {
     let divisibles = 0;
        let i = numero;
        do{
            if(numero % i == 0) {
            divisibles = divisibles + 1;
            }
            i = i - 1;

        }while(i>0)

        return divisibles;
    
        
 }

}

let app = new App();
console.log(app.factorial(5));
console.log(app.convertirAString(5));
console.log(app.obtenerDivisibles(5));