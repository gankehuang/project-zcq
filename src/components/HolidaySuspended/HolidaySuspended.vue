<template>
	<div id="HolidaySuspended">
		<div id="modal_overlay" v-show="flag">
			<div id="modal_data">
				<span>{{num}}s后自动关闭</span>
				<button id="btn" @click="timer">{{btn}}</button>
				<img :src="imgUrl" id="img" alt="">
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		name: 'HolidaySuspended',
		data: function () {
			return {
				btn: 'X',
				num: 5,
				flag: false,
				time: '',
				imgUrl: '',
				holiday: [
					{ day: "2018-6-16", type: "端午节" },
					{ day: "2018-6-17", type: "端午节" },
					{ day: "2018-6-18", type: "端午节" },
					{ day: "2018-8-1", type: "建军节" },
					{ day: "2018-9-10", type: "教师节" },
					{ day: "2018-9-22", type: "中秋节" },
					{ day: "2018-9-23", type: "中秋节" },
					{ day: "2018-9-24", type: "中秋节" },
					{ day: "2018-10-1", type: "国庆节" },
					{ day: "2018-10-2", type: "国庆节" },
					{ day: "2018-10-3", type: "国庆节" },
					{ day: "2018-10-4", type: "国庆节" },
					{ day: "2018-10-5", type: "国庆节" },
					{ day: "2018-10-6", type: "国庆节" },
					{ day: "2018-10-7", type: "国庆节" },
					{ day: "2018-11-22", type: "感恩节" },
					{ day: "2019-1-1", type: "元旦节" },
					{ day: "2019-2-5", type: "春节" },
					{ day: "2019-2-6", type: "春节" },
					{ day: "2019-2-7", type: "春节" },
					{ day: "2019-2-8", type: "春节" },
					{ day: "2019-2-9", type: "春节" },
					{ day: "2019-2-10", type: "春节" },
					{ day: "2019-2-11", type: "春节" },
					{ day: "2019-3-12", type: "植树节" },
					{ day: "2019-4-5", type: "清明节" },
					{ day: "2019-4-6", type: "清明节" },
					{ day: "2019-4-7", type: "清明节" },
					{ day: "2019-5-1", type: "劳动节" },
					{ day: "2019-5-2", type: "劳动节" },
					{ day: "2019-5-3", type: "劳动节" },
					{ day: "2019-5-4", type: "劳动节" },
					{ day: "2019-6-7", type: "端午节" },
					{ day: "2019-6-8", type: "端午节" },
					{ day: "2019-6-9", type: "端午节" },
					{ day: "2019-8-1", type: "建军节" },
					{ day: "2019-9-10", type: "教师节" },
					{ day: "2019-9-13", type: "中秋节" },
					{ day: "2019-9-14", type: "中秋节" },
					{ day: "2019-9-15", type: "中秋节" },
					{ day: "2019-10-1", type: "国庆节" },
					{ day: "2019-10-2", type: "国庆节" },
					{ day: "2019-10-3", type: "国庆节" },
					{ day: "2019-10-4", type: "国庆节" },
					{ day: "2019-10-5", type: "国庆节" },
					{ day: "2019-10-6", type: "国庆节" },
					{ day: "2019-10-7", type: "国庆节" },
					{ day: "2019-11-28", type: "感恩节" }
				]
			}
		},
		mounted: function () {
			let myData = new Date();    

			let date = myData.toLocaleDateString().replace(/\//g, '-'); 

			let _this = this;
			this.holiday.forEach(function(value, index, array){ 

				if( value.day === date ){  console.log(value.type);
					switch(value.type){
						case "清明节":
						  _this.imgUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529144375777&di=d7341d58d7015b7bb7cf4b119375ecfa&imgtype=0&src=http%3A%2F%2Fa4.rui2.net%2Fupload%2F12%2F2017%2F02%2Fa54a4fd63cd4b5456dc381d31299233f.jpg";
						  break;
						case "劳动节":
						  _this.imgUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529144306928&di=ac17550453fdc2f2d18999ab37109439&imgtype=0&src=http%3A%2F%2Fpic1.ooopic.com%2F00%2F90%2F37%2F55b1OOOPIC77.jpg";
						  break;
						case "端午节":
						  _this.imgUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526875177001&di=29aa88c7b1984f427b46ec0894e03ceb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fe61190ef76c6a7ef5f3f6d0bf6faaf51f3de6686.jpg";
						  break;
						case "中秋节":
						  _this.imgUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529232810071&di=1150a88b586d1a7c9df02efd4d73d692&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01fe43578c981f0000012e7e301390.jpg%401280w_1l_2o_100sh.jpg";
						  break;
						case "国庆节":
						  _this.imgUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529232831870&di=8bb05c647e8fcdebd5b9c3d042c81bc1&imgtype=0&src=http%3A%2F%2Fimg51.afzhan.com%2F9%2F20130927%2F635159010404974832639.jpg";
						  break;
						case "建军节":
						  _this.imgUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526962877507&di=9895cf8c4dd490bce3e3ced9cca46502&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F17%2F60%2F44%2F22d58PICKJ8_1024.jpg";
						  break;
						case "教师节":
						  _this.imgUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526962993003&di=99bb403014f55b260f40d4ef2afab03d&imgtype=0&src=http%3A%2F%2Fimg10.360buyimg.com%2Fimgzone%2Fjfs%2Ft292%2F170%2F410152737%2F324438%2F4739f229%2F541018e9Nb9d6b6d1.jpg";
						  break;
						case "感恩节":
						  _this.imgUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527557868&di=203292a727f093dc52e6f54f3c7ee70c&imgtype=jpg&er=1&src=http%3A%2F%2Fimg27.house365.com%2Fxabbsuserpic%2F2014%2F11%2F25%2F14168832705473ec46427cd.jpg";
						  break;
						case "元旦节":
						  _this.imgUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526963288138&di=bb5fd07dd730862ba0c335c61b5127aa&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1936993329%2C3238133685%26fm%3D214%26gp%3D0.jpg";
						  break;
						case "春节":
						  _this.imgUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526963498712&di=4afa73d1475b54a19d2708575d514cc2&imgtype=0&src=http%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1610%2F878-161014152158.jpg";
						  break;
						case "植树节":
						  _this.imgUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529143966113&di=5209a3554d6914d92d977d0ef2502bd2&imgtype=0&src=http%3A%2F%2Fxiaoxue.eol.cn%2Fziyuan%2Fziyuan%2Fziliao%2F201603%2FW020160311414050567611.jpg";
						  break;
					}

					_this.flag = true;
					_this.time = setInterval(()=> {
				      	if (_this.num == 1) {
				         	clearInterval(_this.time);
				         	_this.flag = false;
				      	}
				      	_this.num --;
				    }, 1000)
					return;
				}
			})
		},
		methods: {
			timer: function () {
				this.flag = false
			}
		}
	}
</script>

<style lang="less">
	#modal_overlay{
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		text-align: center;
		z-index: 1000;
		background-color: rgba(0, 0, 0, 0.5);

		#modal_data{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			#btn{
				position: relative;
				z-index: 100;
				padding: 3px 5px;
				cursor: pointer;
				border: none;
				color: white;
				background-color: black;
				font-weight: bold;
				float: right;
			}

			#img{
				width: 100%;
				position: relative;
				background-color: rgb(255, 255, 255);
				text-align: center;
				border-radius: 4px;
				margin-top: -20px;
				float: left;
			}
			span{
				position: relative;
				z-index: 100;
				color: white;
				float: left;
			}

		}

		
	}
</style>