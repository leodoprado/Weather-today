import React, { useState } from "react";
import axios from "axios";
import { Container, ContainerContent, ContainerHeader, Title, ContainerInput, ContainerContentWeather } from "./styles/styleHome";
import logo from "./assets/logo.png"

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(api).then((response) => {
        setData(response.data);
        console.log(response.data)
      })
      setLocation('');
    }
  }

  return (
      <Container>
        <ContainerContent>
          <ContainerHeader>
            <img src={logo} alt="" />
            <Title>
              <h1>Weather</h1>
              <h1>Today</h1>
            </Title>
          </ContainerHeader>
          <ContainerInput>
            <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            type="text" 
            placeholder="Digite a cidade que deseja buscar..."/>
          </ContainerInput>
          <ContainerContentWeather>
            <div className="top">
              <div className="location">
                <p>{data.name}</p>
              </div>
              <div className="temp">
                {data.main ? <h1>{((data.main.temp - 30)/2).toFixed()}°C</h1> : null}
              </div>
              <div className="description">
                {data.weather ? <p>{data.weather[0].main}</p> : null}
              </div>
            </div>
          </ContainerContentWeather>
        </ContainerContent>
      </Container>
  );
}

export default App;
