import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import AnnouncementBar from "../components/layout/AnnouncementBar";
import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ScrollToTop from "../components/common/ScrollToTop";
import BackToTop from "../components/common/BackToTop";
import FloatingWhatsApp from "../components/common/FloatingWhatsApp";

import company from "../constants/company";
import ScrollToTop from "../components/common/navigation/ScrollToTop";
import BackToTop from "../components/common/navigation/BackToTop";
import FloatingWhatsApp from "../components/common/floating/FloatingWhatsApp";

export default function MainLayout() {

    return (

        <>

            <Helmet>

                <title>

                    {company.name}

                </title>

                <meta

                    name="description"

                    content={company.description}

                />

                <meta

                    name="keywords"

                    content="
                        hardware,
                        construction,
                        plumbing,
                        electrical,
                        agriculture,
                        Uganda,
                        Bukedea
                    "

                />

                <meta

                    property="og:title"

                    content={company.name}

                />

                <meta

                    property="og:description"

                    content={company.description}

                />

            </Helmet>

            <ScrollToTop />

            <div className="min-h-screen flex flex-col bg-slate-50">

                <AnnouncementBar />

                <TopBar />

                <Navbar />

                <main className="flex-1">

                    <Outlet />

                </main>

                <Footer />

            </div>

            <FloatingWhatsApp />

            <BackToTop />

        </>

    );

}