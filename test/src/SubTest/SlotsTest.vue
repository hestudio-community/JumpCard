<template>
  <h1>SlotsTest | JumpCard Test</h1>
  <br />
  <div>
    <h2>Default Slot Test</h2>
    <jumpcard
      header="Default Slot Test"
      link="/"
      ><b>Slot Test</b></jumpcard
    >
  </div>
  <br />
  <div>
    <h2>Icon Slot Test</h2>
    <jumpcard
      header="Icon Slot Test"
      content="test"
      link="/"
    >
      <template #icon>
        <el-icon><StarFilled /></el-icon>
      </template>
    </jumpcard>
  </div>
</template>

<script setup>
import { StarFilled } from "@element-plus/icons-vue";
</script>
