package com.example.inicial1.services;


import com.example.inicial1.entities.Autor;
import com.example.inicial1.repositories.AutorRepository;
import com.example.inicial1.repositories.BaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AutoServiceImpl extends BaseServiceImpl<Autor, Long> implements AutorService {

    @Autowired
    private AutorRepository autorRepository;

    public AutoServiceImpl(BaseRepository<Autor, Long> baseRepository) {
        super(baseRepository);
    }
}
