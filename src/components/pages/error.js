import React from 'react'


export default function Error() {
    return (
        <div style={styles.errorContainer}>
            <section style={styles.glasseffect}>
                <h1 style={styles.errortitle}> Error404 </h1>
                <p style={styles.errorcontext}>
                    We are teribbly sorry, we can't find what you are looking for :'(
                </p>
            </section>
        </div>
    );
}

const styles = {
    errorContainer: {
        backgroundImage: "url(/img/img-1.jpg)",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        display: "flex",
        padding: 150,
        justifyContent: "center",
        boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)",
        objectFit: "contain"
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
    },

    errortitle: {
        color: "white",
        fontSize: 130,
        fontFamily: "Montserrat",
        marginTop: 150,
        display: "flex",
        justifyContent: "center"

    },

    errorcontext: {
        color: "white",
        fontFamily: "montserrat",
        textAlign: "center",
        fontSize: 23,
        marginTop: 15

    }
}
