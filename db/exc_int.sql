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
INSERT INTO `api_history` VALUES (1,NULL,NULL,'2022-10-20'),(1,NULL,1,'2022-10-21'),(NULL,1,NULL,'2022-10-24');
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
INSERT INTO `exchange` VALUES ('AED',389,'?꾨엻?먮?由ы듃 ?붾Ⅴ??,'2022-10-21'),('AUD',898,'?몄＜ ?щ윭','2022-10-21'),('BHD',3797,'諛붾젅???붾굹瑜?,'2022-10-21'),('BND',1004,'釉뚮（?섏씠 ?щ윭','2022-10-21'),('CAD',1039,'罹먮굹???щ윭','2022-10-21'),('CHF',1425,'?ㅼ쐞???꾨옉','2022-10-21'),('CNH',197,'?꾩븞??,'2022-10-21'),('DKK',188,'?대쭏?꾪겕 ?щ줈??,'2022-10-21'),('EUR',1400,'?좊줈','2022-10-21'),('GBP',1607,'?곴뎅 ?뚯슫??,'2022-10-21'),('HKD',182,'?띿쉘 ?щ윭','2022-10-21'),('IDR(100)',9,'?몃룄?ㅼ떆??猷⑦뵾??,'2022-10-21'),('JPY(100)',953,'?쇰낯 ??,'2022-10-21'),('KRW',1,'?쒓뎅 ??,'2022-10-21'),('KWD',4607,'荑좎썾?댄듃 ?붾굹瑜?,'2022-10-21'),('MYR',302,'留먮젅?댁???留곴린??,'2022-10-21'),('NOK',134,'?몃Ⅴ?⑥씠 ?щ줈??,'2022-10-21'),('NZD',811,'?댁쭏?쒕뱶 ?щ윭','2022-10-21'),('SAR',380,'?ъ슦??由ъ뻹','2022-10-21'),('SEK',126,'?ㅼ썾???щ줈??,'2022-10-21'),('SGD',1004,'?깃??щⅤ ?щ윭','2022-10-21'),('THB',37,'?쒓뎅 諛뷀듃','2022-10-21'),('USD',1431,'誘멸뎅 ?щ윭','2022-10-21'),('AED',386,'?꾨엻?먮?由ы듃 ?붾Ⅴ??,'2022-10-20'),('AUD',889,'?몄＜ ?щ윭','2022-10-20'),('BHD',3767,'諛붾젅???붾굹瑜?,'2022-10-20'),('BND',996,'釉뚮（?섏씠 ?щ윭','2022-10-20'),('CAD',1031,'罹먮굹???щ윭','2022-10-20'),('CHF',1413,'?ㅼ쐞???꾨옉','2022-10-20'),('CNH',196,'?꾩븞??,'2022-10-20'),('DKK',186,'?대쭏?꾪겕 ?щ줈??,'2022-10-20'),('EUR',1387,'?좊줈','2022-10-20'),('GBP',1591,'?곴뎅 ?뚯슫??,'2022-10-20'),('HKD',180,'?띿쉘 ?щ윭','2022-10-20'),('IDR(100)',9,'?몃룄?ㅼ떆??猷⑦뵾??,'2022-10-20'),('JPY(100)',948,'?쇰낯 ??,'2022-10-20'),('KRW',1,'?쒓뎅 ??,'2022-10-20'),('KWD',4579,'荑좎썾?댄듃 ?붾굹瑜?,'2022-10-20'),('MYR',300,'留먮젅?댁???留곴린??,'2022-10-20'),('NOK',133,'?몃Ⅴ?⑥씠 ?щ줈??,'2022-10-20'),('NZD',804,'?댁쭏?쒕뱶 ?щ윭','2022-10-20'),('SAR',377,'?ъ슦??由ъ뻹','2022-10-20'),('SEK',126,'?ㅼ썾???щ줈??,'2022-10-20'),('SGD',996,'?깃??щⅤ ?щ윭','2022-10-20'),('THB',37,'?쒓뎅 諛뷀듃','2022-10-20'),('USD',1420,'誘멸뎅 ?щ윭','2022-10-20');
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
INSERT INTO `interest` VALUES (0,'?섏?梨??좏넻?섏씡瑜?1媛쒖썡',3.17,'2022-10-24'),(1,'?섏?梨??좏넻?섏씡瑜?3媛쒖썡',3.5,'2022-10-24'),(2,'?섏?梨??좏넻?섏씡瑜?6媛쒖썡',4,'2022-10-24'),(3,'?섏?梨??좏넻?섏씡瑜?9媛쒖썡',4.34,'2022-10-24'),(4,'?섏?梨??좏넻?섏씡瑜?1??,4.51,'2022-10-24'),(5,'?섏?梨??좏넻?섏씡瑜?1??3媛쒖썡',4.63,'2022-10-24'),(6,'?섏?梨??좏넻?섏씡瑜?1??6媛쒖썡',4.75,'2022-10-24'),(7,'?섏?梨??좏넻?섏씡瑜?1??9媛쒖썡',4.86,'2022-10-24'),(8,'?섏?梨??좏넻?섏씡瑜?2??,4.98,'2022-10-24'),(9,'?섏?梨??좏넻?섏씡瑜?2??3媛쒖썡',5,'2022-10-24'),(10,'?섏?梨??좏넻?섏씡瑜?2??6媛쒖썡',5.02,'2022-10-24'),(11,'?섏?梨??좏넻?섏씡瑜?2??9媛쒖썡',5.04,'2022-10-24'),(12,'?섏?梨??좏넻?섏씡瑜?3??,5.06,'2022-10-24'),(13,'?섏?梨??좏넻?섏씡瑜?3??3媛쒖썡',5.08,'2022-10-24'),(14,'?섏?梨??좏넻?섏씡瑜?3??6媛쒖썡',5.1,'2022-10-24'),(15,'?섏?梨??좏넻?섏씡瑜?3??9媛쒖썡',5.12,'2022-10-24'),(16,'?섏?梨??좏넻?섏씡瑜?4??,5.14,'2022-10-24'),(17,'?섏?梨??좏넻?섏씡瑜?4??3媛쒖썡',5.14,'2022-10-24'),(18,'?섏?梨??좏넻?섏씡瑜?4??6媛쒖썡',5.14,'2022-10-24'),(19,'?섏?梨??좏넻?섏씡瑜?4??9媛쒖썡',5.13,'2022-10-24'),(20,'?섏?梨??좏넻?섏씡瑜?5??,5.13,'2022-10-24'),(21,'?섏?梨??좏넻?섏씡瑜?5??3媛쒖썡',5.12,'2022-10-24'),(22,'?섏?梨??좏넻?섏씡瑜?5??6媛쒖썡',5.11,'2022-10-24'),(23,'?섏?梨??좏넻?섏씡瑜?5??9媛쒖썡',5.1,'2022-10-24'),(24,'?섏?梨??좏넻?섏씡瑜?6??,5.1,'2022-10-24'),(25,'?섏?梨??좏넻?섏씡瑜?6??3媛쒖썡',5.09,'2022-10-24'),(26,'?섏?梨??좏넻?섏씡瑜?6??6媛쒖썡',5.08,'2022-10-24'),(27,'?섏?梨??좏넻?섏씡瑜?6??9媛쒖썡',5.07,'2022-10-24'),(28,'?섏?梨??좏넻?섏씡瑜?7??,5.06,'2022-10-24'),(29,'?섏?梨??좏넻?섏씡瑜?7??3媛쒖썡',5.05,'2022-10-24'),(30,'?섏?梨??좏넻?섏씡瑜?7??6媛쒖썡',5.04,'2022-10-24'),(31,'?섏?梨??좏넻?섏씡瑜?7??9媛쒖썡',5.03,'2022-10-24'),(32,'?섏?梨??좏넻?섏씡瑜?8??,5.02,'2022-10-24'),(33,'?섏?梨??좏넻?섏씡瑜?8??3媛쒖썡',5.01,'2022-10-24'),(34,'?섏?梨??좏넻?섏씡瑜?8??6媛쒖썡',5,'2022-10-24'),(35,'?섏?梨??좏넻?섏씡瑜?8??9媛쒖썡',4.98,'2022-10-24'),(36,'?섏?梨??좏넻?섏씡瑜?9??,4.97,'2022-10-24'),(37,'?섏?梨??좏넻?섏씡瑜?9??3媛쒖썡',4.96,'2022-10-24'),(38,'?섏?梨??좏넻?섏씡瑜?9??6媛쒖썡',4.95,'2022-10-24'),(39,'?섏?梨??좏넻?섏씡瑜?9??9媛쒖썡',4.94,'2022-10-24'),(40,'?섏?梨??좏넻?섏씡瑜?10??,4.93,'2022-10-24');
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
INSERT INTO `international` VALUES ('USD','5?꾩씠??,4.88,'2022-10-21'),('USD','5?꾩큹怨?.5?꾩씠??,4.7,'2022-10-21'),('USD','8.5?꾩큹怨?,4.64,'2022-10-21'),('EUR','5?꾩씠??,2.59,'2022-10-21'),('EUR','5?꾩큹怨?.5?꾩씠??,2.74,'2022-10-21'),('EUR','8.5?꾩큹怨?,2.84,'2022-10-21'),('JPY','5?꾩씠??,0.94,'2022-10-21'),('JPY','5?꾩큹怨?.5?꾩씠??,1.05,'2022-10-21'),('JPY','8.5?꾩큹怨?,1.17,'2022-10-21');
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

-- Dump completed on 2022-10-25 16:43:39
