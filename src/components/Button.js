

// rest props 전달하기

// 필요한 이벤트가 있을 때 마다 매번 이렇게 넣어주는건 귀찮은 작업이다.
// 이러한 문제를 해결 해줄 수 있는 문법이 있는데 바로 spread와 rest이다.
// 이 문법은 주로 배열과 객체, 함수의 파라미터, 인자를 다룰 때 사용한다.
import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({ children, size, color, outline, fullWidth, ...rest }) {
  return (
    <button
      className={classNames('Button', size, color, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue'
};

export default Button;
// ...rest를 사용해서 우리가 지정한 props 를 제외한 값들을 rest 라는 객체에 모아주고, 
// <button> 태그에 {...rest} 를 해주면, rest 안에 있는 객체안에 있는 값들을 모두 <button> 태그에 설정을 해준다.



/*
//전체 너비 차지하는 옵션
import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({ children, size, color, outline, fullWidth }) {
  return (
    <button
      className={classNames('Button', size, color, { outline, fullWidth })}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue'
};

export default Button;
*/

/*
// outline 옵션 만들기
import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({ children, size, color, outline }) {
  return (
    <button className={classNames('Button', size, color, { outline })}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue'
};

export default Button;
// outline 값을 props 로 받아와서 객체 안에 집어 넣은 다음에 classNames() 에 포함시켜줬는데,
// outline 값이 true 일 때에만 button 에 outline CSS 클래스가 적용ehlsek.
*/

/*
// 버튼색상 설정하기
import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({ children, size, color }) {
  return (
    <button className={classNames('Button', size, color)}>{children}</button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue'
};

export default Button;
*/

/*
버튼 사이즈 조정하기


import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({ children, size }) {
  return <button className={classNames('Button', size)}>{children}</button>;
}

Button.defaultProps = {
  size: 'medium'
};

export default Button;


import React from 'react';
import './Button.scss';

function Button({ children, size }) {
  return <button className={['Button', size].join(' ')}>{children}</button>;
}

Button.defaultProps = {
  size: 'medium'
};

export default Button;
// className 에 CSS 클래스 이름을 동적으로 넣어주고 싶으면 이렇게 설정을 해야한다.
// className={['Button', size].join(' ')}
// 아니면 이렇게 할 수 있다 className={`Button ${size}`}


조건부로 CSS 클래스를 넣어주고 싶을때 이렇게 문자열을 직접 조합해주는 것 보다 classnames 라는 라이브러리를 사용하는 것이 훨씬 편하다.
classNames 를 사용하면 아래와 같이 조건부 스타일링을 할 때 함수의 인자에 문자열, 배열, 객체 등을 전달하여 손쉽게 문자열을 조합 할 수 있다.
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'
classNames(['foo', 'bar']); // => 'foo bar'

// 동시에 여러개의 타입으로 받아올 수 도 있습니다.
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// false, null, 0, undefined 는 무시됩니다.
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'

*/

/*
import React from 'react';
import './Button.scss';

function Button({ children }) {
  return <button className="Button">{children}</button>;
}

export default Button;


기존 css 에서는 사용하지 못하던 문법들을 사용했다.
$blue: #228be6; 이런 식으로 스타일 파일에서 사용 할 수 있는 변수를 선언 할 수도 있고,
lighten() 또는 darken() 과 같이 색상을 더 밝게하거나 어둡게 해주는 함수도 사용 할 수 있다.
*/