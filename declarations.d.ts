type Override<T1, T2> = Omit<T1, keyof T2> & T2;

type ComponentDefault = {
  className?: string;
}

type ProjectType = {
  title: string;
  cover: string;
  description: string;
  stack: string[];
  links: {
    type: string;
    description: string;
    url: string;
  }[];
}
