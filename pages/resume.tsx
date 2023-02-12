import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef } from 'react';
import Layout from '../components/Layout';

export default function Resume(){
  
    return(
        <Layout title="Resume" currentPage="resume">
            <div>
                <iframe src='/files/JimmyMention_CurriculumVitae.pdf' width="100%" height="2000px"></iframe>
            </div>
        </Layout>
    )
}