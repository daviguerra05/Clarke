import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Fd = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    Form {
        width: 50%;
    }
`;

export default function Login() {
    const { register, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        const storedCredentials = localStorage.getItem('userCredentials');

        if (storedCredentials) {
            const { email, password } = JSON.parse(storedCredentials);
            setValue('email', email);
            setValue('password', password);
        }
    }, [setValue]);

    const onSubmit = (data) => {
        
        localStorage.setItem('userCredentials', JSON.stringify(data));
        alert('Login feito com sucesso!')
        navigate('/');
    };

    return (
        <>
            <Fd>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Endereço de email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Digite seu email"
                            {...register('email', { required: 'Campo obrigatório' })}
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Digite sua senha"
                            {...register('password', { required: 'Campo obrigatório' })}
                        />
                    </Form.Group>

                    <Button className='btn btn-success' variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Fd>
        </>
    );
}
