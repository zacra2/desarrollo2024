
package org.example;

import lombok.Builder;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

@Builder
public class Main {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("example-unit");

        EntityManager em = emf.createEntityManager();
        System.out.println("en marcha ");

        try {
            em.getTransaction().begin();

            Factura factura1 = Factura.builder()
                    .build();
            factura1.setNumero(12);
            factura1.setFecha("10/08/2020");

            Domicilio domicilio = Domicilio.builder()
                    .nombreCalle("San Martin")
                    .numero(1222)
                    .build();

            Cliente cliente = Cliente.builder()
                    .nombre("Pablo")
                    .apellido("Muñoz")
                    .dni(15245778)
                    .build();

            cliente.setDomicilio(domicilio);
            domicilio.setCliente(cliente);
            factura1.setCliente(cliente);

            Categoria perecederos = Categoria.builder()
                    .denominacion("perecederos")
                    .build();

            Categoria lacteos = Categoria.builder()
                    .denominacion("lacteos")
                    .build();

            Categoria limpieza = Categoria.builder()
                    .denominacion("limpieza")
                    .build();

            Articulo articulo1 = Articulo.builder()
                    .denominacion("yogur ser sabor frutilla")
                    .cantidad(200)
                    .precio(20)
                    .build();

            Articulo articulo2 = Articulo.builder()
                    .denominacion("detergente magistral")
                    .cantidad(300)
                    .precio(80)
                    .build();

            articulo1.getCategorias().add(perecederos);
            articulo1.getCategorias().add(lacteos);
            lacteos.getArticulo().add(articulo1);
            perecederos.getArticulo().add(articulo1);

            articulo2.getCategorias().add(limpieza);
            limpieza.getArticulo().add(articulo2);

            DetalleFactura detalle1 = DetalleFactura.builder().build();

            detalle1.setArticulo(articulo1);
            detalle1.setCantidad(2);
            detalle1.setSubtotal(40);

            articulo1.getDetalle().add(detalle1);
            factura1.getDetalles().add(detalle1);
            detalle1.setFactura(factura1);

            DetalleFactura detalle2 = DetalleFactura.builder().build();

            detalle2.setArticulo(articulo2);
            detalle2.setCantidad(1);
            detalle2.setSubtotal(80);

            articulo2.getDetalle().add(detalle2);
            factura1.getDetalles().add(detalle2);
            detalle2.setFactura(factura1);

            factura1.setTotal(120);
            em.persist(factura1);





            em.flush();
            em.getTransaction().commit();
        } catch (Exception e) {
            em.getTransaction().rollback();
        }

        // Cerrar el EntityManager y el EntityManagerFactory
        em.close();
        emf.close();
    }
}

/*

Manejo del Ciclo de Estados en JPA
El ciclo de estados en JPA (Java Persistence API) define los diferentes estados que puede tener una entidad en relación con el contexto de persistencia (EntityManager). Comprender y manejar correctamente estos estados es crucial para trabajar eficazmente con JPA. Los estados del ciclo de vida de una entidad en JPA son:

New (Nuevo):

Una entidad está en estado "New" cuando ha sido creada pero aún no ha sido persistida en la base de datos.
Managed (Gestionado):

Una entidad está en estado "Managed" cuando está asociada con un contexto de persistencia (EntityManager) y cualquier cambio en la entidad se reflejará automáticamente en la base de datos.
Detached (Desconectado):

Una entidad está en estado "Detached" cuando ya no está asociada con un contexto de persistencia. Los cambios en la entidad no se reflejarán automáticamente en la base de datos.
Removed (Eliminado):

Una entidad está en estado "Removed" cuando ha sido marcada para su eliminación en la base de datos.
*/


