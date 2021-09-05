import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        post: action.data,
        loading: false,
        error: "",
      };

    case "FAILED":
      return {
        post: {},
        loading: false,
        error: "Error Detected",
      };

    default:
      return state;
  }
};

const FetchWithUseReducer = () => {
  const [postState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SUCCESS", data: data });
      })
      .catch(() => {
        dispatch({
          type: "FAILED",
        });
      });
  }, []);

  return (
    <div>
      <div>
        <h5>Post by using useReducer wth useEffect</h5>
        <p>{postState.loading ? "Loading........." : postState.post.body}</p>
        <p>{postState.error || null}</p>
      </div>
    </div>
  );
};

export default FetchWithUseReducer;
