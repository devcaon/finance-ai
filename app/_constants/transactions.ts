import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_CATEGORY_LABELS = {
  HOUSING: "Aluguel",
  TRANSPORTATION: "Transporte",
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

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [TransactionPaymentMethod.CREDIT_CARD]: "credit-card.svg",
  [TransactionPaymentMethod.DEBIT_CARD]: "debit-card.svg",
  [TransactionPaymentMethod.BANK_TRANSFER]: "bank-transfer.svg",
  [TransactionPaymentMethod.BANK_SLIP]: "bank-slip.svg",
  [TransactionPaymentMethod.CASH]: "money.svg",
  [TransactionPaymentMethod.PIX]: "pix.svg",
  [TransactionPaymentMethod.OTHER]: "other.svg",
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.DEPOSIT,
    label: "Depósito",
  },
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.DEBIT_CARD],
  },
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_TRANSFER],
  },
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_SLIP],
  },
  {
    value: TransactionPaymentMethod.CASH,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CASH],
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.PIX],
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.OTHER],
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.HOUSING,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.TRANSPORTATION],
  },
  {
    value: TransactionCategory.EDUCATION,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.ENERGY_ACCOUNT,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.ENERGY_ACCOUNT],
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.ENTERTAINMENT],
  },
  {
    value: TransactionCategory.FINANCING,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.FINANCING],
  },
  {
    value: TransactionCategory.FOOD,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.FOOD],
  },
  {
    value: TransactionCategory.HEALTH,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HEALTH],
  },
  {
    value: TransactionCategory.PRODUCTION,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.PRODUCTION],
  },
  {
    value: TransactionCategory.SALE,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.SALE],
  },
  {
    value: TransactionCategory.PURCHASE_OF_EQUIPMENT,
    label:
      TRANSACTION_CATEGORY_LABELS[TransactionCategory.PURCHASE_OF_EQUIPMENT],
  },
  {
    value: TransactionCategory.PURCHASE_OF_MATERIALS,
    label:
      TRANSACTION_CATEGORY_LABELS[TransactionCategory.PURCHASE_OF_MATERIALS],
  },
  {
    value: TransactionCategory.SALARY,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.OTHER,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.OTHER],
  },
];
