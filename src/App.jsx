import { useState } from 'react';
import './App.css';

function CurrencyConverter() {
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("usd");
    const [toCurrency, setToCurrency] = useState("inr");

    const handleSwap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setAmount(convertedAmount);
    };

    const handleConvert = () => {
        // Logic for currency conversion
        // Here, just simulating the conversion as shown in the screenshot
        setConvertedAmount(amount * 83.215); // Assume some conversion rate
    };

    return (
        <div
            className="w-full h-screen flex justify-center items-center bg-cover bg-center"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                backgroundSize: 'cover',       // Make the background cover the whole screen
                backgroundPosition: 'center',   // Center the background image
                backgroundRepeat: 'no-repeat',  // Prevent background repetition
            }}
        >
            <div className="max-w-md w-full p-5 bg-white/30 backdrop-blur-md rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <div className="w-1/2 pr-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white"
                        />
                    </div>
                    <div className="w-1/2 pl-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Currency Type</label>
                        <select
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white"
                        >
                            <option value="usd">USD</option>
                            <option value="inr">INR</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-center mb-4">
                    <button
                        onClick={handleSwap}
                        className="bg-blue-500 text-white px-4 py-1 rounded-md focus:outline-none"
                    >
                        Swap
                    </button>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <div className="w-1/2 pr-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                        <input
                            type="text"
                            value={convertedAmount}
                            readOnly
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                        />
                    </div>
                    <div className="w-1/2 pl-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Currency Type</label>
                        <select
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white"
                        >
                            <option value="inr">INR</option>
                            <option value="usd">USD</option>
                        </select>
                    </div>
                </div>

                <button
                    onClick={handleConvert}
                    className="w-full bg-blue-500 text-white py-2 rounded-md focus:outline-none"
                >
                    Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
                </button>
            </div>
        </div>
    );
}

export default CurrencyConverter;
