import Headlayout from 'components/layouts/Headlayout';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();
    return (
      <Headlayout>
    <div>
      <div>
        메인페이지
      </div>
      <button onClick={() => navigate("/counter")}>카운터로 이동</button>
    </div>
    </Headlayout>
  )
}

export default Main;
