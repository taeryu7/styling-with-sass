import React from "react";
import styles from "./Box.module.css";

function Box() {
  return <div className={styles.Box}>{styles.Box}</div>;
}

export default Box;
/*
리액트 컴포넌트 파일에서 해당 css 파일을 불러올 때 CSS 파일에 선언한 클래스 이름들이 모두 고유해진다.
고유 CSS 클래스 이름이 만들어지는 과정에서 파일경로, 파일이름, 클래스 이름, 해쉬값 등이 사용 될 수 있다.

클래스 이름에 대하여 고유한 이름들이 만들어지기 때문에, 
실수로 CSS 클래스 이름이 다른 관계 없는 곳에서 사용한 CSS 클래스 이름과 중복되는 일에 대하여 걱정 할 필요가 없다.

이 기술은 다음과 같은 상황에 사용하면 유용하다.
레거시 프로젝트에 리액트를 도입할 때 (기존 프로젝트에 있던 CSS 클래스와 이름이 중복되어도 스타일이 꼬이지 않게 해준다.
CSS 클래스를 중복되지 않게 작성하기 위하여 CSS 클래스 네이밍 규칙을 만들기 귀찮을 때 사용한다.





*/