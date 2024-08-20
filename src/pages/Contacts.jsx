import { useParams } from "react-router-dom"

export const Contacts = () => {
    const { contactID } = useParams();

    return (
        <div>
            <h1>Contactos: </h1>
            <p>{contactID}</p>
        </div>
    );
}