<template>
  <div class="container-fluid">
    <div class="header row p-3">
      <div class="col-4 col-lg-1">
        <title>Seksi Pendidikan Madrasah</title>
        <img src="../assets/img/kemenag.png" alt="Logo kemenag" class="img-fluid rounded">
      </div>
      <div class="col-8 col-lg-10">
        <h1 class="mb-0">Seksi Pendidikan Madrasah</h1>
        <address class="mb-0">
          Jl. Ahmad Yani No.75, Lengkongsari, Kec. Tawang, Kab. Tasikmalaya, Jawa Barat 46111
        </address>
      </div>
    </div>

    <div class="p-2 nav-bar row">
      <div class="col-12">
        <ul class="d-flex list-unstyled mb-0 menu justify-content-end">
          <li class="me-3">
            <NuxtLink to="/" class="nav-link">Beranda</NuxtLink>
          </li>
          <li class="me-3 dropdown">
            <a href="#" class="btn dropdown-toggle">Profil</a>
            <ul class="dropdown-menu">
              <li>
                <NuxtLink to="/profil/sejarah" class="dropdown-item">Sejarah</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/profil/identitas" class="dropdown-item">Identitas Seksi pendidikan Madrasah</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/profil/visi" class="dropdown-item">Visi dan Misi</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/profil/guru" class="dropdown-item">Staf dan Tenaga kepegawaian</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/profil/data" class="dropdown-item">Data</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="me-3">
            <NuxtLink to="/berita" class="nav-link">Berita</NuxtLink>
          </li>
          <li class="me-3">
            <NuxtLink to="/galeri" class="nav-link">Galeri</NuxtLink>
          </li>
          <li class="me-3 dropdown">
            <a href="#" class="btn dropdown-toggle">Bagian</a>
            <ul class="dropdown-menu">
              <li>
                <NuxtLink to="/siswa/GTK" class="dropdown-item">GTK</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/siswa/Sarpras" class="dropdown-item">Sarpras</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/siswa/Kesiswaan" class="dropdown-item">Kesiswaan</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/siswa/Arsiparis" class="dropdown-item">Arsiparis</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/siswa/TKPDD" class="dropdown-item">Tenaga Kependidikan</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="me-3">
            <NuxtLink to="/kontak" class="nav-link">Hubungi kami</NuxtLink>
          </li>
          <li class="me-3">
            <NuxtLink to="/biodata" class="nav-link">PEMBUAT</NuxtLink>
          </li>
          <li class="me-3">
            <NuxtLink to="/LOGIN" class="nav-link">LOGIN</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container-fluid {
  background-color: #ffffff;
  color: #000000;
}

.header {
  border-bottom: 4px solid #fcd116; /* Garis kuning di bawah header */
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header img {
  height: 60px; /* Ukuran logo lebih kecil agar proporsional */
  width: auto;
}

.header h1 {
  font-size: 18px; /* Ukuran teks lebih kecil */
  font-weight: 700;
  margin-bottom: 0.2rem; /* Jarak bawah kecil */
}

.header address {
  font-size: 14px; /* Ukuran teks alamat lebih kecil */
  margin: 0;
  font-style: normal;
}

.nav-bar {
  background-color: #224e72;
  border-top: 4px solid #fcd116; /* Garis kuning di atas menu */
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-link,
.btn {
  color: #ffffff;
  text-decoration: none;
  font-size: 15px;
  padding: 8px 15px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.nav-link:hover,
.dropdown-item:hover,
.btn:hover {
  background-color: #1d3557; /* Biru tua saat hover */
  color: #ffffff;
  border-radius: 4px;
}

.menu {
  display: flex;
  gap: 1.5rem; /* Jarak antar item menu */
  align-items: center;
  margin: 0;
}

.dropdown-menu {
  display: none;
  position: absolute;
  margin-top: 0.8rem;
  padding: 0.5rem 0;
  background-color: #00509e;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu .dropdown-item {
  color: #ffffff;
  padding: 10px 15px;
  font-size: 14px;
  background-color: transparent;
  transition: background-color 0.3s;
}

.dropdown-menu .dropdown-item:hover {
  background-color: #003f7d; /* Biru lebih gelap saat hover */
}

/* Ikon dan aplikasi */
.header-icons {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-icons img {
  height: 40px;
  width: auto;
}
</style>