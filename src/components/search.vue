<template>
	<div id="search">
		<el-row :gutter="10">
			<el-col :span='24'>
				<el-input
				  :placeholder="title"
				  icon="search"
				  v-model="searchContent"
				  @keyup.enter="search"
				  :on-icon-click="search">
				</el-input>				
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				searchContent:""
			}
		},
		methods:{
			search:function(e){
				this.$store.dispatch('getSearchResult',{
					content:this.searchContent,
					field:this.field
				})
			}
		},
		props:{
			field:String,
			title:String
		}
	}
</script>
<style lang="less">
	#search{
		padding: 1vh 5vw; 
	}
</style>