import exp from 'constants'

export const siteURL = 'https://www.saucedemo.com/'

export const users = [
    {username: 'standard_user', password: 'secret_sauce'},
    {username: 'problem_user', password: 'secret_sauce'},
    {username: 'performance_glitch_user', password: 'secret_sauce'},
    {username: 'error_user', password: 'secret_sauce'},
    {username: 'visual_user', password: 'secret_sauce'},
]

export const negativeUsers = [
    {
        username: 'standard_user',
        password: '59559',
        message:
            'Epic sadface: Username and password do not match any user in this service',
    },
    {username: 'standard_users', password: 'secret_sauce'},
    {username: 'standard_users', password: 'fdhfhdufud'},
    {username: '', password: 'secret_sauce'},
    {username: 'error_user', password: ''},
    {username: '', password: ''},
    {username: 'locked_out_user', password: 'secret_sauce'},
]
