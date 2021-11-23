import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <div className="footer text-center fixed-bottom" 
            style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                marginBottom: '10px'
             }}>
            <MDBCol md="12">
                <a className='text-white text-center p-5 m-5' href="https://github.com/Alex-Lee-Myers/teamGit"
                target="_blank" rel="noopener noreferrer"> <MDBIcon fab icon="github" size="1x" className="white-text" />   GitHub Repository</a>
            </MDBCol>
        </div>
    );
}
export default Footer;