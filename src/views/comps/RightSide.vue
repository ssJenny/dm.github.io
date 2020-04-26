<template>
    <div class="right-side">
        <a-row>
            <a-col :span="12">
                <a-badge dot class="mt-12">
                    <a-icon type="bell" class="bell text-xxl" />
                </a-badge>
            </a-col>
            <a-col :span="12" class="text-right">
                <span class="text-black mt-12 inline-block name">Anastasia</span>
                <a-avatar size="large" class="ml-24" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </a-col>
        </a-row>
        <div class="mt-40" style="min-height: 395px;" id="chart">

        </div>
        <div class="mt-30">
            <a-row>
                <a-col :span="12" class="text-gray">Transactions</a-col>
                <a-col :span="12" class="text-right text-gray">Today<a-icon class="icon-down" type="down" /></a-col>
            </a-row>
            <a-row class="mt-30" :gutter="30" v-for="(item, index) in transactions" :key="index">
                <a-col :lg="4" :md="4">
                    <div class="bg-white transactions-img">
                        <img :src="item.icon" alt="">
                    </div>
                </a-col>
                <a-col :lg="14" :md="14" class="text-xl text-bold text-black pt-12">{{ item.name }}</a-col>
                <a-col :lg="6" :md="6" class="text-right text-primary pt-12" :class="{'blue': item.price.indexOf('+') >= 0}">{{ item.price }}</a-col>
            </a-row>
        </div>

        <div class="mt-40">
            <a-button type="primary" class="transfer-button" block>
                <span class="float-left">Transfer Money</span>
                <a-icon type="arrow-right" class="float-right mt-4" />
            </a-button>
        </div>
        <div class="mt-40 text-right">
            <div class="chat">
                <img src="../../assets/images/message.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import Highcharts from 'highcharts/highstock';
    export default {
        name: "RightSide",

        data() {
            return {
                transactions: [
                    {icon: require('../../assets/images/dribbble.png'), name: 'Dribble Pro Plan', price: '-$100'},
                    {icon: require('../../assets/images/adidas.png'), name: 'Adidas Refund', price: '+$230'},
                    {icon: require('../../assets/images/wacom.png'), name: 'Wacom LCD', price: '-$3000'}
                ]
            }
        },

        mounted() {
            // this.loadChart()
        },

        methods: {
            loadChart() {
                Highcharts.chart('chart', {
                    chart: {
                        type: 'pie'
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
                        visible: false
                    },
                    yAxis: {
                        visible: false
                    },
                    plotOptions: {
                        series: {
                            allowPointSelect: false
                        }
                    },
                    series: [{
                        data: [25,25,25,25]
                    }]
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .right-side {
        border-radius: 50px;
        box-shadow: 0 0 20px rgba(122,123,125,0.3);
        padding: 32px;
    }
    .name {
        vertical-align: -6px;
    }
    .icon-down {
        margin-top: 4px;
        margin-left: 8px;
    }
    .blue {
        color: #0e809a;
    }
    .transfer-button {
        &.ant-btn-primary {
            border-color: #ff4d56;
            background-color: #ff4d56;
            height: 52px;
            border-radius: 26px;
            padding: 0 36px;
        }
    }
    .transactions-img {
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border-radius: 6px;
        vertical-align: middle;
    }
    .chat {
        display: inline-block;
        width: 54px;
        height: 54px;
        border-radius: 50%;
        background-color: #0e809a;
        color: #fff;
        text-align: center;
        line-height: 54px;
    }
</style>
