function Morphology() {
  return (
    <main className="container px-4 py-4">
      <article>
        <section>
          <h3 className="h3 text-success">Зовнішній вигляд</h3>
          <p>Койо́т (Canis latrans ) — хижий ссавець родини Псові. Поширений у Північній Америці. Назва походить від ацтекського слова coyotl, «гавкаючий пес».</p>
        </section>
        <section>
          <h3 className="h3 text-success">Особливості будови</h3>
          <ul>
            <li>Струнке тіло – довгі ноги і гнучкість для швидкого бігу.</li>
            <li>Гострі чуття – сильний нюх, слух і зір.</li>
            <li>Маскувальне хутро – сіро-рудий колір для злиття з природою.</li>
          </ul>
        </section>
        <figure className="text-center">
          <img src="/images/coyote2.webp" alt="Койоти" className="img-fluid rounded my-4"/>
          <figcaption className="text-muted">Молодий койот</figcaption>
        </figure>
      </article>
    </main>
  );
}

export default Morphology;