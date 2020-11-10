<template>
  <div class="detail-main">
    <DetailNavBar
      class="detail-nav"
      @titleClick="titleClick"
      :currentIndex="currentIndex"
    />
    <Scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <DetailSwiper :top-images="topImages" ref="base" />
      <DetailBaseInfo :goods="goods" />
      <DetailShopInfo :shop="shop" /> -->
      <DetailGoodsInfo :detail-info="detailInfo" @imageLoad1="imageLoad1" />
      <DetailParamInfo :param-info="paramInfo" ref="param" />
      <DetailCommentInfo :commentInfo="commentInfo" ref="comment" />
      <DetailRecommendInfo
        @imageLoad="imageLoad2"
        ref="recommend"
        :recommend-list="recommend"
      />
    </Scroll>
    <DetailBottomBar @addToCart="addToCart" />
    <BackTop @click="backTop" class="back-top" v-show="showBackTop" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo";
import BackTop from "components/content/backTop/BackTop";
import { backTopMixin } from "@/common/mixin";

import Scroll from "components/common/scroll/Scroll";
import { debounce } from "common/utils";
import { BACKTOP_DISTANCE } from "@/common/const";
import Message from "@/../node_modules/element3/packages/message/index.js";

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    DetailRecommendInfo,
    Scroll,
    BackTop,
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: "",
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTops: [],
      currentIndex: 0,
      refresh: null,
      setTops: null,
    };
  },
  created() {
    this._getDetailData();
    this._getRecommend();
  },
  // updated() {
  //   this._getOffsetTops();
  // },
  mounted() {
    //设置防抖
    this.refresh = debounce(this.$refs.scroll.refresh, 500);
    this.setTops = debounce(this._getOffsetTops, 500);
  },
  methods: {
    imageLoad1() {
      this.refresh();
      this.setTops();
    },
    imageLoad2() {
      this.refresh();
      this.setTops();
    },
    titleClick(index) {
      this.currentIndex = index;
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 200);
    },
    contentScroll(position) {
      // 1.监听backTop的显示
      this.showBackTop = -position.y > BACKTOP_DISTANCE;

      // 2.监听滚动到哪一个主题
      this._listenScrollTheme(-position.y);
    },
    addToCart() {
      // 1.创建对象
      const obj = {};
      // 2.对象信息
      obj.iid = this.iid;
      obj.imgURL = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.realPrice = this.goods.realPrice;
      // console.log(this.goods);
      // 3.添加到Store中
      this.$store.dispatch("addCart", obj).then((res) => {
        Message({
          message: "加入购物车成功",
          duration: 2000,
          type: "success",
          verticalOffset: 300,
        });
      });
    },
    _listenScrollTheme(position) {
      let length = this.themeTops.length;
      for (let i = 0; i < length - 1; i++) {
        let iPos = this.themeTops[i];
        if (position >= iPos && position < this.themeTops[i + 1]) {
          if (this.currentIndex !== i) {
            this.currentIndex = i;
          }
          break;
        }
      }
    },
    _getOffsetTops() {
      this.themeTops = [];
      this.themeTops.push(this.$refs.base.$el.offsetTop);
      this.themeTops.push(this.$refs.param.$el.offsetTop);
      this.themeTops.push(this.$refs.comment.$el.offsetTop);
      this.themeTops.push(this.$refs.recommend.$el.offsetTop);
      this.themeTops.push(Number.MAX_VALUE);
      console.log("获取组件高度完成");
    },
    _getDetailData() {
      // 1.保存传入的iid
      this.iid = this.$route.query.iid;
      // 2.根据iid请求详情数据
      getDetail(this.iid).then((res) => {
        // 1.获取顶部的图片轮播数据
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        // 2.获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo);
        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo;
        // 5.获取参数的信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    _getRecommend() {
      getRecommend().then((res, error) => {
        if (error) return;
        this.recommend = res.data.list;
      });
    },
  },
};
</script>

<style scoped>
.detail-main {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 60px;
}
.back-top {
  position: fixed;
  right: 10px;
  bottom: 65px;
}
</style>
