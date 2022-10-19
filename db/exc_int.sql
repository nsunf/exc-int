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
-- Table structure for table `exchange`
--

DROP TABLE IF EXISTS `exchange`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exchange` (
  `cur_unit` varchar(10) NOT NULL,
  `deal_bas_r` varchar(30) NOT NULL,
  `cur_nm` varchar(30) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exchange`
--

LOCK TABLES `exchange` WRITE;
/*!40000 ALTER TABLE `exchange` DISABLE KEYS */;
INSERT INTO `exchange` VALUES ('AED','388.12','?꾨엻?먮?由ы듃 ?붾Ⅴ??,'2022-10-19'),('AUD','901.34','?몄＜ ?щ윭','2022-10-19'),('BHD','3,781.13','諛붾젅???붾굹瑜?,'2022-10-19'),('BND','1,004.12','釉뚮（?섏씠 ?щ윭','2022-10-19'),('CAD','1,038.46','罹먮굹???щ윭','2022-10-19'),('CHF','1,435.22','?ㅼ쐞???꾨옉','2022-10-19'),('CNH','198.12','?꾩븞??,'2022-10-19'),('DKK','189.11','?대쭏?꾪겕 ?щ줈??,'2022-10-19'),('EUR','1,406.78','?좊줈','2022-10-19'),('GBP','1,617.77','?곴뎅 ?뚯슫??,'2022-10-19'),('HKD','181.61','?띿쉘 ?щ윭','2022-10-19'),('IDR(100)','9.22','?몃룄?ㅼ떆??猷⑦뵾??,'2022-10-19'),('JPY(100)','955.82','?쇰낯 ??,'2022-10-19'),('KRW','1','?쒓뎅 ??,'2022-10-19'),('KWD','4,598.12','荑좎썾?댄듃 ?붾굹瑜?,'2022-10-19'),('MYR','302.29','留먮젅?댁???留곴린??,'2022-10-19'),('NOK','135.26','?몃Ⅴ?⑥씠 ?щ줈??,'2022-10-19'),('NZD','812.73','?댁쭏?쒕뱶 ?щ윭','2022-10-19'),('SAR','379.55','?ъ슦??由ъ뻹','2022-10-19'),('SEK','128.77','?ㅼ썾???щ줈??,'2022-10-19'),('SGD','1,004.12','?깃??щⅤ ?щ윭','2022-10-19'),('THB','37.41','?쒓뎅 諛뷀듃','2022-10-19'),('USD','1,425.6','誘멸뎅 ?щ윭','2022-10-19');
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
  `sfln_intrc_nm` varchar(30) NOT NULL,
  `int_r` varchar(10) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interest`
--

LOCK TABLES `interest` WRITE;
/*!40000 ALTER TABLE `interest` DISABLE KEYS */;
INSERT INTO `interest` VALUES ('?섏?梨??좏넻?섏씡瑜?1媛쒖썡','3.02','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?3媛쒖썡','3.34','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?6媛쒖썡','3.82','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?9媛쒖썡','4.11','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?1??,'4.26','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?1??3媛쒖썡','4.38','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?1??6媛쒖썡','4.51','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?1??9媛쒖썡','4.63','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?2??,'4.75','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?2??3媛쒖썡','4.78','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?2??6媛쒖썡','4.81','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?2??9媛쒖썡','4.83','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?3??,'4.86','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?3??3媛쒖썡','4.87','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?3??6媛쒖썡','4.88','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?3??9媛쒖썡','4.89','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?4??,'4.9','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?4??3媛쒖썡','4.89','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?4??6媛쒖썡','4.88','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?4??9媛쒖썡','4.87','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?5??,'4.86','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?5??3媛쒖썡','4.85','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?5??6媛쒖썡','4.84','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?5??9媛쒖썡','4.83','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?6??,'4.83','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?6??3媛쒖썡','4.82','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?6??6媛쒖썡','4.81','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?6??9媛쒖썡','4.8','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?7??,'4.79','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?7??3媛쒖썡','4.78','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?7??6媛쒖썡','4.77','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?7??9媛쒖썡','4.76','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?8??,'4.75','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?8??3媛쒖썡','4.74','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?8??6媛쒖썡','4.73','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?8??9媛쒖썡','4.72','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?9??,'4.71','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?9??3媛쒖썡','4.7','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?9??6媛쒖썡','4.69','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?9??9媛쒖썡','4.68','2022-10-19'),('?섏?梨??좏넻?섏씡瑜?10??,'4.67','2022-10-19');
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
  `int_r` varchar(10) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `international`
--

LOCK TABLES `international` WRITE;
/*!40000 ALTER TABLE `international` DISABLE KEYS */;
INSERT INTO `international` VALUES ('USD','5?꾩씠??,'4.88','2022-10-19'),('USD','5?꾩큹怨?.5?꾩씠??,'4.7','2022-10-19'),('USD','8.5?꾩큹怨?,'4.64','2022-10-19'),('EUR','5?꾩씠??,'2.45','2022-10-19'),('EUR','5?꾩큹怨?.5?꾩씠??,'2.62','2022-10-19'),('EUR','8.5?꾩큹怨?,'2.72','2022-10-19'),('JPY','5?꾩씠??,'0.94','2022-10-19'),('JPY','5?꾩큹怨?.5?꾩씠??,'1.05','2022-10-19'),('JPY','8.5?꾩큹怨?,'1.17','2022-10-19');
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

-- Dump completed on 2022-10-19 17:25:18
