import { auth } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import { redirect } from "next/navigation";

const Subscription = () => {
  // verificar se tem usuário logado
  const { userId } = auth();
  if (!userId) redirect("/login");
  return <Navbar />;
};

export default Subscription;
