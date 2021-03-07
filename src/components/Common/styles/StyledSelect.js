import React from 'react'

export default customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#fff' : '#757575',
    padding: 10,
  }),
  control: (provided, state) => ({
    ...provided,
    width: '100%',
    height: '42px',
    marginTop: '4px',
    border: '1px solid #a9c5eb',
    backgroundColor:'#edf5ff'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}


