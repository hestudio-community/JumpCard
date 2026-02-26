<template>
  <h1>SlotsTest | JumpCard Test</h1>
  <br />
  <div>
    <h2>Default Slot Test</h2>
    <InternalJumpCard
      header="InternalJumpCard"
      buttontext="back to root"
      link="/"
      shadow="hover"
      ><b>Slot Test</b></InternalJumpCard
    >
  </div>
  <br />
  <div>
    <h2>Icon Slot Test</h2>
    <InternalJumpCard
      header="InternalJumpCard"
      buttontext="back to root"
      text="test"
      link="/"
      shadow="hover"
    >
      <template #icon>
        <el-icon><StarFilled /></el-icon>
      </template>
    </InternalJumpCard>
  </div>
</template>

<script setup>
import { StarFilled } from "@element-plus/icons-vue";
</script>
