/*
  Warnings:

  - The primary key for the `berita` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `pelatih` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `pemain` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `tim` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `wasit` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `pelatih` DROP FOREIGN KEY `Pelatih_timId_tim_fkey`;

-- DropForeignKey
ALTER TABLE `pemain` DROP FOREIGN KEY `Pemain_timId_tim_fkey`;

-- DropIndex
DROP INDEX `Pelatih_timId_tim_fkey` ON `pelatih`;

-- DropIndex
DROP INDEX `Pemain_timId_tim_fkey` ON `pemain`;

-- AlterTable
ALTER TABLE `berita` DROP PRIMARY KEY,
    MODIFY `id_berita` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_berita`);

-- AlterTable
ALTER TABLE `pelatih` DROP PRIMARY KEY,
    MODIFY `id_pelatih` VARCHAR(191) NOT NULL,
    MODIFY `timId_tim` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id_pelatih`);

-- AlterTable
ALTER TABLE `pemain` DROP PRIMARY KEY,
    MODIFY `id_pemain` VARCHAR(191) NOT NULL,
    MODIFY `timId_tim` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id_pemain`);

-- AlterTable
ALTER TABLE `tim` DROP PRIMARY KEY,
    MODIFY `id_tim` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_tim`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    MODIFY `id_user` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_user`);

-- AlterTable
ALTER TABLE `wasit` DROP PRIMARY KEY,
    MODIFY `id_wasit` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_wasit`);

-- AddForeignKey
ALTER TABLE `Pemain` ADD CONSTRAINT `Pemain_timId_tim_fkey` FOREIGN KEY (`timId_tim`) REFERENCES `Tim`(`id_tim`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pelatih` ADD CONSTRAINT `Pelatih_timId_tim_fkey` FOREIGN KEY (`timId_tim`) REFERENCES `Tim`(`id_tim`) ON DELETE SET NULL ON UPDATE CASCADE;
