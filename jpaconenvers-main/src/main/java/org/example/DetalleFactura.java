package org.example;
import lombok.*;
import org.hibernate.envers.Audited;

import javax.persistence.*;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Setter
@Getter
@Builder
@Audited
@Entity
public class DetalleFactura implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private int cantidad;
    private int subtotal;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "fk_articulo")
    private Articulo articulo;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "fk_factura")
    private Factura factura;
}
