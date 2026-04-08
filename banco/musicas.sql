DROP DATABASE IF EXISTS musicas_db;
CREATE DATABASE musicas_db;
USE musicas_db;

-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: musicas_db
-- ------------------------------------------------------
-- Server version	8.0.45

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
-- Table structure for table `musicas`
--

DROP TABLE IF EXISTS `musicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `musicas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `musica` varchar(100) DEFAULT NULL,
  `artista` varchar(100) DEFAULT NULL,
  `album` varchar(100) DEFAULT NULL,
  `ano` int DEFAULT NULL,
  `genero` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `musicas`
--

LOCK TABLES `musicas` WRITE;
/*!40000 ALTER TABLE `musicas` DISABLE KEYS */;
INSERT INTO `musicas` VALUES (1,'Hyperballad','Björk','Post',1995,'Electronic'),(2,'Army of Me','Björk','Post',1995,'Industrial'),(3,'Joga','Björk','Homogenic',1997,'Electronic'),(4,'Pagan Poetry','Björk','Vespertine',2001,'Experimental'),(5,'Venus as a Boy','Björk','Debut',1993,'Alternative'),(6,'Black No. 1','Type O Negative','Bloody Kisses',1993,'Gothic Metal'),(7,'Across the Rainbow Bridge','Ayreon','Into the Electric Castle',1998,'Progressive Metal'),(8,'Love You to Death','Type O Negative','October Rust',1996,'Gothic Metal'),(9,'I Don’t Wanna Be Me','Type O Negative','Life Is Killing Me',2003,'Gothic Metal'),(10,'Chop Suey!','System of a Down','Toxicity',2001,'Alternative Metal'),(11,'Toxicity','System of a Down','Toxicity',2001,'Alternative Metal'),(12,'Rosa de Hiroshima','Ney Matogrosso','Secos & Molhados',1973,'MPB'),(13,'Cosmic Fusion','Ayreon','Into the Electric Castle',1998,'Progressive Metal'),(14,'Sangue Latino','Ney Matogrosso','Secos & Molhados',1973,'MPB'),(15,'Lança Perfume','Rita Lee','Rita Lee',1980,'Pop Rock'),(16,'The Decision Tree (We Are Alive)','Ayreon','Into the Electric Castle',1998,'Progressive Metal'),(17,'Mania de Você','Rita Lee','Rita Lee',1979,'Pop Rock'),(18,'Time Beyond Time','Ayreon','Into the Electric Castle',1998,'Progressive Metal'),(19,'Aerials','System of a Down','Toxicity',2001,'Alternative Metal'),(20,'B.Y.O.B.','System of a Down','Mezmerize',2005,'Alternative Metal'),(21,'Lonely Day','System of a Down','Hypnotize',2005,'Alternative Metal'),(22,'Homem com H','Ney Matogrosso','Seu Tipo',1979,'MPB'),(23,'Bandido Corazon','Ney Matogrosso','Bandido',1976,'MPB'),(24,'Tunnel of Light','Ayreon','Into the Electric Castle',1998,'Progressive Metal'),(25,'Poema','Ney Matogrosso','Pescador de Pérolas',1987,'MPB'),(26,'Ovelha Negra','Rita Lee','Fruto Proibido',1975,'Rock'),(27,'Agora Só Falta Você','Rita Lee','Fruto Proibido',1975,'Rock'),(28,'Doce Vampiro','Rita Lee','Babilônia',1978,'Rock'),(29,'Human Behaviour','Björk','Debut',1993,'Alternative'),(30,'Hidden Place','Björk','Vespertine',2001,'Electronic');
/*!40000 ALTER TABLE `musicas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-07 14:29:31
