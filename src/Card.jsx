
const Card = (props) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center border p-4 w-[300px] h-[450px">
                <img src={props.picture} className="h-[12rem] w-[20rem]" alt={props.name} />
                <p className="font-bold font-serif text-xl text-white">{props.name}</p>
                <p className="font-bold font-serif text-xl text-white">{props.age}</p>
                <a href={props.card} target="_blank" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
                    Link to Card
                </a>
            </div>
        </>
    );
}

export default Card;
