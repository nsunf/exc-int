-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: exc_int
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `api_history`
--

DROP TABLE IF EXISTS `api_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_history` (
  `exchange` tinyint(1) DEFAULT NULL,
  `interest` tinyint(1) DEFAULT NULL,
  `international` tinyint(1) DEFAULT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_history`
--

LOCK TABLES `api_history` WRITE;
/*!40000 ALTER TABLE `api_history` DISABLE KEYS */;
INSERT INTO `api_history` VALUES (1,1,NULL,'2022-08-18'),(1,1,1,'2022-08-19');
/*!40000 ALTER TABLE `api_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exchange`
--

DROP TABLE IF EXISTS `exchange`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exchange` (
  `cur_unit` varchar(10) NOT NULL,
  `deal_bas_r` float NOT NULL,
  `cur_nm` varchar(30) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exchange`
--

LOCK TABLES `exchange` WRITE;
/*!40000 ALTER TABLE `exchange` DISABLE KEYS */;
INSERT INTO `exchange` VALUES ('AED',358,'?꾨엻?먮?由ы듃 ?붾Ⅴ??,'2022-08-19'),('HKD',167,'?띿쉘 ?щ윭','2022-08-19'),('IDR(100)',8,'?몃룄?ㅼ떆??猷⑦뵾??,'2022-08-19'),('AUD',910,'?몄＜ ?щ윭','2022-08-19'),('BHD',3493,'諛붾젅???붾굹瑜?,'2022-08-19'),('BND',950,'釉뚮（?섏씠 ?щ윭','2022-08-19'),('DKK',178,'?대쭏?꾪겕 ?щ줈??,'2022-08-19'),('GBP',1571,'?곴뎅 ?뚯슫??,'2022-08-19'),('CAD',1017,'罹먮굹???щ윭','2022-08-19'),('CHF',1376,'?ㅼ쐞???꾨옉','2022-08-19'),('JPY(100)',969,'?쇰낯 ??,'2022-08-19'),('CNH',193,'?꾩븞??,'2022-08-19'),('EUR',1328,'?좊줈','2022-08-19'),('KRW',1,'?쒓뎅 ??,'2022-08-19'),('KWD',4291,'荑좎썾?댄듃 ?붾굹瑜?,'2022-08-19'),('MYR',294,'留먮젅?댁???留곴린??,'2022-08-19'),('NOK',135,'?몃Ⅴ?⑥씠 ?щ줈??,'2022-08-19'),('NZD',822,'?댁쭏?쒕뱶 ?щ윭','2022-08-19'),('SAR',350,'?ъ슦??由ъ뻹','2022-08-19'),('SEK',125,'?ㅼ썾???щ줈??,'2022-08-19'),('SGD',950,'?깃??щⅤ ?щ윭','2022-08-19'),('THB',36,'?쒓뎅 諛뷀듃','2022-08-19'),('USD',1317,'誘멸뎅 ?щ윭','2022-08-19'),('AED',356,'?꾨엻?먮?由ы듃 ?붾Ⅴ??,'2022-08-18'),('AUD',908,'?몄＜ ?щ윭','2022-08-18'),('BHD',3474,'諛붾젅???붾굹瑜?,'2022-08-18'),('BND',948,'釉뚮（?섏씠 ?щ윭','2022-08-18'),('CAD',1014,'罹먮굹???щ윭','2022-08-18'),('CHF',1376,'?ㅼ쐞???꾨옉','2022-08-18'),('CNH',192,'?꾩븞??,'2022-08-18'),('DKK',179,'?대쭏?꾪겕 ?щ줈??,'2022-08-18'),('EUR',1332,'?좊줈','2022-08-18'),('GBP',1578,'?곴뎅 ?뚯슫??,'2022-08-18'),('HKD',167,'?띿쉘 ?щ윭','2022-08-18'),('IDR(100)',8,'?몃룄?ㅼ떆??猷⑦뵾??,'2022-08-18'),('JPY(100)',969,'?쇰낯 ??,'2022-08-18'),('KRW',1,'?쒓뎅 ??,'2022-08-18'),('KWD',4266,'荑좎썾?댄듃 ?붾굹瑜?,'2022-08-18'),('MYR',293,'留먮젅?댁???留곴린??,'2022-08-18'),('NOK',134,'?몃Ⅴ?⑥씠 ?щ줈??,'2022-08-18'),('NZD',822,'?댁쭏?쒕뱶 ?щ윭','2022-08-18'),('SAR',348,'?ъ슦??由ъ뻹','2022-08-18'),('SEK',125,'?ㅼ썾???щ줈??,'2022-08-18'),('SGD',948,'?깃??щⅤ ?щ윭','2022-08-18'),('THB',36,'?쒓뎅 諛뷀듃','2022-08-18'),('USD',1309,'誘멸뎅 ?щ윭','2022-08-18');
/*!40000 ALTER TABLE `exchange` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flag`
--

DROP TABLE IF EXISTS `flag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flag` (
  `cur_unit` varchar(10) NOT NULL,
  `flag` varchar(5) NOT NULL,
  PRIMARY KEY (`cur_unit`),
  UNIQUE KEY `flag` (`flag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flag`
--

LOCK TABLES `flag` WRITE;
/*!40000 ALTER TABLE `flag` DISABLE KEYS */;
INSERT INTO `flag` VALUES ('AED','?눇?눎'),('AUD','?눇?눣'),('BHD','?눉?눑'),('BND','?눉?눛'),('CAD','?눊?눇'),('CHF','?눊?눑'),('CNH','?눊?눛'),('DKK','?눍?눖'),('EUR','?눎?눣'),('GBP','?눐?눉'),('HKD','?눑?눖'),('IDR(100)','?눒?눍'),('JPY(100)','?눓?눝'),('KRW','?눖?눟'),('KWD','?눖?눥'),('MYR','?눚?눧'),('NOK','?눛?눜'),('NZD','?눛?눨'),('SAR','?눡?눇'),('SEK','?눡?눎'),('SGD','?눡?눐'),('THB','?눢?눑'),('USD','?눣?눡');
/*!40000 ALTER TABLE `flag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interest`
--

DROP TABLE IF EXISTS `interest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interest` (
  `idx` tinyint NOT NULL,
  `sfln_intrc_nm` varchar(30) NOT NULL,
  `int_r` float NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interest`
--

LOCK TABLES `interest` WRITE;
/*!40000 ALTER TABLE `interest` DISABLE KEYS */;
INSERT INTO `interest` VALUES (0,'?섏?梨??좏넻?섏씡瑜?1媛쒖썡',2.34,'2022-08-19'),(1,'?섏?梨??좏넻?섏씡瑜?3媛쒖썡',2.61,'2022-08-19'),(2,'?섏?梨??좏넻?섏씡瑜?6媛쒖썡',3.02,'2022-08-19'),(3,'?섏?梨??좏넻?섏씡瑜?9媛쒖썡',3.33,'2022-08-19'),(4,'?섏?梨??좏넻?섏씡瑜?1??,3.34,'2022-08-19'),(5,'?섏?梨??좏넻?섏씡瑜?1??3媛쒖썡',3.39,'2022-08-19'),(6,'?섏?梨??좏넻?섏씡瑜?1??6媛쒖썡',3.44,'2022-08-19'),(7,'?섏?梨??좏넻?섏씡瑜?1??9媛쒖썡',3.48,'2022-08-19'),(8,'?섏?梨??좏넻?섏씡瑜?2??,3.53,'2022-08-19'),(9,'?섏?梨??좏넻?섏씡瑜?2??3媛쒖썡',3.54,'2022-08-19'),(10,'?섏?梨??좏넻?섏씡瑜?2??6媛쒖썡',3.56,'2022-08-19'),(11,'?섏?梨??좏넻?섏씡瑜?2??9媛쒖썡',3.57,'2022-08-19'),(12,'?섏?梨??좏넻?섏씡瑜?3??,3.58,'2022-08-19'),(13,'?섏?梨??좏넻?섏씡瑜?3??3媛쒖썡',3.58,'2022-08-19'),(14,'?섏?梨??좏넻?섏씡瑜?3??6媛쒖썡',3.59,'2022-08-19'),(15,'?섏?梨??좏넻?섏씡瑜?3??9媛쒖썡',3.59,'2022-08-19'),(16,'?섏?梨??좏넻?섏씡瑜?4??,3.59,'2022-08-19'),(17,'?섏?梨??좏넻?섏씡瑜?4??3媛쒖썡',3.6,'2022-08-19'),(18,'?섏?梨??좏넻?섏씡瑜?4??6媛쒖썡',3.6,'2022-08-19'),(19,'?섏?梨??좏넻?섏씡瑜?4??9媛쒖썡',3.61,'2022-08-19'),(20,'?섏?梨??좏넻?섏씡瑜?5??,3.61,'2022-08-19'),(21,'?섏?梨??좏넻?섏씡瑜?5??3媛쒖썡',3.61,'2022-08-19'),(22,'?섏?梨??좏넻?섏씡瑜?5??6媛쒖썡',3.61,'2022-08-19'),(23,'?섏?梨??좏넻?섏씡瑜?5??9媛쒖썡',3.61,'2022-08-19'),(24,'?섏?梨??좏넻?섏씡瑜?6??,3.62,'2022-08-19'),(25,'?섏?梨??좏넻?섏씡瑜?6??3媛쒖썡',3.62,'2022-08-19'),(26,'?섏?梨??좏넻?섏씡瑜?6??6媛쒖썡',3.62,'2022-08-19'),(27,'?섏?梨??좏넻?섏씡瑜?6??9媛쒖썡',3.62,'2022-08-19'),(28,'?섏?梨??좏넻?섏씡瑜?7??,3.62,'2022-08-19'),(29,'?섏?梨??좏넻?섏씡瑜?7??3媛쒖썡',3.62,'2022-08-19'),(30,'?섏?梨??좏넻?섏씡瑜?7??6媛쒖썡',3.61,'2022-08-19'),(31,'?섏?梨??좏넻?섏씡瑜?7??9媛쒖썡',3.61,'2022-08-19'),(32,'?섏?梨??좏넻?섏씡瑜?8??,3.6,'2022-08-19'),(33,'?섏?梨??좏넻?섏씡瑜?8??3媛쒖썡',3.6,'2022-08-19'),(34,'?섏?梨??좏넻?섏씡瑜?8??6媛쒖썡',3.59,'2022-08-19'),(35,'?섏?梨??좏넻?섏씡瑜?8??9媛쒖썡',3.59,'2022-08-19'),(36,'?섏?梨??좏넻?섏씡瑜?9??,3.58,'2022-08-19'),(37,'?섏?梨??좏넻?섏씡瑜?9??3媛쒖썡',3.58,'2022-08-19'),(38,'?섏?梨??좏넻?섏씡瑜?9??6媛쒖썡',3.57,'2022-08-19'),(39,'?섏?梨??좏넻?섏씡瑜?9??9媛쒖썡',3.57,'2022-08-19'),(40,'?섏?梨??좏넻?섏씡瑜?10??,3.56,'2022-08-19'),(0,'?섏?梨??좏넻?섏씡瑜?1媛쒖썡',2.34,'2022-08-18'),(10,'?섏?梨??좏넻?섏씡瑜?2??6媛쒖썡',3.56,'2022-08-18'),(11,'?섏?梨??좏넻?섏씡瑜?2??9媛쒖썡',3.57,'2022-08-18'),(1,'?섏?梨??좏넻?섏씡瑜?3媛쒖썡',2.61,'2022-08-18'),(2,'?섏?梨??좏넻?섏씡瑜?6媛쒖썡',3.02,'2022-08-18'),(3,'?섏?梨??좏넻?섏씡瑜?9媛쒖썡',3.33,'2022-08-18'),(4,'?섏?梨??좏넻?섏씡瑜?1??,3.34,'2022-08-18'),(5,'?섏?梨??좏넻?섏씡瑜?1??3媛쒖썡',3.39,'2022-08-18'),(6,'?섏?梨??좏넻?섏씡瑜?1??6媛쒖썡',3.44,'2022-08-18'),(7,'?섏?梨??좏넻?섏씡瑜?1??9媛쒖썡',3.48,'2022-08-18'),(9,'?섏?梨??좏넻?섏씡瑜?2??3媛쒖썡',3.54,'2022-08-18'),(8,'?섏?梨??좏넻?섏씡瑜?2??,3.53,'2022-08-18'),(12,'?섏?梨??좏넻?섏씡瑜?3??,3.58,'2022-08-18'),(13,'?섏?梨??좏넻?섏씡瑜?3??3媛쒖썡',3.58,'2022-08-18'),(14,'?섏?梨??좏넻?섏씡瑜?3??6媛쒖썡',3.59,'2022-08-18'),(15,'?섏?梨??좏넻?섏씡瑜?3??9媛쒖썡',3.59,'2022-08-18'),(16,'?섏?梨??좏넻?섏씡瑜?4??,3.59,'2022-08-18'),(17,'?섏?梨??좏넻?섏씡瑜?4??3媛쒖썡',3.6,'2022-08-18'),(18,'?섏?梨??좏넻?섏씡瑜?4??6媛쒖썡',3.6,'2022-08-18'),(19,'?섏?梨??좏넻?섏씡瑜?4??9媛쒖썡',3.61,'2022-08-18'),(20,'?섏?梨??좏넻?섏씡瑜?5??,3.61,'2022-08-18'),(21,'?섏?梨??좏넻?섏씡瑜?5??3媛쒖썡',3.61,'2022-08-18'),(22,'?섏?梨??좏넻?섏씡瑜?5??6媛쒖썡',3.61,'2022-08-18'),(23,'?섏?梨??좏넻?섏씡瑜?5??9媛쒖썡',3.61,'2022-08-18'),(24,'?섏?梨??좏넻?섏씡瑜?6??,3.62,'2022-08-18'),(25,'?섏?梨??좏넻?섏씡瑜?6??3媛쒖썡',3.62,'2022-08-18'),(26,'?섏?梨??좏넻?섏씡瑜?6??6媛쒖썡',3.62,'2022-08-18'),(27,'?섏?梨??좏넻?섏씡瑜?6??9媛쒖썡',3.62,'2022-08-18'),(28,'?섏?梨??좏넻?섏씡瑜?7??,3.62,'2022-08-18'),(29,'?섏?梨??좏넻?섏씡瑜?7??3媛쒖썡',3.62,'2022-08-18'),(30,'?섏?梨??좏넻?섏씡瑜?7??6媛쒖썡',3.61,'2022-08-18'),(31,'?섏?梨??좏넻?섏씡瑜?7??9媛쒖썡',3.61,'2022-08-18'),(32,'?섏?梨??좏넻?섏씡瑜?8??,3.6,'2022-08-18'),(33,'?섏?梨??좏넻?섏씡瑜?8??3媛쒖썡',3.6,'2022-08-18'),(34,'?섏?梨??좏넻?섏씡瑜?8??6媛쒖썡',3.59,'2022-08-18'),(35,'?섏?梨??좏넻?섏씡瑜?8??9媛쒖썡',3.59,'2022-08-18'),(36,'?섏?梨??좏넻?섏씡瑜?9??,3.58,'2022-08-18'),(37,'?섏?梨??좏넻?섏씡瑜?9??3媛쒖썡',3.58,'2022-08-18'),(38,'?섏?梨??좏넻?섏씡瑜?9??6媛쒖썡',3.57,'2022-08-18'),(39,'?섏?梨??좏넻?섏씡瑜?9??9媛쒖썡',3.57,'2022-08-18'),(40,'?섏?梨??좏넻?섏씡瑜?10??,3.56,'2022-08-18');
/*!40000 ALTER TABLE `interest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `international`
--

DROP TABLE IF EXISTS `international`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `international` (
  `cur_fund` varchar(10) NOT NULL,
  `sfln_intrc_nm` varchar(20) NOT NULL,
  `int_r` float NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `international`
--

LOCK TABLES `international` WRITE;
/*!40000 ALTER TABLE `international` DISABLE KEYS */;
INSERT INTO `international` VALUES ('USD','5?꾩씠??,4.03,'2022-08-19'),('USD','5?꾩큹怨?.5?꾩씠??,3.96,'2022-08-19'),('EUR','5?꾩큹怨?.5?꾩씠??,1.8,'2022-08-19'),('JPY','5?꾩씠??,0.93,'2022-08-19'),('JPY','5?꾩큹怨?.5?꾩씠??,1.02,'2022-08-19'),('JPY','8.5?꾩큹怨?,1.11,'2022-08-19'),('USD','8.5?꾩큹怨?,3.97,'2022-08-19'),('EUR','5?꾩씠??,1.55,'2022-08-19'),('EUR','8.5?꾩큹怨?,1.99,'2022-08-19');
/*!40000 ALTER TABLE `international` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-24 16:59:03
