let array = [1,4,5,7];

Array.prototype.meuReduce = function(callback, valorInicial)
{
    let acumulador = valorInicial;
    for(let i=0; i < this.length; i++)
    {
        acumulador = callback(acumulador,this[i], i, this);
    }

    return acumulador;
}


const resultado = array.meuReduce((acumulador,n,i,array)=>{
    return acumulador + n
}, 0);

console.log(resultado);

