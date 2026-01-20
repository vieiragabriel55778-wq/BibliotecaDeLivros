/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.Biblioteca.table;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 *
 * @author gabri
 */
@Entity
@Table(name="Livros")
public class Livros {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)        
Long id;

@Column(name="Nome")
String nome;

@Column(name="Autor")
String autor;

@Column(name="Tipo")
String tipo;

@Column(name="Ano")
int ano;

@Column(name="Nota")
double nota;

@Column(name="Paginas")
int paginas;

@Column(name="img")
String img;

@Column(name="bio")
String bio;

   
public Livros(){}

public Livros(String nome,String autor,String tipo,int ano,double nota,int paginas,String img,String bio){
this.nome=nome;
this.autor=autor;
this.tipo=tipo;
this.ano=ano;
this.nota=nota;
this.paginas=paginas;
this.img=img;
this.bio=bio;

}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public double getNota() {
        return nota;
    }

    public void setNota(double nota) {
        this.nota = nota;
    }

    public int getPaginas() {
        return paginas;
    }

    public void setPaginas(int paginas) {
        this.paginas = paginas;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    } 




}
