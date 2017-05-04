<template>
	<div id="film" >
		<img 
			:src="detail.images.large" alt=""
		>
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
		},
		created:function(){
			var id = this.$route.params.id||"";
			if(!this.detail||this.detail.id!=id){
				this.$store.dispatch('getFilmDetail',id)
			}
			document.body.scrollTop = 0;
		},		
	}
</script>