class Context {
  constructor(value) {
    this.value = value;
    // this.Provider = this.Provider.bind(this);
    // Consumer jodi arrow function na niye normal ta nitam tahole erokom this ta binding kore dte hobe
    // this.Consumer = this.Consumer.bind(this);
  }

  Provider = ({ value, children }) => {
    this.value = value;
    return children;
  };

  Consumer = ({ children }) => {
    return children(this.value);
  };
  //uporer ta ar nicher comment ta same.. arrow function ek line e dewa mane arrow r porer part ta return korche kichu ekta...
  //   Consumer = ({ children }) => children(this.value);
}

const createContext = (value = null) => {
  const context = new Context(value);

  return {
    Provider: context.Provider,
    Consumer: context.Consumer,
  };
};

export default createContext;
