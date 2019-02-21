<template>
    <div class="home">
        <!-- tag-list -->
        <ul class="tag-list">
            <router-link tag="li" v-for="(item, index) in types" :key="index" :to="'/list/' + item.id">
                <img alt="" :src="'/img/icon/' + item.img">
                <p>{{item.text}}</p>
            </router-link>
        </ul>

        <!-- ad-list -->
        <ul class="ads">
            <router-link tag="li" v-for="(item, index) in ads" :key="index" :to="'/detail/' + item.id">
                <h3 :class="'color-' + index">{{item.title}}</h3>
                <p>{{item.description}}</p>
                <img :src="'/img/ad/' + item.url" alt="">
            </router-link>
        </ul>

        <!-- list -->
        <div class="home-list">
            <h2 class="guess-title">猜你喜欢</h2>
            <div class="list">
                <Product v-for="(item, index) in list" :key="index" :data="item"></Product>
                <!-- <router-link tag="li" v-for="(item, index) in list" :key="index" :to="'/detail/' + item.id">
                    <Product :data="item"></Product>
                </router-link> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../base.scss';

    .home {
        .tag-list {
            background: #fff;
            display: flex;
            flex-wrap: wrap;
            padding-bottom: rem(20);
            li {
                width: (100% / 5);
                text-align: center;
                margin-top: rem(20);
                img {
                    width: 60%;
                }
                p {
                    font-size: rem(14);
                    text-align: center;
                    color: #666;
                    line-height: rem(10);
                }
            }
        }
        .ads {
            background: #fff;
            margin-top: rem(10);
            display: flex;
            text-align: center;
            line-height: rem(28);
            li {
                flex: 1;
                box-sizing: border-box;
                padding: rem(20) rem(10);
                border-right: 1px solid #ccc;
                &:last-child {
                    border-right: none;
                }
                h3 {
                    font-size: rem(18);
                }
                $i: 0;
                @each $item in red, green, purple {
                    .color-#{$i} {
                        color: $item;
                    }
                    $i: $i + 1;
                }
                p {
                    font-size: rem(16);
                }
                img {
                    margin-top: rem(10);
                    width: 60%;
                }
            }
        }
        .home-list {
            background: #fff;
            margin-top: rem(10);
            padding: rem(10);
            box-sizing: border-box;
            .guess-title {
                font-size: rem(20);
                padding-bottom: rem(10);
                border-bottom: 1px solid #ccc;
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
    created() {
        this.$axios.get('/data/home.json').then(({ data }) => {
            this.ads = data.ad;
            this.list = data.list;
        })
    },
    data() {
        return {
            types: [
				{ text: '美食', id: '1', img: '01.png' },
				{ text: '电影', id: '2', img: '02.png' },
				{ text: '酒店', id: '3', img: '03.png' },
				{ text: '休闲', id: '4', img: '04.png' },
				{ text: '外卖', id: '5', img: '05.png' },
				{ text: 'KTV', id: '6', img: '06.png' },
				{ text: '周边游', id: '7', img: '07.png' },
				{ text: '丽人', id: '8', img: '08.png' },
				{ text: '小吃', id: '9', img: '09.png' },
				{ text: '火车票', id: '10', img: '10.png' },
            ],
            ads: [],
            list: []
        }
    }
}
</script>
