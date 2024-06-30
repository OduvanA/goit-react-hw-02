import css from "./Options.module.css"

export default function Options({ updateFeedback, totalFeedback, toReset }) {
  return (
    <div  className={css.optionsContainer}>
      <button type="button" onClick={() => updateFeedback("good")}>Good</button>
      <button type="button" onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button type="button" onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback !==0 && <button type="button" onClick={toReset}>Reset</button>}
    </div>
  )

}