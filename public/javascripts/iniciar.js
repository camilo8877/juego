const btnJuego = document.getElementById('btnJuego');

const iniciar = ()=> {
      fetch("http://localhost:3000/creategame/gamer/iniciarJuego").then((response)=> response.json())
      .then((data)=>{
            console.log(data)
            const id = document.querySelector("#id");
            const type = document.querySelector("#type");
            const gamerbet = document.querySelector("#gamerbet");
            

           id.textContent= data.id;
           type.textContent = data.type;
           gamerbet.textContent = data.gamerbet;
            
      });
};
btnJuego.addEventListener("click",iniciar());