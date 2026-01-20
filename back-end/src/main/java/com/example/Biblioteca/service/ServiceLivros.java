/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.Biblioteca.service;

import com.example.Biblioteca.livrosDTO.livroDTO;
import com.example.Biblioteca.repository.LivrosRepository;
import com.example.Biblioteca.table.Livros;
import java.util.List;
import javax.management.RuntimeErrorException;
import org.springframework.stereotype.Service;

/**
 *
 * @author gabri
 */
@Service
public class ServiceLivros {

private final LivrosRepository livrosRepository;
    
public ServiceLivros(LivrosRepository livrosRepository){
this.livrosRepository=livrosRepository;
}
    
public List<Livros>Pegar(){

return livrosRepository.findAll();
}

public Livros salvarLivros(Livros livros){

    
return livrosRepository.save(livros);
}


public livroDTO livroExist(String nome){

boolean existe=livrosRepository.existsByNome(nome);

livroDTO dto=new livroDTO();

dto.setExiste(existe);

if(existe){
Livros livro=livrosRepository.findByNome(nome)
        .orElseThrow(()->new RuntimeException("Livro nao encontrado"));
                
dto.setMenssagem("Livro existe");
}else{
dto.setMenssagem("Livro nao encontrado");
}
return dto;
};
    
    }
