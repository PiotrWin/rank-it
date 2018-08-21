import { uiConfig } from './config';

export const restartUI = (instance, selector) => {
  if (instance.start) {
    instance.reset();
    instance.start(selector, uiConfig);
  }
};

export const authContainer = 'firebase-auth-container';

