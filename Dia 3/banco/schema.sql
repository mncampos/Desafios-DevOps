CREATE USER anicrescer WITH PASSWORD 'anicrescer';
CREATE DATABASE anicrescer;
GRANT ALL PRIVILEGES ON DATABASE anicrescer TO anicrescer;

\connect anicrescer;

DROP TABLE IF EXISTS permissao CASCADE;
DROP TABLE IF EXISTS usuario CASCADE;
DROP TABLE IF EXISTS comentario CASCADE;
DROP TABLE IF EXISTS postagem CASCADE;
DROP TABLE IF EXISTS amizade CASCADE;


CREATE TABLE usuario (
	id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
	nome VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	senha VARCHAR(128) NOT NULL,
	ativo BOOLEAN NOT NULL,
	imagem_perfil VARCHAR(512) DEFAULT '',
	apelido VARCHAR(50) DEFAULT '',
	data_nascimento DATE NOT NULL,
	anime_favorito VARCHAR(255) DEFAULT '',
	numero_curtidas INTEGER DEFAULT 0		
);
ALTER TABLE usuario ADD CONSTRAINT pk_usuario PRIMARY KEY (id);
ALTER TABLE usuario ADD CONSTRAINT uk_usuario_email UNIQUE (email);
ALTER TABLE usuario ADD CONSTRAINT ck_data_nascimento CHECK (data_nascimento < current_date);


CREATE TABLE permissao (
	id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
	nome VARCHAR(100) NOT NULL,
	usuario_id BIGINT NOT NULL
);
ALTER TABLE permissao ADD CONSTRAINT pk_permissao PRIMARY KEY (id);
ALTER TABLE permissao ADD CONSTRAINT uk_permissao UNIQUE (nome, usuario_id);
ALTER TABLE permissao ADD CONSTRAINT fk_permissao_usuario FOREIGN KEY (usuario_id) REFERENCES usuario;

CREATE TABLE postagem (
	id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
	autor_id BIGINT NOT NULL,
	conteudo VARCHAR(2000) NOT NULL,
	imagem VARCHAR(600),
	curtidas integer NOT NULL DEFAULT 0,
	data_postagem TIMESTAMP NOT NULL,
	visibilidade VARCHAR(30) NOT NULL
);

ALTER TABLE postagem ADD CONSTRAINT pk_postagem PRIMARY KEY (id);
ALTER TABLE postagem ADD CONSTRAINT fk_autor_id FOREIGN KEY (autor_id) REFERENCES usuario;
ALTER TABLE postagem ADD CONSTRAINT ck_visibilidade CHECK (visibilidade IN('PUBLICO', 'PRIVADO'));


CREATE TABLE comentario(
	id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
	autor_id BIGINT NOT NULL,
	conteudo VARCHAR(1000) NOT NULL,
	curtidas integer NOT NULL DEFAULT 0,
	data_comentario TIMESTAMP NOT NULL,
	postagem_id BIGINT NOT NULL
);

ALTER TABLE comentario ADD CONSTRAINT pk_comentario PRIMARY KEY (id);
ALTER TABLE comentario ADD CONSTRAINT fk_postagem_id FOREIGN KEY (postagem_id) REFERENCES postagem;
ALTER TABLE comentario ADD CONSTRAINT fk_autor_id FOREIGN KEY (autor_id) REFERENCES usuario;



CREATE TABLE amizade(
	id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
	destinatario_id BIGINT NOT NULL,
	remetente_id BIGINT NOT NULL,
	situacao_amizade VARCHAR(60) NOT NULL
);

ALTER TABLE amizade ADD CONSTRAINT pk_amizade PRIMARY KEY (id);
ALTER TABLE amizade ADD CONSTRAINT ck_id CHECK (destinatario_id <> remetente_id);
ALTER TABLE amizade ADD CONSTRAINT uk_amizade UNIQUE (destinatario_id, remetente_id);
ALTER TABLE amizade ADD CONSTRAINT fk_destinatario_id FOREIGN KEY (destinatario_id) REFERENCES usuario;
ALTER TABLE amizade ADD CONSTRAINT fk_remetente_id FOREIGN KEY (remetente_id) REFERENCES usuario;
ALTER TABLE amizade  ADD CONSTRAINT ch_situacao_amizade CHECK (situacao_amizade IN('PENDENTE', 'AMIGOS', 'REJEITADO'));



