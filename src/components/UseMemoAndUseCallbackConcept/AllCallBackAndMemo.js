import React, { useCallback, useMemo, useState } from "react";
import Title from "./callbackAndMemoComps/Title";
import ShowCount from "./callbackAndMemoComps/ShowCount";
import Button from "./callbackAndMemoComps/Button";

const AllCallBackAndMemo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //   useCallback => ekta callback function ke mone rakhbe and shudhumatro tokhon vule jabe jokhon 'ei function je je jinishgular upor depent kore shegular change hobe'
  //  Ei function e jehetu kono dependency nai eta callback function take vulbe na...alwz ei mone rkhbe
  const handleCount1 = useCallback(() => {
    setCount1((prevState) => prevState + 1);
  }, []);

  //  Ei function e jehetu kono dependency nai eta callback function take vulbe na...alwz ei mone rkhbe
  const handleCount2 = useCallback(() => {
    setCount2((prevState) => prevState + 5);
  }, []);

  //   useMemo => ekta function er return value k mone rakhe and shudhu matro tokhon ei vule jabe jokhon 'ei function je je jinishgular upor depent kore shegular change hobe'
  //   ekhane count1 change hole function er return value k vule jabe
  const showType = useMemo(() => {
    // let i = 0;
    // while (i < 1000000000) i += 1;   //Using while loop to check the optimization
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <h3>Memo, useCallback and useMemo Tutorial</h3>
      <div>
        <Title />
        <ShowCount count={count1} title="count1" />
        <p>{showType ? "Even" : "Odd"}</p>
        <Button handleCount={handleCount1}>Click to increment 1</Button>
        {/* 2 */}
        <ShowCount count={count2} title="count2" />
        <Button handleCount={handleCount2}>Click to increment 5</Button>
      </div>
    </div>
  );
};

export default AllCallBackAndMemo;
