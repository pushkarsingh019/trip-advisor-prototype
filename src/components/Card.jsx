import { useNavigate } from "react-router-dom";

const Card = ({ id, name, image, type }) => {
    const navigate = useNavigate();
    console.log(id);
    return (
        <div
            onClick={() =>
                navigate(
                    type === "continent" ? `/continent/${id}` : `/${name}/${id}`
                )
            }
            className="w-80 h-auto bg-contain rounded-lg shadow-md flex flex-col  gap-y-3 justify-start hover:cursor-pointer"
        >
            <img
                src={image}
                alt={name}
                className="w-max h-max object-contain rounded-md"
            />
            <p className="text-2xl text-left px-2 mb-4">{name}</p>
        </div>
    );
};

export default Card;
