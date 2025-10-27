/*
  Warnings:

  - Added the required column `updateAT` to the `comidas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comidas" ADD COLUMN     "createdAT" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAT" TIMESTAMP(3) NOT NULL;
