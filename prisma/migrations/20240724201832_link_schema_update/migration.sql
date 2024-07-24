/*
  Warnings:

  - The primary key for the `links` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `links` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `links` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `links` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `links` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `links` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `links` table. All the data in the column will be lost.
  - The `id` column on the `links` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `updatedAt` to the `links` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `links` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `links` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "LinkType" AS ENUM ('BUTTON', 'BANNER', 'CAROUSEL', 'CARD', 'GROUP_CARDS');

-- DropForeignKey
ALTER TABLE "links" DROP CONSTRAINT "links_user_id_fkey";

-- DropIndex
DROP INDEX "links_url_key";

-- AlterTable
ALTER TABLE "links" DROP CONSTRAINT "links_pkey",
DROP COLUMN "created_at",
DROP COLUMN "description",
DROP COLUMN "size",
DROP COLUMN "updated_at",
DROP COLUMN "url",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "LinkType" NOT NULL,
ADD CONSTRAINT "links_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "button_links" (
    "id" SERIAL NOT NULL,
    "linkId" INTEGER NOT NULL,
    "logo" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "urlToRedirect" TEXT NOT NULL,

    CONSTRAINT "button_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "banner_links" (
    "id" SERIAL NOT NULL,
    "linkId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "urlToRedirect" TEXT NOT NULL,
    "size" TEXT NOT NULL,

    CONSTRAINT "banner_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carousel_links" (
    "id" SERIAL NOT NULL,
    "linkId" INTEGER NOT NULL,

    CONSTRAINT "carousel_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carousel_images" (
    "id" SERIAL NOT NULL,
    "carouselLinkId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "urlToRedirect" TEXT NOT NULL,

    CONSTRAINT "carousel_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card_links" (
    "id" SERIAL NOT NULL,
    "linkId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "buttonLabel" TEXT NOT NULL,
    "buttonColor" TEXT NOT NULL,
    "buttonSize" TEXT NOT NULL,
    "buttonUrl" TEXT NOT NULL,

    CONSTRAINT "card_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group_cards_links" (
    "id" SERIAL NOT NULL,
    "linkId" INTEGER NOT NULL,

    CONSTRAINT "group_cards_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group_cards" (
    "id" SERIAL NOT NULL,
    "groupCardsLinkId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "buttonLabel" TEXT NOT NULL,
    "buttonColor" TEXT NOT NULL,
    "buttonSize" TEXT NOT NULL,
    "buttonUrl" TEXT NOT NULL,

    CONSTRAINT "group_cards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "button_links_linkId_key" ON "button_links"("linkId");

-- CreateIndex
CREATE UNIQUE INDEX "banner_links_linkId_key" ON "banner_links"("linkId");

-- CreateIndex
CREATE UNIQUE INDEX "carousel_links_linkId_key" ON "carousel_links"("linkId");

-- CreateIndex
CREATE UNIQUE INDEX "card_links_linkId_key" ON "card_links"("linkId");

-- CreateIndex
CREATE UNIQUE INDEX "group_cards_links_linkId_key" ON "group_cards_links"("linkId");

-- AddForeignKey
ALTER TABLE "links" ADD CONSTRAINT "links_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "button_links" ADD CONSTRAINT "button_links_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "links"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "banner_links" ADD CONSTRAINT "banner_links_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "links"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carousel_links" ADD CONSTRAINT "carousel_links_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "links"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carousel_images" ADD CONSTRAINT "carousel_images_carouselLinkId_fkey" FOREIGN KEY ("carouselLinkId") REFERENCES "carousel_links"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card_links" ADD CONSTRAINT "card_links_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "links"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_cards_links" ADD CONSTRAINT "group_cards_links_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "links"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_cards" ADD CONSTRAINT "group_cards_groupCardsLinkId_fkey" FOREIGN KEY ("groupCardsLinkId") REFERENCES "group_cards_links"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
