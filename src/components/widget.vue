<template>
    <div class="widget">
        <header>{{wTitle}}</header>
        <div class="widget-body">
            <slot />
        </div>
    </div>    
</template>

<script>
export default {
name: "Widget",
props: {
    wTitle: String,
}
}
</script>

<style lang="scss">
.widget {
    border-right: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    border-left: 1px solid #eaeaea;
    margin-top: 14px;
    header {
        font-size: 10px;
        color: #000; 
        text-transform: uppercase;
        background: #eaeaea;
        padding: 6px 12px;
        font-weight: 600;
    }

    .widget-body {
        padding: 12px 12px;
        p {
            margin:0;
        }
    }
}
</style>
