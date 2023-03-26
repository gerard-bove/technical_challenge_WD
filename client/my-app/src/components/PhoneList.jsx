import { Link } from "react-router-dom"

function PhoneList({phones}) {

    return(
        <div className="col-sm-6">
            <div className="list-group">
                {phones.map(phone => (
                    <Link key={phone.id} to={`/${phone.id}`} className="list-group-item list-group-item-action list-group-item-secundary">{phone.name}</Link>
                ))}
            </div>
        </div>
    )
}

export default PhoneList;