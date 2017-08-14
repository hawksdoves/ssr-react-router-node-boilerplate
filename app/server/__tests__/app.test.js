import request from 'supertest';
import express from 'express';
import cors from 'cors';
import router from '../router';
import app from '../app';

jest.mock('cors', () => jest.fn(() => (req, res, next) => next()));

jest.mock('../router', () => {
        return jest.fn((req, res, next) => res.send());
});

describe('app', () => {
    it('uses cors', () => {
        return request(app)
            .get('/')
            .then((resp) => {
                expect(cors).toHaveBeenCalled();
                expect(router).toHaveBeenCalled();
            })
    })
})