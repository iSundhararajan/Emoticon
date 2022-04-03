import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Therapist from '../pages/Therapist';
import Chat from '../pages/Chat';
import Contact from '../pages/Contact';
import Footer from '../components/Footer'

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/therapist" element={<Therapist />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Main;
