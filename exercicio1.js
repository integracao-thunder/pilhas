function inversaoDeString(string) {
  let pilha = [];
  
  for(let i = 0; i < string.length; i++) {
    let letra = string[i];
    
    pilha.push(letra);
  }
  
  let fraseNova = "";
  
  while (pilha.length > 0) {
    fraseNova += pilha.pop();
  }
  
  return fraseNova;
}


console.log(inversaoDeString("ALGORITMO"))
