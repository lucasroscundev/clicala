/*
  Warnings:

  - A unique constraint covering the columns `[carouselLinkId]` on the table `carousel_images` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "carousel_images_carouselLinkId_key" ON "carousel_images"("carouselLinkId");
