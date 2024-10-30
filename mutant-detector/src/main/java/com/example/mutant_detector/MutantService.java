package com.example.mutant_detector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Servicio que contiene la lógica de negocio para detectar mutantes y obtener estadísticas.
 */
@Service
public class MutantService {

    @Autowired
    private DnaRepository dnaRepository;

    /**
     * Verifica si una secuencia de ADN es mutante.
     *
     * @param dna la secuencia de ADN a verificar.
     * @return true si es mutante, false si no lo es.
     */
    public boolean isMutant(String[] dna) {
        String sequence = String.join("", dna);
        Optional<Dna> existingDna = dnaRepository.findById(sequence);
        if (existingDna.isPresent()) {
            return existingDna.get().isMutant();
        }

        boolean isMutant = checkMutant(dna);
        dnaRepository.save(new Dna(sequence, isMutant));
        return isMutant;
    }

    /**
     * Obtiene las estadísticas de mutantes y no mutantes.
     *
     * @return un objeto StatsResponse con las estadísticas.
     */
    public StatsResponse getStats() {
        long countMutantDna = dnaRepository.countByIsMutant(true);
        long countHumanDna = dnaRepository.countByIsMutant(false);
        double ratio = countHumanDna > 0 ? (double) countMutantDna / countHumanDna : 0;
        return new StatsResponse(countMutantDna, countHumanDna, ratio);
    }

    /**
     * Verifica si una secuencia de ADN contiene más de una secuencia de cuatro letras iguales (horizontal, vertical y diagonal).
     *
     * @param dna la secuencia de ADN a verificar.
     * @return true si es mutante, false si no lo es.
     */
    private boolean checkMutant(String[] dna) {
        int n = dna.length;
        int count = 0;

        // Check horizontal
        for (String row : dna) {
            count += countSequences(row);
            if (count > 1) return true;
        }

        // Check vertical
        for (int col = 0; col < n; col++) {
            StringBuilder sb = new StringBuilder();
            for (String row : dna) {
                sb.append(row.charAt(col));
            }
            count += countSequences(sb.toString());
            if (count > 1) return true;
        }

        // Check diagonal
        for (int i = 0; i < n; i++) {
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < n - i; j++) {
                sb.append(dna[j].charAt(j + i));
            }
            count += countSequences(sb.toString());
            if (count > 1) return true;

            sb = new StringBuilder();
            for (int j = 0; j < n - i; j++) {
                sb.append(dna[j + i].charAt(j));
            }
            count += countSequences(sb.toString());
            if (count > 1) return true;
        }

        return count > 1;
    }

    /**
     * Cuenta el número de secuencias de cuatro letras iguales en una cadena.
     *
     * @param sequence la cadena a verificar.
     * @return el número de secuencias encontradas.
     */
    private int countSequences(String sequence) {
        int count = 0;
        for (int i = 0; i < sequence.length() - 3; i++) {
            if (sequence.charAt(i) == sequence.charAt(i + 1) &&
                    sequence.charAt(i) == sequence.charAt(i + 2) &&
                    sequence.charAt(i) == sequence.charAt(i + 3)) {
                count++;
                if (count > 1) return count;
            }
        }
        return count;
    }
}