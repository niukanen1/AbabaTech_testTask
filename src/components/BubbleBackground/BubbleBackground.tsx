import styles from './bubblebackground.module.css'
import Bubble from "./Bubble";

type BubblesProps = {


}

export default function BubbleBackground({} : BubblesProps) {
    const amount = 20
    let list = []
    for (let i = 0; i < amount; i++) {
        list.push(<Bubble/>)
    }
    return (
        <div className={styles.bubbles}>
            {list.map((el) => (el))}
        </div>
    )
}