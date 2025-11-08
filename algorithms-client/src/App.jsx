import { useState, useEffect } from 'react';

function App() {

    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch('http://localhost:5158/weatherforecast');
                const data = await response.json();
                setForecast(data);
            } catch (e) {
                console.error("Error:", e);
            }
        };
    
        fetchWeather();
    }, []);

    return (
        <div>
            <h1>Data from .NET API:</h1>
            <pre>
                {JSON.stringify(forecast, null, 2)}
            </pre>
        </div>
    );
}

export default App;