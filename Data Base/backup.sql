CREATE DATABASE  IF NOT EXISTS `proyecto_final_an_godoyalmaraz` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `proyecto_final_an_godoyalmaraz`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: proyecto_final_an_godoyalmaraz
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `nombre_apellido` varchar(200) NOT NULL,
  `DNi` int NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `ciudad` varchar(20) DEFAULT NULL,
  `Provincia` varchar(20) DEFAULT NULL,
  `CP` int NOT NULL,
  `domicilio` varchar(30) NOT NULL,
  `estado` enum('alta','baja','a','b') DEFAULT 'a',
  `fecha_creacion` datetime DEFAULT CURRENT_TIMESTAMP,
  `fecha_modificacion` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_cliente`),
  UNIQUE KEY `DNi` (`DNi`),
  UNIQUE KEY `id_cliente_mayorista_UNIQUE` (`id_cliente`),
  UNIQUE KEY `usuario_UNIQUE` (`usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'erikna zabala',35165498,'erikna','erik1234','erikknazabala@gamil.com','villa mercedes','san luis',5730,'aconcagua 2354','a','2023-03-11 01:12:57','2023-03-13 00:38:49'),(2,'fabio pedraza',32258147,'fabio','fabi1234','fabiopedraza@gmail.com','cordoba','cordoba',5000,'pinagasta 1751','a','2023-03-11 01:12:57','2023-03-13 00:38:49'),(3,'fernando almaraz',33012064,'fernando','fern1234','fernandoalmaraz@gmail.com','villa gob galvez','santa fe',2124,'jose hernandez 255','a','2023-03-11 01:12:57','2023-03-13 00:38:49'),(4,'mayorista',56478932,'mayorista','mayorista','mayorista@gmail.com','capital federal','caba',1250,'machado 6541','a','2023-03-11 01:23:48','2023-03-13 00:38:49');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas_calzados`
--

DROP TABLE IF EXISTS `marcas_calzados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marcas_calzados` (
  `id_marca_calzado` int NOT NULL AUTO_INCREMENT,
  `Descripcion` varchar(100) NOT NULL,
  `estado` enum('alta','baja','a','b') DEFAULT 'a',
  PRIMARY KEY (`id_marca_calzado`),
  UNIQUE KEY `id_marca_calzado_UNIQUE` (`id_marca_calzado`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas_calzados`
--

