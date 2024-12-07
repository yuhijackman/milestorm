import type { Meta } from '@storybook/react';
import React from 'react';

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
};

export default meta;

export const CardDemo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        This is the main content of the card. You can place any content here.
      </CardContent>
      <CardFooter>
        <button
          aria-label="Perform action"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Action
        </button>
      </CardFooter>
    </Card>
  );
};
