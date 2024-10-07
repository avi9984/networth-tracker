const userController = require('../controllers/user');
const User = require('../models/user');
const { mockRequest, mockResponse } = require('jest-mock-req-res');

describe('User Controller', () => {
    it('should create a user and return a token', async () => {
        const req = mockRequest({
            payload: {
                name: 'Test User',
                email: 'test@example.com',
                password: 'password',
                ssn: '123-45-6789',
            },
        });

        const res = mockResponse();

        jest.spyOn(User, 'create').mockResolvedValue({
            name: 'Test User',
            email: 'test@example.com',
            password: "Avi@1234"
        });

        const result = await userController.createUser(req, res);

        expect(result.statusCode).toBe(201);
        expect(result.result.token).toBeTruthy();
    });
});
