/*
  Warnings:

  - The primary key for the `banner_links` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `button_links` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `card_links` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `carousel_images` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `carousel_links` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `group_cards` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `group_cards_links` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `links` table will be changed. If it partially fails, the table could be left without primary key constraint.

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

-- AlterTable
ALTER TABLE "banner_links" DROP CONSTRAINT "banner_links_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "linkId" SET DATA TYPE TEXT,
ADD CONSTRAINT "banner_links_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "banner_links_id_seq";

-- AlterTable
ALTER TABLE "button_links" DROP CONSTRAINT "button_links_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "linkId" SET DATA TYPE TEXT,
ADD CONSTRAINT "button_links_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "button_links_id_seq";

-- AlterTable
ALTER TABLE "card_links" DROP CONSTRAINT "card_links_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "linkId" SET DATA TYPE TEXT,
ADD CONSTRAINT "card_links_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "card_links_id_seq";

-- AlterTable
ALTER TABLE "carousel_images" DROP CONSTRAINT "carousel_images_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "carouselLinkId" SET DATA TYPE TEXT,
ADD CONSTRAINT "carousel_images_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "carousel_images_id_seq";

-- AlterTable
ALTER TABLE "carousel_links" DROP CONSTRAINT "carousel_links_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "linkId" SET DATA TYPE TEXT,
ADD CONSTRAINT "carousel_links_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "carousel_links_id_seq";

-- AlterTable
ALTER TABLE "group_cards" DROP CONSTRAINT "group_cards_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "groupCardsLinkId" SET DATA TYPE TEXT,
ADD CONSTRAINT "group_cards_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "group_cards_id_seq";

-- AlterTable
ALTER TABLE "group_cards_links" DROP CONSTRAINT "group_cards_links_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "linkId" SET DATA TYPE TEXT,
ADD CONSTRAINT "group_cards_links_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "group_cards_links_id_seq";

-- AlterTable
ALTER TABLE "links" DROP CONSTRAINT "links_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "links_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "links_id_seq";

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
