use proyecto_final_an_godoyalmaraz;
show databases;
CREATE TABLE Usuario_Empresa(
id int,
nombre_apellido varchar(50),
DNi int,
cargo varchar(20),
domicilio varchar(30),
primary key (id)
);

alter table Usuario_Empresa modify column id int auto_increment;

CREATE TABLE Cliente_Mayorista(
id int not null auto_increment,
nombre_apellido varchar(50),
DNi int,
ciudad varchar(20),
Provincia varchar(20),
CP int,
domicilio varchar(30),
estado varchar(1),
primary key (id)
);

CREATE TABLE Cliente_Minorista(
id int not null auto_increment,
nombre_apellido varchar(50),
DNi int,
ciudad varchar(20),
Provincia varchar(20),
CP int,
domicilio varchar(30),
estado varchar(1),
primary key (id)
);

CREATE TABLE Proveedor(
id int not null auto_increment,
nombre_apellido varchar(50),
DNi int,
ciudad varchar(20),
Provincia varchar(20),
CP int,
domicilio varchar(30),
estado varchar(1),
primary key (id)
);

CREATE TABLE Empleados(
id int not null auto_increment,
nombre_apellido varchar(50),
DNi int,
domicilio varchar(30),
estado varchar(1),
primary key (id)
);

CREATE TABLE Marca(
id int not null auto_increment,
marca varchar(15),
estado varchar(1),
primary key (id)
);