"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { addTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface AddTransactionParams {
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const AddTransaction = async (params: AddTransactionParams) => {
  // valida parâmetros
  addTransactionSchema.parse(params);

  // verifica se existe usuário está logado
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");

  // cria uma nova transação no banco de dados
  await db.transaction.create({
    data: { ...params, userId },
  });

  revalidatePath("/transactions");
};
