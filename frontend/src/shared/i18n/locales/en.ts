import { changePassword } from '@/features/Auth/api';
import { success } from 'zod';

export const en = {
  common: {
    processing: {
      loading: 'Loading..',
      removing: 'Removing..',
      registering: 'Registering..',
      logining: 'Logining..',
      changePassword: 'Changing password...',
    },
    btn: {
      back: 'Back to list',
      edit: 'Edit',
      remove: 'Remove',
      cancel: 'Cancel',
      save: 'Save',
      register: 'Register',
      login: 'Login',
      logout: 'Logout',
      changePassword: 'Change password',
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

  changePassword: {
    title: 'Change password',
    currentPasswordLabel: 'Current password',
    currentPasswordPlaceholder: 'Your current password',
    newPasswordLabel: 'New password',
    newPasswordPlaceholder: 'Your new password',
  },

  profile: {
    title: 'Profile',
    nickname: 'Nickname',
    email: 'Email',
    role: 'Your role',
  },

  error: {
    noTasks: 'No found tasks',
    changePassword: 'Change password error',
  },

  success: {
    logout: `You're logged out`,
    signup: 'Successful registration',
    login: 'Successful login',
  },

  links: {
    tasks: 'Tasks',
    profile: 'Profile',
  },
} as const;
