import React from 'react';
import '../App.css';
import { Button } from './button';
import Footer from './pages/footer';

export default function HeroSection() {

    const handleClick = () => {
        alert("Button clicked")

        /*TODO: Connect to metamask */
    }

    return (
        <>
            <div style={styles.heroContainer}>
                <div>
                    {/* <video src='videos/video-3.mp4' autoPlay loop muted /> */}
                    {/* <h1 style={{ ...styles.heroTitle, ...styles.textPreset }}> Welcome to DocsPal! </h1> ((untuk menyatukan styles))*/}

                    <h1 style={styles.heroTitle}> Welcome to DocsPal! </h1>
                    <p style={styles.heroContent}> This is the place where you can protect your document with SAFE.</p>
                    <p style={styles.textPreset}>No need to register! In order to start, you just need to connect your account to your metamask wallet. simple!</p>

                    <div style={styles.heroButtonContainer} onClick={() => { handleClick() }}>
                        <button style={styles.connectBtn}>
                            Connect to Metamask
                        </button>

                    </div>
                </div>
            </div >
        </>
    );
}



const styles = {
    heroContainer: {
        backgroundImage: "url(/img/img-1.jpg)",
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        display: "flex",
        padding: 150,
        justifyContent: "center",
        boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)",
        objectFit: "contain"
    },
    heroTitle: {
        fontSize: 60,
        marginBottom: 10,
        textAlign: "center",
        fontFamily: "Poppins",
        color: "white"

    },
    heroContent: {
        fontSize: 40,
        textAlign: "center",
        marginBottom: 28,
        color: "white",
        fontFamily: "Poppins",
        fontWeight: "400"


    },
    textPreset: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        marginBottom: 23,
        fontFamily: "Poppins"

    },
    heroButtonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    connectBtn: {
        backgroundColor: "transparent",
        fontSize: 20,
        border: "solid 2px white",
        color: "white",
        width: 345,
        height: 67,
        cursor: "pointer",
        fontFamily: "Montserrat"

    }
}