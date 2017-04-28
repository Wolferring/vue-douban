<template>
    <div id="bottom-tab">
        <router-link :to='item.path' class="tab-item" v-for='item in tabs'>
            <span class="item-icon">
               <i class="fa" :class="item.icon"></i>
            </span> 
            <span class="item-text">  
                {{item.name}}
            </span>
        </router-link>
    </div>
</template>
<script>
    export default{
        data(){
            let menuList = [
                {
                    name:'电影',
                    path:'/home',
                    icon:'fa-film'
                },
                {
                    name:'图书',
                    path:'/books',
                    icon:'fa-book'

                },
                {
                    name:'音乐',
                    path:'/musics',
                    icon:'fa-music'

                },
                {
                    name:'我的',
                    path:'/user',
                    icon:'fa-user'

                }
            ]            
            return {
                tabs:menuList
            }
        }
    }
</script>
<style lang="less" scoped>
    @import url('../assets/less/var.less');
    @import url('../assets/less/font-awesome.min.css');
    #bottom-tab{
        position: fixed;
        width: 100%;
        bottom: 0;
        display: flex;
        z-index: 501;
        background-color: #fff;
        .tab-item{
            flex:1;
            display: block;
            padding: .1rem 0;
            border-top: 1px solid #ddd;
            font-size: .5rem;
            span{
                display: block;
                &.item-icon{
                    font-size: .65rem;    
                }
                &.item-text{
                    line-height: 1.5;
                }
            }
            &.active{
                background-color: @maincolor;
                border-top: 1px solid @maincolor;
                color:#fff;
            }
        }
    }
</style>