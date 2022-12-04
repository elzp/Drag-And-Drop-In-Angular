export interface ArticleInt {
  name: string;
  date: string;
  content: string;
  container: string;
  position: number | null;
}

export  interface eventData {
  title: string;
  container: string;
  position: number;
}

export  interface positionObject {
  title: string;
  topPosition: number;
}