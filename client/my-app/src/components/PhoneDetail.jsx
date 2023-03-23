import { useParams } from 'react-router-dom';

function PhoneDetail({phones}) {

    const { idPhone } = useParams();
    console.log("ID PHONE")
    const currentPhone = phones.find(phone => phone.id === idPhone);

    return (
        <h2>{currentPhone.name}</h2>
    )
}

export default PhoneDetail;