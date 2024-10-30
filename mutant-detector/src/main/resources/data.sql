-- Insertar algunas secuencias de ADN mutantes
INSERT INTO Dna (sequence, isMutant) VALUES ('ATGCGA,CAGTGC,TTATGT,AGAAGG,CCCCTA,TCACTG', true);
INSERT INTO Dna (sequence, isMutant) VALUES ('ATGCGA,CAGTGC,TTATTT,AGACGG,GCGTCA,TCACTG', true);

-- Insertar algunas secuencias de ADN no mutantes
INSERT INTO Dna (sequence, isMutant) VALUES ('ATGCGA,CAGTGC,TTATTT,AGACGG,GCGTCA,TCACTG', false);
INSERT INTO Dna (sequence, isMutant) VALUES ('ATGCGA,CAGTGC,TTATTT,AGACGG,GCGTCA,TCACTG', false);