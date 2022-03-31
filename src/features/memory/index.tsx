import React, { useCallback, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Card from '../../components/card';
import Timer from '../../components/timer';
import Comment from '../../components/commentaire';
import randomArray from '../../utils/randomArray';
import {
  revertCard,
  selectRevertCards,
  statusGame,
  cardPairs,
  selectPairCards,
  reset,
} from './memorySlice';
import { Data } from './data';
import styles from './memory.module.css';
import { GameStatus } from '../../app/types';

const Memory = () => {
  const dispatch = useAppDispatch();
  const [DataMemory, setDataMemory] = useState(Data);
  const [open, setOpen] = useState(false);
  const [cardActive, setCardActive] = useState(true);
  const revertCards = useAppSelector(selectRevertCards);
  const pairCards = useAppSelector(selectPairCards);

  const onCardClick = (card: { id: string; }) => {
    dispatch(revertCard(card.id));
  }

  const onGameFinished = useCallback(() => {
    dispatch(statusGame(GameStatus.ended));
    setOpen(true);
  }, [dispatch]);

  const restart = () => {
    dispatch(reset());
    setDataMemory(randomArray(Data));
    setOpen(false);
  };

  useEffect(() => {
    setDataMemory(randomArray(Data));
  }, []);

  useEffect(() => {
    if (revertCards.length === 2) {
      dispatch(statusGame(GameStatus.wait));
      setCardActive(false);
      if (!revertCards[0].startsWith(revertCards[1].slice(0, -1))) {
        setTimeout(() => {
          dispatch(revertCard(revertCards[0]));
          dispatch(revertCard(revertCards[1]));
          dispatch(statusGame(GameStatus.started));
          setCardActive(true);
        }, 800);
      } else {
        dispatch(cardPairs(revertCards[0]));
        dispatch(cardPairs(revertCard[1]));
        dispatch(revertCard(revertCards[0]));
        dispatch(revertCard(revertCard[1]));
        dispatch(statusGame(GameStatus.started));
        setCardActive(true);
      }
    }
  }, [dispatch, revertCards, revertCards.length]);

  useEffect(() => {
    if (pairCards.length === 16) {
      setTimeout(() => {
        onGameFinished();
      }, 800);
    }
  }, [onGameFinished, pairCards.length]);

  return (
    <div>
      <h1 style={{ color: 'white' }}> B4F - MEMORY</h1>
      <Timer onFinished={onGameFinished} />

      <Comment
        victory={pairCards.length === 16}
        closePopup={restart}
        open={open}
      />

      <div className={styles.container}>
        <div className={styles.grill}>
          {DataMemory.map((res, id) => {
            return (
              <Card
                card={res}
                hidden={
                  revertCards.includes(res.id) || pairCards.includes(res.id)
                }
                onChildClick={onCardClick}
                key={id}
                isActive={cardActive}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Memory;
