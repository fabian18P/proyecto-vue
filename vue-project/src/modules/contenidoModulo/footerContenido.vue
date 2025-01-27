<template>
    <!-- Iteración de módulos filtrados -->
    <div 
      class="text-white py-4 fixed bottom-0 left-0 w-full"
      v-for="modulo in filteredModulos" :key="modulo.id"
      :class="`bg-${modulo.color}-800`"
    >
      <div class="container mx-auto text-center">
      <!-- Iteración de submódulos filtrados -->
        <div v-for="sub in modulo.subModulo" :key="sub.id">
          <!-- Iteración de secciones filtradas -->
          <div v-for="seccion in sub.seccion" :key="seccion.id">
            <p class="text-lg font-black"> {{ seccion.nombre }} </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
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