<template>
  <div class="coupon-item">
    <div class="coupon-item-innner">
      <div class="coupon-item-icon">
        <img :src="replaceUrl(data.logo)"/>
      </div>
      <div class="coupon-item-content">
        <div class="coupon-name">{{data.couponName}}</div>
        <div class="coupon-price">{{data.promotionTitle}}</div>
        <div class="coupon-desc">
          {{data.remark}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { replaceUrl } from '@/utils/util'
export default {
  props: {
    'data': {
      type: Object,
      required: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    replaceUrl (str) {
      return replaceUrl(str)
    }
  }
}
</script>

<style lang="stylus">
  .coupon-item {
    width: 540px;
    margin: 20px auto;
  }
  .coupon-item-innner {
    background: url(./coupon_bg.png)
    background-size: 100% 100%
    display: flex
    align-items center
    padding: 29px 34px
    .coupon-item-icon {
      width 70px
      height 70px
      flex: 0 0 70px;
      margin-right 35px
      img {
        width 100%
        height 100%
      }
    }
    .coupon-item-content {
      .coupon-name {
        font-size 26px
        color rgba(102, 102, 102, 1)
      }
      .coupon-price {
        margin 20px 0
        font-size 36px
        color rgba(193, 48, 51, 1)
        font-weight bold
      }
      .coupon-desc {
        font-size 24px
        color rgba(153, 153, 153, 1)
      }
      .coupon-price,
      .coupin-desc {
        width 367px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      }
    }
  }

</style>
