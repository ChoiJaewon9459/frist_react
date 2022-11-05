import Footers from 'components/Footer';
import Headers from 'components/Hearder';
import HeadlessLayout from 'components/layouts/HeadlessLayout';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Counter = () => {
    const navigate = useNavigate();

    const [num, setNum] = useState(0);

    const increase = () => setNum((prev) => prev + 1);

  return (
    <HeadlessLayout>
    <div>
        <div>
            <div>카운터 페이지</div>
            {/* <Link to={"/"}>메인으로 이동</Link> */}
                <Headers />
                <div>클릭수 {num}</div>
                <div>
                 <button onClick={increase}> 클릭</button>
                 </div>
      
                <Footers />
             <button onClick={() => navigate("/")}>메인으로 이동</button>
        </div>
    </div>
    </HeadlessLayout>
  )
}

export default Counter
