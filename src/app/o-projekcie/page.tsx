
import Image from "next/image";


export default function News() {
    return (
        <>
            <section
                className="wrapper"
                style={{
                    position: 'relative',
                    backgroundPosition: 'right',
                    backgroundImage: "url('/img/flaga-ue-tlo.png')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div
                    className="overlay"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                />
                <div
                    className="container pt-5 pb-5 pt-md-10 pb-md-10 text-center"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            <h1 className="display-1 mb-3" style={{ color: 'white' }}>
                                O projekcie
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mb-15 mt-15" >
                <p className="mb-3 fw-bold lead fs-lg">Wartość projektu: 3 200 071,65 zł </p>
                <p className="mb-3 fw-bold lead fs-lg mb-15 ">Wysokość wkładu Funduszy Europejskich: 2 720 060,90 zł</p>
                <div className=" mt-4 mb-15">
                    <p className="mb-3 fw-bold lead fs-lg">
                        Centrum Rozwoju Społeczno-Ekonomicznego realizuje projekt „Most Integracji -
                        Podkarpackie Centrum Wsparcia OPT”<br />
                        Projekt współfinansowany z Europejskiego Funduszu Społecznego Plus (EFS+) w
                        ramach programu Fundusze Europejskie dla Podkarpacia 2021-2027, Priorytet nr 7
                        Kapitał ludzki gotowy do zmian, Działanie nr 7.17 Integracja społeczno-gospodarcza
                        obywateli państw trzecich.<br />
                        Celem głównym projektu jest wsparcie integracji społeczno-gospodarczej 300
                        obywateli państw trzecich, w tym migrantów i uchodźców (210K) w wieku 18 lat i
                        więcej zamieszkujących w rozumieniu KC na obszarze woj. podkarpackiego w
                        okresie 1.06.2025-30.06.2027, a tym samym zwiększenie ich aktywności społecznej,
                        zawodowej i edukacyjnej.              </p>
                    <br />

                    <br />

                    <p className="mb-3 fw-bold lead fs-lg">
                        Główne rezultaty, które zostaną osiągnięte dzięki realizacji projektu:<br />
                        - 233 osoby uzyska kwalifikacje po opuszczeniu programu,<br />
                        - 120 osób sytuacja społeczna ulegnie poprawie po opuszczeniu programu,<br />
                        - 45 osób podejmie kształcenie lub szkolenie po opuszczeniu programu,<br />
                        - 75 osób będzie osobami pracującymi, łącznie z prowadzącymi działalność<br />
                        na własny rachunek, po opuszczeniu programu.
                        <br />
                        <br />
                    </p>

                    <p> Wartość projektu: 3 200 071,65 zł</p>
                    <p> Wysokość wkładu Funduszy Europejskich: 2 720 060,90 zł</p>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/projekt/1 Usługi doradztwa zawodowego i psychologa - przygotowanie indywidualnej ścieżki wsparcia.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">



                        <p className="lead fs-lg">Usługi doradztwa zawodowego i psychologa - przygotowanie
                            indywidualnej ścieżki wsparcia</p>
                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        W ramach wskazanego wsparcia przygotowana zostanie indywidualna
                                        ścieżka wsparcia UP, uzgodniona pomiędzy nim, a doradcą zawodowym
                                        i psychologiem – ukierunkowana na pożądane działania w zakresie
                                        integracji społeczno-gospodarczych OPT. Doradca zawodowy i
                                        psycholog wspólnie z Uczestnikiem/Uczestniczką projektu dobiorą takie
                                        formy wsparcia dostępne w projekcie, które najlepiej będą mogły
                                        wpłynąć na poprawę sytuacji społeczno-zawodowej OPT.                                   </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Przewidziano dostępność wsparcia dla 100% UP, każdy z nich otrzyma
                                        śr. 3 godz. zegarowe indywidualnego wsparcia z doradcą zawodowym
                                        i śr. 1 godz. zegarowe indywidualnego wsparcia z psychologiem.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Podczas odbywana indywidualnych spotkań Uczestnikom/czkom
                                        zostanie zapewnione wsparcie tłumacza.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/projekt/2 Usługi doradztwa zawodowego - indywidualne wsparcie doradcy OPT.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Usługi doradztwa zawodowego - indywidualne wsparcie doradcy OPT
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Doradca pomoże OPT przygotować się do rozmowy kwalifikacyjnej oraz
                                        zastanowić się, gdzie mogą w pełni wykorzystać swoje doświadczenie w
                                        ramach ofert rynku pracy. Ponadto wskaże, jakie należy spełnić
                                        formalności umożliwiające autoryzację posiadanych już
                                        kompetencji/kwalifikacji na terenie Polski. Wsparcie to będzie mocno
                                        zindywidualizowane pod konkretnego uczestnika i tak naprawdę jego
                                        tematyka/obszar będą wynikały z sytuacji danego uczestnika. Dobór w/w
                                        wsparcia będzie musiał wynikać z indywidualnej ścieżki wsparcia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Przewidziano dostępność wsparcia dla 30% UP, 3 godz. zegarowe/os.,
                                        dla Uczestnika co wynika z analizy potrzeb potencjalnych UP.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Podczas odbywana indywidualnych spotkań Uczestnikom zostanie
                                        zapewnione wsparcie tłumacza.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Uczestnicy/czki otrzymają zaświadczenie o ukończeniu wsparcia.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/projekt/3 Pośrednictwo pracy.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Pośrednictwo pracy
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach pośrednictwa pracy UP zostaną wyposażeni w umiejętność
                                        poruszania się po rynku pracy i samodzielnego poszukiwania
                                        zatrudnienia. Pośrednictwo pracy będzie polegało na pozyskaniu ofert
                                        pracy zgodnych z oczekiwaniami, predyspozycjami i kwalifikacjami UP
                                        oraz potrzebami lokalnego rynku pracy. Pośrednik pracy wspomoże
                                        uczestników w pisaniu CV w kontekście aplikacji o pracę. Pośrednictwo
                                        pracy będzie miało na celu udzielanie pomocy w uzyskaniu
                                        odpowiedniego zatrudnienia. Dobór w/w wsparcia będzie musiał
                                        wynikać z indywidualnej ścieżki wsparcia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Poradnictwo zawodowe indywidualne realizowane będzie w formie
                                        indywidualnych spotkań – porad zawodowych – polegających na
                                        bezpośrednim kontakcie doradcy zawodowego z Uczestnikiem/czką
                                        projektu. Poradnictwo zawodowe indywidualne jest formą wsparcia
                                        wspomagającą proces poszukiwania pracy, jeżeli istnieją ku temu
                                        oczywiste przesłanki, wynikające głównie z postawy Uczestnika/czki
                                        projektu, np. brak motywacji do poszukiwania pracy lub brak wiedzy na
                                        temat własnych kompetencji i zasobów. Tematyka poradnictwa
                                        zawodowego jest bardzo szeroka, ale tak naprawdę będzie skupiona na
                                        problemach i potrzebach Uczestnika/czki, zatem będzie ściśle
                                        dostosowana pod jego potrzeby. Wsparcie w ramach niniejszego
                                        Zadania nie będzie pokrywało się ze wsparciem udzielonym w ramach
                                        Zadania 1, ale będzie jego uzupełnieniem/poszerzeniem w zależności od
                                        zdiagnozowanych potrzeb.

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Przewidziano dostępność wsparcia dla 15% Uczestników/czek projektu,
                                        3 godz. zegarowe/os., co wynika z analizy potrzeb potencjalnych UP.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Podczas odbywana indywidualnych spotkań Uczestnikom zostanie
                                        zapewnione wsparcie tłumacza.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Podczas odbywana indywidualnych spotkań Uczestnikom zostanie
                                        zapewnione wsparcie tłumacza.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />

                                        Uczestnicy/czki otrzymają zaświadczenie o ukończeniu wsparcia
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative ">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/projekt/4 Szkolenie - Podkarpacki Rynek Pracy.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Szkolenie - Podkarpacki Rynek Pracy
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        W ramach zadania zaplanowano Szkolenie dla OPT mające na celu
                                        miedzy innymi zapoznanie z podkarpackim rynkiem pracy i jego
                                        specyfiką, prawem pracy, relacji w środowisku pracy, w tym napięć w
                                        miejscu w pracy na tle kulturowym. Dobór w/w wsparcia będzie musiał
                                        wynikać z indywidualnej ścieżki wsparcia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Przewidziano dostępność wsparcia dla 40% Uczestników/czek projektu,
                                        co wynika z analizy potrzeb potencjalnych uczestników projektu.                               </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        1 usługa szkoleniowa na osobę, trwająca śr. 16 godz. dydaktycznych
                                        dla 120 os. (śr. 10 grup x śr. 12 os.).
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Uczestnicy/czki otrzymają stosowny certyfikat/zaświadczenie o
                                        ukończeniu szkolenia.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/projekt/5 Poradnictwo psychologiczne.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Poradnictwo psychologiczne
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Uczestnicy/czki otrzymają wsparcie i zrozumienie w trudnej sytuacji,
                                        jaka ich dotknęła, psycholog wskaże jak radzić sobie z własnymi
                                        emocjami (lękiem, niepokojem, osamotnieniem, agresją). Uczestnicy
                                        projektu będą mogli skonsultować swoje decyzje życiowe, wspólnie
                                        poszukać rozwiązań dla napotykanych problemów znaleźć motywację
                                        do „walki o siebie” i zmiany. OPT uzyskają pomoc w sytuacjach dot.
                                        przeciążenia związanym ze stresem migracyjnym i aklimatyzacyjnym,
                                        otrzymają wsparcie w radzeniu sobie z codziennymi trudnościami
                                        związanymi z życiem rodzinnym i zawodowym. Dobór w/w wsparcia
                                        będzie musiał wynikać z indywidualnej ścieżki wsparcia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Przewidziano dostępność wsparcia dla 90% Uczestników/czek projektu,
                                        śr. 4 godz. zegarowe/os., co wynika z analizy potrzeb potencjalnych
                                        Uczestników/czek projektu.

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Podczas odbywana indywidualnych spotkań Uczestnikom/czek
                                        zostanie zapewnione wsparcie tłumacza.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Uczestnicy/czki otrzymają zaświadczenie o ukończeniu wsparcia.
                                    </li>



                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative ">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/projekt/6 Warsztaty adaptacyjne dot. polskiego systemu pomocy społecznej, ochrony zdrowia, edukacji.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Warsztaty adaptacyjne dot. polskiego systemu pomocy społecznej,
                            ochrony zdrowia, edukacji
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Uczestnicy będą mogli skorzystać z zajęć które będą miały charakter
                                        warsztatowy, stosowane będą metody interaktywne i aktywizujące, co
                                        bezpośrednio pogłębi zaangażowanie uczestników. Prowadzone będą
                                        liczne dyskusje, symulacje, przedstawiane studia przypadków. Metody
                                        wykładowe będą stanowić tylko niezbędną część warsztatu. Kształcone
                                        umiejętności i zdobywana wiedza będą praktyczne, tak aby uczestnicy

                                        rozwijali te zagadnienia, które będą mogli wykorzystać w codziennym
                                        życiu. Dobór w/w wsparcia będzie musiał wynikać z indywidualnej
                                        ścieżki wsparcia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Przewidziano dostępność wsparcia dla 40% uczestników projektu, co
                                        wynika z analizy potrzeb potencjalnych uczestników projektu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Czas trwania warsztatów: 16 godz. dydaktycznych dla 120 os. (śr. 10
                                        grup x śr. 12 os.).                            </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Uczestnicy/czki otrzymają stosowny certyfikat/zaświadczenie o
                                        ukończeniu warsztatów.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/projekt/7 Wsparcie w nauce języka polskiego.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Wsparcie w nauce języka polskiego
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Uczestnicy Projektu nauczą się przełamać barierę językową co pozwoli
                                        OPT na praktyczne wykorzystania zdobytych umiejętności. Regularne
                                        konwersacje z Native Speakerem sprawią, że OPT nabiorą pewności w
                                        posługiwaniu się obcym językiem, a ich wypowiedzi nabiorą płynności.
                                        Podczas rozmów z Native speakerem Uczestnicy/czki będą mogli/ły
                                        poznać różne aspekty życia codziennego w Polsce, poznać różnice
                                        kulturowe i normy społeczno-obyczajowe regionu, co także pomoże w
                                        zrozumieniu i nauce języka. Zatem wsparcie będzie miało aspekt nie
                                        tylko ściśle edukacyjny, ale również kulturowy. Dobór w/w wsparcia
                                        będzie musiał wynikać z indywidualnej ścieżki wsparcia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Przewidziano dostępność wsparcia dla 10% Uczestników/czek projektu,
                                        20 godz. zegarowych/os., co wynika z analizy potrzeb potencjalnych
                                        uczestników projektu.

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Uczestnicy/czki otrzymają zaświadczenie o ukończeniu wsparcia.
                                    </li>




                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative ">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/projekt/8 Szkoleniakursy zawodowe.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Szkolenia/kursy zawodowe
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Celem szkolenia będzie zdobycie kwalifikacji zawodowych przez UP.
                                        Zasadność i konieczność zastosowania wsparcia będzie wynikać
                                        z indywidualnej ścieżki wsparcia, w tym diagnozy potencjału,
                                        predyspozycji oraz posiadanego już doświadczenia, czy kwalifikacji
                                        Uczestnika/czki. Oferowane usługi zawodowe będą uwzględniały
                                        również aktualną sytuację i potrzeby regionalnego rynku pracy. Dobór
                                        w/w wsparcia będzie musiał wynikać z indywidualnej ścieżki wsparcia.
                                        Przewidziano dostępność wsparcia dla 86% uczestników projektu, co
                                        wynika z analizy potrzeb potencjalnych Uczestników/czek projektu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        1 usługa szkoleniowa na osobę, trwająca śr. 80 godz. dydaktycznych
                                        (258 os.).
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każdy/a Uczestnik/czka będzie miał/a możliwość wziąć udział w
                                        egzaminie zgodnym z rodzajem kształcenia (np. egzamin czeladniczy,
                                        VCC itp.).                        </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Uczestnicy/czki otrzymają stosowny certyfikat/zaświadczenie o
                                        ukończeniu szkolenia.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

