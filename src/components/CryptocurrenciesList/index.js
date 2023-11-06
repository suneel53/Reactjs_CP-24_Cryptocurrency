// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem/index'
import './index.css'

const CryptocurrenciesList = props => {
  const {CryptocurrenciesListDetails} = props
  return (
    <div className="list-cont">
      <h1 className="list-cont-head">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="list-cont-image"
      />
      <div className="cryptocurrencies-list-container">
        <div className="list-header">
          <p className="list-coin-type-heading">Coin Type</p>
          <div className="usdAndEuro-values-container">
            <p className="list-coin-value-heading">USD</p>
            <p className="list-coin-value-heading">EURO</p>
          </div>
        </div>
        <ul className="cryptocurrencies-list-uolist">
          {CryptocurrenciesListDetails.map(each => (
            <CryptocurrencyItem key={each.id} details={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
