import {useEffect, useState} from "react"


function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)

                console.log(response.ok)
                if(!response.ok) {
                    throw new Error(`Error in fetching currency data: ${response.status}`)
                }
                const jsonData = await response.json()
                setData(jsonData[currency])
            } catch (error) {
                console.error("Error in fetching currency data: ",error)
            }
        }

        fetchData();
    }, [currency])
    console.log(data);
    return data;
  }

export default useCurrencyInfo; 