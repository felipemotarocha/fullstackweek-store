import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/");
  }

  return <h1>dashboard</h1>;
};

export default DashboardPage;
