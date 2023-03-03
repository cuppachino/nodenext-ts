import { describe, expect, it } from 'vitest'
import { helloWorld } from '@/libs/hello-world.js'

describe('#test', () => {
  it('should greet the developer', () => {
    console.log(helloWorld())
    expect(helloWorld()).toBe('Hello World')
  })
})
