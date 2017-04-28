<template>
	<div id="header">
		<span 
			class="header-back header-item" 
			v-if="this.$route.name!=='home'"
			@click="$router.back()"
		>
			<i class="fa fa-angle-left"></i>
		</span>
		<div 
			class="header-title header-item" 
		>
			{{com.title}}
		</div>
		<div 
			class="header-share header-item"
			v-if="com.share"
		>
			<i class="fa fa-ellipsis-h"></i>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {

			}
		},
		props:{
			com:Object,
		},		
	}	
</script>
<style lang="less">
	@import url('../assets/less/var.less');
	#header{
		position: fixed;
		top:0;
		left: 0;
		height: 2rem;
		width: 100%;
		background-color: @maincolor;
		line-height: 2rem;
		color: #fff;
		.header-back{
			font-size: 1.2rem;
			width: 2rem;
			height: 2rem;
			text-align: center;
			position: absolute;
			left: 0;
			i{
				vertical-align: super;
				line-height: 2rem;
			}
		}
		.header-title{
			font-size: .8rem;
		}
		.header-share{
			font-size: 1rem;
			text-align: center;
			max-width: 2rem;
			float: right;
		}
	}
</style>