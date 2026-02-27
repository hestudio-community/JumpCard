<template>
  <el-card v-if="iswork" :shadow="shadow">
    <div v-if="showinfo">
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        "
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
        {{ content }}
      </slot>
    </div>
    <el-divider v-if="showinfo" />
    <div>
      <el-button @click="jump" link bg>
        <template #default>
          {{ _buttontext }}
        </template>
        <template #icon>
          <slot name="icon">
            <el-icon v-if="isexternal"><Link /></el-icon>
            <el-icon v-else><Right /></el-icon>
          </slot>
        </template>
      </el-button>
    </div>
  </el-card>
</template>

<script setup>
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import { Link, Right } from "@element-plus/icons-vue";
</script>

<script>
export default {
  data() {
    return {
      showinfo: false,
      iswork: false,
      _buttontext: "",
      _link: "",
      isexternal: false,
    };
  },
  props: {
    content: {
      type: String,
      required: false,
      default: "",
    },
    header: {
      type: String,
      required: false,
      default: "",
    },
    link: {
      type: String,
      required: true,
      default: "",
    },
    buttontext: {
      type: String,
      required: false,
      default: "",
    },
    shadow: {
      type: String,
      required: false,
      default: "hover",
    },
    avatar: {
      type: String,
      required: false,
      default: "",
    },
  },
  inject: [
    "externalButtonText",
    "internalButtonText",
    "onClickExternalLinkButton",
  ],
  methods: {
    init() {
      if (this.link) this.iswork = true;
      else return;

      try {
        const url = new URL(this.link);
        if (url.origin == window.location.origin) {
          this.isexternal = false;
          this._link = url.href.substring(url.origin.length);
        } else {
          this.isexternal = true;
          this._link = this.link;
        }
      } catch (e) {
        if (e.name == "TypeError") {
          this.isexternal = false;
          this._link = this.link;
        }
      }

      if (this.header || this.content || this.avatar) this.showinfo = true;
      if (!this.buttontext) {
        if (this.isexternal) {
          if (typeof this.externalButtonText == "function")
            this._buttontext = this.externalButtonText({
              header: this.header,
              content: this.content,
              link: this._link,
            });
          else {
            const url = new URL(this.link);
            this._buttontext = url.host;
          }
        } else {
          if (typeof this.internalButtonText == "function")
            this._buttontext = this.internalButtonText({
              header: this.header,
              content: this.content,
              link: this._link,
            });
          else this._buttontext = this.link;
        }
      } else {
        this._buttontext = this.buttontext;
      }
    },
    jump() {
      if (this.isexternal) {
        if (typeof this.onClickExternalLinkButton == "function") {
          this.onClickExternalLinkButton(this._link);
        } else window.open(this._link, "_blank");
      } else this.$router.push(this._link);
    },
  },
  created() {
    this.init();
  },
};
</script>
