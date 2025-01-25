<template>
  <div class="container mt-5">
    <div class="text-center mb-4">
      <h1 class="text-warning">BIODATA DIRI</h1>
    </div>
    <div class="card shadow-sm">
      <div class="card-body">
        <!-- Informasi -->
        <h3 class="mb-3">Profil</h3>
        <div class="row mb-2">
          <div class="col-md-3 text-center">
            <img src="~/assets/biodata/pks.jpg" alt="" class="dika">
          </div>
          <div class="col-md-9">
            <ul class="list-group">
              <li class="list-group-item">Dika Dwi Setiyanto</li>
              <li class="list-group-item">KP. Ciwasmandi, KOTA TASIKMALAYA, PROVINSI JAWA BARAT</li>
              <li class="list-group-item">24-08-2006</li>
              <li class="list-group-item">Laki-Laki</li>
              <li class="list-group-item">ISLAM</li>
              <li class="list-group-item">(+62) 8953-3505-1836</li>
            </ul>
          </div>
          <div class="col-md-3 text-center">
            <img src="~/assets/biodata/pks.jpg" alt="" class="rama">
          </div>
          <div class="col-md-9">
            <ul class="list-group">
              <li class="list-group-item">Ahmad Rama Mauludin</li>
              <li class="list-group-item">JLN. CIBODAS, KOTA TASIKMALAYA, PROVINSI JAWA BARAT</li>
              <li class="list-group-item">15-03-2008</li>
              <li class="list-group-item">Laki-Laki</li>
              <li class="list-group-item">ISLAM</li>
              <li class="list-group-item">(+62) 858-7594-1538</li>
            </ul>
          </div>
        </div>
         
        <!-- Pendidikan -->
        <h3 class="mb-3">Pendidikan</h3>
        <ul class="list-group mb-4">
          <li v-for="(education, index) in biodata.education" :key="index" class="list-group-item">
            {{ education }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        biodata: {
          education: [
          '2022 - 2025 : SMK NEGERI 4 TASIKMALAYA ',
        ],
      }
    };
  }
};
</script>

<style>
  .container {
    max-width: 1500px;
    border-radius: 10px;
    font-family: Arial, sans-serif;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .text-warning {
    color: #33424e;
  }

  .card {
    border-radius: 10px;
    border: none;
  }

  .card-body {
    padding: 20px;
    background-color: #f8f9fa;
  }

  .aisiti {
    border-radius: 50%;
    max-width: 100%;
    height: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .list-group-item {
    border: none;
    padding: 10px 15px;
    background-color: transparent;
  }

  .list-group-item:nth-child(odd) {
    background-color: #f9f9f9;
  }

  .list-group-item:nth-child(even) {
    background-color: #ffffff;
  }

  h1, h3 {
    font-weight: bold;
  }

  ul {
    padding-left: 0;
  }

  .text-center {
    text-align: center;
  }
</style>