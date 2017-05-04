<template>
	<div id="search">
		<el-row :gutter="10">
			<el-col :span='24'>
			    <el-autocomplete
			      v-model="searchContent"
			      :fetch-suggestions="querySearch"
				  :placeholder="title"
				  icon="search"
				  :on-icon-click="search">		      
			    ></el-autocomplete>							
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
			},
			querySearch(queryString, cb) {
				var his = this.history;
				var results = queryString ? his.filter(this.createFilter(queryString)) : his;
				cb(results);
			},
			createFilter(queryString) {
				return (his) => {
				  return (his.value.indexOf(queryString.toLowerCase()) === 0);
				};
			},		
		},
		props:{
			field:String,
			title:String,
			history:Array
		}
	}
</script>
<style lang="less">
	#search{
		padding: 1vh 5vw; 
		.el-autocomplete{
			display: block;
		}
	}
</style>