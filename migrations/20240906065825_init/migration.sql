-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "emoji" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);
