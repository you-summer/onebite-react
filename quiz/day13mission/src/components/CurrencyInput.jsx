const CurrencyInput =({currency, value, onChange})=>{
    return(
        <div>
            <label>{currency}</label>
            <div>
                <input 
                type="number" 
                value={value} 
                onChange={(e)=>{
                    onChange(currency, e.target.value);
                }}/>
            </div>
        </div>
    )
};

export default CurrencyInput;