import Button from "../../../Buttons/Button/Button";
import { getPages } from "../../MovieService";
import styles from "./PageControls.module.css";

type PageControlProps = {
	pages: { cur: number; total: number };
    goToPage: (pageNum: number) => void;
};

export function PageControls({ pages, goToPage }: PageControlProps) {
	const { next, prev } = getPages(pages.cur, pages.total);

	return (
		<div className={styles.container}>
			<Button isDisabled={prev.length == 0} action={() => {
                console.log("prev");
                console.log(prev);
                goToPage(prev[0])
            }}>{"<"}</Button>
			<div className={styles.container}>
				<div>
					{prev.reverse().map((page) => (
						<div key={page}>
							<Button action={() => {goToPage(page)}}>{page}</Button>
						</div>
					))}
				</div>
				<Button isDisabled action={() => {}}>{pages.cur}</Button>
				<div>
					{next.map((page) => (
						<div key={page}>
							<Button action={() => {
								console.log("next");
								console.log(next);
								goToPage(page)
							}}>{page}</Button>
						</div>
					))}
				</div>
			</div>
			<Button isDisabled={next.length == 0} action={() => {goToPage(next[0])}}>{">"}</Button>
		</div>
	);
}
