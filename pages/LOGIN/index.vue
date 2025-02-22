<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h2 class="text-center">Login</h2>
            <form @submit.prevent="login">
              <div class="form-group mb-3">
                <label for="email">Email</label>
                <input type="email" id="email" class="form-control" v-model="email" required>
              </div>
              <div class="form-group mb-3">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" v-model="password" required>
              </div>
              <button type="submit" class="btn btn-primary btn-block w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const login = () => {
    if (email.value === 'admin@example.com' && password.value === 'admin123') {
      document.cookie = "user=admin; path=/";
      router.push('/dashboard');
    } else {
      alert('Login gagal! Periksa kembali email dan password.');
    }
  };
  </script>
  
  <style scoped>
  .container {
    height: 100vh;
  }
  </style>
  