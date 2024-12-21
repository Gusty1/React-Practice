import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import uuid from 'react-native-uuid';
import styles from './GuessNumber.style';

const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
};

function GuessNumber() {
    const [number, setNumber] = useState(null);
    const [inputNumber, setInputNumber] = useState(null);
    const [tipTextAry, setTipTextAry] = useState([]);
    const [count, setCount] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const checkNumber = () => {
        setCount(count + 1);
        if (inputNumber < number) {
            setTipTextAry([
                ...tipTextAry,
                {
                    id: uuid.v4(),
                    text: `比${inputNumber}大`,
                },
            ]);
        } else if (inputNumber > number) {
            setTipTextAry([
                ...tipTextAry,
                {
                    id: uuid.v4(),
                    text: `比${inputNumber}小`,
                },
            ]);
        } else {
            setTipTextAry([
                ...tipTextAry,
                {
                    id: uuid.v4(),
                    text: `恭喜猜對了，數字是${inputNumber}，共猜了${count}次`,
                },
            ]);
            setIsEnd(true);
            restartGame();
        }
        setInputNumber(null);
    };

    const restartGame = () => {
        setTimeout(() => {
            setNumber(null);
            setTipTextAry([]);
            setIsEnd(false);
        }, 5000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>猜數字小遊戲</Text>
            {tipTextAry.length > 0
                ? tipTextAry.map((item) => (
                      <Text key={item.id}>{item.text}</Text>
                  ))
                : null}
            {isEnd ? <Text style={styles.endText}>5秒後自動重新開始遊戲</Text> : null}
            {number ? (
                <View>
                    <KeyboardAvoidingView>
                        <TextInput
                            label="請輸入數字"
                            placeholder='範圍1~100'
                            keyboardType="numeric"
                            value={inputNumber}
                            onChangeText={(num) => setInputNumber(num)}
                            onSubmitEditing={() => checkNumber()}
                            disabled={isEnd}
                        />
                    </KeyboardAvoidingView>
                </View>
            ) : (
                <Button
                    mode="contained"
                    onPress={() => setNumber(getRandomNumber())}
                >
                    開始遊戲
                </Button>
            )}
        </View>
    );
}

export default GuessNumber;
