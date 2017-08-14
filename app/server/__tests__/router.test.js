import request from 'supertest';
import express from 'express';

import router from '../router';
import renderFullPage from '../renderFullPage';
import getPokemon from '../../services/getPokemon';
import routes from '../routes';

const mockData = {
    data: {
        pokemon: [ { pokemon: { name: 'testing'} } ]
    }
};

jest.mock('../../services/getPokemon');

getPokemon.withAbility
    .mockReturnValueOnce(Promise.resolve(mockData))
    .mockReturnValueOnce(Promise.reject('error'));

jest.mock('../renderFullPage', () => jest.fn(() => 'renderFullPage'));

jest.mock('react-dom/server', () => {
    return {
        renderToString: jest.fn(() => 'html')
    };
})

const mockSend = jest.fn(renderFullPageFn => renderFullPageFn);

const mockRes = {  
    status: jest.fn(() => mockRes),
    send: mockSend
};

afterEach(() => {
    jest.clearAllMocks();
})

describe('router', () => {
    it('renders full page with url matches', () => {
        const mockReq = {
            url: routes[1]
        };
        const expectedPokemonProp = {
            list: [{
                    pokemon: {
                        name: 'testing'
                    }
                }]
        };
        return router(mockReq, mockRes)
            .then(resp => {
                expect(getPokemon.withAbility).toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(200);
                expect(mockRes.send).toHaveBeenCalledWith('renderFullPage');
                expect(renderFullPage).toHaveBeenCalledWith('html', expectedPokemonProp);
            })
    })

    it('renders error when getPokemon withAbility throws error', () => {
        const mockReq = {
            url: routes[1]
        };
        const expectedPokemonProp = {
            list: [{
                    pokemon: {
                        name: 'testing'
                    }
                }]
        };
        return router(mockReq, mockRes)
            .then(err => {
                expect(getPokemon.withAbility).toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(404);
                expect(mockRes.send).toHaveBeenCalledWith('error: Oh No! I cannot find the telepathic pokemon... maybe they knew we were coming!');
                expect(renderFullPage).not.toHaveBeenCalledWith();
            })
    })

    it('renders error when url does not match', () => {
        const mockReq = {
            url: '/notValid'
        };
        
        router(mockReq, mockRes);
        expect(mockRes.send).toHaveBeenCalledWith('page not found');
        expect(mockRes.status).toHaveBeenCalledWith(404);
        expect(renderFullPage).not.toHaveBeenCalled();
        expect(getPokemon.withAbility).not.toHaveBeenCalled();

    })
})