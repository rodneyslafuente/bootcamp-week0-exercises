import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button }from '../src/styles.js'
import App from '../src/App'

storiesOf('Button', module).add(() => (
  <Button>Hello<Button />
))

storiesOf('App', module).add('App', () => (
  <App />
))
