<template>
<div class="full-height">
    <input type="text" v-model="name">
    <input type="file" ref="file">
    <button @click="sub">提交</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: ""
        }
    },
    methods: {
        sub() {
            let dataForm = new FormData();
            dataForm.append("name", this.name);
            dataForm.append("file", this.$refs.file.files[0]);
            this.$post("upload", dataForm);
        }
    }
}
</script>
