<template>
  <el-card :header="header" :shadow="shadow">
    <div>
      <el-text size="large" tag="b">{{ header }}</el-text>
    </div>
    <p>{{ text }}</p>
    <div v-show="showButton">
      <p>
        <el-divider />
      </p>
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
      default: "Jump to it!",
    },
    shadow: {
      type: String,
      default: "hover",
    },
  },
  data() {
    return {
      // 使用props中定义的默认值作为data的初始值，避免数据冗余
      showButton: false, // 更改变量名为showButton以匹配v-show指令的使用
    };
  },
  methods: {
    jump() {
      // 确保打开新窗口的安全性，这里假设link已经在父组件中被验证过了
      // 如果link来源不可信，需要在此处添加清理/验证逻辑
      window.open(this.link, "_blank");
    },
  },
  mounted() {
    // 保持数据一致性，直接通过props更新data中的值
    this.header = this.$props.header || "";
    this.text = this.$props.text || "";
    this.buttontext = this.$props.buttontext || "";
    this.link = this.$props.link || "";

    // 根据props值决定是否显示按钮
    if (this.$props.buttontext !== "" && this.$props.link !== "") {
      this.showButton = true;
    }

    // 直接将shadow赋值
    this.shadow = this.$props.shadow;
  },
};
</script>
