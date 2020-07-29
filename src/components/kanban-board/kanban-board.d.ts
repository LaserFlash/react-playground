export type BaseCard = {
  id: string;
};

export type BaseColumn = {
  id: string;
};

export type DefaultCard = BaseCard & {
  title: string;
  description: string;
};

export type DefaultColumn = BaseColumn & {
  title: string;
};
