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
                        <p>+32 471 28 91 78</p>
                    </li>
                    <li className="flex flex-row">
                        <p>Adresse Email : </p>
                        <p>jimmymention@gmail.com</p>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}