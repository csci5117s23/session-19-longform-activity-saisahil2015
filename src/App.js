import logo from './logo.svg';
import './App.css';
import Flashcard from './components/flashcard';
import FlashCardList from './components/flashcardList';
import { Fragment } from 'react';

function App() {
  const QUESTIONS = [
    { front: 'question1', back: 'answer1' },
    { front: 'question2', back: 'answer2' },
    { front: 'question3', back: 'answer3' },
  ];

  return (
    <div className='App'>
      <Fragment>
        <FlashCardList questions={QUESTIONS}></FlashCardList>
      </Fragment>
      <Fragment>
        <Flashcard frontText="What's my Name?"></Flashcard>
      </Fragment>
    </div>
  );
}

export default App;
