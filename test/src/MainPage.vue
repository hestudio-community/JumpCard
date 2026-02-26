<template>
  <h1>JumpCard Test</h1>
  <br />
  <div>
    <h2>InternalJumpCard</h2>
    <InternalJumpCard
      header="InternalJumpCard"
      text="main info"
      buttontext="go to slots test"
      link="/slotstest"
      shadow="hover"
    />
  </div>
  <br />
  <div>
    <h2>ExternalJumpCard</h2>
    <ExternalJumpCard
      header="ExternalJumpCard"
      text="main info"
      buttontext="text on button"
      link="https://www.example.com/path/index.html"
      shadow="hover"
    />
  </div>
  <br />
  <div>
    <h2>SlotsTest Page</h2>
    <InternalJumpCard
      header="SlotsTest Page"
      buttontext="goto"
      link="/slotstest"
      shadow="hover"
      ><b>Slot Test</b>
      <template #icon>
        <el-icon><StarFilled /></el-icon> </template
    ></InternalJumpCard>
  </div>
  <br />
  <div>
    <h2>AvatarTest Page</h2>
    <InternalJumpCard
      header="AvatarTest Page"
      buttontext="goto"
      avatar="https://img.hestudio.net/img/2022/12/13/639872e717350.png"
      link="/avatarstest"
      shadow="hover"
    />
  </div>
  
</template>

<script setup>
import { StarFilled } from "@element-plus/icons-vue";
</script>
