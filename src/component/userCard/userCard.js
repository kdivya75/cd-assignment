
import Card from 'react-bootstrap/Card';

function userCard ({userData}) {
   return <div>
        <div className="row">
            <div className="col-md-4 mb-4">
                <Card>
                    <Card.Body>
                        <Card.Title className="mb-1">Contact Details</Card.Title>
                        <hr />
                        <Card.Text >
                            <p>Username: {userData.username}</p>
                            <p>Email: <a href={`mailto:${userData.email}`}>{userData.email}</a></p>
                            <p>Phone: <a href={`tel:${userData.phone}`}>{userData.phone}</a></p>
                            <p>website: <a href={`https://${userData.website}`} target="_blank" rel="noreferrer">{userData.website}</a></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-4 mb-4">
                <Card className="height100">
                    <Card.Body>
                        <Card.Title className="mb-1">Address</Card.Title>
                        <hr />
                        <Card.Text >
                          <p>
                              {`${userData.address.suite}, ${userData.address.street}, ${userData.address.city}, ${userData.address.zipcode}`}
                          </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-4 mb-4">
                <Card className="height100">
                    <Card.Body>
                        <Card.Title className="mb-1">Company</Card.Title>
                        <hr />
                        <Card.Text >
                          <p>{userData.company.name}</p>
                          <p>{userData.company.bs}</p>
                          <p><em>"{userData.company.catchPhrase}"</em></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div> 
 </div>
}

export default userCard;