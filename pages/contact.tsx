import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Contact(){

    return(
        <Layout title="Contact" currentPage="contact">
            <div>
                <ul className="list-none">
                    <li className="flex flex-row">
                        <p>Numéro de Téléphone Belge : </p>
                        <p>{process.env.TEL}</p>
                    </li>
                    <li className="flex flex-row">
                        <p>Adresse Email : </p>
                        <p>{process.env.EMAIL}</p>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}