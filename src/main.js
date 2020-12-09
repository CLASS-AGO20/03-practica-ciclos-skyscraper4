export default class App {

    factorial(numero) {
      let multiplicacion = 1;
        for(let i = numero; i > 0; i = i - 1) {
         multiplicacion = multiplicacion * i;
        }
        return multiplicacion;
    }
}

let app = new App();
console.log(app.factorial(5));
