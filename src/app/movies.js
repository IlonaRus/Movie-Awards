import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            {/* <nav className={styles.navbar}>
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
                        <a href="xxx.html" title="Films">
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
            </nav> */}
            <div className={styles.center}>
                <div>
                    <div className={styles.container}>
                        <h1>Films</h1>
                    </div>
                </div>
            </div>
        </main>
    );
}
