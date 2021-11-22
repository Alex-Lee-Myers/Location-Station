import {
    Navbar,
    NavLink,

} from 'reactstrap';

const Header = () => {
    return(
    <header>
        <Navbar className='header'>
        <h1>72 Hour Project</h1> 
        
                <NavLink className='link' href='https://github.com/Alex-Lee-Myers/teamGit'>
                    Github
                </NavLink>
          
        </Navbar>
    </header>
    );
};

export default Header;