package com.example.inicial1.controllers;

import com.example.inicial1.entities.Autor;
import com.example.inicial1.services.AutoServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/autores")

public class AutorController extends BaseControllerImpl<Autor, AutoServiceImpl> {
}
