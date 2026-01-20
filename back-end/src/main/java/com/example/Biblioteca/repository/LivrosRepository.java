/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.Biblioteca.repository;

import com.example.Biblioteca.table.Livros;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author gabri
 */
public interface LivrosRepository extends JpaRepository<Livros, Long>{
//dois metodos derivados
Optional<Livros>findByNome(String nome);

boolean existsByNome(String nome);
    
    
}
