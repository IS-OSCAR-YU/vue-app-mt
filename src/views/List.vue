<template>
    <div class="list">
        <ul class="order">
            <li v-for="(item, index) in orders" :key="index" @click="() => sortList(item.id)">
                <span :rule="item.id">{{item.text}}</span>
                <span class="arrow"></span>
            </li>
        </ul>
        <div class="product-list">
            <Product v-for="(item, index) in searchList" :key="index" :data="item"></Product>
            <div class="load-more">
                <span v-if="this.others.length > 0" class="title" @click="loadMore">查看其它{{this.others.length}}条团购</span>
                <span v-if="this.others.length > 0" class="arrow">
                    <span class="arrow white"></span>
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../base.scss';

    .list {
        .order {
            display: flex;
            justify-content: space-between;
            background: #fff;
            li {
                flex: 1;
                text-align: center;
                font-size: rem(16);
                border-bottom: 1px solid #ccc;
                border-right: 1px solid #ccc;
                padding: rem(10) 0;
                color: #666;
                &:last-child {
                    border-right: none;
                }
                .arrow {
                    @include arrow(5px, #666, top);
                    position: relative;
                    top: rem(-2);
                    margin-left: rem(2);
                }
            }
        }
        .product-list {
            background: #fff;
            .load-more {
                font-size: rem(18);
                text-align: center;
                padding: rem(10) 0;
                color: $navColor;
                .title {
                    margin-right: rem(5);
                }
                .arrow {
                    @include arrow(10px, $navColor, top);
                    width: 0;
                    position: relative;
                }
                .white {
                    border-top-color: #fff;
                    position: absolute;
                    top: rem(-13);
                    left: rem(-11);
                }
            }
        }
    }
</style>

<script>
import Product from '../components/Product';

export default {
    components: {
        Product
    },
    data() {
        return {
            orders: [
                { text: '价格排序', id: 'price' },
                { text: '销量排序', id: 'sales' },
                { text: '好评排序', id: 'evaluate' },
                { text: '优惠排序', id: 'discount' }
            ],
            list: [],
            others: []
        }
    },
    computed: {
        searchList() {
            return this.list.filter(item => {
                if (this.$store.state.search != '' && item.title.toUpperCase().indexOf(this.$store.state.search.toUpperCase()) < 0) {
                    return false;
                } else {
                    return true;
                }
            })
        }
    },
    methods: {
        sortList(id) {
            switch(id) {
                case 'price': 
                    this.list.sort((l, r) => {
                        return l.price - r.price;
                    })
                break;
                case 'sales': 
                    this.list.sort((l, r) => {
                        return l.sales - r.sales;
                    })
                break;
                case 'evaluate': 
                    this.list.sort((l, r) => {
                        return l.evaluate - r.evaluate;
                    })
                break;
                case 'discount': 
                    this.list.sort((l, r) => {
                        return l.discount - r.discount;
                    })
                break;
            }
        },
    loadMore() {
        this.list = this.list.concat(this.others);
        this.others = [];
    }
    },
    created() {
        this.$axios.get('/data/list.json?id=' + this.$route.params.id).then(({ data }) => {
            this.list = data.slice(0, 4);
            this.others = data.slice(4);
        })
    }
}
</script>