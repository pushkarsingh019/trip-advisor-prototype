import { useNavigate } from "react-router-dom";

const Card = ({ id, name, image, type, continent }) => {
    const navigate = useNavigate();
    console.log(id);
    return (
        <div
            onClick={() =>
                navigate(
                    type === "continent"
                        ? `/continent/${id}`
                        : `/${continent}/${name}/${id}`
                )
            }
            className="w-80 h-auto bg-contain rounded-lg shadow-md flex flex-col  gap-y-3 justify-start object-cover hover:cursor-pointer"
        >
            <img
                src={image}
                alt={name}
                className="w-auto h-64 object-cover rounded-md"
            />
            <p className="text-2xl text-left px-2 mb-4">{name}</p>
        </div>
    );
};

export default Card;
