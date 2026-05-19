import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    Alert,
} from 'react-native';
import { Task, PomodoroSession } from './src/types';
import { parseToMarkDown } from './src/services/MarkdownParser';
import { FileSystemService } from './src/services/FileSystemService';
import { styles } from './App.styles';

function App(): React.JSX.Element {
    const [tasks] = useState<Task[]>([
        { id: "1", text: 'Разобраться с архитектурой React Native', completed: true },
        { id: "2", text: 'Написать парсер Markdown для Obsidian', completed: true },
        { id:"3", text: 'Проверить сохранение файлов на Android', completed: false },
    ]);

    const [sessions] = useState<PomodoroSession[]> ([
        { id: 1, isCompleted: true, durationMinutes: 25 },
        { id: 2, isCompleted: true, durationMinutes: 25 },
    ])

    const handlerExport = async () => {
        try {
            const today = new Date().toISOString().split("T")[0];
            const markdownContent = parseToMarkDown(tasks, sessions);

            // Просто передаем текст напрямую в системное окно!
            await FileSystemService.shareAsText(markdownContent, today);

        } catch (error) {
            Alert.alert("Ошибка экспорта", "Не удалось экспортировать заметку");
            console.error(error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Habit Tracker 🍅</Text>
                <Text style={styles.subtitle}>Тестирование интеграции с Obsidian</Text>

                <View style={styles.statsCard}>
                    <Text style={styles.cardText}>📋 Задач в списке: {tasks.length}</Text>
                    <Text style={styles.cardText}>🍅 Завершено помидоров: {sessions.length}</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={handlerExport}>
                    <Text style={styles.buttonText}>Экспортировать Daily Note</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default App;
