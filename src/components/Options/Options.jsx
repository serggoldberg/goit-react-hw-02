import css from './Options.module.css'
import clsx from 'clsx'

export default function Options({updateFeedback, handleReset, totalFeedback}) {

    return (
        <div className={css.container}>
            <button className={clsx(css.button, css.greenButton)} onClick={() => updateFeedback("good")}>Good</button>
            <button className={clsx(css.button, css.orangeButton)} onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button className={clsx(css.button, css.redButton)} onClick={() => updateFeedback("bad")}>Bad</button>
            {totalFeedback !== 0 ? <button className={clsx(css.button, css.resetButton)} onClick={handleReset}>Reset</button> : <div></div>}
        </div>
    );
 }