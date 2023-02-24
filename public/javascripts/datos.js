const btnJuego = document.getElementById('btnJuego');

const traer = ()=> {
      fetch("http://localhost:3000/creategame/gamer/gamer3").then((response)=> response.json())
      .then((data)=>{
            console.log(data)
            const name = document.querySelector("#name");
            const id = document.querySelector("#id");
            const inProgress = document.querySelector("#inProgress");
            

           name.textContent= data.name;
           id.textContent = data.id;
           inProgress.textContent = data.inProgress;
            
      });
};
btnJuego.addEventListener("click",traer());