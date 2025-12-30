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
    <h2>JumpCard with avatar</h2>
    <InternalJumpCard
      header="JumpCard with Avatar"
      text="main info"
      avatar="https://img.hestudio.net/img/2022/12/13/639872e717350.png"
      buttontext="go to slots test"
      link="/slotstest"
      shadow="hover"
    />
  </div>
  <br />
  <div>
    <h2>JumpCard with avatar without header</h2>
    <InternalJumpCard
      text="main info"
      avatar="https://img.hestudio.net/img/2022/12/13/639872e717350.png"
      buttontext="go to slots test"
      link="/slotstest"
      shadow="hover"
    />
  </div>
</template>
