import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Hr from "react-native-hr-plus";

const TRANSPARENT = 'transparent';

const Container = styled.TouchableOpacity`
    background-color : ${({ theme, isFilled}) =>
     isFilled ? theme.buttonBackground : TRANSPARENT};
    align-items : center;
    border-radius : 4px;
    width : 100%;
    padding : 20px;
    margin : 3%;
`;

const Title = styled.Text`
    height : 20px;
    line-height : 20px;
    font-size : 18px;
    marginBottom: 20px;
    color : ${({ theme, isFilled }) =>
     isFilled ? theme.buttonTitle : theme.buttonUnfilledTitle};

`;

const Button = ({ containerStyle, title, onPress,isFilled }) => {
    return (
        <Container style = {containerStyle} onPress = {onPress} isFilled = {isFilled} >
            <Title isFilled = {isFilled}>{title}</Title>
            <Hr color="#6da7ed" width={2}></Hr>
        </Container>
    );
};

Button.defaultProps = {
    isFilled : true,
};

Button.PropTypes = {
    containerStyle : PropTypes.object,
    title : PropTypes.string,
    onPress : PropTypes.func.isRequired,
    isFilled : PropTypes.bool,
};

export default Button;