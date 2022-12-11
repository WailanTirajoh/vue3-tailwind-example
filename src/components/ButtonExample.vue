<script setup lang="ts">
import { ref } from "vue";
import buttonExample from "../code/button-example";
const codeExample = ref(buttonExample);
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">Button</h2>
    <hr class="my-2 border" />
    <div class="grid grid-cols-12">
      <div class="col-span-12">
        <div
          class="grid gap-2 grid-cols-[repeat(auto-fill,_minmax(14rem,_1fr))] mb-2"
        >
          <tw-button variant="primary" :ripple="true">
            Primary Button with ripple
          </tw-button>
          <tw-button variant="secondary" :ripple="true">
            Secondary Button with ripple
          </tw-button>
          <tw-button variant="danger" :ripple="true">
            Danger Button with ripple
          </tw-button>
          <tw-button variant="primary"> Primary Button </tw-button>
          <tw-button variant="secondary"> Secondary Button </tw-button>
          <tw-button variant="danger"> Danger Button </tw-button>
          <tw-button icon="smile" variant="primary" icon-position="left">
            Button with Icon
          </tw-button>
          <tw-button icon="smile" variant="primary" icon-position="right">
            Button with Icon Right
          </tw-button>
          <tw-button icon="smile" variant="primary" :disabled="true">
            Disabled Button
          </tw-button>
          <tw-button
            icon="smile"
            variant="primary"
            :disabled="true"
            :loading="true"
          >
            Loading Button
          </tw-button>
          <tw-button
            icon="smile"
            variant="primary"
            text-position="left"
            :disabled="true"
            :loading="true"
          >
            Text Left
          </tw-button>
        </div>
      </div>
      <div class="col-span-12">
        <CodeHighlight language="html">
          <code>{{ codeExample }}</code>
        </CodeHighlight>
      </div>
    </div>
  </div>
</template>
