<template>
  <!-- Contenedor principal con diseño flex -->
  <div class="contenedor-modulos pt-4 mb-20
    sm:mb-0">
    <!-- Contenedor de tarjetas -->
    <div class="tarjetas">
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
        <h2 class="mb-2 font-semibold text-gray-50">
          {{ modulo.nombre }}
        </h2>
      </div>
    </div>

    <!-- Sección desplegable -->
    <div
      v-if="moduloSeleccionado !== null"
      class="w-5/6 p-2 bg-gray-200 rounded-lg animation-fade-up
        sm:w-full
      "
    >
      <!-- Botones dinámicos para submódulos -->
      <button
        v-for="(subModulo, index) in moduloSeleccionado.subModulo"
        :key="index"
        class="mx-auto mb-2 mt-2 px-4 py-2 w-2/3 text-white rounded shadow-md block hover:bg-gray-900 transition-colors duration-500"
        :class="`bg-${moduloSeleccionado.color}-700`"
        @click="navegarSubModulo(subModulo)"
      >
        {{ subModulo.nombre }}
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { modulos } from "@/data/modulos";
  import { useRouter } from "vue-router";

  const router = useRouter();
  function navegarSubModulo(subModulo) {
    if (moduloSeleccionado.value && subModulo) {
      router.push({
        path: `/submodulo/${moduloSeleccionado.value.id}/${subModulo.id}`,
      });
    } else {
      console.error(
        "No se pudo navegar: moduloSeleccionado o subModulo está indefinido."
      );
    }
  }

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
  /* Contenedor principal */
  .contenedor-modulos {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  /* Contenedor de tarjetas */
  .tarjetas {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }

  /* Tarjetas */
  .carta {
    text-align: center;
    flex: none; /* Evitar que las tarjetas cambien de tamaño */
    transition: transform 0.2s ease;
  }
  .carta:hover {
    transform: scale(1.02);
  }

  /* Animación para el desplegable */
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animation-fade-up {
    animation: fadeInUp 0.5s ease-out forwards;
  }
</style>