

// react-icons 설치후 디자인
import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styles from './CheckBox.module.css';

function CheckBox({ children, checked, ...rest }) {
  return (
    <div className={styles.checkbox}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={styles.icon}>
          {checked ? (
            <MdCheckBox className={styles.checked} />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default CheckBox;

/*
import React from 'react';

function CheckBox({ children, checked, ...rest }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} {...rest} /> 
        <div>{checked ? '체크됨' : '체크 안됨'}</div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default CheckBox;

//여기서 ...rest 를 사용한 이유는, CheckBox 컴포넌트에게 전달하게 될 name, onChange 같은 값을 그대로 input 에게 넣어주기 위함
*/