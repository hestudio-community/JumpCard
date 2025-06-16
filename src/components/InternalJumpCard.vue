<template>
  <el-card :shadow="shadow">
    <div>
      <el-text style="font-size: 24px" tag="h1">{{ header }}</el-text>
    </div>
    <p>{{ text }}</p>
    <div v-show="showButton">
      <el-divider />
      <el-button @click="jump" :icon="Link" link bg>{{ buttontext }}</el-button>
    </div>
  </el-card>
</template>

<script setup>
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import { Link } from "@element-plus/icons-vue";
</script>

<script>
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
      default: "",
    },
    shadow: {
      type: String,
      default: "hover",
    },
  },
  data() {
    return {
      showButton: false,
    };
  },
  created() {
    if (this.buttontext !== "" && this.link !== "") {
      this.showButton = true;
    }
  },
  methods: {
    jump() {
      this.$router.push("/");
    },
  },
};
</script>
