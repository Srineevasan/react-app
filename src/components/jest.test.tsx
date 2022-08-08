const users = {
    name: true,
    address: false,
  };
  
  describe('Users', () => {
    test('name is present', () => {
      expect(users.name).toBeTruthy();
    });
  
    test('address is absent', () => {
      expect(users.address).toBeFalsy();
    });
  });