<template>
  <!-- Contenedor de tarjetas -->
  <div class="flex flex-wrap gap-4 pt-6">
    <div
      class="carta w-40 h-55 rounded-lg shadow-md cursor-pointer"
      v-for="(modulo, index) in modulos.modulos"
      :key="index"
      :class="`bg-${modulo.color}-900`"
      @click="alternarModulo(modulo)"
    >
      <!-- Imagen de la carta -->
      <img
        class="w-40 h-40"
        src="https://multimedia.uned.ac.cr/pem/planeta_planta/image/png/btn_estructura.png"
        alt="Imagen de ejemplo"
      />
      <!-- Título -->
      <h2 class="h-15 mb-2 font-semibold text-gray-50">
        {{ modulo.nombre }}
      </h2>
    </div>
  </div>

  <!-- Sección desplegable -->
  <div
    v-if="moduloSeleccionado !== null"
    class="mt-4 p-2 bg-gray-50 rounded-lg animation-fade-up"
  >
  <!-- Botones dinámicos para submódulos -->
    <button
      v-for="(subModulo, index) in moduloSeleccionado.subModulo"
      :key="index"
      class="mx-auto mb-2 mt-2 px-4 py-2 text-white rounded block hover:bg-gray-900 transition-colors duration-500"
      :class="`bg-${moduloSeleccionado.color}-700`"
      @click="llamarSubModulo(subModulo)"
    >
      {{ subModulo.nombre }}
    </button>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { modulos } from "@/data/modulos";

  // Estado para controlar el módulo seleccionado
  const moduloSeleccionado = ref(null);
  function alternarModulo(modulo) {
    if (moduloSeleccionado.value === modulo) {
      moduloSeleccionado.value = null; // Si ya está seleccionado, lo deselecciona
    } else {
      moduloSeleccionado.value = modulo; // Si no, selecciona el módulo
    }
  }
</script>

<style>
img { width: 100px; height: 100px; }
.carta {
  text-align: center;
  flex: auto;
  transition: transform 0.2s ease;
  z-index: 10;
} .carta:hover {
  transform: scale(1.02);
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
} .animation-fade-up {
  animation: fadeInUp 0.5s ease-out forwards;
}
</style>
