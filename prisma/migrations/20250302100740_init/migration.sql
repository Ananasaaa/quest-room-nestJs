-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "type" TEXT,
    "icon" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quest" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "countPeople" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Quest_pkey" PRIMARY KEY ("id")
);
