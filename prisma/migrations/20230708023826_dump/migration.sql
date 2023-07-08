-- CreateTable
CREATE TABLE "travels" (
    "id" SERIAL NOT NULL,
    "origin" TEXT NOT NULL,
    "destiny" TEXT NOT NULL,
    "shipping_cost" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "travels_pkey" PRIMARY KEY ("id")
);
