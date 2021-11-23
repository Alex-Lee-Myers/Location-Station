import { MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <div className="footer" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <MDBCol md="12">
                <a className='text-white text-center' href="https://github.com/Alex-Lee-Myers/teamGit"
                target="_blank" rel="noopener noreferrer"> <MDBIcon fab icon="github" size="2x" className="white-text" />GitHub Repository</a>
            </MDBCol>
        </div>
    );
}

export default Footer;