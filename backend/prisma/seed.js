const { PrismaClient, Role, Posisi, PosisiWasit } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const now = new Date();
  const utc7Time = new Date(now.getTime() + 7 * 60 * 60 * 1000);

  const user = await prisma.user.createMany({
    data: [
      {
        username: 'admin',
        email: 'admin@example.com',
        password: 'adminpassword',
        phone: '081234567890',
        role: Role.admin,
        created_at: utc7Time, 
        update_at: utc7Time,  
      },
      {
        username: 'user',
        email: 'user@example.com',
        password: 'userpassword',
        phone: '081234567890',
        role: Role.user,
        created_at: utc7Time, 
        update_at: utc7Time,  
      },
    ],
  });

  console.log('User Admin telah dibuat:', user);

  // Seeder untuk Berita
  const berita = await prisma.berita.createMany({
    data: [
      {
        judul: 'Turnamen Bola Voli Nasional',
        deskripsi: 'Turnamen bola voli antar tim dari seluruh Indonesia.',
        gambar: 'link-ke-gambar.jpg',
        created_at: utc7Time, 
        update_at: utc7Time,  
      },
      {
        judul: 'Turnamen Bola Voli Tarkam',
        deskripsi: 'Turnamen bola voli antar tim kampung klampok.',
        gambar: 'link-ke-gambar.jpg',
        created_at: utc7Time, 
        update_at: utc7Time,  
      },
      {
        judul: 'Turnamen Bola Voli Antar Sekolah',
        deskripsi: 'Turnamen bola voli antar tim dari seluruh sekolah.',
        gambar: 'link-ke-gambar.jpg',
        created_at: utc7Time, 
        update_at: utc7Time,  
      },
    ]
  });

  console.log('Berita telah dibuat:', berita);

  // Seeder untuk Tim
  const timA = await prisma.tim.create({
    data: {
      nama: 'Tim A',
      logo: 'logo_tim_a.png',
      deskripsi: 'Tim bola voli profesional.',
      created_at: utc7Time, 
      update_at: utc7Time,  
    },
  });

  console.log('Tim telah dibuat:', timA);

  // Seeder untuk Pemain
  const pemainA = await prisma.pemain.createMany({
    data: [
      {
        name: 'John Doe',
        nomerPunggung: 10,
        posisi: Posisi.SETTER,
        timId_tim: timA.id_tim,
        created_at: utc7Time, 
        updated_at: utc7Time, 
      },
      {
        name: 'John Doe',
        nomerPunggung: 10,
        posisi: Posisi.SETTER,
        timId_tim: timA.id_tim,
        created_at: utc7Time, 
        updated_at: utc7Time, 
      },
      {
        name: 'Pablo',
        nomerPunggung: 1,
        posisi: Posisi.MIDDLE_BLOCKER,
        timId_tim: timA.id_tim,
        created_at: utc7Time, 
        updated_at: utc7Time, 
      },
      {
        name: 'Gabriel',
        nomerPunggung: 34,
        posisi: Posisi.LIBERO,
        timId_tim: timA.id_tim,
        created_at: utc7Time, 
        updated_at: utc7Time, 
      },
    ]
  });

  console.log('Pemain telah dibuat:', pemainA);

  // Seeder untuk Pelatih
  const pelatihA = await prisma.pelatih.createMany({
    data: [
      {
        name: 'Jane Smith',
        usia: 40,
        pengalaman: '10 tahun melatih',
        tanggalMulai: new Date('2010-01-01'),
        timId_tim: timA.id_tim,
        created_at: utc7Time, 
        updated_at: utc7Time, 
      },
      {
        name: 'Jaden',
        usia: 30,
        pengalaman: '10 tahun melatih',
        tanggalMulai: new Date('2010-01-01'),
        timId_tim: timA.id_tim,
        created_at: utc7Time, 
        updated_at: utc7Time, 
      },
      {
        name: 'Lukas',
        usia: 40,
        pengalaman: '10 tahun melatih',
        tanggalMulai: new Date('2010-01-01'),
        timId_tim: timA.id_tim,
        created_at: utc7Time, 
        updated_at: utc7Time, 
      },
    ]
  });

  console.log('Pelatih telah dibuat:', pelatihA);

  // Seeder untuk Wasit
  const wasitA = await prisma.wasit.createMany({
    data: [
      {
        name: 'Alice Brown',
        usia: 35,
        pengalaman: '5 tahun menjadi wasit',
        sertifikasi: 'FIVB Certified',
        tanggalMulai: new Date('2018-01-01'),
        posisi: PosisiWasit.WASIT_UTAMA,
        created_at: utc7Time, 
        updated_at: utc7Time, 
      },
      {
        name: 'Sukro',
        usia: 36,
        pengalaman: '5 tahun menjadi wasit',
        sertifikasi: 'FIVB Certified',
        tanggalMulai: new Date('2018-01-01'),
        posisi: PosisiWasit.WASIT_GARIS,
        created_at: utc7Time, 
        updated_at: utc7Time, 
      },
      {
        name: 'Julian',
        usia: 30,
        pengalaman: '5 tahun menjadi wasit',
        sertifikasi: 'FIVB Certified',
        tanggalMulai: new Date('2018-01-01'),
        posisi: PosisiWasit.WASIT_PENCATAT_SKOR,
        created_at: utc7Time, 
        updated_at: utc7Time, 
      },
    ]
  });

  console.log('Wasit telah dibuat:', wasitA);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
