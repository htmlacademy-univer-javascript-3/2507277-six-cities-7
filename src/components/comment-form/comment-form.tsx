import { Fragment, useState } from 'react';

const ratings = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' },
];

function CommentForm(): JSX.Element {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  return (
    <form className="reviews__form form" onSubmit={(event) => event.preventDefault()}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings.map((item) => (
          <Fragment key={item.value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={item.value}
              id={`${item.value}-stars`}
              type="radio"
              checked={rating === item.value}
              onChange={() => setRating(item.value)}
            />
            <label htmlFor={`${item.value}-stars`} className="reviews__rating-label form__rating-label" title={item.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={rating === 0 || comment.trim().length < 50}>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
