import { observer } from "mobx-react-lite";

function HomePage() { 
    return ( 
        <main>
            <h1>Welcome to Movie point</h1>
            <p>This website is meant to help you browse through millions of movies with no effort</p>
            <h2>Start using it right now</h2>
            <p>To start using Movies point you just need to sign up or log in with button in the top right corner</p>
            <h2>Authors</h2>
            <p>Movies point is developed by two developers</p>
        </main>
    )
}

export default observer(HomePage)