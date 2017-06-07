package br.com.homemade.service.dto;


import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the Obraatividade entity.
 */
public class ObraatividadeDTO implements Serializable {

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

        ObraatividadeDTO obraatividadeDTO = (ObraatividadeDTO) o;
        if(obraatividadeDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), obraatividadeDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ObraatividadeDTO{" +
            "id=" + getId() +
            "}";
    }
}
