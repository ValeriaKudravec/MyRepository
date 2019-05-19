-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: photos
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `photo_post`
--

DROP TABLE IF EXISTS `photo_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `photo_post` (
  `POST_ID` int(11) NOT NULL AUTO_INCREMENT,
  `DESCRIPTION` varchar(45) DEFAULT NULL,
  `CREATION_DATE` varchar(45) NOT NULL,
  `PHOTO_LINK` varchar(45) NOT NULL,
  `HASTAG` varchar(45) DEFAULT NULL,
  `LIKES` varchar(45) DEFAULT NULL,
  `USER_ID` int(11) NOT NULL,
  PRIMARY KEY (`POST_ID`),
  KEY `USER_ID_idx` (`USER_ID`),
  CONSTRAINT `USER_ID` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo_post`
--

LOCK TABLES `photo_post` WRITE;
/*!40000 ALTER TABLE `photo_post` DISABLE KEYS */;
INSERT INTO `photo_post` VALUES (1,'hello1','2018-01-23T23:01:00','jhg.jpg','#hello #hi','13',1),(2,'hello2','2017-02-23T23:05:00','41_NQcBBMCI.jpg','#hello','23',5),(3,'hello3','2018-01-23T23:01:00','kos.jpg','#love','25',8),(4,'hello4','2018-03-08T23:01:00','help.jpg','#hope','2',2),(5,'hello5','2018-02-23T23:01:00','die.jpg','#hate','54',4),(6,'hello6','2018-02-23T23:01:00','vvvvvv.jpg','#siren','87',7),(7,'hello7','2018-02-01T23:01:00','mda.jpg','#flowers #guy','34',2),(8,'hello8','2018-04-23T23:01:00','post.jpg','#people','63',3),(9,'hello9','2018-03-23T23:01:00','lol.jpg','#minsk','17',7),(10,'hello10','2018-02-02T23:01:00','hihihi.jpg','#minsk #city','54',10);
/*!40000 ALTER TABLE `photo_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `USER_ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) NOT NULL,
  `EMAIL` varchar(45) NOT NULL,
  PRIMARY KEY (`USER_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'boris','boris@mail.com'),(2,'vitia','vit@gmail.com'),(3,'katia','katia@mail.com'),(4,'vova','vova@mail.com'),(5,'leha','leha@mail.com'),(6,'voha','voha@mail.com'),(7,'antoha','antoha@mail.com'),(8,'ploha','ploha@mail.com'),(9,'lena','lena@mail.com'),(10,'ira','ira@mail.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-19 21:58:39
