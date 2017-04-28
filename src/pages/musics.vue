<template>
	<div id="musics">
		
	</div>
</template>
<script>
	export default{
		data(){
			return {

			}
		},
		created:function(){
			this.$store.commit('COM_CONF',{
				title:'音乐'
			});			
		},		
	}
</script>