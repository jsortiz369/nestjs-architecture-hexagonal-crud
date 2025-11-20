-- CreateTable
CREATE TABLE `users` (
    `_id` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(25) NOT NULL,
    `second_name` VARCHAR(25) NULL,
    `first_surname` VARCHAR(25) NOT NULL,
    `second_surname` VARCHAR(25) NULL,
    `birthday` DATETIME NOT NULL,
    `phone` VARCHAR(25) NULL,
    `email` VARCHAR(100) NOT NULL,
    `photo` VARCHAR(255) NULL,
    `password` VARCHAR(255) NOT NULL,
    `status` ENUM('0', '1') NULL DEFAULT '1',
    `role` ENUM('1', '0') NULL DEFAULT '0',
    `created_at` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` TIMESTAMP(3) NOT NULL,
    `deleted_at` TIMESTAMP(3) NULL,

    PRIMARY KEY (`_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
