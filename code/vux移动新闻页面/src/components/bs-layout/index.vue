<template>
    <div class="bs-layout">
        <div class="bs-layout-header">
            <slot name="header"></slot>
        </div>
        <div class="bs-layout-body">
            <slot></slot>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    /**
     * layout 全局布局组件
     */
    export default {
        props: {
            pageTitle: String
        },
        created() {
            let titleDom = document.getElementsByTagName('title')[0];
            let title = titleDom.innerHTML;
            titleDom.innerHTML = this.pageTitle ? `${title}-${this.pageTitle}` : title;
        }
    }
</script>
<style scoped>
    .bs-layout-header {
        border: 1px solid #d1dbe5;
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
        padding: 20px 20px;
    }
    .bs-layout-body {
        padding: 20px;
        overflow: hidden;
    }
</style>
