function ehPalindromo(palavra){
    let arvalap = ""; // Palavra ao contrário
    let tamanhoPalavra;
    let espacos;

    console.log(palavra)
    

    palavra = palavra.toLowerCase();
    espacos = palavra.indexOf(" ");
    while (espacos !== -1){
        palavra = palavra.slice(0,espacos) + palavra.slice(espacos + 1);
        espacos = palavra.indexOf(" ");
    }
    tamanhoPalavra = palavra.length
    
    for(i=tamanhoPalavra-1;i>=0;i--){
        arvalap += palavra[i];
    }

    if(palavra === arvalap){
        return true;
    } else {
        return false;
    }
}

console.log(ehPalindromo("ana"));
console.log(ehPalindromo("radar"));
console.log(ehPalindromo("javascript"));
console.log(ehPalindromo("A man a plan a canal Panama"));
