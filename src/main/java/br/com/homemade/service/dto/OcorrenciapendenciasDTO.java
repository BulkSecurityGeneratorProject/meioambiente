package br.com.homemade.service.dto;


import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A DTO for the Ocorrenciapendencias entity.
 */
public class OcorrenciapendenciasDTO implements Serializable {

    private Long id;

    private String enquadramento;

    private Long ocorrenciaId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEnquadramento() {
        return enquadramento;
    }

    public void setEnquadramento(String enquadramento) {
        this.enquadramento = enquadramento;
    }

    public Long getOcorrenciaId() {
        return ocorrenciaId;
    }

    public void setOcorrenciaId(Long ocorrenciaId) {
        this.ocorrenciaId = ocorrenciaId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        OcorrenciapendenciasDTO ocorrenciapendenciasDTO = (OcorrenciapendenciasDTO) o;
        if(ocorrenciapendenciasDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), ocorrenciapendenciasDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "OcorrenciapendenciasDTO{" +
            "id=" + getId() +
            ", enquadramento='" + getEnquadramento() + "'" +
            "}";
    }
}
