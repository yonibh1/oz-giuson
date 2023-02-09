-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 09, 2023 at 03:35 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `giusonmanagement`
--

-- --------------------------------------------------------

--
-- Table structure for table `candidates`
--

CREATE TABLE `candidates` (
  `candidatesId` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `beginYear` varchar(4) DEFAULT NULL,
  `lastUpdateDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `candidates`
--

INSERT INTO `candidates` (`candidatesId`, `name`, `beginYear`, `lastUpdateDate`) VALUES
(456, 'Rivka', NULL, '2023-02-01'),
(666, 'Adi', '2000', '2023-01-03'),
(1234, 'Israel', NULL, '2023-02-02'),
(102030, 'Yossi', '2007', '2023-01-17');

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `languageId` int(3) NOT NULL,
  `languageName` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`languageId`, `languageName`) VALUES
(3, 'C#'),
(4, 'Java'),
(6, 'Python'),
(7, 'React'),
(9, 'Angular'),
(10, '.Net'),
(11, 'Node.js'),
(20, 'JavaScript');

-- --------------------------------------------------------

--
-- Table structure for table `languagesforcandidates`
--

CREATE TABLE `languagesforcandidates` (
  `candidatesId` int(11) NOT NULL,
  `languageId` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `languagesforcandidates`
--

INSERT INTO `languagesforcandidates` (`candidatesId`, `languageId`) VALUES
(456, 3),
(456, 4),
(456, 6),
(666, 4),
(666, 6),
(666, 7),
(1234, 4),
(1234, 11),
(102030, 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `candidates`
--
ALTER TABLE `candidates`
  ADD PRIMARY KEY (`candidatesId`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`languageId`);

--
-- Indexes for table `languagesforcandidates`
--
ALTER TABLE `languagesforcandidates`
  ADD PRIMARY KEY (`candidatesId`,`languageId`),
  ADD KEY `languageId` (`languageId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `languageId` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `candidates`
--
ALTER TABLE `candidates`
  ADD CONSTRAINT `candidates_ibfk_1` FOREIGN KEY (`candidatesId`) REFERENCES `languagesforcandidates` (`candidatesId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `languagesforcandidates`
--
ALTER TABLE `languagesforcandidates`
  ADD CONSTRAINT `languagesforcandidates_ibfk_1` FOREIGN KEY (`languageId`) REFERENCES `languages` (`languageId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `languagesforcandidates_ibfk_2` FOREIGN KEY (`candidatesId`) REFERENCES `candidates` (`candidatesId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
