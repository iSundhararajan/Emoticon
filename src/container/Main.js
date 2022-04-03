import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Therapist from '../pages/Therapist';
import MiaChatroom from '../pages/MiaChatroom';
import RobertChatroom from '../pages/RobertChatroom';
import AliyahChatroom from '../pages/AliyahChatroom';
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
                <Route path="/therapist/mia" element={<MiaChatroom />} />
                <Route path="/therapist/robert" element={<RobertChatroom />} />
                <Route path="/therapist/aliyah" element={<AliyahChatroom />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Main;
