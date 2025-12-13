-- CreateEnum
CREATE TYPE "Status" AS ENUM ('0', '1');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('1', '0');

-- CreateTable
CREATE TABLE "users" (
    "_id" TEXT NOT NULL,
    "first_name" VARCHAR(25) NOT NULL,
    "second_name" VARCHAR(25),
    "first_surname" VARCHAR(25) NOT NULL,
    "second_surname" VARCHAR(25),
    "birthday" DATE NOT NULL,
    "phone" VARCHAR(25),
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "status" "Status" DEFAULT '1',
    "role" "Role" DEFAULT '0',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("_id")
);
