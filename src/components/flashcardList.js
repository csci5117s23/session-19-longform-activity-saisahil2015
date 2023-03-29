import Flashcard from './flashcard';

export default function FlashCardList({ questions }) {
  const cardContent = questions.map((content) => {
    return <Flashcard front={content.front} back={content.back}></Flashcard>;
  });

  return <div>{cardContent}</div>;
}
