-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false;
