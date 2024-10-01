package com.example.inicial1.entities;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.envers.Audited;

import java.util.List;

@Entity
@Table(name = "libro")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Builder
@Audited

public class Libro extends Base {

    @Column(name = "titulo")
    private String titulo;
    @Column(name = "fecha")
    private int fecha;
    @Column(name = "genero")
    private String genero;
    @Column(name = "paguinas")
    private int paguinas;

    @ManyToMany(cascade = CascadeType.REFRESH)
    private List<Autor> autores;

}