LOCK TABLES `marcas_calzados` WRITE;
/*!40000 ALTER TABLE `marcas_calzados` DISABLE KEYS */;
INSERT INTO `marcas_calzados` VALUES (1,'nike','a'),(2,'adidas','a'),(3,'puma','a'),(4,'under armor','a'),(5,'reebok','a'),(6,'fila','a'),(7,'lady stork','a'),(8,'ringo','a'),(9,'hawainas','a'),(10,'crocs','a');
/*!40000 ALTER TABLE `marcas_calzados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id_Pedido` int NOT NULL AUTO_INCREMENT,
  `id_clientes` int NOT NULL,
  `fecha_entrega` datetime DEFAULT CURRENT_TIMESTAMP,
  `estado` enum('alta','baja','a','b') DEFAULT 'a',
  `cantidad` int NOT NULL,
  `fecha_creacion` datetime DEFAULT CURRENT_TIMESTAMP,
  `fecha_modificacion` datetime DEFAULT CURRENT_TIMESTAMP,
  `id_stock` int DEFAULT NULL,
  UNIQUE KEY `id_Pedido_UNIQUE` (`id_Pedido`),
  KEY `created_by_idx` (`id_stock`),
  KEY `movimientos_ibfk_2_idx` (`id_clientes`),
  CONSTRAINT `movimientos_ibfk_1` FOREIGN KEY (`id_stock`) REFERENCES `stock` (`id_stock`),
  CONSTRAINT `movimientos_ibfk_2` FOREIGN KEY (`id_clientes`) REFERENCES `clientes` (`id_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedores` (
  `id_proveedor` int NOT NULL AUTO_INCREMENT,
  `nombre_apellido` varchar(200) NOT NULL,
  `DNi` int NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `ciudad` varchar(20) DEFAULT NULL,
  `Provincia` varchar(20) DEFAULT NULL,
  `CP` int DEFAULT NULL,
  `domicilio` varchar(30) NOT NULL,
  `estado` enum('alta','baja','a','b') DEFAULT 'a',
  `fecha_creacion` datetime DEFAULT CURRENT_TIMESTAMP,
  `fecha_modificacion` datetime DEFAULT CURRENT_TIMESTAMP,
  `id_marca_calzado` int NOT NULL,
  `id_tipo calzado` int NOT NULL,
  PRIMARY KEY (`id_proveedor`),
  UNIQUE KEY `DNi` (`DNi`),
  UNIQUE KEY `id_proveedor_UNIQUE` (`id_proveedor`),
  UNIQUE KEY `usuario_UNIQUE` (`usuario`),
  KEY `movimientos_ibfk_1_idx` (`id_proveedor`,`id_marca_calzado`),
  KEY `movimientos_ibfk_2_idx` (`id_tipo calzado`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores`
--

LOCK TABLES `proveedores` WRITE;
/*!40000 ALTER TABLE `proveedores` DISABLE KEYS */;
INSERT INTO `proveedores` VALUES (1,'leandro olivera',35123456,'leandro','lean1234','leandroolivera@gmail.com','tandil','buenos aires',7000,'pasaje casteks 256','a','2023-03-11 01:20:09','2023-03-13 00:42:10',0,0),(2,'soledad pedraza',29589647,'soledad','sole1234','soledadpedraza@gmail.com','cordoba','cordoba',5000,'caseros 356','a','2023-03-11 01:20:09','2023-03-13 00:42:10',0,0),(3,'david espinoza',26123456,'david','davi1234','davidespinoza@gmail.com','paso de los libres','corrientes',3230,'9 de julio 654','a','2023-03-11 01:20:09','2023-03-13 00:42:10',0,0),(4,'proveedor',32145698,'proveedor','proveedor','proveedor@gmail.com','posadas','misiones',3300,'san martin 569','a','2023-03-11 01:20:09','2023-03-13 00:42:10',0,0);
/*!40000 ALTER TABLE `proveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `id_stock` int NOT NULL AUTO_INCREMENT,
  `precio` double NOT NULL,
  `cantidad` int NOT NULL,
  `fecha_creacion` datetime DEFAULT CURRENT_TIMESTAMP,
  `fecha_modificacion` datetime DEFAULT CURRENT_TIMESTAMP,
  `estado` enum('a','b') NOT NULL,
  `id_proveedor` int NOT NULL,
  `id_tipo_calzado` int NOT NULL,
  `id_marca_calzado` int NOT NULL,
  PRIMARY KEY (`id_stock`),
  UNIQUE KEY `id_stock_UNIQUE` (`id_stock`),
  KEY `movimientos_ibfk_1_idx` (`id_proveedor`),
  KEY `movimientos_ibfk_2_idx` (`id_marca_calzado`),
  KEY `movimientos_ibfk_3_idx` (`id_tipo_calzado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos_calzados`
--

DROP TABLE IF EXISTS `tipos_calzados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos_calzados` (
  `id_tipo_calzado` int NOT NULL AUTO_INCREMENT,
  `Descripcion` varchar(100) NOT NULL,
  `estado` enum('alta','baja','a','b') DEFAULT 'a',
  PRIMARY KEY (`id_tipo_calzado`),
  UNIQUE KEY `id_tipo_calzado_UNIQUE` (`id_tipo_calzado`),
  UNIQUE KEY `Descripcion_UNIQUE` (`Descripcion`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos_calzados`
--

LOCK TABLES `tipos_calzados` WRITE;
/*!40000 ALTER TABLE `tipos_calzados` DISABLE KEYS */;
INSERT INTO `tipos_calzados` VALUES (1,'deportiva','a'),(2,'botita','a'),(3,'botin 11','a'),(4,'botin 5','a'),(5,'crocs','a'),(6,'ojota','a'),(7,'zapato hombre','a'),(8,'sandalia','a'),(9,'zapato mujer','a');
/*!40000 ALTER TABLE `tipos_calzados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_empresa`
--

DROP TABLE IF EXISTS `usuarios_empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios_empresa` (
  `id_usuario_empresa` int NOT NULL AUTO_INCREMENT,
  `nombre_apellido` varchar(200) NOT NULL,
  `DNi` int NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cargo` varchar(20) DEFAULT NULL,
  `domicilio` varchar(30) NOT NULL,
  `estado` enum('alta','baja','a','b') DEFAULT 'a',
  `fecha_creacion` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario_empresa`),
  UNIQUE KEY `usuario_UNIQUE` (`usuario`),
  UNIQUE KEY `DNi_UNIQUE` (`DNi`),
  UNIQUE KEY `cargo_UNIQUE` (`cargo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_empresa`
--

LOCK TABLES `usuarios_empresa` WRITE;
/*!40000 ALTER TABLE `usuarios_empresa` DISABLE KEYS */;
INSERT INTO `usuarios_empresa` VALUES (1,'Alex Cremento',32654718,'alex','alex1234','alexcremento@gmail.com','Limpieza','20 de junio 1524','a','2023-03-11 11:27:25'),(2,'Elton Tito',12457896,'elton','elto1234','eltontito@gmail.com','Recepcionista','belgrano 2021','a','2023-03-11 11:27:25'),(3,'Lola Mento',15246879,'lola','lola1234','lolamento@gmail.com','Contadora','av libertad 1478','a','2023-03-11 11:27:25'),(4,'Alba Sura',31478523,'alba','alba1234','albasura@gmail.com','Gerente Gral.','san juan 674','a','2023-03-11 11:27:25'),(5,'admin ',17896542,'admin','admin','admin@gmail.com','jefaso','la placita','a','2023-03-11 11:27:25');
/*!40000 ALTER TABLE `usuarios_empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'proyecto_final_an_godoyalmaraz'
--

--
-- Dumping routines for database 'proyecto_final_an_godoyalmaraz'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-14  2:59:41
