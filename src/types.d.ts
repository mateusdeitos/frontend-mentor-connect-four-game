type RouteStore = {
  route: "menu" | "game";
};

type PlayerOne = 1;
type PlayerTwo = 2;

type PossibleSlotValue = 0 | PlayerOne | PlayerTwo;

type Col = [
  PossibleSlotValue,
  PossibleSlotValue,
  PossibleSlotValue,
  PossibleSlotValue,
  PossibleSlotValue,
  PossibleSlotValue
];

type BoardType = [Col, Col, Col, Col, Col, Col, Col];

type GameStore = {
  board: BoardType;
};
