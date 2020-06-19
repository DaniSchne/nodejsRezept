-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Jun 27, 2019 at 01:14 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sampledb`
--

-- --------------------------------------------------------

--
-- Table structure for table `sample`
--

CREATE TABLE `customer` (
  `id` int(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `active` BOOLEAN DEFAULT false  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sample`
--

INSERT INTO `customer` (`id`, `name`, `email`, `active`) VALUES
(1, 'andrew', 'andrew@bla.de', true),
(2, 'brian', 'brian@bla.de', false),
(3, 'charles', 'charles@bla.de', true),
(4, 'david', 'david@bla.de', false);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sample`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sample`
--
ALTER TABLE `customer`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;