export default `<script setup lang="ts">
import { ref } from "vue";

const fileModel = ref([]);
const selectExample = ref();
const multiSelectExample = ref([]);
const inputExample = ref();
const toggleExample = ref();

const selectionList = [
  {
    label: "test",
    value: "test",
  },
  {
    label: "test2",
    value: "test2",
  },
  {
    label: "test3",
    value: "test3",
  },
];
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">Form</h2>
    <hr class="my-2 border" />
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-12">
        <tw-file v-model="fileModel" />
        <div>Result:</div>
        <pre>{{ fileModel }}</pre>
      </div>
      <div class="col-span-12">
        <tw-input
          v-model="inputExample"
          label="Input"
          placeholder="Input Field"
          type="text"
        />
        <div>Result:</div>
        <pre>{{ inputExample }}</pre>
      </div>
      <div class="col-span-12">
        <tw-select
          v-model="selectExample"
          :items="selectionList"
          label="Single Select"
          placeholder="Choose select"
        />
        <div>Result:</div>
        <pre>{{ selectExample }}</pre>
      </div>
      <div class="col-span-12">
        <tw-multi-select
          v-model="multiSelectExample"
          :items="selectionList"
          label="Multi Select"
          placeholder="Choose select"
        />
        <div>Result:</div>
        <pre>{{ multiSelectExample }}</pre>
      </div>
      <div class="col-span-12">
        <tw-toggle v-model="toggleExample" label="Toggle" />
        <div>Result:</div>
        <pre>{{ toggleExample }}</pre>
      </div>
    </div>
  </div>
</template>
`;
