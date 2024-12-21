import React from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import GuessNumber from './components/GuessNumber/GuessNumber';
import style from './styles/App';

export default function App() {
    return (
        <SafeAreaProvider>
            {/* 狀態列 */}
            <StatusBar />

            {/* SafeAreaView安全區域 */}
            <PaperProvider>
                <SafeAreaView>
                    <View style={style.container}>
                        <GuessNumber />
                    </View>
                </SafeAreaView>
            </PaperProvider>
        </SafeAreaProvider>
    );
}
