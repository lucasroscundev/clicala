/*
  Warnings:

  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `answers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `attachments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `clients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `questions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `emailVerified` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `familyName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `givenName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isAuthUser` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nickname` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `picture` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "answers" DROP CONSTRAINT "answers_author_id_fkey";

-- DropForeignKey
ALTER TABLE "answers" DROP CONSTRAINT "answers_question_id_fkey";

-- DropForeignKey
ALTER TABLE "attachments" DROP CONSTRAINT "attachments_answer_id_fkey";

-- DropForeignKey
ALTER TABLE "attachments" DROP CONSTRAINT "attachments_question_id_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_answer_id_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_author_id_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_question_id_fkey";

-- DropForeignKey
ALTER TABLE "questions" DROP CONSTRAINT "questions_author_id_fkey";

-- DropForeignKey
ALTER TABLE "questions" DROP CONSTRAINT "questions_best_answer_id_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "password",
DROP COLUMN "role",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "emailVerified" BOOLEAN NOT NULL,
ADD COLUMN     "familyName" TEXT NOT NULL,
ADD COLUMN     "givenName" TEXT NOT NULL,
ADD COLUMN     "isAuthUser" BOOLEAN NOT NULL,
ADD COLUMN     "nickname" TEXT NOT NULL,
ADD COLUMN     "picture" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- DropTable
DROP TABLE "answers";

-- DropTable
DROP TABLE "attachments";

-- DropTable
DROP TABLE "clients";

-- DropTable
DROP TABLE "comments";

-- DropTable
DROP TABLE "questions";

-- DropEnum
DROP TYPE "UserRole";
