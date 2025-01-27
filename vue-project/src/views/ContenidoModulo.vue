<template>
  <HeaderComponet />
  <div class="contenedor pt-20 h-auto w-auto text-justify">
    <div class="section-left w-full bg-amber-50">
      <!-- Iteración de módulos filtrados -->
      <div v-for="modulo in filteredModulos" :key="modulo.id">
        <!-- Iteración de submódulos filtrados -->
        <div v-for="sub in modulo.subModulo" :key="sub.id">
          <!-- Iteración de secciones filtradas -->
          <div v-for="seccion in sub.seccion" :key="seccion.id">
            <!-- Iteración de contenido -->
            <div 
              class="w-auto pb-16"
              v-for="(contenido, index) in seccion.contenido" 
              :key="index"
              :class="[index % 2 === 0 ? 'bg-gray-200' : `bg-${modulo.color}-600 text-gray-100`]"
            >
              <div class="flex flex-wrap">
                <!-- Sección izquierda -->
                <div class="w-full lg:w-1/2 p-5 text-lg">
                  <p class="font-bold text-5xl pb-4">{{ contenido.subTitulo }}</p>
                  <p v-html="contenido.descripcion"></p>
                </div>

                <!-- Sección derecha -->
                <div class="w-full lg:w-1/2 p-5 flex flex-col items-center">
                  <div 
                    class="mb-5 text-center"
                    v-for="imagen in contenido.imagen" 
                    :key="imagen.url" 
                  >
                    <img
                      class="w-1/2 mx-auto rounded shadow-md"
                      :src="imagen.url"
                      alt="Imagen de ejemplo"
                    />
                    <p
                      class="mt-2 text-sm pt-2"
                      :class="[index % 2 === 0 ? 'text-gray-800' : `text-gray-100`]"  
                    >{{ imagen.descripcion }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterContenido />
</template>

<script setup>
  import HeaderComponet from "@/components/HeaderComponet.vue";
  import FooterContenido from "@/modules/contenidoModulo/footerContenido.vue";
  import { modulos } from "@/data/modulos";

  // Función para obtener valores desde la URL actual
  const pathSegments = window.location.pathname.split("/"); // Divide la URL por "/"
  const mainId = pathSegments[2];
  const subId = pathSegments[3];
  const seccionId = pathSegments[4];

  // Computed para filtrar
  const filteredModulos = modulos.modulos
  .filter((modulo) => modulo.id === mainId) // Filtrar el módulo principal por mainId
  .map((modulo) => ({
    ...modulo,
    subModulo: modulo.subModulo
      .filter((sub) => sub.id === subId) // Filtrar submódulo por subId
      .map((sub) => ({
        ...sub,
        seccion: sub.seccion.filter((seccion) => seccion.id === seccionId), // Filtrar secciones por seccionId
      })),
  }));
</script>