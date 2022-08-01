import { useState } from "react";
export default function AfterConnect() {

    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div style={styles.homeContainer}>
                <div className="container py-5" >
                    <div className="row mb-4">
                        <div className="col-6">
                            <div className="card" style={styles.customCard}>
                                <div className="card-body">
                                    <h4 className="font-weight-bold">
                                        Account Details
                                    </h4>
                                    <hr className="mb-4" />
                                    <p>
                                        Account:
                                    </p>
                                    <hr className="mb-4" />
                                    <p>
                                        Balance:
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card" style={styles.customCard}>
                                <div className="card-body">
                                    <h4 className="font-weight-bold">
                                        Your Network
                                    </h4>
                                    <hr className="mb-8" />
                                    <p>
                                        You are currently using:
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="card" style={styles.customCard}>
                                <div className="card-body">
                                    <h4 className="font-weight-bold">
                                        Transaction History
                                    </h4>
                                    <hr className="mb-4" />
                                    <p>
                                        Name: Nissa
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" >
                            <div class="modal-content" style={styles.effect}>
                                <div class="modal-body">
                                    <div className="d-flex justify-content-end pb-3">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <h1 style={styles.homeTitle}> Upload your document here! </h1>
                                    <p style={styles.homeContext}> please pick your document (file type: jpg,jpeg,png,pdf,doc)</p>
                                    <input type="file" />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary">Upload File</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <button className="btn btn-success" style={styles.addDocumentButton} data-bs-toggle="modal" data-bs-target="#addModal">
                        +
                    </button>
                </div>
            </div>
        </>
    );
}
const styles = {
    mainContainer: {
        backgroundImage: "url(/img/img-1.jpg)",
    },
    homeContainer: {
        backgroundImage: "url(/img/img-1.jpg)",
        height: "100vh",
        width: "100%",
        // backgroundSize: "cover",
        // display: "flex",
        // padding: 150,
        // justifyContent: "center",
        // boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)",
        // objectFit: "contain",
        // position: "relative"
    },

    effect: {
        background: "rgba(255,255,255,0.4)",
        backDropFilter: "blur(8px)",
        // webkitBackdropFilter: "blur(20px)",
        boxShadow: "inset 0 8px 32px 0 rgba (0,0,0,0.37)",
        border: "1px solid rgba(255,255,255,0.40)",
        borderRadius: "32px",
        opacity: 1,
        padding: 20
        //buat jadi blur gakkbisa
    },

    homeTitle: {
        color: "white",
        textAlign: "center"
    },

    homeContext: {
        color: "white",
        textAlign: "center"
    },
    customCard: {
        color: "white",
        background: "rgba(255,255,255,0.4)"
    },
    addDocumentButton: {
        position: "fixed",
        right: 10,
        bottom: 10,
        borderRadius: "50%",
        height: 80,
        width: 80,
        fontSize: 36,
        cursor: "cell"
    }
}
