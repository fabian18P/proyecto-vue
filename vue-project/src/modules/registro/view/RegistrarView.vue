<template>
    <div>
        <h2>FORMULARIO DE REGISTRO</h2>
        <Form :validation-schema="schema" @submit="">
            <div class="form">
                <label for="nombre">Nombre:</label>
                <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" />
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            <div class="form">
                <label for="correo">Correo:</label>
                <Field v-model="email" type="email" name="email" id="email" placeholder="Ingrese su email" />
                <ErrorMessage name="email"></ErrorMessage>
            </div>
            <div class="form">
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {Form, Field, ErrorMessage} from 'vee-validate';
import { schema } from '../schemas/validationSchemas';

import { useRegistrarStore } from '../stores/registrarStore';
const registrarStore = useRegistrarStore()

const nombre = ref('')
const email = ref('')
const onSubmit = () => {
    registrarStore.guardarRegistro(nombre.value, email.value)
    console.log('Se ha enviado el formulario')
}
</script>

<style scoped>
.form{margin-bottom: 10px;}
</style>