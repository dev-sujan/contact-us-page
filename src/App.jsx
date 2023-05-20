import "./App.css";
import ContactForm from "./components/contact-form/ContactForm";
import ContactHeader from "./components/contact-header/ContactHeader";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  );
}

export default App;
