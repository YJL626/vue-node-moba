import { anyObject } from '../type'

function checkObjectForm(model: anyObject, data: anyObject): boolean {
  return Object.keys(model).every((property) => {
    //查询是否有嵌套
    if (typeof model[property] === 'object') {
      // 如果body和模型的数据类型不一致说明验证未通过
      if (typeof data[property] !== 'object') return false
      //递归的进行验证
      return checkObjectForm(
        model[property] as anyObject,
        data[property] as anyObject
      )
    }
    return Object.prototype.hasOwnProperty.call(data, property)
  })
}
export { checkObjectForm }
