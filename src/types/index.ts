interface  Task {
    id: number;
    name: string;
    text: string;
    completed: boolean;
}

interface PomodoroSession {
    id: number;
    isCompleted: boolean;
    unitTime: number;
}



