import React from 'react'

export default function Footer() {
    return (
        <>

            <div style={styles.footerContainer}>
                <h1 style={styles.footerTitle}> Quick Overview </h1>
                <p style={styles.footerContent}> Dibuat oleh Annisa, Abhista, dan Rizal untuk menyelesaikan tugas akhir jurusan S1 Teknik Komputer Fakultas Teknik Elektro Universitas Telkom </p>
            </div>
        </>
    );
}
const styles = {
    footerContainer: {
        backgroundColor: "#0F0F0F",
        width: 1440,
        height: 174,
        width: "100%",
        padding: 50,
        justifyContent: "left"
    },

    footerTitle: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: "left",
        fontFamily: "Poppins",
        color: "white"

    },

    footerContent: {
        fontSize: 15,
        textAlign: "left",
        marginBottom: 28,
        color: "white",
        fontFamily: "Poppins",
        fontWeight: "400"
    }
}