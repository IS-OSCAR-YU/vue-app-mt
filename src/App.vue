<template>
    <div id="app">
        <div class="header">
            <div class="go-back" @click="goBack">
                <span class="arrow">
                    <span class="arrow green"></span>
                </span>
            </div>
            <h1>美团网</h1>
            <div class="login">登录</div>
        </div>
        <div class="search">
            <input type="text" v-model="msg" @keyup.enter="showSearchResult" placeholder="请输入关键字">
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import './base.scss';

    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    html, body {
        background: #efefef;
    }
    #app {
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: rem(60);
            background: $navColor;
            color: #fff;
            .go-back {
                .arrow {
                    display: block;
                    position: relative;
                    @include arrow(10px, #fff, right);
                    .green {
                        position: absolute;
                        top: rem(-10);
                        left: rem(-8);
                        border-right-color: $navColor;
                    }
                }
            }
            h1 {
                font-size: rem(24);
            }
            .login {
                font-size: rem(16);
                width: rem(32);
                margin-right: rem(10);
            }
        }
        .search {
            background: #fff;
            padding: rem(10) rem(20);
            display: flex;
            input {
                font-size: rem(14);
                background: #efefef;
                border: none;
                outline: none;
                display: block;
                padding: rem(10) rem(20);
                border-radius: rem(20);
                flex: 1;
            }
        }
    }
</style>
<script>
export default {
    data() {
        return {
            msg: ''
        }
    },
    methods: {
        showSearchResult() {
            this.$store.commit('updateSearch', this.msg);
            this.msg = '';
        },
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>
