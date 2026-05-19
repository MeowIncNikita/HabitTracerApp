import RNFS from 'react-native-fs';
import { Share } from 'react-native';

export const FileSystemService = {

    saveDaileNotes: async (date: string, content: string): Promise<string> => {
        const path = `${RNFS.DocumentDirectoryPath}/${date}.md`;
        try {
            await RNFS.writeFile(path, content, 'utf8');
            console.log(`[FileSystem] Бэкап сохранен в локальный файл: ${path}`);
            return path;
        } catch (error) {
            console.error("Ошибка сохранения файла в память:", error);
            throw error;
        }
    },


    shareAsText: async (textContent: string, date: string): Promise<void> => {
        try {
            await Share.share({
                title: `Daily Note за ${date}`,
                message: textContent, // Передает весь Markdown со всеми тегами, списками и разметкой
            });
        } catch (error) {
            console.error('[FileSystem] Ошибка при системном экспорте:', error);
            throw error;
        }
    }
};