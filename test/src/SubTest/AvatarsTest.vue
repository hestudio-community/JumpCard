<template>
  <h1>AvatarTest | JumpCard Test</h1>
  <br />
  <div>
    <h2>JumpCard with avatar</h2>
    <InternalJumpCard
      header="JumpCard with Avatar"
      text="main info"
      avatar="https://img.hestudio.net/img/2022/12/13/639872e717350.png"
      buttontext="back"
      link="/"
      shadow="hover"
    />
  </div>
  <br />
  <div>
    <h2>JumpCard with avatar without header</h2>
    <InternalJumpCard
      text="main info"
      avatar="https://img.hestudio.net/img/2022/12/13/639872e717350.png"
      buttontext="back"
      link="/"
      shadow="hover"
    />
  </div>
</template>