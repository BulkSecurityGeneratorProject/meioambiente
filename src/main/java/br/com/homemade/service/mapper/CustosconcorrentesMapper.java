package br.com.homemade.service.mapper;

import br.com.homemade.domain.*;
import br.com.homemade.service.dto.CustosconcorrentesDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Custosconcorrentes and its DTO CustosconcorrentesDTO.
 */
@Mapper(componentModel = "spring", uses = {PlanocontasMapper.class, FonteMapper.class, CategoriainversaoMapper.class, })
public interface CustosconcorrentesMapper extends EntityMapper <CustosconcorrentesDTO, Custosconcorrentes> {
    @Mapping(source = "contacontabilC1.id", target = "contacontabilC1Id")
    @Mapping(source = "contacontabilC2.id", target = "contacontabilC2Id")
    @Mapping(source = "contacontabilD1.id", target = "contacontabilD1Id")
    @Mapping(source = "contacontabilD2.id", target = "contacontabilD2Id")
    @Mapping(source = "divcontacontabilC1.id", target = "divcontacontabilC1Id")
    @Mapping(source = "divcontacontabilD1.id", target = "divcontacontabilD1Id")
    @Mapping(source = "juscontacontabilC1.id", target = "juscontacontabilC1Id")
    @Mapping(source = "juscontacontabilD1.id", target = "juscontacontabilD1Id")
    @Mapping(source = "fonte.id", target = "fonteId")
    @Mapping(source = "idcategoriainversao.id", target = "idcategoriainversaoId")
    CustosconcorrentesDTO toDto(Custosconcorrentes custosconcorrentes); 
    @Mapping(source = "contacontabilC1Id", target = "contacontabilC1")
    @Mapping(source = "contacontabilC2Id", target = "contacontabilC2")
    @Mapping(source = "contacontabilD1Id", target = "contacontabilD1")
    @Mapping(source = "contacontabilD2Id", target = "contacontabilD2")
    @Mapping(source = "divcontacontabilC1Id", target = "divcontacontabilC1")
    @Mapping(source = "divcontacontabilD1Id", target = "divcontacontabilD1")
    @Mapping(source = "juscontacontabilC1Id", target = "juscontacontabilC1")
    @Mapping(source = "juscontacontabilD1Id", target = "juscontacontabilD1")
    @Mapping(source = "fonteId", target = "fonte")
    @Mapping(source = "idcategoriainversaoId", target = "idcategoriainversao")
    Custosconcorrentes toEntity(CustosconcorrentesDTO custosconcorrentesDTO); 
    /**
     * generating the fromId for all mappers if the databaseType is sql, as the class has relationship to it might need it, instead of
     * creating a new attribute to know if the entity has any relationship from some other entity
     *
     * @param id id of the entity
     * @return the entity instance
     */
     
    default Custosconcorrentes fromId(Long id) {
        if (id == null) {
            return null;
        }
        Custosconcorrentes custosconcorrentes = new Custosconcorrentes();
        custosconcorrentes.setId(id);
        return custosconcorrentes;
    }
}
