export enum GameStatus {
   wait = "waiting",
   started = "on",
   ended = "finished",
}

export interface Commentaire{
   popup: void,
   victory: Boolean,
   close(): void
}

export interface Time{
   progress?: Boolean,
   onFinished(): void, 

}

export interface StoreState {
    memory: MemoryState;
}

export interface MemoryState {
    cards: string[];
    isWaiting: Boolean;
    revertCards: string[];
    status: GameStatus;
}

export interface Card {
    hidden: Boolean
    card: String;
    index: Number;
    onChildString(): void;
    revertCard: String;
}

export interface DataTypes {
    id: number;
    logo: string;
    title: string;
}