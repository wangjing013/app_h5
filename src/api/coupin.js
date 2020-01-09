import service from '@/utils/request.js'

// const getCouponList = function () {
//   console.log(service)
// }

// module.exports = getCouponList
export const getCouponList = () => {
  return service.post('/privilege/coupon/list')
}
