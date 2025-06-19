/*
  Warnings:

  - The primary key for the `answers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `answers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `choices` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `choices` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `questions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `questions` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `responses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `responses` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `responseId` on the `answers` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `questionId` on the `answers` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `questionId` on the `choices` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Provider" AS ENUM ('google', 'kakao', 'local');

-- DropForeignKey
ALTER TABLE "answers" DROP CONSTRAINT "answers_questionId_fkey";

-- DropForeignKey
ALTER TABLE "answers" DROP CONSTRAINT "answers_responseId_fkey";

-- DropForeignKey
ALTER TABLE "choices" DROP CONSTRAINT "choices_questionId_fkey";

-- AlterTable
ALTER TABLE "answers" DROP CONSTRAINT "answers_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
DROP COLUMN "responseId",
ADD COLUMN     "responseId" BIGINT NOT NULL,
DROP COLUMN "questionId",
ADD COLUMN     "questionId" BIGINT NOT NULL,
ADD CONSTRAINT "answers_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "choices" DROP CONSTRAINT "choices_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
DROP COLUMN "questionId",
ADD COLUMN     "questionId" BIGINT NOT NULL,
ADD CONSTRAINT "choices_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "questions" DROP CONSTRAINT "questions_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
ADD CONSTRAINT "questions_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "responses" DROP CONSTRAINT "responses_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
ADD CONSTRAINT "responses_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "surveys" ADD COLUMN     "expiredAt" TIMESTAMP(3),
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMPTZ(6),
ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMPTZ(6);

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "provider" "Provider" NOT NULL DEFAULT 'local';

-- AddForeignKey
ALTER TABLE "choices" ADD CONSTRAINT "choices_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_responseId_fkey" FOREIGN KEY ("responseId") REFERENCES "responses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
