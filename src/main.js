import { useState } from "react";
import { useEffect } from "react";
import { PegarLivros } from "./conexao.js";



export default function Corpo({filtro,ordem,pesquisa}) {
    const divs="grid shadow-md w-[160px] h-[440px] rounded-[20px] overflow-hidden cursor-pointer hover:shadow-2xl  hover:scale-105 transition duration-1000";
    const cardBase="fixed grid-cols-2 z-50 w-[50%] h-[500px] bg-white bottom-[10%] left-[23%] rounded-2xl";     
    const [card,setCard]=useState(false);
    const [livro,setLivro]=useState([]);
    const [livroAtivo,setlivroAtivo]=useState(null);
    
   useEffect(()=>{
    async function Livros() {
    const livros=await PegarLivros();
    console.log(livros);
    setLivro(livros);
   }
  Livros();

   },[])
   
    
   useEffect(()=>{  
    if (card) {
      document.body.style.overflow="hidden";
    }
    else{
     document.body.style.overflow="auto";
    }
   },[card])

   const livrosOrdenados=[...livro];
   
   const search=pesquisa?.toLowerCase()||"";

  const passaPesquisa=(l)=>{
   if(!search) return true;
     return( 
    l.nome?.toLowerCase().includes(search)||
    l.autor?.toLowerCase().includes(search)
  );
};





   if(ordem==="A-Z"){
    livrosOrdenados.sort((a,b)=> a.nome.localeCompare(b.nome));
   }

   if(ordem==="ano"){
    livrosOrdenados.sort((a,b)=>{
      const anoA=Number(a.ano)||0;
      const anoB=Number(b.ano)||0;
      return anoA-anoB;
    });
   }

   if(ordem==="nota"){
    livrosOrdenados.sort((a,b)=>Number(b.nota)-
    Number(a.nota)
  );
   }


    return(
      <>
    <main className={`grid grid-rows-3 grid-cols-6 gap-5 relative top-80 justify-center mx-5 ${
                   card===true
                   ?"blur-sm"
                   :"blur-none"
                   }`}>

      <div onClick={()=>{setCard(true);
                         setlivroAtivo(livrosOrdenados[0]);
                       
                    }} 
           className={`${divs}
                       ${filtro==="todos" || filtro===livrosOrdenados[0].tipo?"":"hidden"}
                       ${passaPesquisa(livrosOrdenados[0])?"":"hidden"}
           `
             }>
      
      <img className="z-0 w-40" src={livrosOrdenados[0]?.img}></img>
      <div className="grid  bg-white w-[100%] h-[200px]">
       <h1 className="font-bold mx-4 my-3">{livrosOrdenados[0]?.nome}</h1>
       <p className="font-light text-sm mx-4">{livrosOrdenados[0]?.autor}</p>
      <div className="flex">
        <p className="mx-4 w-[60px] h-[24px] text-center font-medium text-[16px] rounded-xl bg-slate-200 ">{livrosOrdenados[0]?.tipo}</p>
        <p className="font-light text-sm my-1 mx-8">{livrosOrdenados[0]?.ano}</p>
      </div>
       <p className="font-light text-sm text-right mx-[32px]">⭐{livrosOrdenados[0]?.nota}</p>
      </div>
      
      </div> 



      <div onClick={()=>{setCard(true)
                        setlivroAtivo(livrosOrdenados[1])
                        ;

      }} 
           className={`${divs}
                       ${filtro==="todos" || filtro===livrosOrdenados[1].tipo?"":"hidden"}
                       ${passaPesquisa(livrosOrdenados[1])?"":"hidden"}
                      
           `}>
      
      <img className="z-0 w-40  " src={livrosOrdenados[1]?.img}></img>
      <div className="grid  bg-white w-[100%] h-[200px]">
       <h1 className="font-bold mx-4 my-3">{livrosOrdenados[1]?.nome}</h1>
       <p className="font-light text-sm mx-4">{livrosOrdenados[1]?.autor}</p>
      <div className="flex">
        <p className="mx-4 w-[60px] h-[24px] text-center font-medium text-[13px] rounded-xl bg-slate-200 ">{livrosOrdenados[1]?.tipo}</p>
        <p className="font-light text-sm my-1 mx-8">{livrosOrdenados[1]?.ano}</p>
      </div>
       <p className="font-light text-sm text-right mx-[32px]">⭐{livrosOrdenados[1]?.nota}</p>
      </div>
      
      </div> 

       
       

      <div onClick={()=>{setCard(true)
                   setlivroAtivo(livrosOrdenados[2]); 
      }} 
           className={`${divs}
                       ${filtro==="todos" || filtro===livrosOrdenados[2].tipo?"":"hidden"}
                        ${passaPesquisa(livrosOrdenados[2])?"":"hidden"}
           `}>
                 
      <img className="z-0 w-40  " src={livrosOrdenados[2]?.img}></img>
      <div className="grid  bg-white w-[100%] h-[200px]">
       <h1 className="font-bold mx-4 my-3">{livrosOrdenados[2]?.nome}</h1>




       <p className="font-light text-sm mx-4">{livrosOrdenados[2]?.autor}</p>
      <div className="flex">
        <p className="mx-4 w-[60px] h-[24px] text-center font-medium text-[13px] rounded-xl bg-slate-200 ">{livrosOrdenados[2]?.tipo}</p>
        <p className="font-light text-sm my-1 mx-8">{livrosOrdenados[2]?.ano}</p>
      </div>
       <p className="font-light text-sm text-right mx-[32px]">⭐{livrosOrdenados[2]?.nota}</p>
      </div>
      
      </div> 



      <div onClick={()=>{setCard(true)
                   setlivroAtivo(livrosOrdenados[3]);
      }} 
           className={`${divs}
                       ${filtro==="todos" || filtro===livrosOrdenados[3].tipo?"":"hidden"}
                        ${passaPesquisa(livrosOrdenados[3])?"":"hidden"}
           `}>
      
      <img className="z-0 w-40  " src={livrosOrdenados[3]?.img}></img>
      <div className="grid  bg-white w-[100%] h-[200px]">
       <h1 className="font-bold mx-4 my-3">{livrosOrdenados[3]?.nome}</h1>
       <p className="font-light text-[8px] mx-4">{livrosOrdenados[3]?.autor}</p>
      <div className="flex">
        <p className="mx-4 w-[60px] h-[24px] text-center font-medium text-[13px] rounded-xl bg-slate-200 ">{livrosOrdenados[3]?.tipo}</p>
        <p className="font-light text-sm my-1 mx-8">{livrosOrdenados[3]?.ano}</p>
      </div>
       <p className="font-light text-sm text-right mx-[32px]">⭐{livrosOrdenados[3]?.nota}</p>
      </div>
      
      </div> 


       

      <div onClick={()=>{setCard(true)
                   setlivroAtivo(livrosOrdenados[4]);
                   

      }} 
           className={`${divs}
                       ${filtro==="todos" || filtro===livrosOrdenados[4].tipo?"":"hidden"}
                        ${passaPesquisa(livrosOrdenados[4])?"":"hidden"}
           `}>
      
      <img className="z-0 w-40 " src={livrosOrdenados[4]?.img}></img>
      <div className="grid  bg-white w-[100%] h-[200px]">
       <h1 className="font-bold mx-4 my-3">{livrosOrdenados[4]?.nome}</h1>
       <p className="font-light text-sm mx-4">{livrosOrdenados[4]?.autor}</p>
      <div className="flex">
        <p className="mx-4 w-[60px] h-[24px] text-center font-medium text-[15px] rounded-xl bg-slate-200 ">{livrosOrdenados[4]?.tipo}</p>
        <p className="font-light text-sm my-1 mx-8">{livrosOrdenados[4]?.ano}</p>
      </div>
       <p className="font-light text-sm text-right mx-[32px]">⭐{livrosOrdenados[4]?.nota}</p>
      </div>
      
      </div> 

      

      <div onClick={()=>{setCard(true)
                   setlivroAtivo(livrosOrdenados[5]);
      }} 
           className={`${divs} 
                       ${filtro==="todos" || filtro===livrosOrdenados[5].tipo?"":"hidden"}
                        ${passaPesquisa(livrosOrdenados[5])?"":"hidden"}
           `}>
      
      <img className="z-0 w-40  " src={livrosOrdenados[5]?.img}></img>
      <div className="grid  bg-white w-[100%] h-[200px]">
       <h1 className="font-bold mx-4 my-3">{livrosOrdenados[5]?.nome}</h1>
       <p className="font-light text-sm mx-4">{livrosOrdenados[5]?.autor}</p>
      <div className="flex">
        <p className="mx-4 w-[60px] h-[24px] text-center font-medium text-[13px] rounded-xl bg-slate-200 ">{livrosOrdenados[5]?.tipo}</p>
        <p className="font-light text-sm my-1 mx-8">{livrosOrdenados[5]?.ano}</p>
      </div>
       <p className="font-light text-sm text-right mx-[32px]">⭐{livrosOrdenados[5]?.nota}</p>
      </div>
      
      </div> 
       
        <div onClick={()=>{setCard(true)
                   setlivroAtivo(livrosOrdenados[6]);
      }} 
           className={`${divs} 
                       ${filtro==="todos" || filtro===livrosOrdenados[6].tipo?"":"hidden"}
                        ${passaPesquisa(livrosOrdenados[6])?"":"hidden"}
           `}>
      
      <img className="z-0 w-40  " src={livrosOrdenados[6]?.img}></img>
      <div className="grid  bg-white w-[100%] h-[200px]">
       <h1 className="font-bold mx-4 my-3">{livrosOrdenados[6]?.nome}</h1>
       <p className="font-light text-sm mx-4">{livrosOrdenados[6]?.autor}</p>
      <div className="flex">
        <p className="mx-4 w-[60px] h-[24px] text-center font-medium text-[13px] rounded-xl bg-slate-200 ">{livrosOrdenados[6]?.tipo}</p>
        <p className="font-light text-sm my-1 mx-8">{livrosOrdenados[6]?.ano}</p>
      </div>
       <p className="font-light text-sm text-right mx-[32px]">⭐{livrosOrdenados[6]?.nota}</p>
      </div>
      
      </div> 

      <div onClick={()=>{setCard(true)
                   setlivroAtivo(livrosOrdenados[7]);
      }} 
           className={`${divs} 
                       ${filtro==="todos" || filtro===livrosOrdenados[5].tipo?"":"hidden"}
                        ${passaPesquisa(livrosOrdenados[7])?"":"hidden"}
           `}>
      
      <img className="z-0 w-40  " src={livrosOrdenados[7]?.img}></img>
      <div className="grid  bg-white w-[100%] h-[200px]">
       <h1 className="font-bold mx-4 my-3">{livrosOrdenados[7]?.nome}</h1>
       <p className="font-light text-sm mx-4">{livrosOrdenados[7]?.autor}</p>
      <div className="flex">
        <p className="mx-4 w-[60px] h-[24px] text-center font-medium text-[13px] rounded-xl bg-slate-200 ">{livrosOrdenados[7]?.tipo}</p>
        <p className="font-light text-sm my-1 mx-8">{livrosOrdenados[7]?.ano}</p>
      </div>
       <p className="font-light text-sm text-right mx-[32px]">⭐{livrosOrdenados[7]?.nota}</p>
      </div>
      
      </div> 


    </main>
 
   {livroAtivo &&(
     <div className={`${cardBase} ${
      card===true
      ?"grid"
      :"hidden"
     }` 
     }>
      <div><img data-open={card?"true":"false"} 
      className="w-[90%] h-[460px] my-5 mx-5 rounded-2xl
      transition-all
      duration-500
      delay-500
      data-[open=true]:animate-aniCard
      "
       src={livroAtivo.img}></img>
      </div>
      
      <div data-open={card?"true":"false"}
           className="my-10 mx-5 
           data-[open=true]:animate-aniCard2
           ">


        <p onClick={()=>{setCard(false);
                         setlivroAtivo(null);     

        }}
         className="relative left-64 bottom-27 cursor-pointer text-gray-500 font-bold
         duration-500
         delay-500
         ">X</p>

        <h1 className="font-extrabold text-[30px]
           
        ">{livroAtivo.nome}</h1>
        <p className="font-light text-gray-400 
        ">{livroAtivo.autor}</p>

        <div className="flex my-3"> 
        <p className="bg-slate-500 rounded-xl w-20 text-center text-white " >{livroAtivo.tipo}</p> <p className="mx-4 text-black bg-slate-100 rounded-xl w-10 text-center">{livroAtivo.ano}</p> <p className="">{livroAtivo.pagina}</p> 
        </div>
          <p className="bg-yellow-100 rounded-xl w-10 text-center text-black">⭐{livroAtivo.nota}</p>
         <p className="my-10 text-[15px]">{livroAtivo.bio}</p>
      </div>

     </div>
      )}

    </>   
    );
}