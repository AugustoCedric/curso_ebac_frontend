// Classe
class Carro {
  constructor(marca, fabricado) {
    this.marca = marca;
    this.fabricado = fabricado; 
  }
}

// Herança
class Ka extends Carro {
  buzina() {
    return "bi bi!";
  }
}

class Onix extends Carro {
  buzina() {
    return "bi bi!";
  }
}

// Instâncias de objetos
const ka1 = new Ka("Ford", 3);
const onix1 = new Onix("Chevrolet", 2);

// Exemplos de utilização
console.log(`${ka1.marca} faz: ${ka1.buzina()}`);
console.log(`${onix1.marca} faz: ${onix1.buzina()}`);
