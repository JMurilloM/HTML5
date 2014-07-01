var moneda = Math.floor(Math.random() * 2);
console.log("Ahi te va un volado!");
while(moneda){
	console.log("¡Cara! Lanzando de nuevo...");
	var moneda = Math.floor(Math.random() * 2);
}
console.log("¡Sello! Lanzamiento concluido.");
