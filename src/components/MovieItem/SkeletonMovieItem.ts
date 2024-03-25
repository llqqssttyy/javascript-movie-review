import './MovieItem.css';

const createTitle = () => {
  const $title = document.createElement('div');
  $title.classList.add('item-title');
  $title.classList.add('skeleton');
  return $title;
};

const createScore = () => {
  const $score = document.createElement('div');
  $score.classList.add('item-score');
  $score.classList.add('skeleton');

  return $score;
};

const createThumbnail = () => {
  const $thumbnail = document.createElement('img');
  $thumbnail.classList.add('item-thumbnail');
  $thumbnail.classList.add('skeleton');

  return $thumbnail;
};

const createCard = () => {
  const $card = document.createElement('div');
  $card.classList.add('item-card');

  const $thumbnail = createThumbnail();
  const $title = createTitle();
  const $score = createScore();

  const fragment = document.createDocumentFragment();
  fragment.appendChild($thumbnail);
  fragment.appendChild($title);
  fragment.appendChild($score);

  $card.appendChild(fragment);
  return $card;
};

const createSkeletonMovieItem = () => {
  const $li = document.createElement('li');
  const $card = createCard();

  $li.appendChild($card);

  return $li;
};

function SkeletonMovieItem() {
  return {
    render: () => {
      const $skeletonMovieItem = createSkeletonMovieItem();
      return $skeletonMovieItem;
    },
  };
}
export default SkeletonMovieItem;
