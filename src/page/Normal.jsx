import React, { useRef, useState, useEffect } from "react";

export const NormalMode = () => {
  const randomnumber = () => {
    let r = Math.floor(Math.random() * 50) + 1;
    console.log(r);
    return r;
  };

  const [ranDom, setranDom] = useState(randomnumber);
  const [inputValues, setinputValues] = useState([]);
  const [round, setround] = useState(0);
  const [value, setvalue] = useState("");

  const inputt = useRef();
  const hintRef = useRef();
  const number1 = useRef();
  const number2 = useRef();
  const number3 = useRef();
  const number4 = useRef();

  const win = useRef();
  const lost = useRef();

  const refs = useRef([]);

  useEffect(() => {
    inputValues.forEach((value, i) => {
      refs.current[i].current.innerText = value || "";
    });
  }, [inputValues]);

  const limitnumber = (e) => {
    const inputs = e.target.value;
    if (inputs.length <= 2) {
      setvalue(inputs);
    }
  };

  // เมื่อกรอกค่าเข้าไป ฟังก์ชั่นจะทำการเช็ค
  const check_input = () => {
    //แทนค่าไว้ในตัวแปล
    let values = Number(inputt.current.value);

    hintRef.current.innerText = "";
    // answer.current.innerText = ranDom;

    if (values != " ") {
      // เก็บค่าที่ส่งเข้ามาเป็น array เพื่อที่จำนำไปแสดง
      inputValues.push(values) / console.log(inputValues);
      //  console.log(' asda'+inputValues.length)

      // ถ้ารอบน้อยกว่า 10 ให้ทำต่อไปนี้
      if (round < 10) {
        if (values === ranDom) {
          win.current.style.display = "block";
        } else if (ranDom >= 1 && ranDom <= 10 && round > 4) {
          hintRef.current.innerText = "Answer 1 - 10";
        } else if (ranDom >= 11 && ranDom <= 20 && round > 4) {
          hintRef.current.innerText = "Answer 11 - 20";
        } else if (ranDom >= 21 && ranDom <= 30 && round > 4) {
          hintRef.current.innerTextt = "Answer 21 - 30";
        } else if (ranDom >= 31 && ranDom <= 40 && round > 4) {
          hintRef.current.innerText = "Answer 31 - 40";
        } else if (ranDom >= 41 && ranDom <= 50 && round > 4) {
          hintRef.current.innerText = "Answer 41 - 50";
        } else if (ranDom >= 51 && ranDom <= 60 && round > 4) {
          hintRef.current.innerText = "Answer 51 - 60";
        } else if (ranDom >= 61 && ranDom <= 70 && round > 4) {
          hintRef.current.innerText = "Answer 60 - 70";
        } else if (ranDom >= 71 && ranDom <= 80 && round > 4) {
          hintRef.current.innerText = "Answer 71 - 80";
        } else if (ranDom >= 81 && ranDom <= 90 && round > 4) {
          hintRef.current.innerText = "Answer 81 - 90";
        } else if (ranDom >= 91 && ranDom <= 99 && round > 4) {
          hintRef.current.innerText = "Answer 91 - 99";
        }
        setround(round + 1);

        // ในรอบที่ 10
      } else if (round == 10) {
        if (values === ranDom) {
          win.current.style.display = "block";
        } else {
          lost.current.style.display = "block";
        }
      }
    } else {
      // ในกรณีที่ไม่ใส่ตัวเลขเข้ามาให้แสดง Please enter a number!
      hintRef.current.innerText = "Please enter a number!";
    }
    setvalue("");

    // ส่วนของการ นำตัวเลขไปแสดง
    if (inputValues.length > 4) {
      inputValues.shift(); // ลบตัวแรก
    }
    // // แสดงค่าที่กรอกในตัวแปรต่าง ๆ
    number1.current.innerText = inputValues[0] || "";
    number2.current.innerText = inputValues[1] || "";
    number3.current.innerText = inputValues[2] || "";
    number4.current.innerText = inputValues[3] || "";

    // // หากมีการกรอกค่าเกิน 4 ครั้งให้เริ่มเพิ่ม id number 2, 3, 4
    if (inputValues.length > 4) {
      for (let i = 4; i < inputValues.length; i++) {
        // number${i - 3}.curent.innerText = inputValues[i] || "";
        document.getElementById(`number${i - 3}`).innerText =
          inputValues[i] || "";
      }
    } //จบการทำงานของ Check_input
  };

  const popup = useRef();
  const answer = useRef();

  // ปิด popup
  function close_popup() {
    popup.current.style.display = "none";
  }
  return (
    <div className="container">
      <div className="name-mode">Normol Mode</div>
      <div className="round ">
        <p>
          {" "}
          <span className="display-round"> </span>
          {round} / 10
        </p>
        <p ref={hintRef}>1-99</p>
      </div>
      <input
        type="number"
        min="1"
        max="99"
        className="input-number"
        ref={inputt}
        value={value}
        onChange={limitnumber}
      />
      <div className="display-number">
        <div className="display-row-1">
          <div className="one" ref={number1}></div>
          <div className="one" ref={number2}></div>
        </div>
        <div className="display-row-2">
          <div className="two" ref={number3}></div>
          <div className="two" ref={number4}></div>
        </div>
        <div className="popup-answer" ref={popup}>
          <div className="answer" ref={answer}></div>
          <div onClick={close_popup} className="btn-ok">
            OK
          </div>
        </div>
        <div className="popup-youwin" ref={win}>
          <div className="win">Youwin</div>
          <div onClick={close_popup} className="newgame">
            <a href="/">New Game</a>
          </div>
        </div>
        <div className="popup-youlost" ref={lost}>
          <div className="lost">youlost</div>
          <div onClick={close_popup} className="newgamelost">
            <a href="/">New Game</a>
          </div>
        </div>
      </div>
      <button onClick={check_input} type="button" className="btn-check">
        Check
      </button>
    </div>
  );
};
