function criapokemon( pokemon){
    console.log(pokemon);
    const container =document.getElementById('container');
   
   const  pokemon03 =document.createElement('h1');
   const  pokemon02 =document.createElement('p');
   
   
   pokemon03.textContent=pokemon.name;
   pokemon02.textContent= pokemon.url;
  
   
   container.appendChild( pokemon03);
   container.appendChild( pokemon02);
   
   }
   
   
   fetch('https://pokeapi.co/api/v2/pokemon')
   .then (response=>{
   return response.json();
   })
   .then(data =>{
      
   
   const  pokemons =data.results;
   
   pokemons.forEach(pokemon => {
    criapokemon(pokemon);
   })
   
   })
   .catch(err=>{
         console.log('erro:',err);
   });