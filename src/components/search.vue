<template>
	<div id="search">
		<input type="text" :placeholder="title" v-model="searchContent">
		<button @click="search">
			搜索
		</button>
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