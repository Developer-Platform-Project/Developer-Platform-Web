import React from 'react';
import styled from 'styled-components';

const Alert = styled.div`
  width: 100%;
  margin: 12px 0px;
  padding: 16px 20px;
  border-radius: 6px;
  border: ${props => props.border || '1px solid #ccc'};
  margin-top: ${props => props.marginTop || 'inherit'};
  background-color: ${props => props.backgroundColor || '#eaeaea'};
`;
const AlertTitle = styled.h2`
  color: ${props => props.titleColor || '#999'};
  font-size: 14px;
  &:before {
    display: inline;
    content: '⚠ ';
  }
`;
const AlertDescription = styled.p`
  color: #757575;
  font-size: 13px;
  padding-left: 16px;
  margin: 8px 0px;
`;

function AlertBox({
  title,
  description,
  marginTop,
  border,
  titleColor,
  backgroundColor,
}) {
  return (
    <Alert
      border={border}
      marginTop={marginTop}
      backgroundColor={backgroundColor}
    >
      <AlertTitle titleColor={titleColor}>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}

export default AlertBox;
