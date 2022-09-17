import React from "react";
import styled from "styled-components";

const TopNav = () => {
  const menus = ["Menu1", "Menu2", "Menu3", "Menu4"];
  return (
    <TopNavWrapper>
      <TimerLogo>TIMER</TimerLogo>
      <NavMenu>
        {menus.map((menu, index) => (
          <p key={index}>{menu}</p>
        ))}
      </NavMenu>
      <SignUpWrapper></SignUpWrapper>
    </TopNavWrapper>
  );
};

export default TopNav;

const TopNavWrapper = styled.div`
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
`;
const TimerLogo = styled.div``;

const NavMenu = styled.div`
  display: flex;
  gap: 2rem;
  padding-left: 5rem;
`;
const SignUpWrapper = styled.div``;
