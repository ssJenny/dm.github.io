<template>
    <div class="container">
        <div class="dashboard">
            <a-row>
                <a-col v-bind="colExtraLeft">
                    <left-side />
                </a-col>
                <a-col v-bind="colExtraRight">
                    <right-side />
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
    import LeftSide from './comps/LeftSide'
    import RightSide from './comps/RightSide'
    export default {
        data() {
            return {
                colExtraLeft: {
                    xxl: 18,
                    xl: 18,
                    lg: 18,
                    md: 18,
                    sm: 24,
                    xs: 24
                },
                colExtraRight: {
                    xxl: 6,
                    xl: 6,
                    lg: 6,
                    md: 6,
                    xm: 24,
                    xs: 24
                }
            }
        },

        components: {
            LeftSide,
            RightSide
        }
    }
</script>

<style scoped lang="scss">
    .container {
        background-color: #fdebea;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .dashboard {
        width: 90%;
        background-color: #fefefe;
        border-radius: 50px;
        box-shadow: 0 0 20px #fdd6d6;
    }
</style>
