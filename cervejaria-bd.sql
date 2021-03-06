-- SQL Manager Lite for PostgreSQL 6.1.2.53864
-- ---------------------------------------
-- Host      : localhost
-- Database  : cervejaria
-- Version   : PostgreSQL 9.6.17, compiled by Visual C++ build 1800, 64-bit



CREATE SCHEMA sistema AUTHORIZATION nidasbd;
SET check_function_bodies = false;
--
-- Structure for table usuarios (OID = 25095) : 
--
SET search_path = sistema, pg_catalog;
CREATE TABLE sistema.usuarios (
    id serial NOT NULL,
    login varchar(100) NOT NULL,
    senha varchar(100) NOT NULL,
    nome varchar(100) NOT NULL,
    dh_inclusao timestamp(0) without time zone DEFAULT now() NOT NULL,
    dh_desativacao timestamp without time zone
)
WITH (oids = false);
--
-- Data for table sistema.usuarios (OID = 25095) (LIMIT 0,2)
--
INSERT INTO usuarios (id, login, senha, nome, dh_inclusao, dh_desativacao)
VALUES (1, 'daniel.silva.diniz@gmail.com', 'qwe123!@#', 'Daniel Diniz', '2020-07-15 19:23:10', '2020-07-15 19:23:10.081');

INSERT INTO usuarios (id, login, senha, nome, dh_inclusao, dh_desativacao)
VALUES (4, 'admin', 'admin', 'Administrador', '2020-07-16 00:41:08', NULL);

--
-- Definition for index usuarios_pkey (OID = 25100) : 
--
ALTER TABLE ONLY usuarios
    ADD CONSTRAINT usuarios_pkey
    PRIMARY KEY (id);
--
-- Definition for index usuarios_login_key (OID = 25102) : 
--
ALTER TABLE ONLY usuarios
    ADD CONSTRAINT usuarios_login_key
    UNIQUE (login);
--
-- Data for sequence sistema.usuarios_id_seq (OID = 25093)
--
SELECT pg_catalog.setval('usuarios_id_seq', 5, true);
--
-- Comments
--
COMMENT ON SCHEMA public IS 'standard public schema';
