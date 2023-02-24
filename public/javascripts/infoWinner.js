const btnJuego = document.getElementById('btnJuego');

const ganar = ()=> {
      fetch("http://localhost:3000/creategame/gamer/ganador").then((response)=> response.json())
      .then((data)=>{
            console.log(data)
            const name = document.querySelector("#name");
            const id = document.querySelector("#id");
           
           name.textContent= data.name;
           id.textContent = data.id;
        
            
      });
};
btnJuego.addEventListener("click",ganar());