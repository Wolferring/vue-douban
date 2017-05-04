<template>
	<div id="books">
		<com-search 
			:field="searchField"
			:title="placeholder"
		>
		</com-search>
		<div class="book-list">
			<el-row>
				<el-col :span="24" class="item" v-for="book in books" :key="book.id">
				    <div class="image">
				    	<img :src="book.image.replace('mpic','lpic')" alt="">
				    </div>
				    <div class="content">
				    	<div class="title">
				    		{{book.title}}
				    		<el-tag type="primary">{{book.rating.average}}</el-tag>
				    	</div>
				    	<div class="content">
				    		<el-tag v-for="tag in book.tags">
				    			{{tag.name}}
				    		</el-tag>
				    		<div class="summary">
				    			<p v-show="fullSummaryId!==book.id">
				    				{{book.summary|shorten}}
				    			</p>
				    			<p v-if="book.summary.length>30" v-show="fullSummaryId==book.id">
					    			{{book.summary}}
				    			</p>
				    		</div>
				    		<el-button 
				    			type="text" 
				    			v-if="book.summary.length>30"
				    			@click="showFullSummary(book.id)"
				    		>
					    		click
				    		</el-button>
				    	</div>
				    </div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<style lang="less">
	#books{
		.book-list{
			.el-row{
				flex-wrap:wrap;
			}
			.item{
				margin: 1vh 0;
				background-color: #fff;
				text-align: left;
				display: flex;
				.image{
					display: flex;
					width: 30vw;
					min-height: 30vw;
					overflow:hidden;
					img{
						width: 100%;
						align-self:flex-start;
					}
				}
				.content{
					width: 70vw;
					display: flex;
					flex-wrap:wrap;
					overflow:hidden;
					.title{
						padding: 10px 2vw;
						font-size: .65rem;
						flex:0 0 100%;
					}
					.content{
						flex-wrap:wrap;
						padding: 0 2vw;
						flex:0 0 100%;
						.el-tag{
							margin-right: 1vw;
							margin-bottom: 1vh
						}
						.summary{
							p{
								font-size: .4rem;
							}
							margin-bottom: 1vh
						}
					}
				}
			}
		}
	}
</style>
<script>
	import search from '../components/search'
	export default{
		data(){
			return {
				searchField:"BOOK_LIST",
				placeholder:"搜索图书",
				fullSummaryId:""
			}
		},
		methods:{
			showFullSummary:function(id){
				if(this.fullSummaryId==id){
					this.fullSummaryId = ""
					return ;
				}
				this.fullSummaryId = id
			}
		},
		created:function(){
			this.$store.commit('COM_CONF',{
				title:'图书'
			});			
		},
		computed:{
			books:function(){
				return this.$store.getters.getBookList;
			},
		},
		filters:{
			shorten:function(e){
				if(e.length>50){
					return e.slice(0,30)+"……"
				}
				return e;
			}
		},
		components:{
			comSearch:search
		}
	}
</script>