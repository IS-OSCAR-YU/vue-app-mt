<template>
    <div class="product">
        <router-link class="item" tag="div" :to="'/detail/' + data.id">
            <img :src="'/img/list/' + data.img" alt="">
            <div class="content">
                <h2>{{data.title}}</h2>
                <p>
                    <span class="price">现价:{{data.price}}元</span>
                    <span class="origin-price">原价:{{data.originPrice}}元</span>
                    <span class="sales">销量:{{data.sales}}</span>
                </p>
            </div>
        </router-link>
    </div>
</template>

<style lang="scss">
    @import '../base.scss';

    .product {
        background: #fff;
        padding: rem(10) 0;
        margin: 0 rem(10);
        border-bottom: 1px solid #ccc;
        .item {
            width: 100%;
            display: flex;
            img {
                min-width: rem(140);
                height: rem(84.7);
            }
            .content {
                flex: 1;
                padding-left: rem(10);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                h2 {
                    font-size: rem(17);
                    font-weight: normal;
                    line-height: rem(28);
                }
                p {
                    font-size: rem(14);
                    .price {
                        color: red;
                        font-size: rem(14);
                    }
                    .origin-price {
                        margin-left: rem(10);
                        color: #ccc;
                        text-decoration: line-through;
                        font-size: rem(12);
                    }
                    .sales {
                        margin-left: rem(10);
                        color: $navColor;
                        font-size: rem(12);
                    }
                }
            }
        }
    }
</style>

<script>
export default {
    props: ['data'],
    created() {
        // console.log(this);
    },
    data() {
        return {
            
        }
    }
}
</script>