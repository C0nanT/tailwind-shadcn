"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clickLogin, setClickLogin] = useState(false);
  const { toast } = useToast(); 

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log({ email, password });

    if (email === '' || password === '') {
      toast({
        title: 'Parece que você esqueceu algo...',
        description: 'Seu formulário está mais vazio que uma geladeira na segunda-feira.',
        variant: 'destructive'
      });
      return;
    } else if (!email.includes('@')) {
      toast({
        title: 'Algo de errado não está certo',
        description: 'Esse e-mail parece ter vindo de um planeta distante. Tente outro.',
        variant: 'destructive'
      });
      return;
    }else if (email.includes('hotmail') || email.includes('outlook')) {
      toast({
        title: 'Google > Microsoft',
        description: 'Aqui não aceitamos Microsoft, favor usar outro, obrigado ;)',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Bem-vindo ao clube da Luta!',
      description: 'Login realizado com sucesso',
      variant: 'success'
    });
    setClickLogin(!clickLogin);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="w-full max-w-md p-8 space-y-8 rounded-lg shadow-lg bg-green-50">
        <h2 className="font-mono text-3xl font-bold tracking-wide text-center transition-all duration-300 hover:tracking-widest text-green-950">
          Login
        </h2>
        <form noValidate onSubmit={handleLogin} className="space-y-6">
          <Toaster />
          <div>
            <Label
              className="font-mono text-lg tracking-wider duration-300 text-green-950 hover:tracking-widest transition-alld"
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Digite seu email"
              className="flex mt-1 transition-all duration-500 bg-white border-2 border-green-500 focus:ring-2 focus:valid:ring-green-500 valid:text-green-600 invalid:border-gray-500 invalid:text-gray-600 focus:invalid:border-gray-500 focus:invalid:ring-gray-500 hover:pl-4"
            />
          </div>
          <div>
            <Label
              className="font-mono text-lg tracking-wider duration-300 text-green-950 hover:tracking-widest transition-alld"
              htmlFor="password"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Digite sua senha"
              className="flex mt-1 transition-all duration-500 bg-white border-2 border-green-500 focus:ring-2 focus:valid:ring-green-500 valid:text-green-600 invalid:border-gray-500 invalid:text-gray-600 focus:invalid:border-gray-500 focus:invalid:ring-gray-500 hover:pl-4"
            />
          </div>
          {clickLogin ? (
            <Button
              type="submit"
              className="w-full font-mono text-lg tracking-wider transition-all duration-300 bg-green-900 hover:bg-green-800 text-green-50 hover:tracking-widest"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full font-mono text-lg tracking-wider transition-all duration-300 bg-green-900 hover:bg-green-800 text-green-50 hover:tracking-widest"
            >
              Entrar
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}
