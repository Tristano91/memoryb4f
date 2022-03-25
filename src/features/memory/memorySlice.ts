import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { GameStatus } from '../../app/types/index';

const initialState = {
  status: GameStatus.NotStarted,
  revertCards: [],
  cardsPairs: [],
};

export const memorySlice = createSlice({
  name: "memory",
  initialState,
  reducers: {
    statusGame: (state, action: PayloadAction<GameStatus>) => {
      state.status = action.payload;
    },
    revertCard: (state, action: PayloadAction<string>) => {
      if (!state.revertCards.includes(action.payload)) {
            state.revertCards.push(action.payload);
      } else {
        state.revertCards = state.revertCards.filter(
          (id) => id !== action.payload
        );
      }
    },
    cardPairs: (state, action: PayloadAction<string>) => {
      state.cardsPairs.push(action.payload);
    },
    reset: (state) => initialState,
  },
});

export const { revertCard, statusGame, cardPairs, reset } =
memorySlice.actions;

export const selectRevertCards = (state: RootState) => state.memory.revertCards;
export const selectPairCards = (state: RootState) => state.memory.cardsPairs;
export const selectStatusGame = (state: RootState) => state.memory.status;

export default memorySlice.reducer;
