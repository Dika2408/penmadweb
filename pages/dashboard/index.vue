<template>
    <div class="wrapper">
      <!-- Navbar -->
      <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
          </li>
        </ul>
      </nav>
      
      <!-- Sidebar -->
      <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/dashboard" class="brand-link">
          <img src="@/assets/img/logo.png" alt="Logo" class="brand-image img-circle elevation-3">
          <span class="brand-text font-weight-light">AdminLTE</span>
        </a>
        <div class="sidebar">
          <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" role="menu">
              <li class="nav-item">
                <NuxtLink to="/dashboard" class="nav-link active">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/siswa" class="nav-link">
                  <i class="nav-icon fas fa-users"></i>
                  <p>Data Siswa</p>
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/guru" class="nav-link">
                  <i class="nav-icon fas fa-user-tie"></i>
                  <p>Data Guru</p>
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/logout" class="nav-link">
                  <i class="nav-icon fas fa-sign-out-alt"></i>
                  <p>Logout</p>
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      
      <!-- Content Wrapper -->
      <div class="content-wrapper p-3">
        <div class="row">
          <div class="col-lg-3 col-6">
            <div class="small-box bg-info">
              <div class="inner">
                <h3>3</h3>
                <p>Pengawas Seksi</p>
              </div>
              <div class="icon">
                <i class="fas fa-user-shield"></i>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-6">
            <div class="small-box bg-danger">
              <div class="inner">
                <h3>8</h3>
                <p>Siswa</p>
              </div>
              <div class="icon">
                <i class="fas fa-users"></i>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-6">
            <div class="small-box bg-success">
              <div class="inner">
                <h3>4</h3>
                <p>Guru</p>
              </div>
              <div class="icon">
                <i class="fas fa-user-tie"></i>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-6">
            <div class="small-box bg-warning">
              <div class="inner">
                <h3>9</h3>
                <p>Ruang Kelas</p>
              </div>
              <div class="icon">
                <i class="fas fa-school"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .wrapper {
    display: flex;
  }
  </style>