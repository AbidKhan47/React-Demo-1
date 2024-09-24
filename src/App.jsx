import { useState } from 'react';
import Card from './Card';

const App = () => {
    const players = [
        {
            name: "Lionel Messi",
            age: 37,
            card: "https://www.fut.gg/players/158023-lionel-messi/25-158023/",
            picture: "https://media.cnn.com/api/v1/images/stellar/prod/230609115559-01-lionel-messi-inter-miami-messi.jpg?c=original"
        },
        {
            name: "Jude Bellingham",
            age: 21,
            card: "https://www.fut.gg/players/252371-jude-bellingham/25-252371/",
            picture: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/10/07/16966897269586.jpg"
        },
        {
            name: "Luka Modric",
            age: 38,
            card: "https://www.fut.gg/players/177003-luka-modric/25-177003/",
            picture: "https://3seaseurope.com/wp-content/uploads/2023/04/mrodic.webp"
        },
        {
            name: "Zlatan Ibrahimovic", 
            age: 42,
            card: "https://www.fifaindex.com/player/41236/zlatan-ibrahimovi%C4%87/fifa24/",
            picture: "https://imageio.forbes.com/specials-images/imageserve/65771f937e3be289946024d7/Udinese-Calcio-v-AC-Milan---Serie-A/960x0.jpg?height=473&width=711&fit=bounds"
        },
        {
            name: "Erling Haaland",
            age: 24,
            card: "https://www.fut.gg/players/239085-erling-haaland/25-239085/",
            picture: "https://prod-media.beinsports.com/image/1697925619184_8b0fc186-4a38-4728-8a19-1d4fd1911f90.jpg"
        },
        {
            name: "Cristiano Ronaldo", 
            age: 39,
            card: "https://www.fut.gg/players/20801-cristiano-ronaldo/25-20801/",
            picture: "https://library.sportingnews.com/styles/crop_style_16_9_tablet/s3/2023-02/Cristiano_Ronaldo_celebrate_Al-Nassr_Al-Wehda_2023.jpg?h=920929c4&itok=m4LWHeln"
        },
        {
            name: "Luis Suarez",
            age: 37,
            card: "https://www.fut.gg/players/176580-luis-suarez/25-176580/",
            picture: "https://tmssl.akamaized.net//images/foto/galerie/luis-suarez-inter-miami-cf-1712341266-133568.jpg?lm=1712341374"
        },
        {
            name: "Carles Puyol",
            age: 46,
            card: "https://www.fut.gg/players/238384-carles-puyol/25-238384/",
            picture: "https://d153a5wkap3yqn.cloudfront.net/cms/2535/2500-main.jpg"
        },
        {
            name: "Wayne Rooney",
            age: 38,
            card: "https://www.fut.gg/players/54050-wayne-rooney/25-54050/",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_xJYHlaG7JwGwVXvEHFVsZiIk6ypX-VgPw&s"
        },
        {
            name: "Kevin De Bruyne",
            age: 33,
            card: "https://www.fut.gg/players/192985-kevin-de-bruyne/25-192985/",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3oM_0LTasBYk1C9nt7dMgjahOMV5O60jdg&s"
        },
    ];
    
    return (
        <>
            <div className="bg-[url('https://t3.ftcdn.net/jpg/04/32/82/80/360_F_432828076_oObmCMDFy2p3s6pT3Z0AZPatmE74T817.jpg')] bg-fixed bg-cover bg-center min-h-screen">
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl text-center text-white font-bold font-serif mb-10">
                        Soccer Player Favorites
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mx-auto">
                        { 
                            players.slice(0, 12).map((x) => {
                                return (
                                    <Card 
                                        key={x.card} 
                                        name={x.name} 
                                        age={x.age} 
                                        card={x.card} 
                                        picture={x.picture}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
