<template>
  <footer class="foot text-white py-4">
    <div class="container">
      <div class="row">
        <!-- Alamat -->
        <div class="col-md-3 mb-3">
          <h5>Alamat</h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4706.029179560018!2d108.22284213787623!3d-7.322067553198859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5753dbf31a07%3A0x5a8dc9882a57e161!2sKantor%20Kementerian%20Agama%20Kota%20Tasikmalaya!5e0!3m2!1sid!2sid!4v1737786401816!5m2!1sid!2sid"
            width="250" height="180" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <!-- Kontak -->
        <div class="col-md-3 mb-3">
          <h5>Hubungi Kami</h5>
          <p class="mb-1">+6222222222</p>
          <p class="mb-1">info@smkn4tsm.sch.id</p>
        </div>

        <!-- Ikuti Kami -->
        <div class="col-md-3 mb-3">
          <h5>Sosial Media</h5>
          <ul class="list-unstyled">
            <li><a href="https://www.facebook.com/4smkn" class="text-white text-decoration-none">Facebook</a></li>
            <li><a href="https://x.com/4smkn" class="text-white text-decoration-none">Twitter</a></li>
            <li><a href="https://www.instagram.com/smkn4tasikmalaya/#"
                class="text-white text-decoration-none">Instagram</a></li>
          </ul>
        </div>

        <!-- Tautan -->
        <div class="col-md-3 mb-3">
          <h5>Link Eksternal</h5>
          <ul class="list-unstyled">
            <li><a href="https://www.kemdikbud.go.id/" class="text-white text-decoration-none">Kemendikbud</a></li>
            <li><a href="https://dapo.dikdasmen.kemdikbud.go.id/"
                class="text-white text-decoration-none">Dapodikdasmen</a></li>
            <li><a href="https://psmk.kemdikbud.go.id/" class="text-white text-decoration-none">PSMK</a></li>
            <li><a href="https://disdik.jabarprov.go.id/" class="text-white text-decoration-none">Disdik Jabar</a></li>
          </ul>
        </div>
      </div>

      <hr class="text-white" />
      <div class="text-center">
        <p class="mb-0">&copy; 2024. SMK NEGERI 4 Tasikmalaya. All rights reserved.</p>
        <p class="mb-0">Made With By DIKA, ROMO And ZEX</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.foot {
  background-color: #224e72;
}

.footer {
  font-size: 1rem;
  padding-top: 7px 20px;
}

</style>