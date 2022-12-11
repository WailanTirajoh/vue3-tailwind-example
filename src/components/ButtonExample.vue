<script setup lang="ts"></script>

<template>
  <div>
    <h2 class="text-2xl font-bold">Button</h2>
    <hr class="my-2 border" />
    <div class="grid grid-cols-12">
      <div class="col-span-12">
        <div
          class="grid gap-2 grid-cols-[repeat(auto-fill,_minmax(14rem,_1fr))] mb-2"
        >
          <TwButton variant="primary" :ripple="true">
            Primary Button with ripple
          </TwButton>
          <TwButton variant="secondary" :ripple="true">
            Secondary Button with ripple
          </TwButton>
          <TwButton variant="danger" :ripple="true">
            Danger Button with ripple
          </TwButton>
          <TwButton variant="primary"> Primary Button </TwButton>
          <TwButton variant="secondary"> Secondary Button </TwButton>
          <TwButton variant="danger"> Danger Button </TwButton>
          <TwButton icon="smile" variant="primary" icon-position="left">
            Button with Icon
          </TwButton>
          <TwButton icon="smile" variant="primary" icon-position="right">
            Button with Icon Right
          </TwButton>
          <TwButton icon="smile" variant="primary" :disabled="true">
            Disabled Button
          </TwButton>
          <TwButton
            icon="smile"
            variant="primary"
            :disabled="true"
            :loading="true"
          >
            Loading Button
          </TwButton>
          <TwButton
            icon="smile"
            variant="primary"
            text-position="left"
            :disabled="true"
            :loading="true"
          >
            Text Left
          </TwButton>
        </div>
      </div>
    </div>
  </div>
</template>
