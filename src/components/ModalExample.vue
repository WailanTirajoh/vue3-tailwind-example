<script setup lang="ts">
import { ref } from "vue";
import code from "../code/modal-example";
const codeExample = ref(code);
</script>
<template>
  <h2 class="text-2xl font-bold">Modal</h2>
  <hr class="my-2 border" />
  <tw-modal :full-height="false">
    <template #button>
      <TwButton> Modal </TwButton>
    </template>
    <template #header>
      <div>Header</div>
    </template>
    <template #body>
      <div>Body</div>
    </template>
    <template #footer>
      <div>Footer</div>
    </template>
  </tw-modal>
  <div>
    <CodeHighlight language="html">
      <code>{{ codeExample }}</code>
    </CodeHighlight>
  </div>
</template>
