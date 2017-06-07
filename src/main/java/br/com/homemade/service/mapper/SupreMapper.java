package br.com.homemade.service.mapper;

import br.com.homemade.domain.*;
import br.com.homemade.service.dto.SupreDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Supre and its DTO SupreDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface SupreMapper extends EntityMapper <SupreDTO, Supre> {
    
    
    /**
     * generating the fromId for all mappers if the databaseType is sql, as the class has relationship to it might need it, instead of
     * creating a new attribute to know if the entity has any relationship from some other entity
     *
     * @param id id of the entity
     * @return the entity instance
     */
     
    default Supre fromId(Long id) {
        if (id == null) {
            return null;
        }
        Supre supre = new Supre();
        supre.setId(id);
        return supre;
    }
}
