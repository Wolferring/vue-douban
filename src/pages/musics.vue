<template>
	<div id="musics">
		<com-search 
			:field="searchField"
			:title="placeholder"
			:history="history"
		>
			
		</com-search>
		<div class="music-list" v-if="musics">
			<el-row>
				<el-col :span="24" class="item" v-for="music in musics">
				    <div class="image">
				    	<img :src="music.image.replace('spic','lpic')" alt="">
				    </div>
				    <div class="content">
				    	<div class="title">
				    		{{music.title}}
				    		<el-tag v-if="music.rating.average>0" type="primary">{{music.rating.average}}</el-tag>
				    	</div>
				    	<div class="content">
				    		<el-tag v-for="tag in music.tags">
				    			{{tag.name}}
				    		</el-tag>
				    	</div>
				    </div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<style lang="less">
	#musics{
		.music-list{
			.el-row{
				flex-wrap:wrap;
			}
			.item{
				margin: 1vh 0;
				background-color: #fff;
				text-align: left;
				display: flex;
				.image{
					display: flex;
					width: 30vw;
					min-height: 30vw;
					overflow:hidden;
					img{
						width: 100%;
						align-self:center;
					}
				}
				.content{
					width: 70vw;
					display: flex;
					flex-wrap:wrap;
					overflow:hidden;
					.title{
						padding: 5px 2vw;
						font-size: .5rem;
						flex:0 0 100%;
					}
					.content{
						flex-wrap:wrap;
						padding: 0 2vw;
						flex:0 0 100%;
						.el-tag{
							margin-right: 1vw;
							margin-bottom: 1vh
						}
					}
				}
			}
		}
	}
</style>
<script>
	import search from '../components/search'
	export default{
		data(){
			return {
				searchField:"MUSIC_LIST",
				placeholder:"搜索音乐"
			}
		},
		created:function(){
			this.$store.commit('COM_CONF',{
				title:'音乐'
			});			
		},
		computed:{
			musics:function(){
				return this.$store.getters.getMusicList;
			},
			history:function(){
				return this.$store.getters.getMusicListHistory
			}
		},
		components:{
			comSearch:search
		}
	}
</script>