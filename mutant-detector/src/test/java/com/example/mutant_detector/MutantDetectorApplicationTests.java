package com.example.mutant_detector;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * Pruebas unitarias para la aplicación de detección de mutantes.
 */
@SpringBootTest
class MutantDetectorApplicationTests {

	@Autowired
	private MutantService mutantService;

	@Test
	void contextLoads() {
	}

	/**
	 * Prueba la detección de una secuencia de ADN mutante.
	 */
	@Test
	void testIsMutant() {
		String[] dna = {"ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"};
		DnaRequest dnaRequest = new DnaRequest();
		dnaRequest.setDna(dna);
		assertTrue(mutantService.isMutant(dnaRequest.getDna()));
	}

	/**
	 * Prueba la detección de una secuencia de ADN no mutante.
	 */
	@Test
	void testIsNotMutant() {
		String[] dna = {"ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCTTA", "TCACTG"};
		DnaRequest dnaRequest = new DnaRequest();
		dnaRequest.setDna(dna);
		assertFalse(mutantService.isMutant(dnaRequest.getDna()));
	}
}