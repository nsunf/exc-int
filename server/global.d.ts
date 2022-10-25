interface Api_History {
  exchange: boolean | null;
  interest: boolean | null;
  international: boolean | null;
  date: Date;
}

declare type DataType = 'Exchange' | 'Interest' | 'International';

interface IData { }
