riot.tag('coupon-list', '<coupon each="{coupons}" coupon="{this}" ></coupon>', function(opts) {
  this.coupons = opts.data.sort(function(a, b) {
  	return mark(b) - mark(a);
  });

  function mark(coupon) {
  	var mark = 0;
  	if(coupon.CouponTitle.indexOf('粥') !== -1 || coupon.CouponTitle.indexOf('豆浆') !== -1) {
  		mark -= 1000;
  	}
  	mark += parseFloat(coupon.CouponPrice);

  	return mark;
  }
})

riot.tag('coupon', '<div class="coupon" title="{coupon.CouponTitle}"> <h4> {coupon.CouponTitle.replace(/ .+/, \'\')} ¥{coupon.CouponPrice} </h4> <ul> <li each="{items}">{__item}</li> </ul> <img src="http://youhui.kfc.com.cn/{coupon.SmallPic}" ></img> </div>', function(opts) {
  this.coupon = opts.coupon
  this.items = this.coupon.CouponTitle.replace(/^\w+ /, '').split('+');
})

