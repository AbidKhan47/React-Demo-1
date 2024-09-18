import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

const App = () => {

  const players = [
    {
      name: "Lionel Messi",
      age: 37,
      card: "https://www.fut.gg/players/158023-lionel-messi/24-167930183/",
      picture: "https://media.cnn.com/api/v1/images/stellar/prod/230609115559-01-lionel-messi-inter-miami-messi.jpg?c=original"
    },
    {
      name: "Jude Bellingham",
      age: 21,
      card: "https://www.fut.gg/players/252371-jude-bellingham/24-117692883/",
      picture: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/10/07/16966897269586.jpg"
    },
    {
      name: "Luka Modric",
      age: 38,
      card: "https://www.fut.gg/players/177003-luka-modric/24-167949163/",
      picture: "https://3seaseurope.com/wp-content/uploads/2023/04/mrodic.webp"
    },
    {
      name: "Zaltan Ibrahimovic",
      age: 42,
      card: "https://www.fifaindex.com/player/41236/zlatan-ibrahimovi%C4%87/fifa24/#:~:text=Zlatan%20Ibrahimovi%C4%87%20was%20born%20on,Striker%20for%20Milan%20in%20Italy.",
      picture: "https://imageio.forbes.com/specials-images/imageserve/65771f937e3be289946024d7/Udinese-Calcio-v-AC-Milan---Serie-A/960x0.jpg?height=473&width=711&fit=bounds"
    },
    {
      name: "Erling Haaland",
      age: 24,
      card: "https://www.fut.gg/players/239085-erling-haaland/24-184788461/",
      picture: "https://prod-media.beinsports.com/image/1697925619184_8b0fc186-4a38-4728-8a19-1d4fd1911f90.jpg"
    },
  ]
    
  return (
      <>
      <div className="flex flex-wrap m-auto items-center justify-center space-x-10 align-middle h-screen">
        <h1 className="flex-col text-center text-8xl">
          Soccer Card Favorites 
        </h1>
        <div className='flex flex-wrap m-auto items-center justify-center space-x-10 align-middle h-screen'>
      { 
        players.map((x) => {
          return (
            <>
            <Card name={x.name} age={x.age} card={x.card} picture={x.picture}></Card>
            </>
          )
        })
      }
        </div>
      </div>
      </>
  );
};

export default App
