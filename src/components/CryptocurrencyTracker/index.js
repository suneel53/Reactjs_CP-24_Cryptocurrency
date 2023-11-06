// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, cryptocurrenciesData: []}

  componentDidMount() {
    this.getCurrenciesData()
  }

  getCurrenciesData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const newData = data.map(item => ({
      id: item.id,
      usdValue: item.usd_value,
      currencyLogo: item.currency_logo,
      currencyName: item.currency_name,
      euroValue: item.euro_value,
    }))
    console.log(newData)
    this.setState({cryptocurrenciesData: newData, isLoading: false})
  }

  renderCryptocurrencyTracker = () => {
    const {cryptocurrenciesData} = this.state
    return (
      <CryptocurrenciesList
        CryptocurrenciesListDetails={cryptocurrenciesData}
      />
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="CryptocurrencyTracker-main-cont">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptocurrencyTracker()
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
