export interface Task {
    id: string;
    text: string;
    completed: boolean;
}

export interface PomodoroSession {
    id: number;
    isCompleted: boolean;
    durationMinutes: number;
}



