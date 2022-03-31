import memoryReducer, { revertCard, cardPairs } from "./memorySlice";
import { GameStatus } from "../../app/types/index";
import {describe, expect, test} from '@jest/globals';


const initialState = {
  status: GameStatus.wait,
  revertCards: [],
  cardsPairs: [],
};
const cardOne = memoryReducer(initialState, revertCard("b4f1"));
const cardTwo = memoryReducer(initialState, cardPairs("b4f2"));

describe("Memory Reducer", () => {
  test("Return Card : b4f1", () => {
    expect(cardOne.revertCards).toBe("b4f1")
  });

  test("Pair card", () => {
      expect(cardOne).toEqual(cardTwo);
  });

  // test("Time finish?", () => {
  //     expect(status).toBe(GameStatus.Ended);
  // });
});
