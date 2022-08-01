import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button';


export default function About() {
    return (
        <div style={styles.aboutContainer}>
            <section style={styles.glasseffect}>
                <h1 style={styles.aboutTitle}> About Us </h1>
                <p style={styles.aboutcontext}>
                    We are a Blockchain based website that can be used for storing and tracking your documents with high secure.
                    By using Metamask wallet as the account, there will be no registration! all you need to do is to set up your wallet then connect it to our network and if the wallet all set up, you are free to use this website!
                </p>
                <h1 style={styles.bctitle}> What is Blockchain? </h1>
                <p style={styles.bccontext}>
                    Blockchain is a decentralized cryptocurrency technology that in this case, are used to track documents and make an ideal evidence that can’t be manipulated by anyone except the owner itself.  Blockchain also have a secure network that are immune to some security attack so by using this technology, your files safety are highly guaranteed!
                </p>
                <p style={styles.direct}>
                    incase you don't have the metamask extension and don't have metamask account, please consider download it through the link below!
                </p>
                <div style={styles.linkContainer}>
                    <Button variant='contained' color="white" onClick={event => window.location.href = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en-US'}>
                        Download metamask extension
                    </Button>

                    {/* <Link to="/https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en-US" className='link'>
                        Download metamask extension
                    </Link> */}
                    {/* <a>https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en-US</a> */}
                </div>
            </section>
        </div>
    );
}

const styles = {
    aboutContainer: {
        backgroundImage: "url(/img/img-1.jpg)",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        display: "flex",
        padding: 150,
        justifyContent: "center",
        boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)",
        objectFit: "contain",
        position: "relative"
    },

    glasseffect: {
        background: "rgba(255,255,255,0.4)",
        backDropFilter: "blur(8px)",
        width: "100z%",
        boxShadow: "inset 0 8px 32px 0 rgba (0,0,0,0.37)",
        border: "1px solid rgba(255,255,255,0.40)",
        borderRadius: "32px",
        opacity: 1,
        padding: 20
        //buat jadi blur gakkbisa
    },

    aboutTitle: {
        color: "white",
        fontSize: 45,
        fontFamily: "Poppins",
        marginTop: 20


    },

    aboutcontext: {
        color: "white",
        fontFamily: "Poppins",
        textAlign: "left",
        fontSize: 23,
        marginTop: 15
    },

    bctitle: {
        fontFamily: "Poppins",
        color: "white",
        fontSize: 25,
        marginTop: 40,

    },

    bccontext: {
        fontFamily: "Poppins",
        color: "white",
        fontSize: 23,
        marginTop: 15,
        textAlign: "left",

    },

    direct: {
        fontFamily: "Poppins",
        color: "white",
        fontSize: 23,
        marginTop: 30,
        textAlign: "left",
    },

    linkContainer: {
        fontFamily: "Poppins",
        fontColor: "white",
        fontSize: 23,
        textAlign: "left",
    }

}