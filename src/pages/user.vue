<template>
	<div id="user">
		<div class="image">
			<img :src="user.large_avatar" alt="">
		</div>
		{{user.name}}
	</div>
</template>
<style lang="less">
	@import url('../assets/less/var.less');
	#user{
		
	}
</style>
<script>
	export default{
		created:function(){
			if(this.user==null){
				this.$store.dispatch('getUserInfo','78182755')
				return ;
			}
			this.$store.commit('COM_CONF',{
				title:this.user.name
			})
		},
		computed:{
			user:function(){
				return this.$store.getters.getUserInfo
			}
		}
	}
</script>