import styled from 'styled-components';

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: ${p => p.theme.colors.white};
`;

export const ProfileImage = styled.img`
  margin-top: 20px;
  border-radius: 50px;
`;

export const UserName = styled.p`
  font-weight: 600;
`;

export const UserTag = styled.p`
  color: ${p => p.theme.colors.ghostWhile};
`;

export const UserLocation = styled.p`
  margin-bottom: 20px;
  color: ${p => p.theme.colors.ghostWhile};
`;
