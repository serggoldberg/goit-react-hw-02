import css from './Feedback.module.css'
import clsx from 'clsx';

export default function Feedback ({ feedback: { good, neutral, bad }, positiveFeedback, totalFeedback}) {
    return (
        <div className={css.container}>
            <p className={clsx(css.text, css.greenText)}>Good: {good}</p>
            <p className={clsx(css.text, css.orangeText)}> Neutral: {neutral}</p>
            <p className={clsx(css.text, css.redText)}>Bad: {bad}</p>
            <p className={css.text}>Total: {totalFeedback}</p>
            <p className={css.text}>Positive: {positiveFeedback}%</p>
        </div>
    );
}