<template>
  <div id="app" class="texto">
    <!-- Pantalla de carga -->
    <transition name="fade" mode="out-in">
      <div v-if="isLoading" class="loading-screen">
        <h1
          class="titulo text-5xl font-black flex items-center justify-center h-screen text-center text-amber-100
                xl:text-9xl
          "
        >
          {{ home.nombre }}
        </h1>
      </div>
    </transition>

    <!-- Contenido principal con la solución correcta -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" v-if="!isLoading" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'; // Importar helpers de Vue
  import { useRouter } from 'vue-router'; // Hook para el router
  import { home } from './data/home'; // Importar el objeto home

  // Estado reactivo para la pantalla de carga
  const isLoading = ref(false);

  // Router para manejar eventos de navegación
  const router = useRouter();

  // Configurar eventos del router
  onMounted(() => {
    router.beforeEach((to, from, next) => {
      isLoading.value = true; // Mostrar pantalla de carga
      setTimeout(() => next(), 100); // Simular carga
    });

    router.afterEach(() => {
      setTimeout(() => {
        isLoading.value = false; // Ocultar pantalla de carga
      }, 500); // Transición suave
    });
  });
</script>

<style>
  /* Estilos para la pantalla de carga */
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #123524;

    font-size: 2rem;
    z-index: 9999;
  }

  /* Transición suave */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .texto {
    white-space: pre-line;
  }
</style>
