# JumpCard

JumpCard is a fully open source component for vue3 that allows you to use it on any project (including commercial ones).It is based on [element-plus](https://element-plus.org/) for secondary packaging.It can only be used in vue3, vue2 will not be allowed.

You can import our plugin in these different ways, but you should install it first.

```shell
npm install vue-plugin-jumpcard
```

### How to import it?

```javascript
import { createApp } from 'vue'
import JumpCard from 'vue-plugin-jumpcard'

const app = createApp({})

app.use(Jumpcard)
```

### How to use it on your project?

```vue
<template>
    <InternalJumpCard 
        header="Title"
        text="main info"
        buttontext="text on button"
        link="/path/index.html"
        shadow="hover"
    />
    <ExternalJumpCard 
        header="Title"
        text="main info"
        buttontext="text on button"
        link="https://www.example.com/path/index.html"
        shadow="hover"
    />
</template>
```

| opinion | note |
|---|---|
| header |  If you don't fill it out, it won't show up. |
| text | If you don't fill it in, it will show up blank. |
| buttontext && link | They must both be present or the button will not be displayed. |
| shadow | The default value is `hover` and you can set it to `always` or `never`.Which determines when the card's shadow is displayed. |
