<template>
  <el-card :header="header" :shadow="shadow">
    <div>
      <el-text size="large" tag="b">{{ header }}</el-text>
    </div>
    <p>{{ text }}</p>
    <div v-if="showButton">
      <p>
        <el-divider />
      </p>
      <el-button @click="jump" :icon="Link" link bg>{{ buttontext }}</el-button>
    </div>
  </el-card>
</template>

<script>
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import { Link } from "@element-plus/icons-vue";

export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    header: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    buttontext: {
      type: String,
      default: "Jump to it!",
    },
    shadow: {
      type: String,
      default: "hover",
    },
  },
  computed: {
    showButton() {
      return this.buttontext !== "" && this.link !== "";
    },
  },
  methods: {
    jump() {
      this.$router.push({ path: this.link });
    },
  },
};
</script>
