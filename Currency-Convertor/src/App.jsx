import useCurrencyInfo from "./CustomHooks/useCurrencyRate.js";
import { useState } from "react";
import InputBox from "./Components/InputBox";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurr, setFromCurr] = useState("usd");
  const [toCurr, setToCurr] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurr);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFromCurr(toCurr);
    setToCurr(fromCurr);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const calcExchangeRate = () => {
    let res = amount * currencyInfo[toCurr];
    let data = res.toFixed(2);
    setConvertedAmount(data);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
      <div className="w-full">
        <div className="w-full max-w-lg mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              calcExchangeRate();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
               label="From"
               amount={amount} 
               onAmountChange={(selectedAmount) => {
                setAmount(selectedAmount);
               }}
               selectedCurrency={fromCurr}
               onCurrencyChange={(selectedOption) => {
                setFromCurr(selectedOption);
               }}
               currencyOptions={options}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                type="button"
                className="absolute pb-1 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 hover:bg-blue-700 active:bg-blue-900 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
               label="To"
               amount={convertedAmount} 
               onAmountChange={(selectedAmount) => {
                setConvertedAmount(selectedAmount);
               }}
               selectedCurrency={toCurr}
               onCurrencyChange={(selectedCurrency) => {
                setToCurr(selectedCurrency);
               }} 
               amountDisable={true}
               currencyOptions={options}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-900 text-white px-4 py-3 rounded-lg"
            >
              Convert {fromCurr.toUpperCase()} to {toCurr.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
