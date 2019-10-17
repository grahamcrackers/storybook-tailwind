import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import '../src/App.css';

export default {
  title: 'Button',
};

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const alert = () => {
  return <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
  <div className="flex-shrink-0">
    {/* <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> */}
  </div>
  <div className="ml-6 pt-1">
    <h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
    <p className="text-base text-gray-600 leading-normal">You have a new message!</p>
  </div>
</div>
}