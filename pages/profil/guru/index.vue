<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Daftar Guru</h1>
    <div class="card-body">
      <div class="row gap-5">
        <div v-for="(guru, index) in displayedGuruList" :key="index" class="card guru-card mx-3">
          <div class="card-body">
            <img :src="guru.foto" class="card-img-top" alt="Foto Guru" />
            <h5 class="card-title">{{ guru.nama }}</h5>
            <p class="card-text">{{ guru.mapel }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-4" v-if="displayedGuruList.length < guruList.length">
      <button @click="loadMore" class="btn btn-primary">Lainnya</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import guru1 from "@/assets/staf/pks.jpg";
import guru2 from "@/assets/staf/pks.jpg";
import guru3 from "@/assets/staf/pks.jpg";
import guru4 from "@/assets/staf/pks.jpg";
import guru5 from "@/assets/staf/pks.jpg";
import guru6 from "@/assets/staf/pks.jpg";
import guru7 from "@/assets/staf/pks.jpg";
import guru8 from "@/assets/staf/pks.jpg";
import guru9 from "@/assets/staf/pks.jpg";


const guruList = [
  { nama: " pakasi ", mapel: "B . Inggris", foto: guru1 },
  { nama: " pa agus ", mapel: "B . Inggris", foto: guru2 },
  { nama: " pa eko ", mapel: "B . Inggris", foto: guru3 },
  { nama: " pa iffan ", mapel: "B . Inggris", foto: guru4 },
  { nama: " pa marli ", mapel: "B . Inggris", foto: guru5 },
  { nama: " pa ade ", mapel: "B . Inggris", foto: guru6 },
  { nama: " pa heppy ", mapel: "B . Inggris", foto: guru7 },
  { nama: " bu imas ", mapel: "B . Inggris", foto: guru8 },
  { nama: " bu ulfa ", mapel: "B . Inggris", foto: guru9 },
  { nama: " bu pipih ", mapel: "B . Inggris", foto: guru9 },
];


const displayedGuruList = ref(guruList.slice(0, 4)); 

const loadMore = () => {
  const currentLength = displayedGuruList.value.length;
  const nextGuruList = guruList.slice(currentLength, currentLength + 4);
  displayedGuruList.value.push(...nextGuruList);
};
</script>

<style scoped>
.container {
  margin-bottom: 70px;
}

.guru-card {
  min-width: 262px;
  max-width: 230px;
  flex: 0 0 auto;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.card-img-top {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.card-body {
  text-align: center;
}
</style>