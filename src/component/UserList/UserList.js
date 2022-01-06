import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

import './UserList.css';

function UserList ({user}) {
    return (
        <ListGroup.Item key={user.id} className="listItem" role="listitem">
        <Link to={`/user/${user.id}`} className="linkText" aria-label={`link to view more about ${user.name}`}>
            <div className="avatar"></div>
            <div className="row pt-2">
                <div className="col-md-7">
                    <div className="fw-bold">{user.name}</div>
                    <div>{user.username}</div>
                </div>
                <div className="col-md-5">
                    <p className="text-md-end">
                        <a href={`mailto:${user.email}`} onClick={e=> e.stopPropagation()}>{user.email}</a>
                    </p>
                </div>
            </div>  
        </Link> 
    </ListGroup.Item>
    )
}

export default UserList;