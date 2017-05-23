package br.com.homemade.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Ocorrenciaapresentacao.
 */
@Entity
@Table(name = "ocorrenciaapresentacao")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Ocorrenciaapresentacao implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Ocorrenciaapresentacao ocorrenciaapresentacao = (Ocorrenciaapresentacao) o;
        if (ocorrenciaapresentacao.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), ocorrenciaapresentacao.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Ocorrenciaapresentacao{" +
            "id=" + getId() +
            "}";
    }
}
