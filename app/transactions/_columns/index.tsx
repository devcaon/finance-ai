"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_components/type-badge";
import { Button } from "@/app/_components/ui/button";
import { PencilIcon, Trash2Icon } from "lucide-react";

export const TRANSACTION_CATEGORY_LABELS = {
  HOUSING: "Aluguel",
  TRANSPORTATION: "transporte",
  FOOD: "Alimentação",
  ENTERTAINMENT: "Lazer",
  HEALTH: "Saúde",
  SALARY: "Salário",
  SALE: "Venda",
  PRODUCTION: "Produção",
  EDUCATION: "Educação",
  ENERGY_ACCOUNT: "Energia",
  PURCHASE_OF_EQUIPMENT: "Aquisição de Equipamento",
  PURCHASE_OF_MATERIALS: "Aquisição de Material",
  FINANCING: "Financiamento",
  OTHER: "Outro",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  PIX: "Pix",
  OTHER: "Outro",
};

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => {
      return <TransactionTypeBadge transaction={transaction} />;
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY_LABELS[transaction.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amount)),
  },
  {
    accessorKey: "actions",
    header: "",
    cell: () => (
      <div className="space-x-1 text-muted-foreground">
        <Button variant="ghost" size="icon">
          <PencilIcon />
        </Button>
        <Button variant="ghost" size="icon">
          <Trash2Icon />
        </Button>
      </div>
    ),
  },
];
