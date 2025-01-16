<template>
  <div :key="$route.fullPath">
    <FormatoFondo></FormatoFondo>
    <ModulesBar></ModulesBar>
    <FooterComponet></FooterComponet>
  </div>
</template>

<script setup>
  import FormatoFondo from '@/modules/home/FormatoFondo.vue';
  import ModulesBar from '@/modules/home/ModulesBar.vue'
  import FooterComponet from '../components/FooterComponet.vue'
</script>
