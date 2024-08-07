/*
  Warnings:

  - You are about to drop the `banner_links` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `button_links` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `card_links` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `carousel_images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `carousel_links` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `group_cards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `group_cards_links` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `links` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "banner_links" DROP CONSTRAINT "banner_links_linkId_fkey";

-- DropForeignKey
ALTER TABLE "button_links" DROP CONSTRAINT "button_links_linkId_fkey";

-- DropForeignKey
ALTER TABLE "card_links" DROP CONSTRAINT "card_links_linkId_fkey";

-- DropForeignKey
ALTER TABLE "carousel_images" DROP CONSTRAINT "carousel_images_carouselLinkId_fkey";

-- DropForeignKey
ALTER TABLE "carousel_links" DROP CONSTRAINT "carousel_links_linkId_fkey";

-- DropForeignKey
ALTER TABLE "group_cards" DROP CONSTRAINT "group_cards_groupCardsLinkId_fkey";

-- DropForeignKey
ALTER TABLE "group_cards_links" DROP CONSTRAINT "group_cards_links_linkId_fkey";

-- DropForeignKey
ALTER TABLE "links" DROP CONSTRAINT "links_userId_fkey";

-- DropTable
DROP TABLE "banner_links";

-- DropTable
DROP TABLE "button_links";

-- DropTable
DROP TABLE "card_links";

-- DropTable
DROP TABLE "carousel_images";

-- DropTable
DROP TABLE "carousel_links";

-- DropTable
DROP TABLE "group_cards";

-- DropTable
DROP TABLE "group_cards_links";

-- DropTable
DROP TABLE "links";

-- DropEnum
DROP TYPE "LinkType";
