<template>
  <div class="container my-4">
    <h2 class="text-center text-primary mb-4">Data Tenaga Pendidik Madrasah</h2>

    <!-- Jenis Pegawai -->
    <div class="row mb-4">
      <div class="col-md-12">
        <div class="card shadow-sm border-0">
          <div class="card-body bg-primary text-white text-center rounded">
            <h5 class="card-title">Jenis Pegawai</h5>
            <div class="row">
              <div class="col"><strong>PNS:</strong> 310</div>
              <div class="col"><strong>PPPK:</strong> 54</div>
              <div class="col"><strong>NON ASN:</strong> 2186</div>
              <div class="col"><strong>Semua Pegawai:</strong> 2550</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Grafik dan Data Visualisasi -->
    <div class="row">
      <!-- Data Guru Berdasarkan Jenjang -->
      <div class="col-md-6 mb-4">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <h5 class="card-title text-primary">Data Guru Berdasarkan Jenjang</h5>
            <canvas id="dataGuruChart"></canvas>
          </div>
        </div>
      </div>

      <!-- Tunjangan Profesi Guru ASN -->
      <div class="col-md-6 mb-4">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <h5 class="card-title text-primary">Tunjangan Profesi Guru ASN</h5>
            <canvas id="tunjanganASNChart"></canvas>
          </div>
        </div>
      </div>

      <!-- Tunjangan Profesi Guru NON ASN -->
      <div class="col-md-6 mb-4">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <h5 class="card-title text-primary">Tunjangan Profesi Guru NON ASN</h5>
            <canvas id="tunjanganNonASNChart"></canvas>
          </div>
        </div>
      </div>

      <!-- Penerima TPG Berdasarkan Jenjang -->
      <div class="col-md-6 mb-4">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <h5 class="card-title text-primary">Penerima TPG Berdasarkan Jenjang</h5>
            <canvas id="penerimaTPGChart"></canvas>
          </div>
        </div>
      </div>

      <!-- Penerima Tunjangan Profesi Guru -->
      <div class="col-md-12 mb-4">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <h5 class="card-title text-primary">Penerima Tunjangan Profesi Guru</h5>
            <canvas id="penerimaTunjanganChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import Chart from "chart.js/auto";

export default {
  name: "MadrasahData",
  setup() {
    onMounted(() => {
      // Data Guru Berdasarkan Jenjang
      new Chart(document.getElementById("dataGuruChart"), {
        type: "bar",
        data: {
          labels: ["RA", "MI", "MTs", "MA"],
          datasets: [
            {
              label: "Jumlah Guru",
              data: [550, 599, 785, 531],
              backgroundColor: "#007bff",
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      // Tunjangan Profesi Guru ASN
      new Chart(document.getElementById("tunjanganASNChart"), {
        type: "doughnut",
        data: {
          labels: ["Belum Layak", "Layak"],
          datasets: [
            {
              data: [0.7, 99.3],
              backgroundColor: ["#ffc107", "#28a745"],
            },
          ],
        },
      });

      // Tunjangan Profesi Guru NON ASN
      new Chart(document.getElementById("tunjanganNonASNChart"), {
        type: "doughnut",
        data: {
          labels: ["Belum", "Inpassing"],
          datasets: [
            {
              data: [69.0, 31.0],
              backgroundColor: ["#6c757d", "#17a2b8"],
            },
          ],
        },
      });

      // Penerima TPG Berdasarkan Jenjang
      new Chart(document.getElementById("penerimaTPGChart"), {
        type: "bar",
        data: {
          labels: ["RA", "MI", "MTs", "MA"],
          datasets: [
            {
              label: "Penerima TPG",
              data: [238, 334, 418, 193],
              backgroundColor: "#dc3545",
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      // Penerima Tunjangan Profesi Guru
      new Chart(document.getElementById("penerimaTunjanganChart"), {
        type: "bar",
        data: {
          labels: ["PNS", "PPPK", "Inpassing", "Non-Inpassing"],
          datasets: [
            {
              label: "Jumlah",
              data: [275, 23, 798, 81],
              backgroundColor: ["#007bff", "#6f42c1", "#28a745", "#dc3545"],
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    });
  },
};
</script>

<style>
body {
  background-color: #f8f9fa;
}
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
h5 {
  color: #343a40;
}
.text-primary {
  color: #007bff !important;
}
.bg-primary {
  background-color: #007bff !important;
}
</style>
