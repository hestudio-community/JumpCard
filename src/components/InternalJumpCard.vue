<template>
    <el-card v-bind="card">
        <div>
            <el-text size="large" tag="b">{{ header }}</el-text>
        </div>
        <p>{{ text }}</p>
        <div v-show="buttonshow">
            <p>
                <el-divider />
            </p>
            <el-button @click="jump" :icon="Link" link bg>{{ buttontext }}</el-button>
        </div>
    </el-card>
</template>

<script setup>
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import { Link } from '@element-plus/icons-vue'
</script>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        },
        header: {
            type: String,
            default: ''
        },
        link: {
            type: String,
            default: ''
        },
        buttontext: {
            type: String,
            default: 'Jump to it!'
        },
        shadow: {
            type: String,
            default: "hover"
        }
    },
    data() {
        return {
            header: '',
            text: '',
            link: '',
            buttontext: '',
            card: {
                header: '',
                shadow: ''
            },
            buttonshow: false
        }
    }, 
    methods: {
        jump() {
            this.$router.push({
                path: this.link
            })
        }
    },
    mounted() {
        this.card.shadow = this.$props.shadow
        if (this.$props.text != '' || this.$props.header) {
            this.text = this.$props.text
            if (this.$props.header != '') {
                this.header = this.$props.header
            }
        }
        if (this.$props.buttontext != '' && this.$props.link != '') {
            this.buttonshow = true
            this.buttontext = this.$props.buttontext
            this.link = this.$props.link
        }
    }
}
</script>