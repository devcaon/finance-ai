import { auth, clerkClient } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader } from "../_components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";
import AcquirePlanButton from "./_components/acquire-plan-button";
import { Badge } from "../_components/ui/badge";
import { getCurrentMonthTransactions } from "../_data/get-current-month-transactions";

const Subscription = async () => {
  // verificar se tem usuário logado
  const { userId } = auth();
  if (!userId) redirect("/login");
  const user = await clerkClient().users.getUser(userId);
  const currentMonthTransactions = await getCurrentMonthTransactions();
  const hasPremiumPlan = user.publicMetadata.subscriptionPlan === "premium";

  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        <h1 className="text-2xl font-bold">Assinatura</h1>
        <div className="flex gap-6">
          {!hasPremiumPlan && (
            <Card className="w-[450px]">
              <CardHeader className="relative border-b border-solid py-8">
                <Badge className="absolute left-6 top-6 bg-white/10 text-white hover:bg-white/10">
                  Ativo
                </Badge>
                <h2 className="text-center text-2xl font-semibold">
                  Plano Free
                </h2>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-4xl">R$</span>
                  <span className="text-6xl font-semibold">0</span>
                  <span className="text-2xl text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 py-8">
                <div className="flex items-center gap-2">
                  <CheckIcon className="text-primary" />
                  <p>
                    Apenas 10 transações por mẽs (
                    {!hasPremiumPlan ? currentMonthTransactions : 0}/10)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <XIcon className="text-danger" />
                  <p>Relatórios de IA ilimitados</p>
                </div>
                <div className="flex items-center gap-2">
                  <XIcon className="text-danger" />
                  <p>. . .</p>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="w-[450px]">
            <CardHeader className="relative border-b border-solid py-8">
              {hasPremiumPlan && (
                <Badge className="absolute left-6 top-6 bg-primary/10 text-primary hover:bg-primary/10">
                  Ativo
                </Badge>
              )}
              <h2 className="text-center text-3xl font-semibold italic text-yellow-500">
                Plano Premium
              </h2>
              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl">R$</span>
                <span className="text-6xl font-semibold">9,90</span>
                <span className="text-2xl text-muted-foreground">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Transações ilimitadas</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Relatórios de IA ilimitados</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>. . .</p>
              </div>
              <AcquirePlanButton />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Subscription;
