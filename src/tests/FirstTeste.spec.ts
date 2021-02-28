import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()
  user.name = 'Eliel'

  expect(user.name).toEqual('Eliel')
})
