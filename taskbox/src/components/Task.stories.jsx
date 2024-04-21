import Task from './Task';

export default {
    component: Task,
    title: 'Task',
    tags: ['autodocs'],
};

export const Default = {
    args: {
        task: {
            id: '1',
            title: 'QA Homework',
            state: 'TASK_INBOX',
        },
    },
};

export const Pinned = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_PINNED',
        },
    },
};

export const Archived = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_ARCHIVED',
        },
    },
};

export const TextCyrillic = {
    args: {
        task: {
            id: '1',
            title: 'Текст на русском',
            state: 'TASK_INBOX',
        },
    },
};

export const TextLong = {
    args: {
        task: {
            id: '1',
            title: 'Looooooooooooooooooooooooooooooooooooooooooooooong text Looooooooooooooooooooooooooooooooooooooooong text Looooooooooooooooooooooooooooooooooooooooong',
            state: 'TASK_ARCHIVED',
        },
    },
};

export const TextEmptyString = {
    args: {
        task: {
            id: '1',
            title: '',
            state: 'TASK_PINNED',
        },
    },
};