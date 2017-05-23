package br.com.homemade.service.mapper;

import br.com.homemade.domain.*;
import br.com.homemade.service.dto.FotoDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Foto and its DTO FotoDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface FotoMapper extends EntityMapper <FotoDTO, Foto> {
    
    
    /**
     * generating the fromId for all mappers if the databaseType is sql, as the class has relationship to it might need it, instead of
     * creating a new attribute to know if the entity has any relationship from some other entity
     *
     * @param id id of the entity
     * @return the entity instance
     */
     
    default Foto fromId(Long id) {
        if (id == null) {
            return null;
        }
        Foto foto = new Foto();
        foto.setId(id);
        return foto;
    }
}