INSERT INTO usuario (nome, email, senha, ativo, imagem_perfil, apelido, data_nascimento, anime_favorito, numero_curtidas)
VALUES ('Elton John Otaku', 'elton.john@gmail.com', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Elton_John_Cannes_2019.jpg/640px-Elton_John_Cannes_2019.jpg',
	     'animeLord996', '1950-04-06', 'Bleach', 0);
INSERT INTO usuario (nome, email, senha, ativo, imagem_perfil, apelido, data_nascimento, anime_favorito, numero_curtidas)
VALUES ('Kevin Lima', 'kevin.lima@cwi.com.br', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true, 'https://criticalhits.com.br/wp-content/uploads/2021/11/itachi-uchiha-910x536-1.jpg',
	     'uchiha_kevin', '1990-04-06', 'Naruto', 0);
INSERT INTO usuario (nome, email, senha, ativo, imagem_perfil, apelido, data_nascimento, anime_favorito, numero_curtidas)
VALUES ('2Pac o Renascido', 'tupac@gmail.com', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true, 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2016/12/2pac.jpg',
	     'OTAKURAPPER24', '1980-04-06', 'Jojo''s Bizarre Adventure', 0);
INSERT INTO usuario (nome, email, senha, ativo, imagem_perfil, apelido, data_nascimento, anime_favorito, numero_curtidas)
VALUES ('Fausto Silva', 'faustao@gmail.com', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true, 'https://i.pinimg.com/564x/f8/b0/e3/f8b0e319d208ec044e296648ef6e3c08.jpg',
	     'oLocoBicho', '1920-04-06', 'Naruto', 0);
INSERT INTO usuario (nome, email, senha, ativo, imagem_perfil, apelido, data_nascimento, anime_favorito, numero_curtidas)
VALUES ('Xuxa Meneghell', 'xuxa@gmail.com', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true, 'https://gcdn.emol.cl/fenomenos-paranormales/files/2014/10/xuxa2.jpg',
	     'inferno666', '1940-04-06', 'Kimetsu no Yaiba', 0);
		 
		 
		 INSERT INTO usuario (nome, email, senha, ativo, imagem_perfil, apelido, data_nascimento, anime_favorito, numero_curtidas)
VALUES ('Uchiha Sasuke', 'uchia.sasuke@gmail.com', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true, 'https://preview.redd.it/sasuke-uchiha-icons-v0-oua3pjkjnrr91.jpg?width=640&crop=smart&auto=webp&s=08f619e9724e4e2f02439532476723ed68911999',
	     'o_vingador204', '1950-04-06', 'Sasuke', 0);
INSERT INTO usuario (nome, email, senha, ativo, imagem_perfil, apelido, data_nascimento, anime_favorito, numero_curtidas)
VALUES ('Luciano Huck', 'luciano.huck@cwi.com.br', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true, 'https://i.pinimg.com/564x/57/9d/b9/579db943f423608b01099f18eff5cf16.jpg',
	     'lulu_huck', '1990-04-06', 'Shingeki no Kyojin', 0);
INSERT INTO usuario (nome, email, senha, ativo, imagem_perfil, apelido, data_nascimento, anime_favorito, numero_curtidas)
VALUES ('Ana Maria Braga', 'anamaria@gmail.com', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true, 'https://uploads.jovemnerd.com.br/wp-content/uploads/2019/10/ana-maria-braga-naruto.png',
	     'fã_da_sakura', '1980-04-06', 'Naruto', 0);
