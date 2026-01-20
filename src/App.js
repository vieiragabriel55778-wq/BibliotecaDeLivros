import Corpo from "./main";
import { useState } from "react";






function Menu() {

const [active,setActive]=useState("Todos");
const [active2,setActive2]=useState("A-Z");
const [filtro,setFiltro]=useState("todos");
const [pesquisa,setPesquisa]=useState(null);
const [ordem,setOrdem]=useState("A-Z");

const base="mx-2 cursor-pointer rounded-md border border-gray-400 w-[70px] text-center hover:scale-105 hover:duration-200 active:scale-90";


  return (
    <>
    <header  className="fixed bg-white/70 backdrop-blur-md items-center top-0 left-0 z-40 w-full  h-60 shadow-sm shadow-slate-400 ">
      
      <div className="flex my-5 mx-11">
       <img src="OIP.webp" className="w-[45px] h-[45px] border-1 border-purple-600 rounded-xl mx-3 my-1"></img>
      <div className="grid"> 
       <h1 className="text-purple-600 font-sans text-2xl mx-5 font-bold">Minha Biblioteca Digital</h1>
       <p className="text-gray-400 font-sans mx-5">Minhas leituras semanais</p>
       </div>
     </div>

     <div> 
      <img src="/img/lupa.webp"
           className="absolute w-5 h-5 left-20 my-9">
      </img>
    <input type="search"
           placeholder="Busca por titulo ou autor"
           value={pesquisa}
           onChange={e=>setPesquisa(e.target.value)}
           className="my-6 mx-[50px] w-[1200px] h-10 px-16  border-none shadow-slate-300 shadow-md rounded placeholder:pl-[10px] focus:outline-none "
      > 
       </input>
     </div>

     <div className="flex w-full">  
      <div className="flex mx-[48px]">
          <img src="filtro.webp" className="w-[30px] "></img>
          <p className="mx-2">Filtrar:</p>

          <p onClick={()=>{setActive("Todos")
                      setFiltro("todos")  
        }
          } 
             className={`${base} ${
             active==="Todos"
             ?"bg-blue-600 text-white border none"
             :"mx-2 cursor-pointer rounded-md border border-gray-400 w-[70px] text-center" 
             }`
          }
          >Todos</p>

          <p onClick={()=>{
            setActive("Romance")
            setFiltro("Romance")

          }}
             className={
            `${base} ${
            active==="Romance"
            ?"bg-blue-600 text-white border none"
            :"mx-2 cursor-pointer rounded-md border border-gray-400 w-[70px] text-center"
            }`
          }>Romance</p>
          <p onClick={()=>{setActive("Faltasia")
                           setFiltro("Fantasia")
          }}
             className={
            `${base} ${
             active==="Faltasia"
             ?"bg-blue-600 text-white border none "
             :"mx-2 cursor-pointer rounded-md border border-gray-400 w-[70px] text-center" 
            }`
          }>Fantasia</p>
      </div>


      <div className="flex relative left-3/4 mx-[-420px]">
      <p onClick={()=>{setActive2("A-Z")
                       setOrdem("A-Z")

      }}
         className={`${base} ${
         active2==="A-Z"
         ?"bg-blue-600 text-white border none"   
         :"mx-2 cursor-pointer rounded-md border border-gray-400 w-[70px] text-center"
         }
       `}>
       A-Z</p>
      <p onClick={()=>{setActive2("Ano")
                       setOrdem("ano")
      }}
         className={
        `${base} ${
          active2==="Ano"
          ?"bg-blue-600 text-white border none"
          :"mx-2 cursor-pointer rounded-md border border-gray-400 w-[70px] text-center"
        }`
      }>Ano</p>
      <p onClick={()=>{setActive2("Nota")
                       setOrdem("nota") 

      }}
         className={
        `${base} ${
        active2==="Nota"
        ?"bg-blue-600 text-white border none"
        :"mx-2 cursor-pointer rounded-md border border-gray-400 w-[70px] text-center" 
      }`
      }>⭐Nota</p>
      </div>
     </div>

    </header>
    <Corpo filtro={filtro}
           ordem={ordem}
           pesquisa={pesquisa}
    />
    </>
  );

  Corpo();
}

export default Menu;
