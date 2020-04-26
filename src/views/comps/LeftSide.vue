<template>
    <div class="left-side">
        <header>
            <a-row>
                <a-col v-bind="{xxl: 4, xl: 4, lg: 4, md: 6, sm: 24, xs: 24}">
                    <img src="../../assets/images/logo.png" alt="">
                </a-col>
                <a-col v-bind="{xxl: 14, xl: 14, lg: 14, md: 18, sm: 24, xs: 24}">
                    <a-row class="menus">
                        <a-col :md="6" class="menu-item" v-for="menu in menus" :key="menu.path">
                            <a :href="menu.path" class="menu-link" :class="{active: currentRoute === menu.path}">{{ menu.label }}</a>
                        </a-col>
                    </a-row>
                </a-col>
                <a-col v-bind="{xxl: 6, xl: 6, lg: 6, md: 24, sm: 24, xs: 24}" class="text-right">
                    <a-input-search placeholder="search..." class="search-input" style="width: 200px" />
                </a-col>
            </a-row>
        </header>
        <section class="mt-40">
            <h1>Cards
                <div class="view float-right text-base text-gray">View all Cards</div>
            </h1>
            <a-row :gutter="30">
                <a-col class="card-col mt-24" v-bind="colCard" v-for="(card, index) in cards" :key="index">
                    <card :card="card" />
                </a-col>
                <a-col class="mt-24" v-bind="colCard" :key="cards.length+1">
                    <div class="add-card">
                        <div class="add-icon-wrapper">
                            <i class="icon-add">
                                <a-icon type="plus" />
                            </i>
                            <p class="text-center mt-24">Add New Card</p>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </section>

        <a-row class="mt-40" :gutter="50">
            <a-col v-bind="{md:8, sm: 24, xs: 24}">
                <h1>Main Services
                    <div class="view float-right text-base text-gray">View all</div>
                </h1>
                <a-row :gutter="30">
                    <a-col v-bind="{lg: 12, md: 24}" class="mt-24" v-for="(ser, index) in services" :key="index">
                        <div class="services-card text-center">
                            <div>
                                <i class="text-primary iconfont text-xxl" :class="ser.icon"></i>
                                <p class="mt-12 text-black">{{ ser.label }}</p>
                            </div>
                        </div>
                    </a-col>
                </a-row>
            </a-col>
            <a-col v-bind="{md:16, sm: 24, xs: 24}">
                <section>
                    <h1>Current
                        <div class="view float-right text-base text-gray">View all</div>
                    </h1>
                    <div class="mt-12">
                        <a-row :gutter="30" class="mt-12" v-for="item in currents" :key="item.number">
                            <a-col v-bind="{xxl: 4, xl: 4, lg: 6, md: 6, sm: 12, xs: 12}">{{ item.number }}</a-col>
                            <a-col  v-bind="{xxl: 16, xl: 16, lg: 12, md: 11, sm: 0, xs: 0}">
                                <p class="current-border"></p>
                            </a-col>
                            <a-col  v-bind="{xxl: 4, xl: 4, lg: 6, md: 8, sm: 12, xs: 12}" class="text-black text-right">$ {{ item.price }}</a-col>
                        </a-row>
                    </div>
                </section>
                <section class="mt-30">
                    <h1>Savings
                        <div class="view float-right text-base text-gray">View all</div>
                    </h1>
                    <div class="mt-24">
                        <div id="savings"></div>
                    </div>
                </section>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import Card from './Card'
    import Highcharts from 'highcharts/highstock';
    export default {
        name: "LeftSide",
        data() {
            return {
                currentRoute: '/dashboard',
                colCard: {
                    xxl: 8,
                    xl: 8,
                    lg: 8,
                    md: 12,
                    sm: 12,
                    xs: 24
                },
                menus: [
                    {label: 'Dashboard', path: '/dashboard'},
                    {label: 'Services', path: '/services'},
                    {label: 'History', path: '/history'},
                    {label: 'Actions', path: '/actions'},
                ],
                cards: [
                    {
                        key: 1,
                        title: 'Available balance',
                        price: '2,200',
                        number: '****  ****  ****  **34',
                        name: 'Monzo'
                    },
                    {
                        key: 2,
                        title: 'Available balance',
                        price: '1,300.89',
                        number: '****  ****  ****  **67',
                        name: 'Monzo'
                    }
                ],
                services: [
                    {icon: 'icon-transaction', label: 'Transactions'},
                    {icon: 'icon-bulb', label: 'Utility'},
                    {icon: 'icon-loans', label: 'Loans'},
                    {icon: 'icon-credit-card', label: 'Deposits'},
                    {icon: 'icon-transfer', label: 'Fast transfer'},
                    {icon: 'icon-exchange', label: 'Exchange'},
                ],
                currents: [
                    {number: '1063873637834', price: '2,200.01'},
                    {number: '1063873637835', price: '1,300.89'},
                    {number: '1063873637836', price: '1,848.11'}
                ],
                savings: [
                    { y: '30%', x: '$10' },
                    { y: '24%', x: '$20' },
                    { y: '50%', x: '$30' },
                    { y: '40%', x: '$40' },
                    { y: '65%', x: '$50' }
                ]
            }
        },

        components: {
            Card
        },

        mounted() {
            this.loadChart()
        },
        methods: {
            loadChart() {
                Highcharts.chart('savings', {
                    title: {
                        text: ''
                    },
                    legend: {
                        enabled: false
                    },
                    chart: {
                        height: 260,
                        type: 'line'
                    },
                    yAxis: {
                        title: {text: ''}
                    },
                    xAxis: {
                        title: {text: ''},
                        type: 'categories',
                        categories: ['$10', '$20', '$30', '$40', '$50']
                    },
                    series: [
                        {
                            data: [30, 24, 50, 40, 65]
                        }
                    ]
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .left-side {
        padding: 45px 56px;
    }
    .menu-link {
        color: #000;
        &.active {
            font-weight: bold;
        }
    }
    .menus {
        margin-top: 10px;
    }
    .current-border {
        height: 15px;
        margin: 0;
        margin-left: 12px;
        border-bottom: 1px dashed #ddd;
    }
</style>
<style lang="scss">
    .search-input {
        .ant-input {
            border-radius: 16px;
            background-color: #f8f8f8;
            border: 0;
            &:focus {
                outline: 0;
                box-shadow: none;
            }
        }
    }
    .card-col {
        .card {
            height: 220px;
            padding: 20px 32px;
            border-radius: 20px;
        }
        &:nth-child(2n+1) .card {
            background-color: #ff4d56;
            color: #e30613;
        }
        &:nth-child(2n) .card {
            background-color: #0e809a;
            color: #084a57;
        }
    }
    .add-card {
        height: 220px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f8f8f8;
        color: #a2a4ac;
        cursor: pointer;
        .icon-add {
            border-radius: 50%;
            border: 1px dashed #d7d7d7;
            color: #d7d7d7;
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            margin: auto;
        }
        &:hover {
            color: #1890ff;
            .icon-add {
                border-color: #1890ff;
                color: #1890ff;
            }
        }
    }
    .services-card {
        box-shadow: 0 0 15px rgba(0,0,0,0.2);
        border-radius: 20px;
        padding: 24px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .view {
        margin-top: 10px;
    }
</style>
