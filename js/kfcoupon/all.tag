<coupon-list>
  <coupon each={opts.data} coupon={this} />
</coupon-list>

<coupon>
  <div class="coupon" title="{coupon.CouponTitle}">
    <h4>
      {coupon.CouponTitle.replace(/ .+/, '')}
      ¥{coupon.CouponPrice}
    </h4>

    <img src="http://youhui.kfc.com.cn/{coupon.SmallPic}" />
  </div>

  this.coupon = opts.coupon
</coupon>

