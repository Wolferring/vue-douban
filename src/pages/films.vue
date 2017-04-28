<template>
	<div id="film" v-loading.body="loading">
		<img :src="detail.images.large" alt="">
		<p>
			{{detail.summary}}
		</p>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				
			}
		},
		computed:{
			detail:function(){
				return this.$store.getters.getFilmDetail
			},
			loading:function(){
				return this.detail.id!==(this.$route.params.id||"")
			}
		},
		created:function(){
			let id = this.$route.params.id;
			this.$store.dispatch('getFilmDetail',id)
			document.body.scrollTop = 0;
		},		
	}
</script>