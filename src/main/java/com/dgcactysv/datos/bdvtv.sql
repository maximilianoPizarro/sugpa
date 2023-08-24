CREATE DATABASE  `bdvtv` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `bdvtv`;

--
-- Table structure for table `persona`
--

CREATE TABLE `persona` (
  `idPersona` int(11) NOT NULL AUTO_INCREMENT,
  `apellido` varchar(45) NOT NULL,
  `nombres` varchar(45) NOT NULL,
  `dni` int(11) NOT NULL,
  PRIMARY KEY (`idPersona`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
INSERT INTO `persona` VALUES (1,'Perez','Juan',11111111),(2,'Lopez','Rodrigo',22222222),(3,'Martinez','Julian',33333333),(4,'Alvarez','José',44444444),(5,'Martinez','Martín',55555555),(6,'Fernandez','Julio',66666666),(7,'Bou','Gustavo',77777777),(8,'Gonzales','Cristian',88888888);
UNLOCK TABLES;

CREATE TABLE `contribuyente` (
  `idContribuyente` int(11) NOT NULL,
  `esExcento` bit(1) NOT NULL,
  PRIMARY KEY (`idContribuyente`),
  CONSTRAINT `FK_persona_contribuyente` FOREIGN KEY (`idContribuyente`) REFERENCES `persona` (`idPersona`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contribuyente`
--

LOCK TABLES `contribuyente` WRITE;
INSERT INTO `contribuyente` VALUES (2,0),(3,0),(5,1),(6,0);
UNLOCK TABLES;

--
-- Table structure for table `inspector`
--

CREATE TABLE `inspector` (
  `idInspector` int(11) NOT NULL,
  `legajo` int(11) NOT NULL,
  PRIMARY KEY (`idInspector`),
  CONSTRAINT `FK_persona_inspector` FOREIGN KEY (`idInspector`) REFERENCES `persona` (`idPersona`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inspector`
--

LOCK TABLES `inspector` WRITE;
INSERT INTO `inspector` VALUES (1,100),(4,101),(7,102),(8,103);
UNLOCK TABLES;

--
-- Table structure for table `automotor`
--

CREATE TABLE `automotor` (
  `idAutomotor` int(11) NOT NULL AUTO_INCREMENT,
  `dominio` varchar(45) NOT NULL,
  `modelo` int(11) NOT NULL,
  `marca` varchar(45) NOT NULL,
  `idContribuyente` int(11) NOT NULL,
  PRIMARY KEY (`idAutomotor`),
  KEY `fk_automotor_contribuyente_id` (`idContribuyente`),
  CONSTRAINT `fk_automotor_contribuyente` FOREIGN KEY (`idContribuyente`) REFERENCES `contribuyente` (`idContribuyente`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `automotor`
--

LOCK TABLES `automotor` WRITE;
INSERT INTO `automotor` VALUES (1,'GAA111',2010,'Fiat',2),(2,'AAA100',2005,'Corsa',3),(3,'HHH222',2011,'volkswagen',5),(4,'JJJ333',2010,'Fiat',6),(5,'LLL444',2012,'Honda',3);
UNLOCK TABLES;

--
-- Table structure for table `automotor`
--

CREATE TABLE `inspeccion` (
  `idInspeccion` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` datetime NOT NULL,
  `estadoPagado` bit(1) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idAutomotor` int(11) NOT NULL,
  `idInspector` int(11) NOT NULL,
  PRIMARY KEY (`idInspeccion`),
  KEY `fk_inspeccion_automotor_id` (`idAutomotor`),
  KEY `fk_inspeccion_inspector_id` (`idInspector`),
  CONSTRAINT `fk_inspeccion_automotor` FOREIGN KEY (`idAutomotor`) REFERENCES `automotor` (`idAutomotor`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_inspeccion_inspector` FOREIGN KEY (`idInspector`) REFERENCES `inspector` (`idInspector`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inspeccion`
--

LOCK TABLES `inspeccion` WRITE;
INSERT INTO `inspeccion` VALUES (1,'2016-02-10 09:00:00',0,'apto',1,1),(2,'2016-02-10 09:30:00',0,'condicional',2,4),
								(3,'2016-02-10 10:00:00',0,'condicional',3,7),(4,'2016-02-11 14:00:00',0,'apto',4,8),
								(5,'2016-02-11 14:30:00',0,'apto',5,1),(6,'2017-02-13 09:00:00',0,'rechazado',1,4),
								(7,'2017-02-13 09:30:00',0,'apto',4,7),(8,'2017-02-13 10:00:00',0,'apto',5,8);
UNLOCK TABLES;