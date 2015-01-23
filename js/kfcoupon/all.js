riot.tag('coupon-list', '<coupon each="{opts.data}" coupon="{this}" ></coupon>', function(opts) {
})

riot.tag('coupon', '<div class="coupon" title="{coupon.CouponTitle}"> <h4> {coupon.CouponTitle.replace(/ .+/, \'\')} ¥{coupon.CouponPrice} </h4> <img src="http://youhui.kfc.com.cn/{coupon.SmallPic}" ></img> </div>', function(opts) {
  this.coupon = opts.coupon
})

