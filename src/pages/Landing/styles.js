import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #137c8c;
  margin-top: 24px;
`;

export const Subtitle = styled.Text``;

export const HeaderView = styled.View`
  padding: 0 10px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  bottom: 0px;
  height: 40px;
  width: 90%;
  flex: 1;
  margin: 0 auto;
`;

export const Image = styled.Image`
`;

export const Personagens = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 20px;
  border-radius: 20px;
  background-color: #7ab440;
  width: 45%;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;
