const urlLivros="http://localhost:8080/home/livros"

export async function PegarLivros() {
    const resposta=await fetch(urlLivros,{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    }    
     }
)



return resposta.json();

}