INSERT INTO usuario (nome, email, senha, ativo, imagem_perfil, apelido, data_nascimento, anime_favorito, numero_curtidas)
VALUES ('Supla', 'supla@gmail.com', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true, 'https://br.web.img2.acsta.net/c_310_420/pictures/18/08/01/19/13/5083489.jpg',
	     'supla2002', '1920-04-06', 'Naruto', 0);
INSERT INTO usuario (nome, email, senha, ativo, imagem_perfil, apelido, data_nascimento, anime_favorito, numero_curtidas)
VALUES ('Faker', 'faker@gmail.com', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true, 'https://sm.ign.com/t/ign_br/screenshot/default/34722014736-2d241425f9-k_d66m.h960.jpg',
	     'oMelhor', '1940-04-06', 'Kimetsu no Yaiba', 0);
	

INSERT INTO amizade (destinatario_id, remetente_id, situacao_amizade)
VALUES (1, 2, 'PENDENTE');
INSERT INTO amizade (destinatario_id, remetente_id, situacao_amizade)
VALUES (1, 3, 'PENDENTE');
INSERT INTO amizade (destinatario_id, remetente_id, situacao_amizade)
VALUES (1, 4, 'PENDENTE');
INSERT INTO amizade (destinatario_id, remetente_id, situacao_amizade)
VALUES (1, 5, 'PENDENTE');



