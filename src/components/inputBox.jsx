import React from 'react';

function InputBox({
    label,
    amount,
    currencyOptions,
    onCurrencyChange,
    selectCurrency,
    onAmountChange,
    amountDisable
}) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <div className="flex space-x-2 mt-2">
                <select
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange(e.target.value)}
                    className="w-1/2 p-2 border border-gray-300 rounded-md"
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => onAmountChange(e.target.value)}
                    className="w-1/2 p-2 border border-gray-300 rounded-md"
                    disabled={amountDisable}
                />
            </div>
        </div>
    );
}

export default InputBox;
