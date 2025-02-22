<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h2 class="text-center">Login</h2>
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" class="form-control" v-model="email">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" v-model="password">
              </div>
              <button type="submit" class="btn btn-primary btn-block">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
  return {
    email: 'dika@gmail.com',
    password: '12345678'
  };
},

  methods: {
    login() {
      // Logic untuk login disini
      // Misalnya menggunakan axios untuk mengirim request ke server
      axios.post('/login', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        // Jika login berhasil, redirect ke halaman dashboard
        this.$router.push({ name: 'dashboard' })
      })
      .catch(error => {
        // Jika login gagal, tampilkan pesan error
        console.log(error)
      })
    }
  }
}
</script>