import styles from "./profile.module.css";
import { useEffect } from "react";
import { queries, QueryFetch } from "../../Queries/GetPostQueries";
import AppStore from "../../Stores/AppStore";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import Button, { Size } from "../../components/Buttons/Button/Button";
import { LogOut, ResetPassword } from "../../Services/UserService";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { GetMovieDetails, MovieDetails } from "../../components/Movies/MovieService";
import HorizontalList from "../../components/HorizontalList/HorizontalList";
import TextInput from "../../components/FormElements/TextInput/TextInput";
import Modal from "../../components/Modal/Modal";

function Profile() {
	const [favoriteMovies, setFavoriteMovies] = useState<MovieDetails[]>([]);
	const [watchLaterMovies, setWatchLaterMovies] = useState<MovieDetails[]>();
	const [newPass, setNewPass] = useState<string>("");
	const [resetingPass, setResetingPass] = useState<boolean>(false);

	useEffect(() => {
		QueryFetch(queries.getUserInfo, {}, (response) => {
			if (response.success) {
				AppStore.setUserData(response.data);
			}
		});
	}, []);

	useEffect(() => {
		if (AppStore.userData.user?.favoriteMovies) {
			let listFavoriteMovies: MovieDetails[] = [];
			AppStore.userData.user?.favoriteMovies.forEach((el) => {
				GetMovieDetails(el)
					.then((movie) => {
						listFavoriteMovies?.push(movie as MovieDetails);
					})
					.then(() => {
						setFavoriteMovies(
							listFavoriteMovies.sort(function (a, b) {
								var textA = a.title?.toUpperCase();
								var textB = b.title?.toUpperCase();
								return textA! < textB! ? -1 : textA! > textB! ? 1 : 0;
							})
						);
					});
			});
		}
	}, [AppStore.userData.user?.favoriteMovies]);

	useEffect(() => {
		if (AppStore.userData.user?.watchLaterMovies) {
			let listWatchLaterMovies: MovieDetails[] = [];
			AppStore.userData.user?.watchLaterMovies.forEach((el) => {
				GetMovieDetails(el)
					.then((movie) => {
						listWatchLaterMovies?.push(movie as MovieDetails);
					})
					.then(() => {
						setWatchLaterMovies(
							listWatchLaterMovies.sort(function (a, b) {
								var textA = a.title?.toUpperCase();
								var textB = b.title?.toUpperCase();
								return textA! < textB! ? -1 : textA! > textB! ? 1 : 0;
							})
						); //
					});
			});
		}
	}, [AppStore.userData.user?.watchLaterMovies]);

	const handlePasswordReset = async () => {
		await ResetPassword(newPass);
		setResetingPass(false);
	};

	return (
		<main className={styles.main}>
			{AppStore.userData.isLoggedIn ? (
				<>
					<article className={styles.profileInfo}>
						<div className={styles.textInfo}>
							<h1 className={styles.h1}>Profile:</h1>
							<span className={styles.userEmail}>{AppStore.userData.user?.email}</span>
						</div>
						<div className={styles.buttons}>
							<Button
								action={() => {
									setResetingPass(true);
								}}>
								Reset Password
							</Button>
							<Button filled action={async () => await LogOut()}>
								Log Out
							</Button>
						</div>
					</article>

					<article className={styles.films}>
						<Tabs>
							<TabList>
								<Tab>
									<img src={"/heart.svg"} alt={"Liked"}></img>
								</Tab>
								<Tab>
									<img src={"/tag.svg"} alt={"Saved"}></img>
								</Tab>
							</TabList>

							<TabPanel>
								<h2 className={styles.categoryOfMovie}>Liked</h2>
								<HorizontalList Movies={favoriteMovies} wrap />
							</TabPanel>
							<TabPanel>
								<h2 className={styles.categoryOfMovie}>Watch Later</h2>
								<HorizontalList Movies={watchLaterMovies} wrap />
							</TabPanel>
						</Tabs>
					</article>
				</>
			) : (
				<article className={styles.profileInfo}>
					<h1 className={styles.h1}>You are not Log in</h1>
				</article>
			)}
			<Modal isShowing={resetingPass} closeModal={() => setResetingPass(false)}>
				<div className={styles.modalContainer}>
					<TextInput placeholder={"Enter new password"} onChange={(value) => setNewPass(value)} />
					<Button
                        filled
                        size={Size.Large}
						action={() => {
							handlePasswordReset();
						}}>
						Change pass
					</Button>
				</div>
			</Modal>
		</main>
	);
}

export default observer(Profile);
