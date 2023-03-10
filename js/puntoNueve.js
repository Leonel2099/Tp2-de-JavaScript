//PUNTO 9
for (let contador = 1; contador <= 500 ; contador++ ){
    if (contador % 4 == 0 ) {
        document.write(`${contador} (Multiplo de 4)`);
    }else if (contador % 9 ==0){
        document.write(`${contador} (Multiplo de 9)`);
    }else if (contador % 9 ==0){
        document.write(`${contador} (Multiplo de 9)`);
    }else{
        document.write(`${contador}`);
    }
    document.write(`<br>`);
    if(contador % 5 == 0){
        document.write(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _`);
        document.write(`<br>`);
        document.write(`<br>`);
    }
}