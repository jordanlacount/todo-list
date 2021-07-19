import React from 'react'

import { TodoListContainer } from './TodoListContainer'

export default {
    title: 'components/TodoListContainer',
    component: TodoListContainer,
}

const Template = (args) => <TodoListContainer {...args} />

export const Primary = Template.bind({})