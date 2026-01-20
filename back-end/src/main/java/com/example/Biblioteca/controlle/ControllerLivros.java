/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.Biblioteca.controlle;

import com.example.Biblioteca.service.ServiceLivros;
import com.example.Biblioteca.table.Livros;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author gabri
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/home")
public class ControllerLivros {
    
private final ServiceLivros serviceLivros;

    
public ControllerLivros(ServiceLivros serviceLivros) {
this.serviceLivros = serviceLivros;
}

@GetMapping("/livros") 
List<Livros>PegarLivros(){


return serviceLivros.Pegar();
}

@GetMapping("/pesquisa")


@PostMapping("/salvar")
public Livros salvar(@RequestBody Livros livros){

return 	serviceLivros.salvarLivros(livros);
}

}
