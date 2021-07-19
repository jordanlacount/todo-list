import React from 'react'

import { TodoItem } from './TodoItem'

export default {
    title: 'components/TodoItem',
    component: TodoItem,
}

const Template = (args) => <TodoItem {...args} />

export const Primary = Template.bind({})
Primary.args = { todoText: "get groceries", handleDelete: () => {}, index: 1}