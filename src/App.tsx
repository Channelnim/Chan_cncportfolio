import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition, Capabilities } from './components/Capabilities';
import { Projects } from './components/Projects';
import { Process, Background, Credentials, Contact } from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcf9f5] text-[#16140d] selection:bg-[#172535] selection:text-[#fcf9f5] antialiased font-light tracking-wide">
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <Capabilities />
        <Projects />
        <Process />
        <Background />
        <Credentials />
        <Contact />
      </main>
    </div>
  );
}

