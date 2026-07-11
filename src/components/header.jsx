import { Link } from 'react-router-dom';
function Header(){
    return(
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/image-viewer">Image Viewer</Link>
        </div>
    )
}
export default Header