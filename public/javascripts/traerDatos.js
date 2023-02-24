const btnConsultar = document.getElementById('btnConsultar');
const traerDatos = ()=> {
      fetch("http://localhost:3000/creategame/gamer").then((response)=> response.json())
      .then((data)=>{
            console.log(data)
            
      });
};
btnConsultar.addEventListener("click",traerDatos);





