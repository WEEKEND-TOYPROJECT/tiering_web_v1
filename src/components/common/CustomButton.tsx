import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
type Props = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const customButton = ({ label, onClick }: Props) => {
  return <Btn onClick={() => onClick ?? null}>{label}</Btn>;
};

export default customButton;
const Btn = styled.button``;
