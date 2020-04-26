<template>
    <div class="card">
        <div class="title">{{ card.title }}</div>
        <div class="price text-white lh-m mt-12">$ {{ card.price }}</div>
        <div class="card-number text-lg mt-30 text-bold"> {{ card.number }}</div>
        <a-row class="mt-28">
            <a-col span="20" class="text-xl text-white">{{ card.name }}</a-col>
            <a-col span="4" class="text-right">
                <div class="switch-icon">
                    <!--<span class="red-circle"></span>-->
                    <!--<span class="orange-circle"></span>-->
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            card: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .switch-icon {
        display: inline-block;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #e30613;
        position: relative;
        margin-right: 8px;
        &:before {
            position: absolute;
            content: " ";
            display: inline-block;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-color: #ffc24b;
            left: 20px;
        }
        /*.red-circle,*/
        /*.orange-circle {*/
           /**/
        /*}*/
        /*.red-circle {*/
            /*background-color: #e30613;*/
        /*}*/
        /*.orange-circle {*/
            /**/
        /*}*/
    }
</style>
