<template>
<div class="cube-page">
  <div class="warpper">
    <cube-scroll-nav
      ref="cube-scroll-nav"
      :side="true"
      :data="list"
      :current="current"
      @change="changeHandler"
      @sticky-change="stickyChangeHandler">
      <div class="side-container" slot="bar">
       <cube-scroll-nav-bar
          direction="vertical"
          :current="currentLabel"
          :labels="labels"
          :txts="txts"
        >
          <template slot-scope="props">
            <div class="nav-bar-item">
              <div class="nav-bar-item-icon">
                <img :src="getIcon(props.index)" alt="">
              </div>
              <div class="nav-bar-item-text">
                {{props.txt}}
              </div>
            </div>
          </template>
        </cube-scroll-nav-bar>
      </div>
      <cube-scroll-nav-panel
        v-for="item in list"
        :key="item.name"
        :label="item.name"
        :title="item.name">
        <CouponList>
          <CouponItem v-for="couponItem in item.couponList" :data="couponItem" :key="couponItem.id" @click.native="handleItemClick(couponItem)"></CouponItem>
        </CouponList>
      </cube-scroll-nav-panel>
    </cube-scroll-nav>
  </div>
</div>
</template>

<script>
import { getCouponList } from '@/api/coupin.js'
import CouponList from '@/components/coupon/CouponList'
import CouponItem from '@/components/coupon/CouponItem'
import { replaceUrl } from '@/utils/util'
export default {
  components: {
    CouponList,
    CouponItem
  },
  data () {
    return {
      list: [],
      current: '',
      currentLabel: '',
      labels: [],
      txts: []
    }
  },
  methods: {
    changeHandler (label) {
      this.currentLabel = label
    },
    stickyChangeHandler (current) {
    },
    handleItemClick (item) {
      location.href = item.couponUrl
    },
    generateLabel () {
      const labels = []
      this.list.forEach((item) => {
        labels.push(item.name)
      })
      this.labels = labels
      this.txts = labels
    },
    initLabel () {
      let id = this.$route.query.id
      console.log(id)
      if (typeof id === 'string') {
        this.findCurLabelById(id)
      } else {
        this.setLabel()
      }
    },
    setLabel (target) {
      if (!this.list.length) return
      let item = target
      if (!item) {
        item = this.list[0]
      }
      this.currentLabel = item.name
      this.current = item.name
    },
    findCurLabelById (id) {
      let item = this.list.find((item, index, arr) => {
        if (item.id === id) {
          return true
        }
      })
      this.setLabel(item)
    },
    getIcon (index) {
      return replaceUrl(this.list[index].brandLogo)
    }
  },
  mounted () {
  },
  beforeCreate () {
    const toast = this.$createToast({
      time: 0,
      txt: '数据加载中...'
    })
    toast.show()
    getCouponList().then((result) => {
      toast.hide()
      if (result.code === 0) {
        this.list = result.data
        this.generateLabel()
        setTimeout(() => {
          this.initLabel()
          this.$refs['cube-scroll-nav'].refresh()
        }, 300)
      }
    }, () => {
      toast.hide()
    })
  }
}
</script>

<style lang="stylus">
  .cube-page {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #efeff4;
  }
  .warpper {
    height 100%
    background #efeff4
  }
  .side-container {
    height: 100%;
  }
  .food-img {
    width: 100%
    height: 180px;
  }

  .warpper .cube-scroll-nav-bar-item {
    padding: 0;
  }
  .warpper .cube-scroll-nav-bar-item_active{
    background-color: rgba(36, 36, 36, 1);
    .nav-bar-item-text {
      color: #fff;
    }
  }
  .warpper h2{
    font-size: 28px
    padding: 25px 55px 25px 55px
    background url(../assets/images/tip_icon.png) no-repeat
    background-size 20px 20px
    background-position 25px center

  }
  .warpper .cube-sticky-fixed {
    background-color #fff
  }
  .nav-bar-item {
    display: flex;
    width: 160px;
    height: 160px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .nav-bar-item-icon {
    width: 70px;
    height: 70px;
  }
  .nav-bar-item-icon img {
    width: 100%
  }
  .nav-bar-item-text {
    font-size: 22px;
    font-weight: 500;
    color: rgba( 36, 36, 36, 1);
    margin-top: 12px;
  }
</style>
