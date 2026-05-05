import { register } from '@/features/Auth/api';

export const en = {
  common: {
    processing: {
      loading: 'Loading..',
      removing: 'Removing..',
      registering: 'Registering..',
      logining: 'Logining..',
    },
    btn: {
      back: 'Back to list',
      edit: 'Edit',
      remove: 'Remove',
      cancel: 'Cancel',
      save: 'Save',
      register: 'Register',
      login: 'Login',
    },
  },

  task: {
    title: 'Tasks',
    edit: 'Edit task',
    create: 'Create a new task',
    notFound: 'Task not found',
    form: {
      titleLabel: 'Title',
      titlePlaceholder: 'Enter the task name',
      descriptionLabel: 'Description',
      descriptionPlaceholder: 'Enter the task description',
      statusLabel: 'Status',
      priorityLabel: 'Priority',
      visibilityLabel: 'Visibility',
    },
    noTasks: 'No tasks yet',
  },

  auth: {
    login: 'Login',
    signup: 'Sign up',
    haveAccount: 'Already have an account?',
    dontHaveAccount: `Don't have an account yet?`,
    form: {
      nicknameLabel: 'Nickname',
      nicknamePlaceholder: 'nickname',
      emailLabel: 'Email',
      emailPlaceholder: 'example@gmail.com',
      passwordLabel: 'Password',
      passwordPlaceholder: '••••••••',
      confirmPasswordLabel: 'Confirm password',
    },
  },
} as const;
