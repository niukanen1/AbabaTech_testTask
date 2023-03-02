import { observer } from "mobx-react-lite";
import styles from "./HomePage.module.css";

function HomePage() {
	return (
		<main className={styles.mainContainer}>
			<article className={styles.container}>
				<h1>Welcome to Movie point</h1>
				<p>This website is meant to help you browse through millions of movies with no effort</p>
				<h3>Start using it right now</h3>
				<p>
					To start using Movies point you just need to sign up or log in with button in the top right corner
				</p>
				<h3>Authors</h3>
				<p>Movies point is developed by Ivan Niukanen and Petr Tolstov</p>
			</article>
		</main>
	);
}

export default observer(HomePage);
