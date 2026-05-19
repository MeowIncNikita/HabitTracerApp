import {PomodoroSession, Task} from "../types";


export function parseToMarkDown(task: Task[], sessions:PomodoroSession[]):string {
    const totalTomatoes = sessions.filter(s => s.isCompleted).length;
    const  completedTasksCount = task.filter(s => s.completed).length;

    let markdown = `---\n`
    markdown+=`total_tomatoes ${totalTomatoes}\n`;
    markdown+=`completed_tasks ${completedTasksCount}\n`;
    markdown+=`last_sync ${new Date().toISOString()}\n`;
    markdown+=`---\n\n`

    markdown+=`## Tomatoes\n`;
    if (sessions.length === 0) {
        markdown+=`Сегодня ты не фокусировался`
    }
    else {
        markdown+=`Успешно завершенно сессий ${totalTomatoes}\n`;
    }

    markdown+=`## Задачи на сегодня\n`;
    if (task.length === 0) {
        markdown+= `-[ ] Создать первую задачу`
    }
    else {
        task.forEach(task => {
            const checkbox = task.completed ? "[x]" : "[ ]";
            markdown += `- ${checkbox} ${task.text} `

        })
    }
    return markdown;
}