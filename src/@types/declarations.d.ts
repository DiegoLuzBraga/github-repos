declare module "*.scss" {
  const css: { [key: string]: string };
  export = css;
}

declare module "*.png" {
  const filePath: string;
  export = filePath;
}

declare module "*.jpg" {
  const filePath: string;
  export = filePath;
}

declare namespace jest {
  interface Matchers<R> {
    toHaveTextContent: (htmlElement: string) => object;
    toBeInTheDOM: () => void;
  }

  interface Expect {
    toHaveTextContent: (htmlElement: string) => object;
    toBeInTheDOM: () => void;
  }
}
