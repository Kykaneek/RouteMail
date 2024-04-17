-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: routemail
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adresses`
--

DROP TABLE IF EXISTS `adresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adresses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `VillageId` int NOT NULL,
  `HouseNumber` varchar(100) DEFAULT NULL,
  `AdressCords` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adresses`
--

LOCK TABLES `adresses` WRITE;
/*!40000 ALTER TABLE `adresses` DISABLE KEYS */;
INSERT INTO `adresses` VALUES (1,1,'1','{\"tekst\": \"tekst\"}');
/*!40000 ALTER TABLE `adresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderitem`
--

DROP TABLE IF EXISTS `orderitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderitem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `OrderId` int NOT NULL,
  `PositionOnRoute` int NOT NULL,
  `AdressesId` int DEFAULT NULL,
  `RouteToPoint` json DEFAULT NULL,
  `IsRealizated` tinyint(1) DEFAULT NULL,
  `TypeOfDevilery` enum('Advice','Return to the sender','Confirmation of receipt') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_orderitem_orders` (`OrderId`),
  KEY `FK_OrderItem_Address` (`AdressesId`),
  CONSTRAINT `FK_OrderItem_Address` FOREIGN KEY (`AdressesId`) REFERENCES `adresses` (`id`),
  CONSTRAINT `FK_orderitem_orders` FOREIGN KEY (`OrderId`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderitem`
--

LOCK TABLES `orderitem` WRITE;
/*!40000 ALTER TABLE `orderitem` DISABLE KEYS */;
INSERT INTO `orderitem` VALUES (1,1,1,1,'{\"cos\": \"cos\"}',1,'Advice');
/*!40000 ALTER TABLE `orderitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `NumberOfOrder` varchar(255) DEFAULT NULL,
  `MainVillageId` int DEFAULT NULL,
  `isRealizing` tinyint(1) DEFAULT NULL,
  `UserId` int DEFAULT NULL,
  `DateCreated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_orders_user` (`UserId`),
  KEY `FK_Orders_Village` (`MainVillageId`),
  CONSTRAINT `FK_orders_user` FOREIGN KEY (`UserId`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_Orders_Village` FOREIGN KEY (`MainVillageId`) REFERENCES `village` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'numerzmowienia',1,0,1,'2024-04-16 16:16:16');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `SurName` varchar(100) DEFAULT NULL,
  `CourierNumber` varchar(100) DEFAULT NULL,
  `VechicleId` int DEFAULT NULL,
  `ActualOrderId` int DEFAULT NULL,
  `ProfilePhoto` blob,
  `Role` enum('Admin','User') DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_user_vechicles` (`VechicleId`),
  KEY `FK_User_Order` (`ActualOrderId`),
  CONSTRAINT `FK_User_Order` FOREIGN KEY (`ActualOrderId`) REFERENCES `orders` (`id`),
  CONSTRAINT `FK_user_vechicles` FOREIGN KEY (`VechicleId`) REFERENCES `vechicle` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'imie','nazwisko','Numer_Kuriera',NULL,NULL,NULL,'Admin','user@mail.com',NULL),(2,'Krzysztof','Krzysztofowski','Jakis_nymer',NULL,NULL,NULL,'Admin','mail@mail.com',NULL),(3,'Jan','Stachura','112233',NULL,NULL,NULL,'User','Jasiu@Jasiu.pl',NULL),(4,'Marcin','Kociołek','213123',NULL,NULL,NULL,'Admin','marcin@mail.pl',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vechicle`
--

DROP TABLE IF EXISTS `vechicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vechicle` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `Model` varchar(100) DEFAULT NULL,
  `InUse` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vechicle`
--

LOCK TABLES `vechicle` WRITE;
/*!40000 ALTER TABLE `vechicle` DISABLE KEYS */;
INSERT INTO `vechicle` VALUES (1,'Opel','Astra',0);
/*!40000 ALTER TABLE `vechicle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `village`
--

DROP TABLE IF EXISTS `village`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `village` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Village_Name` varchar(255) DEFAULT NULL,
  `PostCode` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `village`
--

LOCK TABLES `village` WRITE;
/*!40000 ALTER TABLE `village` DISABLE KEYS */;
INSERT INTO `village` VALUES (1,'Nowy Sącz','33-333');
/*!40000 ALTER TABLE `village` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-16 20:57:35
