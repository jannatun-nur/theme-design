

const Feature = () => {
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* SECTION---0001111 */}
                <section className="  shadow-xl shadow-blue-500 rounded-2xl lg:p-4 p-4">
                    <p className="lg:text-4xl font-bold text-transparent
       bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-2xl my-2">Options Scanners</p>
                    <div className="grid-cols-2 gap-3 ">
                    <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">ATM Bullish based on Moving Average</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Closest premium bearish based on RSI</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Otm bearish strategy</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">ITM bullish buying strategy</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">MACD Option selling</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">MFI Option Buying</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Vwap option bearish</button>
                    </div>
                    
                </section>

                {/* SECTION---2222222222222222 */}
                <section className="  shadow-xl shadow-blue-500 rounded-2xl lg:p-4 p-4 ">
                    <p className="lg:text-4xl font-bold text-transparent
       bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-2xl my-2">Futures Scanners</p>
                    <div className="grid-cols-2 gap-3 ">
                    <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Bollinger band breakout</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">SMA Bullish future</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">MFI Bearish future</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">3 indicator bullish future</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">William % r bearish future</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Future bullish based on adx</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Future bearish Vwap</button>
                    </div>
                    
                </section>
                {/* SECTION---00033333 */}
           
                <section className="  shadow-xl shadow-blue-500 rounded-2xl lg:p-4 p-4">
                    <p className="lg:text-4xl font-bold text-transparent
       bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-2xl my-2">Bullish Scanners</p>
                    <div className="grid-cols-2 gap-3 ">
                    <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Golden crossover</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">MACD Bullish</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Hammer Bullish</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">CCI Bullish</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">RSI Bullish</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">ADX Buying</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Bullish Marabozu</button>
                    </div>
                    
                </section>
                {/* SECTION---0001111 */}
                <section className="  shadow-xl shadow-blue-500 rounded-2xl lg:p-4 p-4">
                    <p className="lg:text-4xl font-bold text-transparent
       bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-2xl my-2">Bearish Scanners</p>
                    <div className="grid-cols-2 gap-3 ">
                    <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Death Crossover</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">MACD Bearish</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Bearish Harami</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">RSI Selling</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">ADX Selling</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Bearish Inverted Hammer</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Doji sideways</button>
                    </div>
                    
                </section>



                {/* SECTION---0001111 */}
                <section className="  shadow-xl shadow-blue-500 rounded-2xl lg:p-4 p-4">
                    <p className="lg:text-4xl font-bold text-transparent
       bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-2xl my-2">Candlestick Scanners</p>
                    <div className="grid-cols-2 gap-3 ">
                    <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Bullish Marabozu</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Three white soldiers Bullish</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Doji buying</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Hammer Buying</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Three Black Crows</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Marabozu bullish</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Bullish 3 white soldiers</button>
                    </div>
                    
                </section>





                {/* SECTION---0001111 */}
                <section className="  shadow-xl shadow-blue-500 rounded-2xl lg:p-4 p-4">
                    <p className="lg:text-4xl font-bold text-transparent
       bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-2xl my-2">Top Loved</p>
                    <div className="grid-cols-2 gap-3 ">
                    <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Closest premium bearish based on RSI</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Golden crossover</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Three Black Crows</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">3 indicator bullish future</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Marabozu bullish</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Bearish Inverted Hammer</button>
                     <button className="px-4 w-full py-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 text-white rounded-lg my-2 lg:text-xl">Doji sideways</button>
                    </div>
                    
                </section>


                
               
            </div>
            
        </div>
    );
};

export default Feature;