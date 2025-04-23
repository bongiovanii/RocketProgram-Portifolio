let array = [0,2,5,6,8,21];

Array.prototype.meuMap = function(callback)
{
    const novoArray = [];

    for(let i=0; i < this.length; i++)
    {
        const resultado = callback(this[i], i, this);
        novoArray.push(resultado);
    }

    return novoArray;
};

const dobrado = array.meuMap((valor, indice, arrayOriginal)=>{
    console.log(`Valor: ${valor} Indice: ${indice}`);
    return valor * 2;
});

console.log(dobrado);

