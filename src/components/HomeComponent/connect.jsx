import { Link } from 'react-router-dom';

export default function Connect({ setIsConnected }) {

    const onClickConnectBtn = () => {
        setIsConnected(true)
    }


    return (
        <>
            <div style={styles.homeContainer}>
                <section style={styles.effect}>
                    <div>
                        {/* <video src='videos/video-3.mp4' autoPlay loop muted /> */}
                        {/* <h1 style={{ ...styles.heroTitle, ...styles.textPreset }}> Welcome to DocsPal! </h1> ((untuk menyatukan styles))*/}

                        <h1 style={styles.connectTitle}> Welcome to DocsPal! </h1>
                        <p style={styles.connectContent}> This is the place where you can protect your document with safe.</p>
                        <p style={styles.textPreset}>No need to register! In order to start, you just need to connect your account to your metamask wallet. simple!</p>
                        <li className='nav-item'>

                            <div style={styles.buttonContainer}>
                                <Link to='/' className='nav-links'>
                                    <button style={styles.connectBtn} onClick={() => { onClickConnectBtn() }}>Connect to Metamask</button>
                                </Link>
                            </div>
                        </li>
                    </div>
                </section>
            </div >
        </>
    );
}


const styles = {
    homeContainer: {
        backgroundImage: "url(/img/img-1.jpg)",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        display: "flex",
        padding: 150,
        justifyContent: "auto",
        boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)",
        objectFit: "contain",
        position: "relative"
    },

    effect: {
        background: "rgba(255,255,255,0.4)",
        backDropFilter: "blur(8px)",
        width: "50%",
        boxShadow: "inset 0 8px 32px 0 rgba (0,0,0,0.37)",
        border: "1px solid rgba(255,255,255,0.40)",
        borderRadius: "32px",
        opacity: 1,
        padding: 20
        //buat jadi blur gakkbisa
    },

    connectTitle: {
        fontSize: 60,
        marginBottom: 10,
        textAlign: "center",
        fontFamily: "Poppins",
        color: "white"

    },
    connectContent: {
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
    buttonContainer: {
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
