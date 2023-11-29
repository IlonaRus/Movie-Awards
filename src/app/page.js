import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    <li><a class="current" href="index.html" title="Ga naar de homepage">Home</a></li>
                    <li><a href="xxx.html" title="Films">Films</a></li>
                    <li><a href="xxx.html" title="Categorien">Categorien</a></li>
                    <li><a href="xxx.html" title="Stemmen">Stemmen</a></li>
                </ul>
            </nav>
            <div className={styles.center}>
                <div className={styles.container}>
                    <h1>Film awards</h1>
                    <div className={styles.card}>
                        <div className={styles['card-content']}>
                            <h3>Films</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veritatis voluptatibus numquam quis officia a.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
