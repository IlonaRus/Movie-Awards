import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    <li>
                        <a
                            class="current"
                            href="index.html"
                            title="Ga naar de homepage"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="movies.js" title="Films">
                            Films
                        </a>
                    </li>
                    <li>
                        <a href="xxx.html" title="Categorien">
                            Categorien
                        </a>
                    </li>
                    <li>
                        <a href="xxx.html" title="Stemmen">
                            Stemmen
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={styles.center}>
                <div>
                    <div className={styles.container}>
                        <h1>Film awards</h1>
                    </div>

                    <div className={styles.card}>
                        <div className={styles["card-content"]}>
                            <div className={styles.column}>
                                <div className={styles["column-1"]}>
                                    <h2>Films</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Hic cumque quidem,
                                        recusandae est libero laudantium.
                                    </p>
                                    <a
                                        href="over.html"
                                        className={styles.button}
                                    >
                                        Leer ons kennen
                                    </a>
                                </div>
                            </div>
                            <div className={styles.column}>
                                <div className={styles["column-2"]}>
                                    <p>Plaatje</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles["card-content"]}>
                            <div className={styles.column}>
                                <div className={styles["column-1"]}>
                                    <h2>Categorien</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Hic cumque quidem,
                                        recusandae est libero laudantium.
                                    </p>
                                    <a
                                        href="over.html"
                                        className={styles.button}
                                    >
                                        Leer ons kennen
                                    </a>
                                </div>
                            </div>
                            <div className={styles.column}>
                                <div className={styles["column-2"]}>
                                    <p>Plaatje</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles["card-content"]}>
                            <div className={styles.column}>
                                <div className={styles["column-1"]}>
                                    <h2>Stemmen</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Hic cumque quidem,
                                        recusandae est libero laudantium.
                                    </p>
                                    <a
                                        href="over.html"
                                        className={styles.button}
                                    >
                                        Leer ons kennen
                                    </a>
                                </div>
                            </div>
                            <div className={styles.column}>
                                <div className={styles["column-2"]}>
                                    <p>Plaatje</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
