import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Contact(){

    const titleTel = 'Numéro de Téléphone Belge : ';
    const titleMail = 'Adresse Email : ';

    return(
        <Layout title="Contact" currentPage="contact">
            <div>
                <ul className="list-none">
                    <li className="flex flex-row">
                        <p>{titleTel}</p>
                        <p>{process.env.TEL}</p>
                    </li>
                    <li className="flex flex-row">
                        <p>{titleMail}</p>
                        <p>{process.env.EMAIL}</p>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}