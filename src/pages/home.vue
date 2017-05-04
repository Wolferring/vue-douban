<template>
	<div id="home">
		<h3 class="home-item-title">
			{{inTheater.title}}
			<i class="fa fa-angle-right"></i>
		</h3>
		<div class="home-nowplaying home-item">
			<router-link :to="{name:'film',params:{id:item.id}}" v-for="item in inTheater.subjects" class="film">
				<img :src="item.images.large" alt="">
				<h4 class="title">
					{{item.title}}
					<span
						class="tag tag-primary score"
						v-if="item.rating.average>0">
						{{item.rating.average}}
					</span>
				</h4>
			</router-link>
		</div>
		<h3 class="home-item-title">
			{{coming.title}}
		</h3>
		<div class="home-coming home-item">
			<router-link :to="{name:'film',params:{id:item.id}}" v-for="item in coming.subjects" class="film">
				<h4 class="title">
					{{item.title}}
					<span
						class="tag tag-primary score"
						v-if="item.rating.average>0">
						{{item.rating.average}}
					</span>
				</h4>
			</router-link>
		</div>		
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	export default{
		data(){
			return {

			}
		},
		created:function(){
			this.$store.commit('COM_CONF',{
				title:'电影',
			});			
			if(this.inTheater.length<=0){
				this.$store.dispatch('getNowList')
			}
			if(this.coming.length<=0){
				this.$store.dispatch('getComingList')
			}
		},	
		computed:mapGetters({
			inTheater:'getNowList',
			coming:'getComingList'
		}),

	}
</script>
<style lang="less">
	@import url('../assets/less/var.less');
	#home{
		.home-item{
			margin:2vh 0vw;
			text-align: left;
			display: flex;
			flex-wrap: wrap;
			justify-content:space-around;
		}
		.home-item-title{
			background-color: #fff;
			margin: 2vh 5vw;
			font-size: .75rem;
			padding: 1vh 3vw;
			border-left: 5px solid @maincolor;
			i{

			}
		}
		.film{
			flex:auto;
			width: 100%;
			height: auto;
			margin: 1vh 5vw;
			background: #fff;
			text-align: center;
			img{
				width: 100%;
			}
			.title{
				font-size: .6rem;
				line-height: 4;
			}
		}
	}
</style>