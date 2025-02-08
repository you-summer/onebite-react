const CurrencyInput = ({country, value, onChange}) => {
    return(
        <div>
            {country} : 
            <input 
                type="number" 
                onChange={(e)=>{
                    onChange(country,e.target.value)
                }}  
                value={value}/>
        </div>
    )
}

export default CurrencyInput;