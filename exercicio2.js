function functionVerificadorDeParenteses(string) {
    let pilha = [];

    for (let i = 0; i < string.length; i++) {
        let letra = string[i];

        if (letra === "(") {
            pilha.push(letra);
        } else if (letra === ")") {
            if (pilha.length === 0) {
                return "Inválido";
            }
            pilha.pop();
        }
    }

    return pilha.length === 0 ? "Válido" : "Inválido";
}

console.log(functionVerificadorDeParenteses("((A+B) * C)"));
console.log(functionVerificadorDeParenteses("(A+B))"));
console.log(functionVerificadorDeParenteses("((A+B)"));   
