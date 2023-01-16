import Button from "../../../Buttons/Button/Button";
import { getPages } from "../../MovieService";
import styles from "./PageControls.module.css";

type PageControlProps = {
	pages: { cur: number; total: number };
};

export function PageControls({ pages }: PageControlProps) {
	const { next, prev } = getPages(pages.cur, pages.total);

	return (
		<div className={styles.container}>
			<Button action={() => {}}>{"<"}</Button>
			<div className={styles.container}>
				<div>
					{prev.map((page) => (
						<Button action={() => {}}>{page}</Button>
					))}
				</div>
				<Button action={() => {}}>{pages.cur}</Button>
				<div>
					{next.map((page) => (
						<Button action={() => {}}>{page}</Button>
					))}
				</div>
			</div>
			<Button action={() => {}}>{">"}</Button>
		</div>
	);
}
