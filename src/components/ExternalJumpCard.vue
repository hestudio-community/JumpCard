<template>
  <el-card :shadow="shadow">
    <div
      style="display: flex; flex-direction: row; justify-content: space-between"
    >
      <el-text v-if="header" style="font-size: 24px" tag="h1">{{
        header
      }}</el-text>
      <el-avatar
        v-if="avatar"
        :size="48"
        style="border-radius: 15px"
        :src="avatar"
      />
    </div>
    <br />
    <slot>
      {{ text }}
    </slot>
    <div v-show="showButton">
      <el-divider />
      <el-button @click="jump" link bg>
        <template #default>
          {{ buttontext }}
        </template>
        <template #icon>
          <slot name="icon">
            <el-icon><Link /></el-icon>
          </slot>
        </template>
      </el-button>
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
    avatar: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      showButton: false,
    };
  },
  methods: {
    jump() {
      window.open(this.link, "_blank");
    },
  },
  created() {
    if (this.buttontext !== "" && this.link !== "") {
      this.showButton = true;
    }
  },
};
</script>
