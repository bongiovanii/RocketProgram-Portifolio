let array = [0, 4, 5, 102, 8, 9, 15, 13, 10];

Array.prototype.meuFilter = function (callback) 
{
  const novoArray = [];

    for (let i = 0; i < this.length; i++) 
    {
        const teste = callback(this[i], i, this);
        if (teste) {
            novoArray.push(this[i]);
        }
    }

  return novoArray;
};

const par = array.meuFilter((n, indice, array) => {
  console.log(`Elemento: ${n}  Indice: ${indice}`);
  return n % 2 == 0;
});

console.log(par);
