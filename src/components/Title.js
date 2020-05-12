import React from 'react'
import styled from "styled-components";

const Title = ({name,title}) => {
    return (
      <div className='row'>
        <div className='col-10 mx-auto my-2'>
          <h1 className='text-capitalize font-weight-bold text-center'>
                    {name}{" "}<Spanned>{title}</Spanned>
          </h1>
        </div>
      </div>
    );
}
const Spanned = styled.span`
  color: var(--mainYellow);
  font-weight: bold;
`;

export default Title