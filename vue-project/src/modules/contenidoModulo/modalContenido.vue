<template>
  <div v-for="modulo in filteredModulos" :key="modulo.id" class="font-serif">
    <h2
        class="text-4xl pt-4 mb-4 text-center"
        v-for="sub in modulo.subModulo" :key="sub.id"
        :class="`text-${modulo.color}-900`"
    >
        {{ sub.nombre }}
    </h2>

    <!-- Renderizar información del cuestionario -->
    <p
      class="mb-4 pl-0 pr-0 text-justify
          md:pl-16 md:pr-16 md:text-lg
      "
      v-if="selectedCuestionario && !showResultadoFinal"
    >
    Antes de estudiar <strong> {{ selectedCuestionario.descripcion }} </strong>, compruebe cuánto conoce de este tema. Al finalizar puede intentarlo de nuevo.
    </p>

    <!-- Mostrar pregunta o resultado -->
    <div v-if="!showResultadoFinal" >
        <div v-if="currentPregunta">
            <!-- Mostrar problema -->
            <p
                class="mb-0 pl-0 pr-0 text-base text-justify
                    md:pl-16 md:pr-16 md:text-lg md:mb-6
                "
            >
                <strong> Pregunta: </strong> {{ currentPregunta.problema }}
            </p>

            <!-- Mostrar imágenes -->
            <div
                class="mb-4"
                v-for="(img, index) in currentPregunta.img" :key="index"
            >
                <img
                    v-if="img.url !== ''"
                    class="w-1/2 mx-auto rounded shadow-md"
                    :src="img.url"
                    :alt="img.descripcion"
                />
                <p class="text-center pt-2 text-xs">{{ img.descripcion }}</p>
            </div>

            <!-- Mostrar alternativas -->
            <ul
                class="pl-0 pr-0 text-sm text-justify
                    md:pl-20 md:pr-20 md:text-base
                "
            >
                <li
                    v-for="(alt, index) in currentPregunta.alternativa"
                    :key="index"
                    class="mb-2 pb-3"
                >
                <label>
                    <input
                        type="radio"
                        :value="alt"
                        v-model="selectedAlternativa"
                        class="mr-2 appearance-none w-4 h-4 bg-gray-500 rounded-full shadow-md checked:bg-green-500 focus:ring-2 focus:ring-green-300"
                    />
                    {{ alt.respuesta }}
                </label>
                </li>
            </ul>

            <!-- Mostrar explicación -->
            <div
                v-if="showExplicacion"
                class="font-semibold mt-3 p-0 pl-2 pt-4 pb-4 pr-2 text-xs border-4 border-gray-400
                    md:mt-4 md:p-2 md:pl-10 md:pr-10 md:text-base
                "
            >
                <p>
                    <!-- Mostrar solo la respuesta correcta -->
                    La respuesta correcta es:
                    <strong> {{ currentPregunta.alternativa.find(alt => alt.validez).respuesta }} </strong>
                </p>
                <p> {{ currentPregunta.explicacion }} </p>
            </div>

            <!-- Botones dinámicos -->
            <div class="mt-4 flex justify-end gap-2 mx-auto pb-4" v-if="!showResultadoFinal">
                <!-- Botón "Aceptar" -->
                <button
                    v-if="!showSiguiente"
                    @click="handleAceptar"
                    class="bg-blue-500 text-white px-4 py-2 rounded mx-auto shadow-md hover:bg-gray-900 transition-colors duration-500"
                    :class="`bg-${modulo.color}-600`"
                >
                Aceptar
                </button>

                <!-- Botón "Siguiente" -->
                <button
                    v-if="showSiguiente && !isLastQuestion"
                    @click="goToNextPregunta"
                    class="bg-blue-700 text-white px-4 py-2 rounded mx-auto shadow-md hover:bg-blue-900 transition-colors duration-500"
                >
                Siguiente
                </button>

                <!-- Botón "Ver Resultado" -->
                <button
                    v-if="isLastQuestion && showSiguiente"
                    @click="showResultado"
                    class="bg-green-500 text-white px-4 py-2 rounded mx-auto shadow-md hover:bg-green-600 transition-colors duration-500"
                >
                Ver Resultado
                </button>
            </div>
        </div>
        <div v-else class="font-semibold text-center">
            No existen más preguntas en este cuestionario.
        </div>
    </div>

    <!-- Mostrar resultado final -->
    <div v-else class="text-center">
        <p class="mb-4 text-center"> {{ selectedCuestionario.descripcion }} </p>
        <h3 class="text-xl font-bold mb-4">Resultado Final</h3>
        <p class="text-3xl font-bold text-green-500">{{ puntaje }}/{{ selectedCuestionario.pregunta.length }}</p>
    </div>
    </div>

</template>

<script setup>
    import { cuestionario } from "@/data/cuestionario";
    import { ref } from "vue";
    import { modulos } from "@/data/modulos";

    // Obtener el cuestionario actual desde la URL
    const pathSegments = window.location.pathname.split("/");
    const mainId = pathSegments[2]; // "1"
    const subId = pathSegments[3]; // "11"
    const selectedCuestionario = cuestionario.cuestionario.find(
    (item) => item.id === subId
    );

    // Computed para filtrar Modulos
    const filteredModulos = modulos.modulos
    .filter(modulo => modulo.id === mainId)
    .map(modulo => ({
        ...modulo,
        subModulo: modulo.subModulo.filter(sub => sub.id === subId)
    }));

    // Estado
    const currentIndex = ref(0);
    const puntaje = ref(0);
    const selectedAlternativa = ref(null);
    const showExplicacion = ref(false);
    const showSiguiente = ref(false);
    const showResultadoFinal = ref(false); // Control para mostrar el resultado final

    // Estado inicial de la pregunta
    const currentPregunta = ref(
    selectedCuestionario ? selectedCuestionario.pregunta[currentIndex.value] : null
    );

    // Controla si estamos en la última pregunta
    const isLastQuestion = ref(
    selectedCuestionario && currentIndex.value === selectedCuestionario.pregunta.length - 1
    );

    // Función para manejar el botón "Aceptar"
    const handleAceptar = () => {
    if (!selectedAlternativa.value) {
        alert("Seleccione una opción.");
        return;
    }

    // Incrementar el puntaje si la respuesta es correcta
    if (selectedAlternativa.value.validez) {
        puntaje.value++;
    }

    // Mostrar explicación y habilitar siguiente paso
    showExplicacion.value = true;
    showSiguiente.value = true;

    // Verificar si es la última pregunta
    isLastQuestion.value = currentIndex.value === selectedCuestionario.pregunta.length - 1;
    };

    // Función para ir a la siguiente pregunta
    const goToNextPregunta = () => {
    if (isLastQuestion.value) return;

    // Avanzar al siguiente índice
    currentIndex.value++;

    // Actualizar pregunta actual
    currentPregunta.value = selectedCuestionario.pregunta[currentIndex.value];

    // Restablecer estados
    showExplicacion.value = false;
    showSiguiente.value = false;
    selectedAlternativa.value = null;

    // Verificar si es la última pregunta
    isLastQuestion.value = currentIndex.value === selectedCuestionario.pregunta.length - 1;
    };

    // Mostrar resultado final
    const showResultado = () => {
    showResultadoFinal.value = true; // Mostrar el puntaje en el modal
    };
</script>

<style>
.colorFondoModal{ background-color: #e6e6e6; }
</style>
