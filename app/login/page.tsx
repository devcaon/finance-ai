import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const Login = () => {
  return (
    <div className="grid h-full grid-cols-2">
      {/* left */}
      <div className="mx-auto flex h-full max-w-[600px] flex-col justify-center p-8">
        <Image
          src="/logo.svg"
          height={39}
          width={173}
          alt="Finance AI"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
        <p className="text-muted-foreground mb-8">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <Button variant="outline">
          <LogInIcon className="mr-2" />
          Fazer login ou criar conta
        </Button>
      </div>
      {/* right */}
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
