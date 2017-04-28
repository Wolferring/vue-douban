<template>
	<div id="books">
		
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
				title:'图书'
			});			
		},		
	}
</script>