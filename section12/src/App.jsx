import "./App.css";
import {
  useReducer,
  useRef,
  createContext,
  useEffect,
  useState,
} from "react";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Notfound from "./pages/Notfound";

// const mockData = [
//   {
//     id: 1,
//     createdDate: new Date("2025-02-20").getTime(),
//     emotionId: 1,
//     content: "1번 일기 내용",
//   },
//   {
//     id: 2,
//     createdDate: new Date("2025-02-19").getTime(),
//     emotionId: 2,
//     content: "2번 일기 내용",
//   },
//   {
//     id: 3,
//     createdDate: new Date("2025-01-12").getTime(),
//     emotionId: 3,
//     content: "33번 일기 내용",
//   },
// ];

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id)
          ? action.data
          : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter(
        (item) => String(item.id) !== String(action.id)
      );
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const [data, dispatch] = useReducer(reducer, mockData);
  const [data, dispatch] = useReducer(reducer, []);
  // const idRef = useRef(3);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      setIsLoading(false);
      return;
    }

    const parsedDate = JSON.parse(storedData);
    if (!Array.isArray(parsedDate)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedDate.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });
    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedDate,
    });
    setIsLoading(false);
  }, []);

  // localStorage.setItem("test", "hello"); //(key,value)
  // localStorage.setItem("person", JSON.stringify({ name: "조연정" }));

  // console.log(localStorage.getItem("test"));
  // console.log(JSON.parse(localStorage.getItem("person")));

  // localStorage.removeItem("test"); //삭제할 데이터의 key 값을 인수로

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    // 새로운 일기를 추가하는 기능
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  if (isLoading) {
    return <div>데이터 로딩중입니다...</div>;
  }
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onDelete,
            onUpdate,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
