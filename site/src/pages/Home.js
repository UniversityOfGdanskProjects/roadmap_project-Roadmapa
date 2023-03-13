import '../styles/style.css';

export function Home() {
  return <main>
  <h1>Informatyka Praktyczna - UG</h1>
  <h2>Supportive roadmap for practical CS</h2>
  <section className="dropdown" id="dropdown">
      <div className="b-1 box">
          <button onClick="">
              <span> semestr 1</span>
          </button>
          <div className="menu">
              <button>
                  <span> 1. </span>
                  Matematyka elementarna
              </button>
              <button>
                  <span> 2. </span>
                  Matematyka dyskretna
              </button>
              <button>
                  <span> 3. </span>
                  Wstęp do technologii web
              </button>
              <button>
                  <span> 4. </span>
                  Wstęp do programowania
              </button>
              <button>
                  <span> 5. </span>
                  Bazy danych 1
              </button>
              <button>
                  <span> 6. </span>
                  Warsztat programisty
              </button>
              <button>
                  <span> 7. </span>
                  Sieci komputerowe
              </button>
              <button>
                  <span> 8. </span>
                  Język angielski
              </button>
          </div>
      </div>
      <div className="b-2 box">
          <button onClick="">
              <span> semestr 2</span>
          </button>
          <div className="menu">
              <button>
                  <span> 1. </span>
                  Matematyka elementarna
              </button>
              <button>
                  <span> 2. </span>
                  Matematyka dyskretna
              </button>
              <button>
                  <span> 3. </span>
                  Wstęp do technologii web
              </button>
              <button>
                  <span> 4. </span>
                  Wstęp do programowania
              </button>
              <button>
                  <span> 5. </span>
                  Bazy danych 1
              </button>
              <button>
                  <span> 6. </span>
                  Warsztat programisty
              </button>
              <button>
                  <span> 7. </span>
                  Sieci komputerowe
              </button>
              <button>
                  <span> 8. </span>
                  Język angielski
              </button>
          </div>
      </div>
      <div className="b-3 box">
          <div className="logo"></div>
          <div>Semestr 3</div>
      </div>
      <div className="b-4 box">
          <div className="logo"></div>
          <div>Semestr 4</div>
      </div>
      <div className="b-5 box">
          <div className="logo"></div>
          <div>Semestr 5</div>
      </div>
      <div className="b-6 box">
          <div className="logo">
              
          </div>
          <div>Semestr 6</div>
      </div>
  </section>
</main>

}
