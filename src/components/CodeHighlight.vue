<template>
  <div class="">
    <hr class="my-2 border" />
    <tw-button icon="code" @click="isShown = !isShown"> Preview </tw-button>
    <transition
      enter-active-class="ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div ref="codeBlock" v-show="isShown">
        <pre :class="languageClass"><slot /></pre>
      </div>
    </transition>
  </div>
</template>
<script>
import "prismjs/themes/prism-okaidia.css";
import Prism from "prismjs";
export default {
  name: "code-highlight",
  props: {
    language: {
      type: String,
      default: "javascript",
    },
  },
  computed: {
    languageClass() {
      return `language-${this.language}`;
    },
  },
  data() {
    return {
      isShown: false,
    };
  },
  mounted() {
    Prism.highlightAllUnder(this.$refs.codeBlock);
  },
  beforeUpdate() {
    if (typeof this.$slots.default[0] === "string") {
      const newText = this.$slots.default[0].replace(
        /^[\r\n\s]*|[\r\n\s]*$/g,
        ""
      );
      this.$el.querySelector("code").textContent = newText;
      Prism.highlightAllUnder(this.$refs.codeBlock);
    }
  },
};
</script>
