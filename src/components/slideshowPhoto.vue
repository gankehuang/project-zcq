<template>
	<div class="SlideshowPhoto slide"  @mouseover="stop()" @mouseout="move()">  
      <div class="slideshow">  
        <transition-group tag="ul" name="image">  
          	<li v-for="(img, index) in imgArray" v-show="index===mark" :key="index"  >  
				<router-link class="link-text" :key="img.Id" :to="{name:'policydetail', params:{articleid:img.Id, name:img.Title}}">
				<!-- <router-link class="link-text" :key="img.Id" :to="{name:'policydetailwithtype', params:{typeid:type, articleid:img.Id}}"> -->
	           		<div class="productImage" v-bind:style="{background:'url('+img.ImagePath[0]+') no-repeat center', backgroundSize:'cover'}"></div>
	        	</router-link>
            	<!-- <p class="imgtext">{{img.Title}}</p> -->
          	</li>  
        </transition-group>  
      </div>
      <div class="bullet" style="margin-bottom: 15px;">  
        <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }"  
        @click="change(index)" :key="index"></span>  
      </div>  
    </div>
</template>

<script>
	//获取轮播图片地址
	function getNewsPhotoUrl(_this){
	    const prommise_GetRecomLiterature_Front = _this.global.$post({
	      	'_this': _this,
	      	'url': _this.global.API.getNewsPhoto.GetRecomLiterature_Front,
	      	'f_resolve': function(data){
	      		
	        	for(let i=0; i<data.length; i++){
	        		data[i].ImagePath = data[i].ImagePath.split(',');
	        		for(var j=0; j<data[i].ImagePath.length; j++) {
	        			data[i].ImagePath[j] = _this.global.Domain.resource + data[i].ImagePath[j];
	        		}
	          		
	        	} 
	        	//console.log('@@@@@@@@@@@@@@',data)
	        	_this.imgArray = data;
	      	}
	    });
	}

	export default {
	  	name: 'SlideshowPhoto',
	  	data: function () {
	    	return {
	      		timer: null,   //定时器
	      		mark: 0,       //比对图片索引的变量
	      		imgArray: []   //图片路径
	    	}
	  	},
	  	mounted: function(){
	    	getNewsPhotoUrl(this);
	  	},
	  	methods: {
		    autoPlay () {  
		      this.mark++; 
		      this.mark = this.mark % this.imgArray.length;
		    },  
		    play () {  
		      this.timer = setInterval(this.autoPlay, 4000)  
		    },  
		    change (i) {  
		      this.mark = i  
		    },  
		    stop () {  
		      clearInterval(this.timer)  
		    },  
		    move () {  
		      this.timer = setInterval(this.autoPlay, 4000)  
		    }  
		 },  
		 created () {  
		    this.play()  
		 }
	}

</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';
.SlideshowPhoto{
	&.slide {  
	    /*width: 100%;  */
	    height: 280px;
	    width: 500px; 
	     
	    margin: 0 auto;
	    margin-bottom: 6px;    
	    overflow: hidden;  
	    position: relative;

	    .slideshow {  
		    width: 100%;  
		    height: 280px;
		   	margin-top: 0;
		   	margin-left: 0;
			
		    li {  
			    position: absolute; 
				width: 100%;
				height: 100%;
				text-align: center;

			    p{
					position: absolute;
					bottom: 2px;
					width: 100%;
					text-align: left;
					padding: 5px 20px;
					background: rgba(0,0,0,0.5);
					color: white;
				}

				.link-text{
				    display: inline-block;
				    width: 100%;
				    height: 100%;

				    &:hover{
				      text-decoration: none;
				    }

				    .productImage{
				      	width: 100%;
				      	height: 100%;
				      	text-align: center;
				    }
				}
			}
		}

		.bullet {  
		    position: absolute;  
		    width: 100%;  
		    bottom: 5px;  
		    margin: 0 auto;  
		    z-index: 10;  
		    text-align: center;

		    span {  
			    width: 10px;  
			    height: 10px;  
			    border: 1px solid;  
			    background: black;  
			    display: inline-block;  
			    margin-right: 10px; 
			    cursor: pointer;
			    border-radius: 5px;
			}  
		} 
	}  
	/*.imgtext{
		display: inline-block;
		margin-left: 2px;
	 }*/
	.active {  
	    background: white !important;  
	}

	.image-enter-active {  
	    transform: translateX(0);  
	    transition: all 1.0s ease;  
	}  
	.image-leave-active {  
	    transform: translateX(-100%);  
	    transition: all 1.0s ease;  
	}  
	.image-enter {  
	    transform: translateX(100%);  
	}  
	.image-leave {  
	    transform: translateX(0);  
	}

}

</style>


