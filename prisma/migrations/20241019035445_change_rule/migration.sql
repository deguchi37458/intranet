/*
  Warnings:

  - Made the column `nickname` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "nickname" SET NOT NULL;
