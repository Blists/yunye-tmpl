<template>
<div class="full-height">
    <router-link :to="{name:'tmplAdd'}">模板添加</router-link>
</div>
</template>
<script>
export default {
    components: {

    },
    data() {
        return {}
    },
    created() {
        this.$get("auth")
    },
    methods: {

    }
}
</script>
<style lang="less">
@import "./../styles/common.less";
.aaa {
    font-size: 15px;
}
</style>
