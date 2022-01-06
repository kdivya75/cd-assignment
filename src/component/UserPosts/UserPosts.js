import Card from 'react-bootstrap/Card';
import "./UserPosts.css";

function UserPosts({post}){
    return <Card className="height100">
            <Card.Body>
                <Card.Title className="mb-1">{post.title}</Card.Title>
                    <hr />
                    <Card.Text >
                           {post.body}
                </Card.Text>
            </Card.Body>
        </Card>
    
}

export default UserPosts;