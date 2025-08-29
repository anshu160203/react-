import React, {useId} from 'react'

function InputBox({ // here we take input,, and now we use this
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label /* isko wrap krne ke baad data variable se aa jaye ga  */}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable} // by deafault ye false hh lekin kissi ne pass kra ho to hm use kr lete hai
                    value={amount} // taking value
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} //agar amount change hota hh to use kre ge change hone ke baad
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}// yahan onCurrencyChanse check bhi ho rha hh isme value bhi aaye gi values bhi aaye gi 
                    disabled= {currencyDisable} // check kiya ki uski value enabled hh ya disabled
                >
                    
                        {currencyOptions.map((Currency) => {
                          <option 
                              key={Currency} 
                              value={Currency}>
                              {Currency}
                            </option>
                          // agar loops chaiye react mein to key ka dhyan rakhein
                        })}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