INSERT INTO postagem(autor_id, conteudo, curtidas, data_postagem, visibilidade)
VALUES (1, 'Quisque aliquam nulla vel congue accumsan. Sed sed diam non odio scelerisque commodo. Praesent velit enim, ultricies id massa sit amet, interdum scelerisque dolor. In fringilla, lectus at mollis tristique, arcu ligula dictum metus, quis sagittis magna arcu vitae massa. Curabitur velit nisl, sagittis eget pretium nec, viverra sit amet lacus. Duis eu ultricies lacus, hendrerit pellentesque tellus. Vestibulum fringilla, diam ac pulvinar finibus, ex mauris suscipit elit, a lacinia velit arcu nec arcu. Vivamus scelerisque accumsan tortor, id malesuada ligula lobortis sed. Nulla ipsum turpis, mattis et interdum sit amet, consectetur ac lacus. Morbi nisi ligula, ultrices ut est eget, pulvinar dapibus lorem. Aliquam ornare egestas eleifend. ', 0, '2023-02-26T02:58:38.87167', 'PUBLICO');
INSERT INTO postagem(autor_id, conteudo, curtidas, data_postagem, visibilidade)
VALUES (2, 'Praesent tempor, sem vel commodo egestas, nisl lacus suscipit velit, id bibendum enim elit quis tortor. Vestibulum nec massa sit amet justo laoreet rhoncus a sed ex. Ut sed tempor massa. Maecenas id pretium libero. Nullam eu nibh euismod, vestibulum lorem sed, vulputate massa. Duis facilisis iaculis urna, quis sodales orci iaculis vel. In hac habitasse platea dictumst. Donec eros nunc, blandit nec risus commodo, dapibus porta ipsum. ', 0, '2023-01-26T01:55:38.87167', 'PUBLICO');
INSERT INTO postagem(autor_id, conteudo, curtidas, data_postagem, visibilidade)
VALUES (3, 'Sed ut urna tincidunt, aliquet justo non, vehicula erat. Etiam nec magna quis augue consequat vehicula eget a augue. Duis scelerisque orci lorem, eu egestas libero dapibus eu. Nullam elementum magna et finibus ultricies. Donec luctus neque posuere quam scelerisque, quis ornare mauris pharetra. Curabitur quis mattis neque. Sed dignissim viverra nibh, nec posuere velit gravida fringilla. Ut dapibus vel quam ac maximus. ', 0, '2023-02-22T02:22:38.87167', 'PRIVADO');
INSERT INTO postagem(autor_id, conteudo, curtidas, data_postagem, visibilidade, imagem)
VALUES (4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh erat, volutpat id nibh a, lacinia ultricies ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam a ipsum erat. Donec sagittis ipsum vel purus fermentum tincidunt. Pellentesque lobortis commodo lacus, et tristique risus gravida at. Suspendisse eget dui ut urna pharetra malesuada. Sed posuere gravida hendrerit. ', 0, '2023-01-26T06:14:38.87167', 'PUBLICO', 'https://www.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/f7adcedd1d7c53ae18d851003a3cfae4.jpe');
INSERT INTO postagem(autor_id, conteudo, curtidas, data_postagem, visibilidade)
VALUES (5, 'Quisque aliquam nulla vel congue accumsan. Sed sed diam non odio scelerisque commodo. Praesent velit enim, ultricies id massa sit amet, interdum scelerisque dolor. In fringilla, lectus at mollis tristique, arcu ligula dictum metus, quis sagittis magna arcu vitae massa. Curabitur velit nisl, sagittis eget pretium nec, viverra sit amet lacus. Duis eu ultricies lacus, hendrerit pellentesque tellus. Vestibulum fringilla, diam ac pulvinar finibus, ex mauris suscipit elit, a lacinia velit arcu nec arcu. Vivamus scelerisque accumsan tortor, id malesuada ligula lobortis sed. Nulla ipsum turpis, mattis et interdum sit amet, consectetur ac lacus. Morbi nisi ligula, ultrices ut est eget, pulvinar dapibus lorem. Aliquam ornare egestas eleifend. ', 0, '2023-02-26T03:58:38.87167', 'PUBLICO');
INSERT INTO postagem(autor_id, conteudo, curtidas, data_postagem, visibilidade)
VALUES (6, 'Praesent tempor, sem vel commodo egestas, nisl lacus suscipit velit, id bibendum enim elit quis tortor. Vestibulum nec massa sit amet justo laoreet rhoncus a sed ex. Ut sed tempor massa. Maecenas id pretium libero. Nullam eu nibh euismod, vestibulum lorem sed, vulputate massa. Duis facilisis iaculis urna, quis sodales orci iaculis vel. In hac habitasse platea dictumst. Donec eros nunc, blandit nec risus commodo, dapibus porta ipsum. ', 0, '2023-01-26T10:51:38.87167', 'PUBLICO');
INSERT INTO postagem(autor_id, conteudo, curtidas, data_postagem, visibilidade)
VALUES (7, 'Sed ut urna tincidunt, aliquet justo non, vehicula erat. Etiam nec magna quis augue consequat vehicula eget a augue. Duis scelerisque orci lorem, eu egestas libero dapibus eu. Nullam elementum magna et finibus ultricies. Donec luctus neque posuere quam scelerisque, quis ornare mauris pharetra. Curabitur quis mattis neque. Sed dignissim viverra nibh, nec posuere velit gravida fringilla. Ut dapibus vel quam ac maximus. ', 0, '2023-02-22T16:20:38.87167', 'PRIVADO');
INSERT INTO postagem(autor_id, conteudo, curtidas, data_postagem, visibilidade, imagem)
VALUES (8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh erat, volutpat id nibh a, lacinia ultricies ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam a ipsum erat. Donec sagittis ipsum vel purus fermentum tincidunt. Pellentesque lobortis commodo lacus, et tristique risus gravida at. Suspendisse eget dui ut urna pharetra malesuada. Sed posuere gravida hendrerit. ', 0, '2023-01-26T06:12:38.87167', 'PUBLICO', 'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2021/08/legiao_s5wKjSl_LEgi.png.webp');



INSERT INTO comentario(autor_id, postagem_id, conteudo, curtidas, data_comentario)
VALUES (1, 1, 'gostaram gente?', 0, '2023-02-03' );
INSERT INTO comentario(autor_id, postagem_id, conteudo, curtidas, data_comentario)
VALUES (2, 1, 'não', 0, '2023-02-03' );
INSERT INTO comentario(autor_id, postagem_id, conteudo, curtidas, data_comentario)
VALUES (3, 1, 'muito', 0, '2023-02-03' );




select * from amizade;


