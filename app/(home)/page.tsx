import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
import TransactionsPieChart from "./_components/transactions-pie-chart";
import { getDashboard } from "../_data/get-dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";
import LastTransactions from "./_components/last-transactions";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = auth();
  if (!userId) redirect("/login");

  const year = new Date().getFullYear().toString();
  const monthNow = new Date().getMonth() + 1;

  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect(`?month=0${monthNow}`);
  }

  const dashboard = await getDashboard({ month, year });

  return (
    <>
      <Navbar />
      <div className="flex flex-col space-y-6 overflow-hidden p-6">
        <div className="flex justify-between px-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>

        <div className="grid grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <div className="flex flex-col gap-4 overflow-hidden">
            <SummaryCards {...dashboard} />
            <div className="grid grid-cols-3 grid-rows-1 gap-6">
              <TransactionsPieChart {...dashboard} />
              <ExpensesPerCategory
                expensesPerCategory={dashboard.totalExpensePerCategory}
              />
            </div>
          </div>
          <LastTransactions lastTransactions={dashboard.lastTransactions} />
        </div>
      </div>
    </>
  );
};

export default Home;
