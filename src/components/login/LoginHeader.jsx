import React from 'react';
import InputWithLabel from './InputWithLabel';
import BlueButton from './BlueButton';
import './loginHeader.scss';

const LoginHeader = () => (
    <div className="content">
        <div className="form">
            <InputWithLabel label="useremail" name="email" type="email">휴대폰, 이메일, 사용자 아이디</InputWithLabel>
            <InputWithLabel label="password" name="password" type="password">비밀번호</InputWithLabel>
            <BlueButton to="#">로그인</BlueButton>
        </div>
    </div>
);

export default LoginHeader;