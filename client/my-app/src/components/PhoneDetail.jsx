import { useParams } from 'react-router-dom';

function PhoneDetail({phones}) {

    const { idPhone } = useParams();

    const currentPhone = phones.find(phone => phone.id == idPhone);
    
    return (
        <div className="col-sm-6">
        <div className="card" style={{width: "18rem"}}>
            <img src={`http://localhost:5005/phones/${currentPhone.id}`} className="card-img-top" alt={currentPhone.name}/>
            <div className="card-body">
                <h4 className="card-text">{currentPhone.name}</h4>
                <p className="card-text">{currentPhone.manufacture}</p>
                <p className="card-text">{currentPhone.description}</p>
            </div>
        </div>
        </div>
    )
}

export default PhoneDetail;