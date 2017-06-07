package br.com.homemade.service.mapper;

import br.com.homemade.domain.*;
import br.com.homemade.service.dto.TipocertificadoconformidadeDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Tipocertificadoconformidade and its DTO TipocertificadoconformidadeDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface TipocertificadoconformidadeMapper extends EntityMapper <TipocertificadoconformidadeDTO, Tipocertificadoconformidade> {
    
    
    /**
     * generating the fromId for all mappers if the databaseType is sql, as the class has relationship to it might need it, instead of
     * creating a new attribute to know if the entity has any relationship from some other entity
     *
     * @param id id of the entity
     * @return the entity instance
     */
     
    default Tipocertificadoconformidade fromId(Long id) {
        if (id == null) {
            return null;
        }
        Tipocertificadoconformidade tipocertificadoconformidade = new Tipocertificadoconformidade();
        tipocertificadoconformidade.setId(id);
        return tipocertificadoconformidade;
    }
}