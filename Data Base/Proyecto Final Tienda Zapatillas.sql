use proyecto_final_an_godoyalmaraz;
show databases;
CREATE TABLE Usuario_Empresa(
id int not null auto_increment,
nombre_apellido varchar(200) not null,
DNi int not null,
cargo varchar(20),
domicilio varchar(30) not null,
primary key (id),
estado enum('a,b')
);

CREATE TABLE Cliente_Mayorista(
id int not null auto_increment,
nombre_apellido varchar(200) not null,
DNi int unique not null,
ciudad varchar(20),
Provincia varchar(20),
CP int,
domicilio varchar(30) not null,
estado enum('a,b'),
primary key (id)
);

CREATE TABLE Cliente_Minorista(
id int not null auto_increment,
nombre_apellido varchar(200) not null,
DNi int unique not null,
ciudad varchar(20),
Provincia varchar(20),
CP int,
domicilio varchar(30) not null,
estado enum('a,b'),
primary key (id)
);

CREATE TABLE Proveedor(
id int not null auto_increment,
nombre_apellido varchar(200) not null,
DNi int unique not null,
ciudad varchar(20),
Provincia varchar(20),
CP int,
domicilio varchar(30) not null,
estado enum('a,b'),
primary key (id)
);

CREATE TABLE Empleados(
id int not null auto_increment,
nombre_apellido varchar(200) not null,
DNi int unique not null,
domicilio varchar(30),
estado enum('a,b'),
primary key (id)
);

CREATE TABLE Marca_Calzado(
id int not null auto_increment,
Descripcion varchar(100) not null,
estado enum('a,b'),
primary key (id)
);

CREATE TABLE Tipo_Calzado(
id int not null auto_increment,
Descripcion varchar (100) not null,
estado enum('a,b'),
primary key (id)
);

CREATE TABLE Pedidos(
id int not null auto_increment,
Descripcion varchar (100) not null,
estado enum('a,b'),
primary key (id)
);