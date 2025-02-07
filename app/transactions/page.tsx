import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Transactions = async () => {
  // verificar se tem usuário logado
  const { userId } = auth();
  if (!userId) redirect("/login");

  // acessar as transações do banco de dados
  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });

  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        <div className="items-center-w-full flex justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        <DataTable
          columns={transactionColumns}
          // data={JSON.parse(JSON.stringify(transactions))}
          data={transactions}
        />
      </div>
    </>
  );
};

export default Transactions;
