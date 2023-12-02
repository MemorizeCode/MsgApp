-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Дек 02 2023 г., 19:03
-- Версия сервера: 5.7.39
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `MSG`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Messages`
--

CREATE TABLE `Messages` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `roomId` int(11) NOT NULL,
  `text` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `delete` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `Messages`
--

INSERT INTO `Messages` (`id`, `userId`, `roomId`, `text`, `date`, `delete`) VALUES
(1, 1, 1, 'Hello', '2023-11-24 10:23:29.412', 0),
(49, 3, 1, 'НОВОЕ СООБЩЕНИЕ', '2023-12-02 12:20:04.546', 1),
(50, 3, 2, '334443343', '2023-12-02 12:20:14.062', 0),
(51, 3, 2, '222222', '2023-12-02 12:20:20.198', 0),
(52, 1, 1, '33434', '2023-12-02 12:43:22.499', 0),
(53, 1, 1, 'ффффффффф', '2023-12-02 12:43:40.281', 0),
(54, 1, 1, '444', '2023-12-02 12:44:38.189', 1),
(55, 3, 1, '23', '2023-12-02 14:12:40.862', 1),
(56, 3, 2, 'ХАЙ', '2023-12-02 14:20:25.304', 0),
(57, 3, 2, 'ХАЙ', '2023-12-02 14:20:39.039', 0),
(58, 3, 1, '', '2023-12-02 14:23:37.302', 1),
(59, 3, 1, '', '2023-12-02 14:23:40.257', 1),
(60, 3, 1, '12', '2023-12-02 14:26:28.898', 1),
(61, 3, 1, 'Aaaaaa', '2023-12-02 14:26:37.100', 1),
(62, 3, 1, '22332', '2023-12-02 14:40:18.889', 1),
(63, 3, 1, '433434', '2023-12-02 14:45:05.071', 1),
(64, 3, 1, 'а', '2023-12-02 14:45:38.284', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `Room`
--

CREATE TABLE `Room` (
  `id` int(11) NOT NULL,
  `roomName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `typeRoom` enum('PUBLIC','PRIVATE') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'PUBLIC'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `Room`
--

INSERT INTO `Room` (`id`, `roomName`, `typeRoom`) VALUES
(1, 'Chat TYPE', 'PUBLIC'),
(2, 'FDDFFD', 'PUBLIC');

-- --------------------------------------------------------

--
-- Структура таблицы `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `login` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'NOT NAME',
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `User`
--

INSERT INTO `User` (`id`, `login`, `password`, `name`, `avatar`) VALUES
(1, 'fire1234', '$2b$04$wbuxF9C9Kt/VoqCFP4AL3.HTyBOJah4RLMCui4R2Q6qQugkLP9kFy', 'NOT NAME', NULL),
(2, 'fire12345', '$2b$04$n4Ze8fFchWjrRfcR6skcteUhbdpg9vN8wkDEkr34X0tUdw9Cstp.u', 'NOT NAME', NULL),
(3, 'FFFFF', '$2b$04$SpD0PcOe/ETGajiNxPpmgOzRjV7lmHdJsyUoh3XsVAzwqIu9X8vQK', 'NOT NAME', NULL),
(4, 'FFFFFF', '$2b$04$b4xOG8//tEQdPoSV.Kcguune6MLtjV9/YEuI8MBGCq3dyjUY27d4u', 'NOT NAME', NULL),
(5, 'Q', '$2b$04$FfaYMnY/gt1P2s9norsTDeevzDTxNfrV9vh1vLFc9i5ks6e.OeJYO', 'NOT NAME', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('630211fe-6f65-44ff-8610-5d43ae79a64d', 'ecdd67a29a7eff27fa6be0b1f53c55a7ffd73f1015636459a515a2ba86126d46', '2023-11-24 07:55:58.681', '20231124075556_init', NULL, NULL, '2023-11-24 07:55:56.227', 1),
('9e0cae44-5bcb-4755-9390-2573b5579bd6', '424e014c6aca532be45ff720f5e4a92777e2bfa20a3de99c39b97cd52a0b6746', '2023-11-24 08:15:32.751', '20231124081532_init', NULL, NULL, '2023-11-24 08:15:32.039', 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Messages`
--
ALTER TABLE `Messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Messages_userId_fkey` (`userId`),
  ADD KEY `Messages_roomId_fkey` (`roomId`);

--
-- Индексы таблицы `Room`
--
ALTER TABLE `Room`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Messages`
--
ALTER TABLE `Messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT для таблицы `Room`
--
ALTER TABLE `Room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `Messages`
--
ALTER TABLE `Messages`
  ADD CONSTRAINT `Messages_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Messages_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
