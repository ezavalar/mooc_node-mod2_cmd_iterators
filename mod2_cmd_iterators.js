let par1, par2, par3;
[par1, par2, par3]= [process.argv[0],process.argv[1],process.argv.slice(2)];
console.log();
console.log("Route to node.js: "+par1);
console.log("Route to this file: "+par2);
console.log();
//Elimina objetos seguidos del parámetro -r

for(let i=0; i<par3.length; i++)
{
	if(par3[i]==="-r")
	{
		par3=par3.filter(elem=>elem!==par3[i+1])
	}
}
par3=par3.filter(elem=>elem!=="-r")

//Ordena y cuenta objetos
par3.sort().reduce((acc,elem,index,array)=>{

	if(elem===array[index+1])
	{
		acc+=1;
	}
	else
	{
		console.log(elem+": "+acc);
		acc=1;
	}
	
	return acc; 
}, 1);


