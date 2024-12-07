import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const TabsDemo: Story = {
  render: () => (
    <Tabs
      defaultValue="overview"
      className="w-[600px] h-[200px] flex flex-col justify-start items-center"
      onValueChange={(value) => console.log(`Selected tab: ${value}`)}
    >
      <TabsList>
        <TabsTrigger value="overview" aria-label="Project Overview">
          Overview
        </TabsTrigger>
        <TabsTrigger value="tasks" aria-label="Project Tasks">
          Tasks
        </TabsTrigger>
        <TabsTrigger value="timeline" aria-label="Project Timeline">
          Timeline
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Project Overview</h3>
          <p>Project description and key metrics go here.</p>
        </div>
      </TabsContent>
      <TabsContent value="tasks">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Project Tasks</h3>
          <ul className="list-disc pl-5">
            <li>Task 1: Implementation</li> <li>Task 2: Testing</li>
            <li>Task 3: Deployment</li>
          </ul>
        </div>
      </TabsContent>
      <TabsContent value="timeline">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Project Timeline</h3>
          <p>Timeline visualization would go here.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
