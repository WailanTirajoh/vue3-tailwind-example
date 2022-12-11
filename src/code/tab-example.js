export default `<script setup lang="ts">
import { ref } from "vue";

const horizontalTab = ref();
const tabs = ref([
  {
    name: "Tab 1",
    ref: "tab1",
  },
  {
    name: "Tab 2",
    ref: "tab2",
  },
  {
    name: "Tab 3",
    ref: "tab3",
  },
]);
const currentTab = ref("tab1");

const handleAfterMove = (newTab: string) => {
  currentTab.value = newTab;
  horizontalTab.value.changeTab(currentTab.value);
};
</script>

<template>
<tw-tab
    ref="horizontalTab"
    type="horizontal"
    position="bottom"
    :tabs="tabs"
    :current-tab="currentTab"
    nav-class="px-2 rounded-t gap-2 py-2"
    tab-class="p-2 text-gray-900 rounded"
    line-class="!bg-gray-700 rounded-t"
    tab-active-class="!font-bold"
    body-class="bg-white shadow border rounded-b"
    @after-move="handleAfterMove"
>
    <template #tab1> Tab 1 template </template>
    <template #tab2> Tab 2 template </template>
    <template #tab3> Tab 3 template </template>
</tw-tab>
</template>
`;
