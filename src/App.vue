<script setup lang="ts">
import ButtonExample from "./components/ButtonExample.vue";
import DatatableClientExample from "./components/DatatableClientExample.vue";
import FormExample from "./components/FormExample.vue";
import ModalExample from "./components/ModalExample.vue";
import OffcanvasExample from "./components/OffcanvasExample.vue";
import TabExample from "./components/TabExample.vue";
</script>
<template>
  <div class="flex justify-center py-4 bg-gray-300 min-h-screen">
    <div class="container grid gap-2">
      <div class="col-span-12 p-4 rounded-lg shadow-xl bg-gray-100">
        <FormExample />
      </div>
      <div class="col-span-12 p-4 rounded-lg shadow-xl bg-gray-100">
        <ButtonExample />
      </div>
      <div class="col-span-12 p-4 rounded-lg shadow-xl bg-gray-100">
        <TabExample />
      </div>
      <div class="col-span-12 p-4 rounded-lg shadow-xl bg-gray-100">
        <ModalExample />
      </div>
      <div class="col-span-12 p-4 rounded-lg shadow-xl bg-gray-100">
        <OffcanvasExample />
      </div>
      <div class="col-span-12 p-4 rounded-lg shadow-xl bg-gray-100">
        <DatatableClientExample />
      </div>
    </div>
  </div>
</template>
