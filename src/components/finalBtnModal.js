import { containerValueBasket, arrFinalBasket } from '..'
import ResultSum from './resultSum'
import { varPrice, productount } from '..'

class FinalBtnModal {
  colculFinalBtnModal() {
    containerValueBasket.innerHTML = ''
    let newArrFinalBasket = arrFinalBasket
    newArrFinalBasket.push({ name: 'Овощной', varPrice, count: productount })
    let finalsUM = 0
    newArrFinalBasket.map(element => {
      finalsUM += element.varPrice
      return new ResultSum(containerValueBasket, element)
    })
    document.getElementById('id-final-purchase-price').innerHTML = finalsUM
    // initialDataSetting()====================
  }
}

export default FinalBtnModal
