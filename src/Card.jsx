


const Card = (props) => {
    return (
        <>
        <div className="flex flex-col border items-center justify-center">
         <img src={props.picture} className="h-[12rem] w-[20rem]"></img>
         <p className=" font-bold font-serif text-xl text-blue-500">{props.name}</p>
         <p>{props.age}</p>
         <a href={props.card}>Link to Card</a>
        </div>
        </>
    )
}

export default Card