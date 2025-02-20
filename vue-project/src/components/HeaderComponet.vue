<template>
  <header
    class="aaaa fixed inset-x-0 top-0 z-50 px-2 text-white opacity-99 shadow-lg"
    v-for="modulo in filteredModulos" :key="modulo.id"
  >
    <nav class="flex items-center justify-between p-2" aria-label="Global">
      <div class="flex">
        <span class="sr-only">{{ home.nombre }}</span>
        <img
          class="h-16 w-auto cursor-pointer lg:h-16"
          :src="home.logo[0].url"
          alt=""
          @click="paginaPrincipal()"
        >
      </div>
      <div class="barrido flex gap-x-4 pl-5">
        <p class="text-lg font-black text-gray-200 cursor-pointer hidden lg:block" @click="paginaPrincipal()"> {{ modulo.nombre }} </p>
        <p class="text-lg font-black text-gray-200 hidden lg:block"> > </p>
        <div v-for="sub in modulo.subModulo" :key="sub.id">
          <p class="text-sm font-black text-gray-50 cursor-pointer sm:text-lg" @click="paginaSubmodulo(modulo.id, sub.id)"> {{ sub.nombre }} </p>
        </div>
      </div>
      <div class="flex flex-1 justify-end">
        <button
          class="px-2 py-2 text-md shadow-md rounded transition-colors duration-500 md:px-4 md:text-lg"
          @click="isModalOpen = true"
          :class="[
            `bg-${modulo.color}-900`,
            'text-white',
            'hover:bg-gray-100 hover:text-gray-800'
          ]"
        >
          Cuestionario
        </button>

        <transition
          name="modal-fade"
          appear
          @before-enter="onBeforeEnter"
          @after-leave="onAfterLeave"
        >
          <div
            v-if="isModalOpen"
            class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
          >
            <div
              class="fixed inset-0 bg-opacity-90 flex justify-center items-center text-gray-900"
              v-for="modulo in filteredModulos" :key="modulo.id"
              :class="`bg-${modulo.color}-900`"
            >
              <div class="bg-gray-200 w-2/3 text-lg p-5 rounded-lg bg-opacity-150 shadow-lg relative max-h-[90vh] overflow-y-auto">
                <ModalContenido/>
                <!-- Botón para cerrar el modal -->
                <button
                  class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  @click="isModalOpen = false"
                >
                  ✖
                </button>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script setup>
  import { ref } from "vue";
  import { home } from '@/data/home';
  import { modulos } from '@/data/modulos';
  import { useRouter } from 'vue-router';
  import ModalContenido from "@/modules/contenidoModulo/modalContenido.vue";

  const pathSegments = ref(window.location.pathname.split("/"));
  const mainId = ref(pathSegments.value[2]);
  const subId = ref(pathSegments.value[3]);

  const filteredModulos = modulos.modulos
  .filter(modulo => modulo.id === mainId.value)
  .map(modulo => ({
      ...modulo,
      subModulo: modulo.subModulo.filter(sub => sub.id === subId.value)
  }));

  const router = useRouter();
  function paginaPrincipal() {
    router.push({
      path: `/`
    });
  }

  function paginaSubmodulo(mainId, subId) {
    router.push({
      path: `/submodulo/${mainId}/${subId}`,
    });
  }

  const isModalOpen = ref(false);

  const onBeforeEnter = () => {
    console.log("Transición de entrada iniciada");
  };

  const onAfterLeave = () => {
    console.log("Transición de salida completada");
  };
</script>

<style>
  .aaaa{  background: #123524;}
  .barrido {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    background-size: 300%;
  }

  .modal-fade-enter-active, .modal-fade-leave-active {
    transition: opacity 0.1s ease, transform 0.1s ease;
  }
  .modal-fade-enter-from {
    opacity: 0;
    transform: scale(0.9);
  }
  .modal-fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }
</style>
