<template>
	<div id="books">
		{{books}}
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
		computed:{
			books:function(){
				return this.$store.getters.getBookList
			}
		}
	}
</script>