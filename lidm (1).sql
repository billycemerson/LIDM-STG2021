-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Mar 13, 2024 at 05:17 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lidm`
--

-- --------------------------------------------------------

--
-- Table structure for table `hasil`
--

CREATE TABLE `hasil` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `nama_siswa` varchar(255) NOT NULL,
  `jenis_kelamin` varchar(255) NOT NULL,
  `kelas` varchar(255) NOT NULL,
  `pertanyaan_1` varchar(255) NOT NULL,
  `pertanyaan_2` varchar(255) NOT NULL,
  `pertanyaan_3` varchar(255) NOT NULL,
  `pertanyaan_4` varchar(255) NOT NULL,
  `pertanyaan_5` varchar(255) NOT NULL,
  `pertanyaan_6` varchar(255) NOT NULL,
  `pertanyaan_7` varchar(255) NOT NULL,
  `pertanyaan_8` varchar(255) NOT NULL,
  `pertanyaan_9` varchar(255) NOT NULL,
  `pertanyaan_10` varchar(255) NOT NULL,
  `jumlah_benar` int(11) NOT NULL,
  `jumlah_salah` int(11) NOT NULL,
  `nilai_akhir` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `quizId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hasil`
--

INSERT INTO `hasil` (`id`, `uuid`, `nama_siswa`, `jenis_kelamin`, `kelas`, `pertanyaan_1`, `pertanyaan_2`, `pertanyaan_3`, `pertanyaan_4`, `pertanyaan_5`, `pertanyaan_6`, `pertanyaan_7`, `pertanyaan_8`, `pertanyaan_9`, `pertanyaan_10`, `jumlah_benar`, `jumlah_salah`, `nilai_akhir`, `userId`, `quizId`, `createdAt`, `updatedAt`) VALUES
(3, 'ee3a4c17-b4fc-4af9-86c8-cf3b4bb6d1c8', 'Billy Cemerson', 'Laki-laki', 'XII MIPA 1', 'Benar', 'Benar', 'Salah', 'Benar', 'Benar', 'Benar', 'Benar', 'Salah', 'Benar', 'Benar', 8, 2, 80, 2, 2, '2024-03-06 03:09:32', '2024-03-08 08:17:27'),
(4, 'b01c1ede-d9a2-4514-a8da-0484004dd34f', 'Hajran Tama', 'Laki-laki', 'XII MIPA 1', 'Benar', 'Benar', 'Salah', 'Benar', 'Benar', 'Benar', 'Benar', 'Salah', 'Benar', 'Salah', 7, 3, 70, 2, 2, '2024-03-06 03:12:18', '2024-03-08 08:17:39'),
(5, 'ce44cc0c-dd1a-402d-82cc-629a9d1bcb8a', 'Asma Choirunisa', 'Perempuan', 'XII MIPA 1', 'Benar', 'Benar', 'Benar', 'Benar', 'Benar', 'Benar', 'Benar', 'Benar', 'Benar', 'Salah', 9, 1, 90, 2, 2, '2024-03-06 03:12:56', '2024-03-08 08:16:49'),
(6, 'c2fc12b4-eb9d-4204-b981-a71cfb19e503', 'Arny Saputry', 'Perempuan', 'XII MIPA 3', 'Benar', 'Benar', 'Benar', 'Benar', 'Benar', 'Benar', 'Benar', 'Benar', 'Benar', 'Benar', 10, 0, 100, 2, 1, '2024-03-08 06:57:41', '2024-03-08 08:18:20'),
(7, '36cdb962-2ea9-4fed-a1e2-b58320b01cd0', 'Deny Siregar', 'Laki-laki', 'XII MIPA 3', 'Benar', 'Benar', 'Benar', 'Benar', 'Benar', 'Benar', 'Benar', 'Benar', 'Benar', 'Benar', 10, 0, 100, 2, 1, '2024-03-08 09:21:08', '2024-03-08 09:21:08');

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `kode` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`id`, `uuid`, `name`, `link`, `kode`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, '77d695db-d1ab-4c61-87a5-375369d85e10', 'Trigonometri', 'https://chat.openai.com/c/ce42750e-165b-41d6-99e3-22fe2f796f67', 'MS10', 2, '2024-03-04 14:29:14', '2024-03-08 15:52:37'),
(2, 'aed5ab10-ac62-4000-b266-fe079f67ea15', 'Aljabar', 'https://chat.openai.com/c/ce42750e-165b-41d6-99e3-22fe2f796f67', 'CR07', 2, '2024-03-04 14:36:55', '2024-03-04 14:36:55'),
(4, '49698180-ca17-4853-9e6d-a755a9cef579', 'Bangun Ruang', 'https://chat.openai.com/c/ce42750e-165b-41d6-99e3-22fe2f796f67', 'AB34', 2, '2024-03-04 15:13:17', '2024-03-07 13:14:40'),
(5, '365c902b-4997-4d79-abe9-2d9822e8db1b', 'Peluang', 'https://chat.openai.com/c/ce42750e-165b-41d6-99e3-22fe2f796f67', 'AMRU2024', 4, '2024-03-04 15:22:19', '2024-03-04 15:22:19'),
(6, '17598685-0694-4d24-babf-7790ad43b5ff', 'Statistika', 'https://chat.openai.com/c/ce42750e-165b-41d6-99e3-22fe2f796f67', 'AMRU2024', 4, '2024-03-04 15:22:45', '2024-03-04 15:22:45'),
(11, '213e659f-a897-4939-a4aa-d32cee3f31f5', 'Statmat', 'https://quizizz.com/admin/quiz/65d6f4e5a2ba214aee21ebda?source=quiz_share', 'MESSI10', 2, '2024-03-08 15:53:13', '2024-03-08 16:04:23');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('-3n1scK4bfAG-g87jZsgS4ZjA6NkP-7Y', '2024-03-09 06:49:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-08 06:49:17', '2024-03-08 06:49:17'),
('1jQNVdpfVB5hs0H4WQpD8SVgt0N1gJm6', '2024-03-09 16:03:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-08 16:03:22', '2024-03-08 16:03:22'),
('87Lyuk_CWy_nU_GxkLqzOR5aoB6B5rmf', '2024-03-09 15:53:13', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-08 15:53:13', '2024-03-08 15:53:13'),
('aOWefbNhnw03M8ahis4Du3Vjj5qemKBW', '2024-03-09 06:57:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-08 06:57:41', '2024-03-08 06:57:41'),
('aqs5WjIgZk9A4C9cw1Io8Ee0K8FuuE-W', '2024-03-08 16:58:04', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-07 16:58:05', '2024-03-07 16:58:05'),
('DUiedOOTSlUY0QRCRpwkGR70gNp3oDJ4', '2024-03-08 16:17:22', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-07 16:17:22', '2024-03-07 16:17:22'),
('ei1PUrVaZKnzL8SDvkD8UX1ZxRSRejeH', '2024-03-09 15:52:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-08 15:52:37', '2024-03-08 15:52:37'),
('enmd0VvZM0sEUi3UW7_hyyaev56c2SFr', '2024-03-09 12:08:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"80543765-2b0d-4bc1-9b14-a96282963d6c\"}', '2024-03-07 09:45:43', '2024-03-08 12:08:03'),
('FEx2W-tH2YnhDJmd0wFma-bqrUEa_wsF', '2024-03-08 16:42:25', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-07 16:42:25', '2024-03-07 16:42:25'),
('fv6TjKWrj5uSBZmKWe-tfrfafh0dGc8x', '2024-03-09 16:08:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-08 16:08:43', '2024-03-08 16:08:43'),
('GC1c23vlNLOZFVypMOJmcdVlYw93hYsO', '2024-03-09 08:18:05', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-08 08:18:05', '2024-03-08 08:18:05'),
('gU-rrQgO_Y6sONnBD-0ki9HjVZF_D5il', '2024-03-08 16:41:53', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-07 16:41:53', '2024-03-07 16:41:53'),
('hqK9p7Q01WuHSiFlONHWTRHdcjEh-QWb', '2024-03-09 15:51:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-08 15:51:41', '2024-03-08 15:51:41'),
('lW7NKYiBk5dFlELFpZkihz2X_4o0DO9D', '2024-03-09 09:21:08', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-08 09:21:08', '2024-03-08 09:21:08'),
('mbuEMIYdRHzcTzYGJaxsLRQhLPdmeQRe', '2024-03-09 08:18:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-08 08:18:20', '2024-03-08 08:18:20'),
('mkqmGB2Z0JsySnmG4taZhnpQd-9pFWxv', '2024-03-09 08:17:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-08 08:17:27', '2024-03-08 08:17:27'),
('NNty8bDDn16fpRvgIQGQanH7qlVaT3tV', '2024-03-08 16:58:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"80543765-2b0d-4bc1-9b14-a96282963d6c\"}', '2024-03-07 13:14:02', '2024-03-07 16:58:54'),
('pghdNMq-d91mmUxH8s1X4-yYetZK-Z6r', '2024-03-09 15:52:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-08 15:52:41', '2024-03-08 15:52:41'),
('PXsUWtH2UFZU7o0SpvvEOFuKv0AI84oI', '2024-03-09 08:17:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-08 08:17:39', '2024-03-08 08:17:39'),
('SIqFoxQH1iJA6nVkh2Xme2m-SA_lt2vs', '2024-03-09 16:02:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-08 16:02:43', '2024-03-08 16:02:43'),
('srI9gskN7xq5goSSWhMEDALg2cpGYRim', '2024-03-09 12:19:58', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"80543765-2b0d-4bc1-9b14-a96282963d6c\"}', '2024-03-08 06:47:55', '2024-03-08 12:19:58'),
('ThMqxCKW_X59VgE5B5bq26whPiSt4xJ4', '2024-03-08 16:42:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-07 16:42:57', '2024-03-07 16:42:57'),
('udZ5aODIFEQ0PQfDez1zwyypQE6TcUse', '2024-03-09 08:16:48', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-08 08:16:48', '2024-03-08 08:16:48'),
('Vhkr2GCcJ8XCUN3RYkNS2D30YKg-41iN', '2024-03-09 16:04:23', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-08 16:04:23', '2024-03-08 16:04:23'),
('xeOg79tpH5e5yIFNHcbEnX7keUYrhMHw', '2024-03-09 06:47:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-08 06:47:55', '2024-03-08 06:47:55'),
('_c4dHHR51YNXcZZ6vrQ03MQDbqDw14Sw', '2024-03-09 09:21:00', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-03-08 09:21:00', '2024-03-08 09:21:00');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `uuid`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(2, '80543765-2b0d-4bc1-9b14-a96282963d6c', 'Hajran', 'hajran@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$BsgPQFIY0fkcgzyRl8lI7g$0jIlVhPJaYvfmwqXixUQFlwHOJMWhJvNHLW4bYdmOLY', 'user', '2024-03-04 12:03:52', '2024-03-04 12:03:52'),
(3, '6113dc4b-56c6-47d1-9b7c-df61173b4ee6', 'Admin Billy', 'admin@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$O+j4JXpN44Z5FjmsRxyQBA$NFLWc1GHVOeG+omZb1P3lN+Wx5Jf166p7rqtUudUAwk', 'admin', '2024-03-04 12:20:26', '2024-03-04 12:20:26'),
(4, '47b95628-f876-405b-8d4b-2de56b737e77', 'Amru', 'amru@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$okrk5YTNViyE5Ilr7eRfRQ$PuBJTHy4JDLwDUgjFSbOcTfqqLKrOIqA6z2vZ6gWPtk', 'user', '2024-03-04 15:21:33', '2024-03-04 15:21:33'),
(5, '0f68e4c7-8efa-4509-931d-27c87c907867', 'Daniels Qrow', 'daniels@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$weEAtuGFfMpre3XkqtjLXQ$TxO7UugWKBhkylr065FKEySswPED4LhxxfiG/Uzv97w', 'admin', '2024-03-05 08:25:52', '2024-03-05 08:25:52'),
(7, '2a53bb1d-5e39-43f7-8539-bf385c5ec136', 'Asma', 'asma@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$96m5yGhKEKvGxE6TQ0AS6g$NdLgFrgLhJMTAOoZSUfrfHOUXhp9E52mq3doEx3kh2Y', 'user', '2024-03-05 09:51:53', '2024-03-05 09:51:53'),
(8, '42b05817-fd71-4048-8a20-1f8ef45c024f', 'Amru', 'amru@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$QarPhSerxNyCMsurGSJNqQ$7MvxKYC0VeEZldNKfKjNbBBcv1aeHyKsIksN0o4gP4I', 'user', '2024-03-05 16:17:32', '2024-03-05 16:17:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hasil`
--
ALTER TABLE `hasil`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `quizId` (`quizId`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hasil`
--
ALTER TABLE `hasil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `hasil`
--
ALTER TABLE `hasil`
  ADD CONSTRAINT `hasil_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_ibfk_2` FOREIGN KEY (`quizId`) REFERENCES `quiz` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quiz`
--
ALTER TABLE `quiz`
  ADD CONSTRAINT `quiz_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
