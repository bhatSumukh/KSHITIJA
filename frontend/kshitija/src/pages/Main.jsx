import Home from "./Home";
import About from "./About";
import Events from "./Events";
import Registration from "./Registration";
import Guidelines from "./Guidelines";
import Contact from "./Contact";

function Main() {
  return (
    <main>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="events">
        <Events />
      </section>

      <section id="registration">
        <Registration />
      </section>

      <section id="guidelines">
        <Guidelines />
      </section>

            <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

export default Main;
