export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GAME_URL: string;
      REACT_APP_PLAYERS_URL: string;
      REACT_APP_PLAYERS_STREAK_URL: string;
      REACT_APP_PLAYERS_PERCENT_URL: string;
      REACT_APP_PLAYERS_WIN_RATE_URL: string;
      REACT_APP_PLAYERS_GOALS_URL: string;
      REACT_APP_PLAYERS_GOALS_VS_URL: string;
      REACT_APP_PLAYERS_HISTORY: string;
    }
  }
}