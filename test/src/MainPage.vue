<template>
  <h1>JumpCard Test</h1>
  <br />
  <div>
    <h2>Internal</h2>
    <jumpcard
      header="Internal"
      content="main info"
      buttontext="go to slots test"
      link="/slotstest"
      shadow="hover"
    />
  </div>
  <br />
  <div>
    <h2>External</h2>
    <jumpcard
      header="External"
      content="main info"
      buttontext="text on button"
      link="https://www.example.com/path/index.html"
      shadow="hover"
    />
  </div>
  <br />
  <div>
    <h2>SlotsTest Page</h2>
    <jumpcard
      header="SlotsTest Page"
      link="/slotstest"
      ><b>Slot Test</b>
      <template #icon>
        <el-icon><StarFilled /></el-icon> </template
    ></jumpcard>
  </div>
  <br />
  <div>
    <h2>AvatarTest Page</h2>
    <jumpcard
      header="AvatarTest Page"
      avatar="https://img.hestudio.net/img/2022/12/13/639872e717350.png"
      link="/avatarstest"
    />
  </div>
  <br />
  <div>
    <h2>Auto Generate Test</h2>
    <jumpcard
      header="Auto Generate Test"
      content="main info"
      link="/autogeneratetest"
    />
  </div>
  <br />
  <div>
    <h2>Minimize Test</h2>
    <jumpcard link="/minimizetest" />
  </div>
</template>

<script setup>
import { StarFilled } from "@element-plus/icons-vue";
</script>
