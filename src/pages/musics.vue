<template>
	<div id="musics">
		<com-search 
			:field="searchField"
			:title="placeholder"
		>
			
		</com-search>
		<div class="music-list">
			<div class="item" v-for="music in musics">
				<p>{{music.title}}-{{music.author[0].name}}</p>
			</div>
		</div>
	</div>
</template>
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
			}
		},
		components:{
			comSearch:search
		}
	}
</script>